import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function PageHeader({ title, showSlideOver }) {
    return (
        <div>
            <div>
                {/* <nav className="sm:hidden" aria-label="Back">
                    <a
                        href="#"
                        className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                        <ChevronLeftIcon
                            className="flex-shrink-0 w-5 h-5 mr-1 -ml-1 text-gray-400"
                            aria-hidden="true"
                        />
                        Back
                    </a>
                </nav> */}
                <nav className="hidden sm:flex" aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-4">
                        <li>
                            <div className="flex">
                                <a
                                    href="#"
                                    className="text-sm font-medium text-gray-500 hover:text-gray-700"
                                >
                                    Dashboard
                                </a>
                            </div>
                        </li>
                        {/* <li>
                            <div className="flex items-center">
                                <ChevronRightIcon
                                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <a
                                    href="#"
                                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                >
                                    Engineering
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <ChevronRightIcon
                                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <a
                                    href="#"
                                    aria-current="page"
                                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                >
                                    Back End Developer
                                </a>
                            </div>
                        </li> */}
                    </ol>
                </nav>
            </div>
            <div className="mt-2 mb-7 md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        {title}
                    </h2>
                </div>
                <div className="flex flex-shrink-0 mt-4 md:mt-0 md:ml-4">
                    {showSlideOver != null && (
                        <button
                            onClick={() => showSlideOver(true)}
                            type="button"
                            className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Create
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
