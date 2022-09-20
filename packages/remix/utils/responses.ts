/**
 * Create a response with a JavaScript file response.
 * It receives a string with the JavaScript content and set the Content-Type
 * header to `application/javascript; charset=utf-8` always.
 *
 * This is useful to dynamically create a JS file from a Resource Route.
 * @example
 * export let loader: LoaderFunction = async ({ request }) => {
 *   return javascript("console.log('Hello World')");
 * }
 */
export function javascript(
    content: string,
    init: number | ResponseInit = {}
): Response {
    let responseInit = typeof init === 'number' ? { status: init } : init;

    let headers = new Headers(responseInit.headers);
    if (!headers.has('Content-Type')) {
        headers.set('Content-Type', 'application/javascript; charset=utf-8');
    }

    return new Response(content, {
        ...responseInit,
        headers,
    });
}

/**
 * Create a response with a CSS file response.
 * It receives a string with the CSS content and set the Content-Type header to
 * `text/css; charset=utf-8` always.
 *
 * This is useful to dynamically create a CSS file from a Resource Route.
 * @example
 * export let loader: LoaderFunction = async ({ request }) => {
 *   return css("body { color: red; }");
 * }
 */
export function stylesheet(
    content: string,
    init: number | ResponseInit = {}
): Response {
    let responseInit = typeof init === 'number' ? { status: init } : init;

    let headers = new Headers(responseInit.headers);
    if (!headers.has('Content-Type')) {
        headers.set('Content-Type', 'text/css; charset=utf-8');
    }

    return new Response(content, {
        ...responseInit,
        headers,
    });
}

/**
 * Create a response with a PDF file response.
 * It receives a string with the PDF content and set the Content-Type header to
 * `application/pdf; charset=utf-8` always.
 *
 * This is useful to dynamically create a PDF file from a Resource Route.
 * @example
 * export let loader: LoaderFunction = async ({ request }) => {
 *   return pdf(await generatePDF(request.formData()));
 * }
 */
export function pdf(
    content: Blob | Buffer | ArrayBuffer,
    init: number | ResponseInit = {}
): Response {
    let responseInit = typeof init === 'number' ? { status: init } : init;

    let headers = new Headers(responseInit.headers);
    if (!headers.has('Content-Type')) {
        headers.set('Content-Type', 'application/pdf');
    }

    return new Response(content, {
        ...responseInit,
        headers,
    });
}

/**
 * Create a response with a HTML file response.
 * It receives a string with the HTML content and set the Content-Type header to
 * `text/html; charset=utf-8` always.
 *
 * This is useful to dynamically create a HTML file from a Resource Route.
 * @example
 * export let loader: LoaderFunction = async ({ request }) => {
 *   return html("<h1>Hello World</h1>");
 * }
 */
export function html(
    content: string,
    init: number | ResponseInit = {}
): Response {
    let responseInit = typeof init === 'number' ? { status: init } : init;

    let headers = new Headers(responseInit.headers);
    if (!headers.has('Content-Type')) {
        headers.set('Content-Type', 'text/html; charset=utf-8');
    }

    return new Response(content, {
        ...responseInit,
        headers,
    });
}

export type ImageType =
    | 'image/jpeg'
    | 'image/png'
    | 'image/gif'
    | 'image/svg+xml'
    | 'image/webp'
    | 'image/bmp'
    | 'image/avif';

/**
 * Create a response with a image file response.
 * It receives a Buffer, ArrayBuffer or ReadableStream with the image content
 * and set the Content-Type header to the `type` parameter.
 *
 * This is useful to dynamically create a image file from a Resource Route.
 * @example
 * export let loader: LoaderFunction = async ({ request }) => {
 *   return image(await takeScreenshot(), { type: "image/avif" });
 * }
 */
export function image(
    content: Buffer | ArrayBuffer | ReadableStream,
    { type, ...init }: ResponseInit & { type: ImageType }
): Response {
    let headers = new Headers(init.headers);

    if (!headers.has('Content-Type')) {
        headers.set('Content-Type', type);
    }

    return new Response(content, {
        ...init,
        headers,
    });
}
