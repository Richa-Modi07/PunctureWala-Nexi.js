"use client";
import { LayoutDashboard, HelpCircle, LogOut, Bell, Settings } from "lucide-react"
import Link from "next/link";
import { useState } from "react";

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}

function NavItem({ icon, label, active }: NavItemProps) {
    return (
        <Link
            href=""
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${active
                ? "bg-blue-100 text-blue-600"
                : "text-gray-500 hover:bg-gray-100"
                }`}
        >
            {icon}
            <span className="font-medium">{label}</span>
        </Link>
    )
}


function Navbar({ children }: { children: React.ReactNode }) {
    const [open, setopen] = useState(false)
    return (
        <div className="flex h-screen overflow-hidden bg-[#F8FAFC]">
            <button onClick={() => setopen(true)}
                className="md:hidden fixed top-4 left-auto z-50 bg-white p-2 rounded-lg shadow">
                ☰
            </button>

            <aside className={`fixed md:static z-40 top-0 left-0 h-full w-64 bg-white border-r border-gray-100 flex flex-col transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                <div className="p-6 flex  justify-between items-center">

                    <h1 className=" text-xl font-bold ml-2 text-blue-600  tracking-tight">ProService Ecosystem </h1>

                    <button
                        onClick={() => setopen(false)} className="md:hidden transtate-y-14 ">
                        ✕
                    </button>

                </div>
                <nav className="flex-1 px-4 space-y-1">

                    <NavItem icon={<LayoutDashboard size={20} />} label="Supplier Info" />
                    <NavItem icon={<LayoutDashboard size={20} />} label="Contract Details" />
                    <NavItem icon={<LayoutDashboard size={20} />} label="Document Upload" />
                    <NavItem icon={<LayoutDashboard size={20} />} label="Term Selection" />
                    <NavItem icon={<LayoutDashboard size={20} />} label="Final Review" />

                </nav>

                <div className="p-4 border-t border-gray-50 mt-auto">
                    <div className="flex gap-3 flex-wrap mt-8">
                        <button className="flex-1 bg-blue-600 text-white py-2 rounded-full font-bold flex items-center justify-center gap-2">Save Draft</button>
                    </div>
                    <button className="flex items-center gap-3 w-full p-3 text-gray-500">
                        <HelpCircle size={20} />
                        <span className="font-medium">Support</span>
                    </button>

                    <button className="flex items-center gap-3 w-full p-3 text-gray-500">
                        <LogOut size={20} />
                        <span className="font-medium">Sign Out</span>
                    </button>
                </div>
            </aside>
            <main className="flex-1 overflow-y-auto">
                <header className="h-16 sm:h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-10">
                    <div className="flex items-center gap-2 sm:gap-4 ml-4 text-xs sm:text-sm text-gray-400 font-medium">
                        <span className="text-2xl font-bold text-blue-700">PWP</span> <span className="tex-sm font-semibold text-blue-500">Supplier Onboarding</span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-6">

                        <button className="p-2 text-gray-600 ">
                            <Bell size={20} />
                        </button>
                        <button className="p-2 text-gray-600">
                            <Settings size={20} />
                        </button>
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50"
                            alt="Profile"
                        />
                    </div>
                </header>
                <div>
                    {children}
                </div>
            </main>
        </div>
    )
}
export default Navbar 