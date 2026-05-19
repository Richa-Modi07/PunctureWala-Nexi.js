"use client";
import React, { useState } from "react";
import { ArrowLeft, Clock1, IndianRupee } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "../../lib/routes"



function Document() {
    const router = useRouter();
    const [duration, setDuration] = useState("1year");
    const [payment, setPayment] = useState("net60");

    return (
        <div className="min-h-screen bg-[#f5f7fb] p-4 md:p-6 text-black">
            <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <h2 className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm">
                            1
                        </h2>

                        <span className="font-semibold text-blue-600 text-sm">Info</span>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <h2 className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm">
                            2
                        </h2>

                        <span className="font-semibold text-blue-600 text-sm capitalize">
                            Details
                        </span>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <h2 className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm">
                            3
                        </h2>

                        <span className="font-semibold text-blue-600 text-sm">Terms</span>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <h2 className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm">
                            4
                        </h2>

                        <span className="font-semibold text-blue-600 text-sm">Review</span>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <h2 className="text-xl md:text-2xl font-semibold text-black">
                    Contract Terms & Selection
                </h2>

                <p className="text-sm md:text-lg font-medium text-gray-500 mt-2">
                    Customize your service engagement terms. These selections will define
                    your payment cycles and service obligations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
                <div className=" rounded-2xl p-4 md:p-5 bg-white shadow-sm border-l-4  border-blue-600">
                    <div className="flex items-center gap-2 mb-4">
                        <Clock1 />
                        <h2 className="text-xl font-semibold">Duration</h2>
                    </div>

                    <div
                        onClick={() => setDuration("1year")}
                        className={`border rounded-xl p-4 cursor-pointer mb-4 transition ${duration === "1year"
                            ? "border-black bg-gray-50"
                            : "border-gray-300"
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <div
                                className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${duration === "1year" ? "border-black" : "border-gray-400"
                                    }`}
                            >
                                {duration === "1year" && (
                                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                                )}
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">1 Year Term</h3>

                                <p className="text-sm text-gray-500">Standard annual renewal</p>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => setDuration("2year")}
                        className={`border rounded-xl p-4 cursor-pointer transition ${duration === "2year"
                            ? "border-black bg-gray-50"
                            : "border-gray-300"
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <div
                                className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${duration === "2year" ? "border-black" : "border-gray-400"
                                    }`}
                            >
                                {duration === "2year" && (
                                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                                )}
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">2 Year Term</h3>

                                <p className="text-sm text-gray-500">
                                    5% loyalty rebate applied
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" rounded-2xl p-4 md:p-5 bg-white shadow-sm border-l-4 border-gray-600">
                    <div className="flex items-center gap-2 mb-4">
                        <IndianRupee />
                        <h2 className="text-xl font-semibold">Payment</h2>
                    </div>

                    <div
                        onClick={() => setPayment("net30")}
                        className={`border rounded-xl p-4 cursor-pointer mb-4 transition ${payment === "net30"
                            ? "border-black bg-gray-50"
                            : "border-gray-300"
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <div
                                className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${payment === "net30" ? "border-black" : "border-gray-400"
                                    }`}
                            >
                                {payment === "net30" && (
                                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                                )}
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">Net 30</h3>

                                <p className="text-sm text-gray-500">Standard payment cycle</p>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => setPayment("net60")}
                        className={`border rounded-xl p-4 cursor-pointer transition ${payment === "net60"
                            ? "border-black bg-gray-50"
                            : "border-gray-300"
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <div
                                className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${payment === "net60" ? "border-black" : "border-gray-400"
                                    }`}
                            >
                                {payment === "net60" && (
                                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                                )}
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">Net 60</h3>

                                <p className="text-sm text-gray-500">
                                    Extended cycle (Preferred)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl p-6 text-white flex flex-col justify-between shadow-sm">
                    <div>
                        <p className="uppercase text-xs tracking-widest opacity-80">
                            Estimated Revenue
                        </p>

                        <h1 className="text-2xl md:text-4xl font-bold mt-4">
                            $45,000 - $62,000
                        </h1>

                        <p className="text-sm mt-3 text-indigo-100">
                            Based on your selected plan and local market demand for 2024
                        </p>
                    </div>

                    <button className="mt-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-medium w-fit">
                        Projection +12%
                    </button>
                </div>
            </div>

            <div className="border rounded-3xl overflow-hidden mt-5 bg-white shadow-sm">
                <div className="bg-gray-300 px-4 md:px-6 py-4 flex flex-col md:flex-row gap-3 md:justify-between md:items-center">
                    <h2 className="text-lg md:text-2xl font-semibold">
                        Service Level Agreement (SLA) Tiers
                    </h2>

                    <div className="px-3 py-1 bg-blue-200 rounded-2xl w-fit">
                        <span className="text-sm font-medium text-blue-900">
                            RECOMMENDED: PLATINUM
                        </span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-center min-w-[700px]">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left px-6 py-5">Features</th>

                                <th className="py-5">
                                    <div>
                                        <h3 className="font-semibold text-lg">Standard</h3>

                                        <p className="text-sm text-gray-500">Basic Support</p>
                                    </div>
                                </th>

                                <th className="py-5">
                                    <div>
                                        <h3 className="font-semibold text-lg">Gold</h3>

                                        <p className="text-sm text-gray-500">Priority Support</p>
                                    </div>
                                </th>

                                <th className="py-5">
                                    <div>
                                        <h3 className="font-semibold text-lg">Platinum</h3>

                                        <p className="text-sm text-gray-500">24/7 Dedicated</p>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-b">
                                <td className="text-left px-6 py-5 font-medium">
                                    Response Time
                                </td>

                                <td>4 Hours</td>
                                <td>2 Hours</td>
                                <td>30 Minutes</td>
                            </tr>

                            <tr className="border-b">
                                <td className="text-left px-6 py-5 font-medium">
                                    Dedicated Manager
                                </td>

                                <td>✕</td>
                                <td>✔</td>
                                <td>✔</td>
                            </tr>

                            <tr className="border-b">
                                <td className="text-left px-6 py-5 font-medium">
                                    Monthly Audit Reports
                                </td>

                                <td>✕</td>
                                <td>Standard</td>
                                <td>Comprehensive</td>
                            </tr>

                            <tr>
                                <td className="text-left px-6 py-5 font-medium">Selection</td>

                                <td>
                                    <button className="border px-5 py-2 rounded-full hover:bg-gray-100 transition">
                                        Select
                                    </button>
                                </td>

                                <td>
                                    <button className="bg-indigo-600 text-white px-5 py-2 rounded-full">
                                        Selected
                                    </button>
                                </td>

                                <td>
                                    <button className="border px-5 py-2 rounded-full hover:bg-gray-100 transition">
                                        Upgrade
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 mt-8">
                <button className="flex items-center gap-2 text-black font-bold" onClick={() => router.push(ROUTES.step2)}>
                    <ArrowLeft size={20} />
                    Back to Uploads
                </button>

                <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
                    <button className="w-full sm:w-auto bg-gray-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-800 transition">
                        Save Draft
                    </button>

                    <button className="w-full sm:w-auto bg-blue-900 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-800 transition"
                        onClick={() => router.push(ROUTES.step4)}>
                        Continue to Review
                    </button>
                </div>
            </div>

            <div className=" flex p-4 rounded-2xl bg-gray-300 mt-7  md:block hidden">
                <div className="mt-1 gap-3"></div>

                <div>
                    <h3 className="font-semibold text-base md:text-lg text-black">
                        Binding Terms Disclosure
                    </h3>

                    <p className="font-medium text-sm md:text-base text-black mt-2 leading-relaxed">
                        Selecting these terms creates a preliminary agreement framework.
                        Final pricing and service commitments will be verified during the
                        Final Review stage. Service performance is monitored via the
                        ProService Ecosystem's automated telemetry system.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Document;
