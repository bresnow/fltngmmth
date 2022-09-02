import { Link, Outlet } from '@remix-run/react';
import {
    CustomButton as Button,
    ButtonProvider,
    FormAuth,
    NavList,
    AccountMenu,
    RouteHeader
} from '@pkg/ui'

export default function () {
    return (
        <>
            <div className="flex ">
                <div className="md:grid-cols inline-grid grid-cols">
                    {/* Header */}
                    <div className="sticky top-0 z-10 col-start-1 row-start-1 flex flex-wrap h-16 flex-col justify-center px-0 sm:h-screen sm:items-center sm:px-[5px] md:px-3.5 xl:w-[275px] xl:items-start">
                        {/* Logo */}
                        <div className=" h-16 sm:block">

                    {/* <FMLogo fill="#000" /> */}

                        </div>
                        {/* Nav */}
                        <div className="fixed bottom-0 flex h-16 w-full flex-auto flex-col border-t border-gray-200 bg-cnxt_black sm:static sm:bottom-auto sm:h-auto sm:border-none">
                            <NavList />
                        </div>
                        {/* Account */}

                        <div className="relative rounded-b-xl w-full bg-black/80 backdrop-blur-lg sm:my-3.5">
                            <AccountMenu />
                        </div>

                    </div>

                    {/* Main */}
                    <main className="col-span-full col-start-1 row-start-1 border-gray-200 sm:col-auto sm:col-start-3 sm:border-x">
                        <RouteHeader />
                        <Outlet />
                    </main>
                    {/* Sidebar */}
                    {/* <div className="lgx:pl-7.5 mdl:flex col-start-3 row-start-1 mb-12  flex-col pl-5 pr-2.5"> */}
                    {/* display conditionally by page  */}
                    {/* <div className="sticky top-0 z-10 col-start-3 row-start-1 h-16 bg-white"> */}
                    {/* Search */}
                    {/* </div> */}
                    {/* get the list of widgets from helper matches */}
                    {/* <div className="sticky top-16">sidebar</div> */}
                    {/* </div> */}
                </div>
            </div>
            {/* show if not logged in */}
            {/* <AuthBanner /> */}
        </>
    )
}

const AuthBanner = () => (
    <div className="bg-slate-800 fixed top-0 z-40 w-full py-4 px-6 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center md:justify-between">
            <div className="hidden flex-col md:inline-flex">
                <span className="text-2xl font-bold">You want to CNXT with the Mammoth?</span>
                <span className="">Join us!</span>
            </div>

            <FormAuth className="flex max-w-xs flex-col gap-4">
                <ButtonProvider provider="keypair"  />
            </FormAuth>
        </div>
    </div>
)
