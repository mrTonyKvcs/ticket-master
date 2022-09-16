import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
    Bars3BottomLeftIcon,
    CalendarDaysIcon,
    HomeIcon,
    PlusIcon,
    TicketIcon,
    UsersIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const sidebarNavigation = [
    { name: "Home", href: "#", icon: HomeIcon, current: true },
    { name: "Events", href: "#", icon: CalendarDaysIcon, current: false },
    { name: "Tickets", href: "#", icon: TicketIcon, current: false },
    { name: "Users", href: "#", icon: UsersIcon, current: false },
    ,
];
const userNavigation = [
    // { name: "Your Profile", href: "#" },
    { name: "Sign out", href: "logout" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Authenticated({ auth, children }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="flex h-full">
                {/* Narrow sidebar */}
                <div className="hidden overflow-y-auto bg-gray-600 w-28 md:block">
                    <div className="flex flex-col items-center w-full py-6">
                        <div className="flex items-center flex-shrink-0">
                            <img
                                className="w-auto h-8"
                                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                alt="Your Company"
                            />
                        </div>
                        <div className="flex-1 w-full px-2 mt-6 space-y-1">
                            {sidebarNavigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-800 text-white"
                                            : "text-gray-300 hover:bg-gray-500 hover:text-white",
                                        "group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium uppercase"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    <item.icon
                                        className={classNames(
                                            item.current
                                                ? "text-white"
                                                : "text-gray-300 group-hover:text-white",
                                            "h-6 w-6"
                                        )}
                                        aria-hidden="true"
                                    />
                                    <span className="mt-2">{item.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <Transition.Root show={mobileMenuOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-20 md:hidden"
                        onClose={setMobileMenuOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-gray-700">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute right-0 p-1 top-1 -mr-14">
                                            <button
                                                type="button"
                                                className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                                                onClick={() =>
                                                    setMobileMenuOpen(false)
                                                }
                                            >
                                                <XMarkIcon
                                                    className="w-6 h-6 text-white"
                                                    aria-hidden="true"
                                                />
                                                <span className="sr-only">
                                                    Close sidebar
                                                </span>
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex items-center flex-shrink-0 px-4">
                                        <img
                                            className="w-auto h-8"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="flex-1 h-0 px-2 mt-5 overflow-y-auto">
                                        <nav className="flex flex-col h-full">
                                            <div className="space-y-1">
                                                {sidebarNavigation.map(
                                                    (item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? "bg-gray-500 text-white"
                                                                    : "text-indigo-100 hover:bg-gray-200 hover:text-white",
                                                                "group py-2 px-3 rounded-md flex items-center text-sm font-medium"
                                                            )}
                                                            aria-current={
                                                                item.current
                                                                    ? "page"
                                                                    : undefined
                                                            }
                                                        >
                                                            <item.icon
                                                                className={classNames(
                                                                    item.current
                                                                        ? "text-white"
                                                                        : "text-gray-300 group-hover:text-white",
                                                                    "mr-3 h-6 w-6"
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                            <span>
                                                                {item.name}
                                                            </span>
                                                        </a>
                                                    )
                                                )}
                                            </div>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div
                                className="flex-shrink-0 w-14"
                                aria-hidden="true"
                            >
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Content area */}
                <div className="flex flex-col flex-1 overflow-hidden">
                    <header className="w-full">
                        <div className="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm">
                            <button
                                type="button"
                                className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open sidebar</span>
                                <Bars3BottomLeftIcon
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                />
                            </button>
                            <div className="flex justify-between flex-1 px-4 sm:px-6">
                                <div className="flex flex-1">
                                    <form
                                        className="flex w-full md:ml-0"
                                        action="#"
                                        method="GET"
                                    >
                                        <label
                                            htmlFor="search-field"
                                            className="sr-only"
                                        >
                                            Search all files
                                        </label>
                                        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                                <MagnifyingGlassIcon
                                                    className="flex-shrink-0 w-5 h-5"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <input
                                                name="search-field"
                                                id="search-field"
                                                className="w-full h-full py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 border-transparent focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0"
                                                placeholder="Search"
                                                type="search"
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="flex items-center ml-2 space-x-4 sm:ml-6 sm:space-x-6">
                                    {/* Profile dropdown */}
                                    <Menu
                                        as="div"
                                        className="relative flex-shrink-0"
                                    >
                                        <div>
                                            <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                <span className="sr-only">
                                                    Open user menu
                                                </span>
                                                <img
                                                    className="w-8 h-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {userNavigation.map((item) => (
                                                    <Menu.Item key={item.name}>
                                                        {({ active }) => (
                                                            <a
                                                                href={item.href}
                                                                className={
                                                                    (active
                                                                        ? "bg-gray-100"
                                                                        : "",
                                                                    "block px-4 py-2 text-sm text-gray-700")
                                                                }
                                                            >
                                                                {item.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Main content */}
                    <div className="flex items-stretch flex-1 overflow-hidden">
                        <main className="flex-1 overflow-y-auto">
                            {children}
                        </main>

                        {/* Secondary column (hidden on smaller screens) */}
                        {/* <aside className="hidden overflow-y-auto bg-white border-l border-gray-200 w-96 lg:block"> */}
                        {/* Your content */}
                        {/* </aside> */}
                    </div>
                </div>
            </div>
        </>
    );
}
