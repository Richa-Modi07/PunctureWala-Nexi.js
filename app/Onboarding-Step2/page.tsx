"use client";
import React, { useRef, useState } from "react";
import {
    Upload,
    FileText,
    ShieldCheck,
    HelpCircle,
    ArrowLeft,
    ArrowRight,
    Book,
    BookmarkCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "../../lib/routes"


export default function page() {
    const router = useRouter();
    const fileref = useRef(null);
    const opnefile = () => {
        fileref.current.click();
    };
    const handlefile = (e) => {
        const file = e.target.files[0];
    };
    return (
        <div className="min-h-screen bg-[#f5f7fb] p-6 text-black">
            <div className=" bg-white rounded-2xl shadow-sm p-4 mb-6 ">
                <div className="flex items-center justify-between mb-3.5 ">
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
                            Step 2: Document Verification
                        </h1>
                    </div>

                    <div className=" text-blue-700 px-5 py-2 text-sm font-semibold md:text-xl whitespace-nowrap ">
                        50% Complete
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Start</span>
                        <span>Verification</span>
                        <span>Review</span>
                        <span>Complete</span>
                    </div>

                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-[45%] h-full bg-blue-600 rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="border-2 border-dashed border-blue-300 rounded-2xl bg-[#f9fbff] p-10 text-center">
                        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
                            <Upload className="text-blue-600 w-10 h-10" />
                        </div>

                        <input
                            type="file"
                            ref={fileref}
                            onChange={handlefile}
                            className="hidden"
                        />

                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Business Registration Certificate
                        </h2>

                        <p className="text-gray-500 max-w-xl mx-auto mb-6">
                            Drag and drop your official business formation documents or PDF
                            certificate here.
                        </p>

                        <button
                            onClick={opnefile}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition"
                        >
                            Choose File
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="bg-white border rounded-2xl p-5 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-start gap-3">
                                    <div className="p-2  rounded-lg text-gray-400">
                                        <Book size={24} />
                                    </div>
                                </div>
                                <span className="text-xs font-semibold bg-gray-100 text px-3 -black py-1 rounded-full">
                                    REQUIRED{" "}
                                </span>
                            </div>

                            <div className="flex-1">
                                <div className="p-2">
                                    <h3 className="font-semibold text-gray-900">
                                        Tax Identification
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Upload PAN / Tax documents
                                    </p>
                                </div>

                                <input
                                    type="file"
                                    ref={fileref}
                                    onChange={handlefile}
                                    className="hidden"
                                />
                            </div>

                            <button
                                onClick={opnefile}
                                className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 mt-3"
                            >
                                Upload File
                            </button>
                        </div>

                        <div className="bg-white border rounded-2xl p-5 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-start gap-3">
                                    <div className="p-2  rounded-lg text-gray-400">
                                        <BookmarkCheck size={24} />
                                    </div>
                                </div>
                                <span className="text-xs font-semibold bg-gray-100 text px-3 -black py-1 rounded-full">
                                    REQUIRED{" "}
                                </span>
                            </div>

                            <div className="flex-1 items-center gap-3 mb-4 ">
                                <div className="p-2">
                                    <h3 className="font-semibold text-gray-900">
                                        Insurance Proof
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Business insurance certificate
                                    </p>
                                </div>

                                <input
                                    type="file"
                                    ref={fileref}
                                    onChange={handlefile}
                                    className="hidden"
                                />
                            </div>

                            <button
                                onClick={opnefile}
                                className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50"
                            >
                                Upload File
                            </button>
                        </div>
                    </div>
                </div>

                <div className="space-y-5">
                    <div className="bg-[#f5f7fb] rounded-2xl p-5 border">
                        <h3 className="font-semibold text-gray-900 mb-4">Upload Status</h3>

                        <div className="space-y-3">
                            {["Business Certificate", "License Copy", "Insurance Proof"].map(
                                (item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white  rounded-xl px-4 py-3 flex items-center justify-between"
                                    >
                                        <span className="text-sm text-gray-700">{item}</span>

                                        <span className="text-xs  px-2 py-1 rounded-full">
                                            Uploaded
                                        </span>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                            {/* <HelpCircle className="w-6 h-6" /> */}

                            <h3 className="font-semibold text-lg">Need Assistance?</h3>
                        </div>

                        <p className="text-sm text-blue-100 leading-6 mb-5">
                            Our compliance team is available 24/7 to review your documents.
                            Average verification time: 4 hours.
                        </p>

                        <button className="bg-white text-blue-700 px-5 py-2 rounded-full font-medium hover:bg-gray-100">
                            Contact Support
                        </button>
                    </div>

                    <div className="bg-white border rounded-2xl p-5">
                        <h3 className="font-semibold text-gray-900 mb-3">
                            DOCUMENT REQUIREMENTS
                        </h3>

                        <ul className="space-y-2 text-sm text-gray-500 list-disc pl-5">
                            <li>Format: PDF, JPG, or PNG only.</li>
                            <li>Max file size: 10MB per document.</li>
                            <li>Ensure all four corners are visible.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                <button className="flex items-center gap-2 text-black font-bold" onClick={() => router.push(ROUTES.step1)}>
                    <ArrowLeft size={20} /> Back
                </button>

                <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-800 transition" onClick={() => router.push(ROUTES.step3)}>
                    Next Step: Term Selection
                </button>
            </div>
        </div>
    );
}
