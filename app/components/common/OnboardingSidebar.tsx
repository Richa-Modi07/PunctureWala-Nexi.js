'use client'
import { FaClipboardList, FaClipboardCheck, FaFileUpload, FaInfoCircle, FaSignOutAlt, FaRegQuestionCircle } from "react-icons/fa";
import { ROUTES } from "../../../lib/routes"
import { useRouter } from "next/navigation";
import Link from "next/link";
const OnboardingSidebar = () => {
  const router = useRouter();


  const navItems = [
    { icon: FaInfoCircle, label: "Supplier Info", active: true, href: ROUTES.step1 },
    { icon: FaFileUpload, label: "Document Details", href: ROUTES.step2 },
    { icon: FaClipboardList, label: "Term Selection", href: ROUTES.step3 },
    { icon: FaClipboardCheck, label: "Final Review", href: ROUTES.step4 }
  ];

  return (
    <aside className="hidden w-64 bg-slate-100 border-r border-gray-200 h-full 
    p-5 fixed lg:flex flex-col">
      <div className="p-2 space-y-2">
        <h1 className="text-2xl font-bold text-blue-600">
          PunctureWala
        </h1>
        <p className="text-sm text-gray-500 mt-1 mb-6">Onboarding Portal</p>
      </div>

      <div className=" flex flex-col justify-between flex-1 ">
        <nav className="space-y-3">
          {navItems.map((item) => (
            <Link key={item.label}
              className={`flex items-center gap-3 p-3 rounded-xl  cursor-pointer w-full text-sm font-medium transition-all text-gray-600 group ${item.active ? "bg-gray-200 border-r-6 border-blue-600" : "hover:bg-blue-100"}`}
              href={item.href}
            >
              <item.icon size={18} className={`text-gray-600 group-hover:text-blue-500 ${item.active ? "group-hover:text-gray-800 " : "group-hover:text-blue-500 "}`} />
              <span className={`text-gray-600 ${item.active ? " group-hover:text-gray-800 " : "group-hover:text-blue-500 "}`}>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="space-y-5">
          {[{ icon: FaRegQuestionCircle, label: "Support", bg: "hover:bg-blue-100", text: "group-hover:text-blue-500" },
          { icon: FaSignOutAlt, label: "Sign Out", color: "red", bg: "hover:bg-red-100", text: "group-hover:text-red-500" },
          ].map(
            (item) =>
            (
              <div key={item.label} className={`flex items-center gap-3 p-3 rounded-xl ${item.bg} cursor-pointer group`}>
                <item.icon size={18} className={`text-gray-600 ${item.text} `} />
                <span className={` text-gray-600 ${item.text}`}>{item.label}</span>
              </div>
            )

          )}
        </div>
      </div>
    </aside>
  )
}

export default OnboardingSidebar;