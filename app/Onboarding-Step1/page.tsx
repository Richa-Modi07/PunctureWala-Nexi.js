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
import { useRouter } from "next/navigation";
import { ROUTES } from "../../lib/routes"


export default function Page() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-slate-50 flex flex-row">
      <OnboardingSidebar />

      <div className="lg:ml-64 flex-1 p-8 overflow-y-auto">
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

        <OnboardingStep w="w-0" count={1} percentage={0} />

        {/* Main Content */}
        <main className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 md:p-8 flex flex-col md:flex-row-reverse gap-6">

          {/* Right Panel */}
          <div className="space-y-5 flex-1 max-w-md mx-auto">
            <div className="bg-blue-600 text-white rounded-2xl p-8 relative overflow-hidden">
              <SiAdguard size={24} />
              <h3 className="text-2xl font-semibold mt-2 tracking-wide">Why we need this?</h3>
              <p className="mt-4 leading-relaxed tracking-wide text-blue-100">
                Puncture Wala Pro maintains a curated ecosystem of reliable
                suppliers. Your information helps us match your products with
                the right service nodes and ensures lightning-fast payments
                via our automated ledger.
              </p>
              <div className="absolute -bottom-15 -right-15 w-40 h-40 bg-white/10 rounded-full" />
            </div>

            <div className="rounded-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1200&auto=format&fit=crop"
                alt="auto parts"
                className="w-full h-50 object-cover rounded-2xl"
              />

              <div className="absolute top-35 left-5 z-10">
                <h4 className="font-semibold text-white text-lg">
                  Trusted Network
                </h4>
                <p className="text-sm text-gray-200 tracking-wide">
                  Join 500+ premium auto-part suppliers.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6 space-y-5">
              <InfoCard
                icon={GiCheckedShield}
                title="256-bit Encryption"
                description="Your business data is secure."
              />

              <InfoCard
                icon={MdElectricBolt}
                title="Instant Verification"
                description="PAN/GST validated in real-time."
              />
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-gray-100 border rounded-2xl p-4 lg:p-8 flex-1 border-gray-200 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900">
              Supplier Information
            </h2>

            <p className="text-gray-600 mt-3 text-base lg:text-lg leading-relaxed max-w-2xl">
              Please provide the core business details to initialize your
              vendor profile. Accuracy is vital for tax compliance and
              automated payouts.
            </p>

            <div className="mt-6 lg:mt-10 space-y-6">
              <InputField
                label="Company Registered Name"
                placeholder="e.g. Apex Industrial Solutions"
              />

              <div className="grid xl:grid-cols-2 gap-4 ">
                <InputField
                  label="Tax ID (GST/VAT)"
                  placeholder="Enter registration number"
                />

                <InputField
                  label="PAN / National ID"
                  placeholder="Enter PAN number"
                />
              </div>

              <InputField
                label="Primary Contact Person"
                placeholder="Full name of representative"
              />

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">
                  Business Category
                </label>

                <select className="w-full rounded-xl border border-gray-200 bg-white p-4 text-sm outline-none focus:ring-2 
                focus:ring-blue-500 text-gray-600">
                  <option>Select category...</option>
                  <option>Automobile</option>
                  <option>Manufacturing</option>
                  <option>Technology</option>
                  <option>Construction</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">
                  Registered Address
                </label>

                <textarea
                  rows={4}
                  placeholder="Floor, building, street and locality..."
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 text-gray-500"
                />
              </div>
            </div>

            {/* Form options */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <button className="text-blue-600 font-medium text-sm px-6 py-3 rounded-full hover:bg-blue-100 cursor-pointer flex items-center gap-1">
                <ArrowLeft size={16} /> Exit
              </button>

              <div className="flex items-center gap-4">
                <button className="cursor-pointer hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium text-sm">
                  Save Draft
                </button>

                <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-sm shadow-lg shadow-blue-200"
                  onClick={() => router.push(ROUTES.step2)}>
                  Continue to Step 2
                </button>
              </div>
            </div>
          </div>


        </main>
      </div>
    </div>
  )
}


function InputField({
  label,
  placeholder,
}: {
  label: string
  placeholder: string
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 bg-white p-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
    </div>
  )
}

function InfoCard({
  icon: Icon,
  title,
  description,
}: {
  icon: IconType
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-blue-600">
        <Icon size={28} />
      </div>

      <div>
        <h5 className="font-semibold text-gray-900">{title}</h5>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  )
}
