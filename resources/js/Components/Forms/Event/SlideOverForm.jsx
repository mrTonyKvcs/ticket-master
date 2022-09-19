import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { TrixEditor } from "react-trix";

const SlideOverForm = ({ setOpen, title, description }) => {
    const { files } = usePage().props;

    const { data, setData, errors, post, progress } = useForm({
        name: "",
        startedAt: null,
        endedAt: null,
        file: null,
        content: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);

        setData("name", "");
        setData("file", null);
        setData("startedAt", null);
        setData("endedAt", null);
        setData("content", null);
        setOpen(false);
    }

    function handleEditorReady(editor) {
        // this is a reference back to the editor if you want to
        // do editing programatically
        editor.insertString("editor is ready");
    }
    function handleChange(html, text) {
        // html is the new html content
        // text is the new text content
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl"
        >
            <div className="flex-1">
                {/* Header */}
                <div className="px-4 py-6 bg-gray-50 sm:px-6">
                    <div className="flex items-start justify-between space-x-3">
                        <div className="space-y-1">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                                {title}
                            </Dialog.Title>
                            <p className="text-sm text-gray-500">
                                {description}
                            </p>
                        </div>
                        <div className="flex items-center h-7">
                            <button
                                type="button"
                                className="text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen(false)}
                            >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="py-6 space-y-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                    <div className="px-4 space-y-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="project-name"
                                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                                Event name
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            <span className="text-red-600">{errors.name}</span>
                        </div>
                    </div>

                    <div className="px-4 space-y-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="project-name"
                                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                                Start
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                type="datetime-local"
                                name="startedAt"
                                id="startedAt"
                                value={data.startedAt}
                                onChange={(e) =>
                                    setData("startedAt", e.target.value)
                                }
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            <span className="text-red-600">
                                {errors.startedAt}
                            </span>
                        </div>
                    </div>

                    <div className="px-4 space-y-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="project-name"
                                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                                Finish
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                type="datetime-local"
                                name="finishedAt"
                                id="finisgedAt"
                                value={data.finishedAt}
                                onChange={(e) =>
                                    setData("finishedAt", e.target.value)
                                }
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            <span className="text-red-600">
                                {errors.endedAt}
                            </span>
                        </div>
                    </div>

                    <div className="px-4 space-y-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="project-name"
                                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                                Upload Hero Image
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                type="file"
                                name="file"
                                id="file"
                                value={data.file}
                                onChange={(e) =>
                                    setData("file", e.target.value)
                                }
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            <span className="text-red-600">{errors.file}</span>
                        </div>
                    </div>

                    <div className="px-4 space-y-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="project-description"
                                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                                Content
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <textarea
                                id="content"
                                name="content"
                                rows={3}
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                value={data.content}
                                onChange={(e) =>
                                    setData("content", e.target.value)
                                }
                            />
                            <TrixEditor
                                onChange={handleChange}
                                onEditorReady={handleEditorReady}
                            />
                            <span className="text-red-600">
                                {errors.content}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-shrink-0 px-4 py-5 border-t border-gray-200 sm:px-6">
                <div className="flex justify-end space-x-3">
                    <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                        Create
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SlideOverForm;
