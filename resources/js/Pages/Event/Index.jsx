import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import PageHeader from "@/Components/PageHeader";
import SlideOver from "@/Components/SlideOver";
import SlideOverForm from "@/Components/Forms/Event/SlideOverForm";

export default function Index(props) {
    const [open, setOpen] = useState(false);

    const buildEventForm = () => {
        return (
            <SlideOverForm
                setOpen={setOpen}
                title="Create Event"
                description="You can create new event"
            />
        );
    };

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Events" />
            <SlideOver open={open} setOpen={setOpen} form={buildEventForm} />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <PageHeader title="Events" showSlideOver={setOpen} />
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
