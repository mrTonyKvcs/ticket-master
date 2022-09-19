import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage, Link } from "@inertiajs/inertia-react";
import SlideOver from "@/Components/SlideOver";

export default function FileUpload(props) {
    const { files } = usePage().props;
    const [open, setOpen] = useState(false);

    const { data, setData, errors, post, progress } = useForm({
        title: "",
        file: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("file.upload.store"));

        setData("title", "");
        setData("file", null);
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Laravel React JS File Upload Example - ItSolutionStuff.com
                </h2>
            }
        >
            <Head title="Posts" />
            <SlideOver open={open} setOpen={setOpen} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Title</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Title"
                                            name="title"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">File</label>
                                        <input
                                            type="file"
                                            className="w-full px-4 py-2"
                                            label="File"
                                            name="file"
                                            onChange={(e) =>
                                                setData(
                                                    "file",
                                                    e.target.files[0]
                                                )
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.file}
                                        </span>
                                    </div>
                                </div>

                                {progress && (
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div
                                            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                            width={progress.percentage}
                                        >
                                            {" "}
                                            {progress.percentage}%
                                        </div>
                                    </div>
                                )}

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setOpen(true)}
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        SlideOver
                                    </button>
                                </div>
                            </form>

                            <br />

                            <h1>Uploaded File List:</h1>
                            <table className="w-full table-fixed">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="w-20 px-4 py-2">No.</th>
                                        <th className="px-4 py-2">Title</th>
                                        <th className="px-4 py-2">Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {files.map(({ id, title, name }) => (
                                        <tr key={title}>
                                            <td className="px-4 py-2 border">
                                                {id}
                                            </td>
                                            <td className="px-4 py-2 border">
                                                {title}
                                            </td>
                                            <td className="px-4 py-2 border">
                                                <img src={name} width="200px" />
                                            </td>
                                        </tr>
                                    ))}

                                    {files.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No contacts found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
