"use client"
import HamMenu from "../components/common/HamMenu";
import OnboardingSidebar from "../components/common/OnboardingSidebar";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { ArrowLeft, Settings } from "lucide-react";
import OnboardingStep from "../components/common/OnboardingStep";
import { SiAdguard } from "react-icons/si";
import { IconType } from "react-icons";
import { GiCheckedShield } from "react-icons/gi";
import { MdElectricBolt } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";
import React, { Children } from "react";
import { BiBuildings } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { BiBox } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { ROUTES } from "../../lib/routes"

export default function Page() {
  const router = useRouter();

  type SupplierType = {
    label: string;
    data: string;
    style?: string
  }
  const supplierInfo: SupplierType[] = [
    {
      label: "Legal Entity Name",
      data: "Global Logistics Pro Ltd.",
      style: "font-bold"
    },
    {
      label: "Tax Identification Number",
      data: "TX-8829-1004-99",
      style: "font-bold"
    },
    {
      label: "Primary Contact",
      data: "Marcus Aurelius | Senior Operations",
    },
    {
      label: "Registered Address",
      data: "1221 Innovation Way, Suite 400, Austin, TX",
    },
  ]
  return (
    <div className="min-h-screen bg-slate-50 flex flex-row">
      <OnboardingSidebar />

      <div className="lg:ml-64 flex-1 p-8">
        {/* Header */}
        <div className="w-full flex justify-between items-center mb-6">
          <h2 className="text-blue-600 text-2xl font-bold">Supplier Onboarding</h2>
          <div className="flex items-center gap-x-2">
            <div className="cursor-pointer">
              <FaBell size={28} className="text-gray-700" />
            </div>
            <div className="cursor-pointer">
              <Settings size={28} className="text-gray-700" />
            </div>
            <div className="cursor-pointer">
              <FaUserCircle size={28} className="text-gray-700" />
            </div>
            <HamMenu />
          </div>
        </div>

        <OnboardingStep w="w-full" count={4} percentage={75} />

        {/* Main Content */}
        <main className="flex flex-col gap-6">

          {/* Review and Submit */}
          <div className="flex flex-col sm:flex-row lg:justify-between">
            <div className="flex flex-col max-w-3xl">
              <h1 className="text-black text-3xl md:text-4xl">Review & Submit</h1>
              <p className="text-gray-600 text-base lg:text-lg lg:tracking-wider">Please verify all the details below. This is the final step before your supplier contract is generated and activated.</p>
            </div>
            <div className="bg-blue-100 border border-blue-300 py-3 px-8 mt-4 sm:mt-0 flex items-center justify-center gap-x-4 rounded-2xl">
              <div className="border-4 border-blue-600 h-12 w-12 rounded-full flex items-center justify-center">
                <IoMdCheckmarkCircle size={28} className="text-blue-600" />
              </div>
              <div className="flex flex-col">
                <p className="text-blue-600 text-sm uppercase">Completion</p>
                <p className="text-black text-xl md:text-xl mt-2 font-bold tracking-wide">100% Ready</p>
              </div>
            </div>
          </div>

          {/* Supplier Info */}
          <div className="flex flex-col md:flex-row lg:justify-between ">
            <SectionCard title="Supplier Information" borderColor="border-l-blue-800" textColor="text-blue-800" icon={BiBuildings} >
              <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
                {supplierInfo.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <p className="uppercase text-sm text-gray-600 font-semibold">{item.label}</p>
                    <p className={`${item.style} text-base text-black`}>{item.data}</p>
                  </div>
                ))
                }
              </div>
            </SectionCard>

            <div className="bg-blue-800 text-white rounded-2xl p-8 relative overflow-hidden max-w-sm">
              <div className="flex items-center justify-between ">
                <div className="flex-col flex">
                  <p className="rounded-full bg-white/20 uppercase w-fit px-2 text-sm">Status: Validated</p>
                  <h3 className="text-2xl font-semibold mt-2 tracking-wide">Contract Viability</h3>
                </div>
                <GoShieldCheck size={60} className="text-white/40" />
              </div>
              <div className=""></div>
              <p className="mt-4 leading-relaxed tracking-wide text-blue-100">
                Estimated Processing Time
              </p>
              <p className=" tracking-wide text-3xl font-bold ">2 - 4 Hours</p>
            </div>
          </div>


          {/* SECOND ROW */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 border border-black">

            {/* Terms */}
            <SectionCard
              title="Term Selection"
              borderColor="border-l-amber-700"
              textColor="text-amber-700"
              icon={CiCalendar}
            >
              <div className="space-y-5 mt-6 text-black">

                <div className="flex justify-between">
                  <p className="text-gray-600">Billing Cycle:</p>
                  <p className="font-semibold">Net 30</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-600">Contract Term:</p>
                  <p className="font-semibold">24 Months</p>
                </div>

                <div className="bg-amber-100 text-amber-800 text-xs font-semibold tracking-widest rounded-md py-2 text-center uppercase">
                  Preferred Vendor Tier
                </div>

              </div>
            </SectionCard>

            {/* Documents */}
            <div className="xl:col-span-2">
              <SectionCard
                title="Verified Documents"
                borderColor="border-l-blue-700"
                textColor="text-blue-700"
                icon={BiBox}
              >

                <div className="grid md:grid-cols-2 gap-4 mt-6">

                  {[
                    "Articles_of_Inc.pdf",
                    "Tax_ID_Certificate.pdf",
                    "Insurance_Policy_2024.pdf"
                  ].map((doc, index) => (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-xl p-4 flex justify-between items-center bg-slate-50"
                    >
                      <div>
                        <p className="font-medium text-black">
                          {doc}
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                          VERIFIED
                        </p>
                      </div>

                      <IoMdCheckmarkCircle
                        size={22}
                        className="text-blue-700"
                      />
                    </div>
                  ))}

                </div>
              </SectionCard>
            </div>
          </div>


          {/* LEGAL SECTION */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8">

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">

              {/* Legal */}
              <div>
                <h3 className="text-2xl font-semibold text-black mb-6">
                  Legal Affirmation
                </h3>

                <div className="border rounded-xl p-5 bg-slate-50 text-gray-700 leading-relaxed">
                  <p>
                    1. Accuracy of Information: I hereby certify
                    that all information provided is true and accurate.
                  </p>

                  <p className="mt-4">
                    2. Compliance: The supplier agrees to comply
                    with all operational standards and regulations.
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <input type="checkbox" className="h-5 w-5" />

                  <p className="text-gray-700">
                    I agree to the legal terms above.
                  </p>
                </div>
              </div>

              {/* Signature */}
              <div>
                <h3 className="text-2xl font-semibold text-black mb-6">
                  Digital Signature
                </h3>

                <div className="space-y-5">

                  <div>
                    <p className="uppercase text-xs tracking-widest text-gray-500 mb-2">
                      Type Full Legal Name
                    </p>

                    <input
                      type="text"
                      defaultValue="Marcus Aurelius"
                      className="w-full border border-slate-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="border-2 border-dashed rounded-xl h-40 flex items-center justify-center text-gray-400 text-center px-6">
                    Signature will be applied to final PDF document upon activation
                  </div>

                </div>
              </div>

            </div>

            {/* FOOTER */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-8 border-t border-slate-200 gap-4">

              <button className="flex items-center gap-2 text-gray-700 font-medium" onClick={() => router.push(ROUTES.step3)}>
                <ArrowLeft size={18} />
                Back to Terms Selection
              </button>

              <div className="flex gap-4">

                <button className="bg-slate-200 hover:bg-slate-300 transition px-8 py-4 rounded-full font-semibold text-black">
                  Save Draft
                </button>

                <button className="bg-blue-700 hover:bg-blue-800 transition text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2">
                  Activate Contract
                  <MdElectricBolt />
                </button>

              </div>
            </div>

          </div>

        </main>
      </div >
    </div >
  )
}

type SectionCard = {
  children: React.ReactNode;
  borderColor: string;
  textColor: string;
  icon: IconType;
  title: string
}

const SectionCard = ({ children, borderColor, textColor, icon: Icon, title }: SectionCard) => {
  return (
    <div className={`border border-slate-200 border-l-8 ${borderColor} bg-white rounded-2xl w-full max-w-3xl flex flex-col p-6 gap-6`}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Icon size={32} className={`${textColor}`} />
          <h3 className="text-black text-2xl font-semibold" >{title}</h3>
        </div>
        <button className="text-blue-800 cursor-pointer text-sm font-semibold" >Edit</button>
      </div>
      {children}
    </div >
  )
}
