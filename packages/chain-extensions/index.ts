import Gun from 'gun'
import type { IGunUserInstance } from 'gun/types'
import type { DataFunctionArgs } from '@remix-run/server-runtime'
const SEA = Gun.SEA

declare module 'gun/types' {
    export interface IGunUserInstance {
        generateCert(who: string, where: object, path: string): Promise<void>;
        notify(pub: string, message: string): void;
        sendNotification(pub: string, message: string): void;
        acceptFriend(pub: string): Promise<void>;
        getUsername(pub: string): Promise<string>;
        upload(b64: string, opt: { size: number }, cb: (progress: number) => void): void;
        download(proof: string, size: number, cb: (progress: number, chunks: string) => void): Promise<void>;
        json({ request, params, context }: DataFunctionArgs): Promise<any>
    }
    export interface IGunInstance {
        generateCert(who: string, where: object, path: string): Promise<void>;
        notify(pub: string, message: string): void;
        sendNotification(pub: string, message: string): void;
        acceptFriend(pub: string): Promise<void>;
        getUsername(pub: string): Promise<string>;
        upload(b64: string, opt: { size: number }, cb: (progress: number) => void): void;
        download(proof: string, size: number, cb: (progress: number, chunks: string) => void): Promise<void>;
        json({ request, params, context }: DataFunctionArgs): Promise<any>
    }
}

Gun.chain.json = async function () {

}
// Gun.chain.useCertificate = async function (pub, certPath, path, cb) {
// 	const user = this;
// 	const gun = user.back(-1);
// 	const notifyCert = await user.getCertificate(pub, certPath);

// 	const inbox = gun.user(pub).get(path);
// 	cb({ cert: notifyCert, inbox });
// };
Gun.chain.generateCert = async function (who, where, path) {
    var user = this;
    var gun = user.back(-1);
    var pair = gun._.sea;

    var certExists =
        who === "*" ? await user.get(path) : await user.get(path).get(who);
    console.log("Certificate exists!!")

    if (certExists) return;
    let certificate = await SEA.certify(who, where, pair);
    if (who === "*") {
        user.get(path).put(certificate, (ack) => {
            let ok = (ack as any).ok
            if (ok) console.log("Public Request Certificate created");
        });
    } else {
        user &&
            user
                .get(path)
                .get(who)
                .put(certificate, (ack) => {
                    let ok = (ack as any).ok
                    if (ok)
                        console.log("Friend Certificate created for: ", who);
                    console.log("Friend Certificate: ", certificate);
                });
    }
};


Gun.chain.notify = function (pub, message) {
    var gun = this;
    gun.user(pub)
        .get("certificates/notifications")
        .once((cert) => {
            if (cert)
                gun.user(pub)
                    .get("notify")
                    .get("enabled")
                    .put(
                        message,
                        (ack) => {
                            let ok = (ack as any).ok
                            if (ok) {
                                console.log("Notified");
                            } else {
                                console.log("Notify not successful");
                            }
                        },
                        { opt: { cert } }
                    );
        });
};

/**
 *
 * @param {string} pub
 * @param {object} message
 */
Gun.chain.sendNotification = function (pub, message) {
    var user = this;
    var gun = user.back(-1) as IGunUserInstance;

    gun.get(pub)
        .get("certificates/notifications")
        .once((cert) => {
            if (cert)
                gun.get(pub)
                    .get("notifications")
                    .put(
                        { [Date.now()]: message },
                        (ack) => {
                            let ok = (ack as any).ok
                            if (ok) console.log("Notification sent to: ", pub);
                            let err = (ack as any).err
                            if (err)
                                console.log("Notification failed to: ", pub);
                        },
                        {
                            opt: {
                                cert,
                            },
                        }
                    );
        });
};
Gun.chain.acceptFriend = async function (pub) {
    var user = this as any;
    var gun = user.back(-1) as IGunUserInstance;
    user.generateCert(pub, { "*": "friends" }, "certificates/friends");

    gun.get(pub)
        .get("certificates/friends")
        .get(user.is.pub)
        .once(async (cert) => {
            if (cert) {
                if (
                    !(await gun
                        .get(pub)
                        .get("friends")
                        .get(user.is.pub))
                ) {
                    gun.get(pub)
                        .get("friends")
                        .put(
                            { [Date.now()]: user.is.pub },
                            (ack) => {
                                let ok = (ack as any).ok
                                if (ok) user.get("friends").set(pub);
                            },
                            { opt: { cert } }
                        );
                }
            }
        });
};

Gun.chain.getUsername = async function (pub) {
    var user = this;
    var gun = user.back(-1);
    return gun.get(pub)
        .get("profile").get("name")
};

Gun.chain.upload = function (b64, opt, cb) {
    const gun = this;
    var length = b64.length;
    opt = opt || { size: 1024 * 1024 };
    // info.id = Gun.text.random();
    splitAndUpload(b64, 0);

    async function splitAndUpload(b64 = '', chunks = 0) {
        chunks = chunks || 0;
        var b64String = b64.slice(0, opt.size);

        if (b64.length) {
            gun &&
                gun.put({ [chunks]: b64String }, (ack) => {
                    let ok = (ack as any).ok
                    if (ok) {
                        chunks++;
                        splitAndUpload(b64.slice(opt.size), chunks);
                    } else {
                        splitAndUpload(b64, chunks);
                    }
                });
            cb((1 - length / length) * 100);
        } else {
            cb(100);

        }
    }
};

Gun.chain.download = async function (proof, size, cb) {
    const gun = this;

    async function loop(i = 0, chunks: string[] = []) {

        let currentProof = await SEA.work(chunks.join(""), null, null, {
            name: "SHA-256",
        });
        if (proof === currentProof) {
            cb(100, chunks.join(""));
            return;
        }
        let _chunk: string = await new Promise((resolve) => gun.get(`${i}`).once(data => {
            if (data && data[i]) {
                delete data._
                resolve(data[i])
            }
        }));
        if (_chunk) {
            chunks.push(_chunk);
            cb((chunks.join("").length / size) * 100, chunks.join(""));
            loop(i + 1, chunks);
        }
    }
    loop();
};
