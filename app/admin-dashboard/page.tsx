"use client";
import StatCard from "../components/common/StatCard";
import Sidebar from "../components/common/Sidebar"
import {
  Bell,
  Search,
  ListCheck,
  UserRoundCog,
  Timer,
  Banknote
} from "lucide-react";
import Maps from "../components/AdminDashboard/Map";
import AlertCard from "../components/AdminDashboard/AlertCard";


const stats = [
  {
    title: "Total Live Jobs",
    value: "142",
    subtitle: "+12% from last hour",
    subtitleColor: "text-blue-600",
    icon: ListCheck,
    iconClass: "text-blue-600 bg-blue-100"
  },
  {
    title: "Available Mechanics",
    value: "56",
    subtitle: "Ready for dispatch",
    subtitleColor: "text-green-600",
    icon: UserRoundCog,
    iconClass: "text-green-500 bg-green-100"
  },
  {
    title: "Daily Revenue",
    value: "₹84,200",
    subtitle: "Target: ₹100k",
    subtitleColor: "text-blue-600",
    icon: Banknote,
    iconClass: "text-blue-600 bg-blue-100"
  },
  {
    title: "Avg Response Time",
    value: "18.5m",
    subtitle: "Critical threshold: 25m",
    subtitleColor: "text-orange-600",
    icon: Timer,
    iconClass: "text-orange-600 bg-orange-100"
  },
];

const AlertCards = [
  {
    style: "red",
    title: "Highway NH-48 Breakdown",
    description: "Heavy commercial vehicle, multiple tire failure.",
    time: "2m ago",
    type: "SOS Priority 1",
    danger: true
  },
  {
    style: "orange",
    title: "Agent Delayed: Mech #442",
    description: "Stuck in heavy traffic at Western Express Way.",
    time: "8m ago",
    type: "Warning"
  },
  {
    style: "blue",
    title: "Premium Member Request",
    description: "BMW 5 Series, flat tire at Marine Drive.",
    time: "15m ago",
    type: "Assigned"
  }
]

export default function AdminDashboard() {
  return (
    <div className="bg-slate-50 min-h-screen flex relative">
      <Sidebar newDispatch={true} />

      <div className="ml-64 flex-1">
        <header className="h-16 w-full border border-b-gray-100 px-8 flex items-center justify-between bg-white">
          <nav className="gap-4 lg:gap-8 hidden md:flex items-center text-sm">
            <button className="text-blue-600">
              Dashboard
            </button>
            <button className="text-gray-500 hover:text-gray-800">
              Fleet Management
            </button>

            <button className="text-gray-500 hover:text-gray-800">
              Live Jobs
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 h-11 lg:w-65">
              <Search size={18} className="text-gray-400" />

              <input
                type="text"
                placeholder="Search orders..."
                className="bg-transparent outline-none text-sm w-full text-gray-400"
              />
            </div>

            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
              <Bell size={18} className="text-gray-600" />
            </button>

            <div className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-400 cursor-pointer   font-bold text-sm text-gray-400">
              RM
            </div>
          </div>
        </header>

        <main className="flex-1">

          <div className="p-6">
            {/* Stat section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {stats.map((stat) => (
                <StatCard key={stat.title} title={stat.title} value={stat.value} subtitle={stat.subtitle} subtitleColor={stat.subtitleColor} iconClass={stat.iconClass} icon={stat.icon} />
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6 mt-6">
              <div className="bg-white overflow-hidden shadow-sm h-125 bg-linear-to-br from-[#03151f] via-[#062735] to-[#04141f]">
                <Maps />
              </div>

              {/* ALERTS */}
              <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">
                    Critical Alerts
                  </h2>

                  <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-xl">
                    3 ACTIVE
                  </span>
                </div>

                <div className="space-y-4 mt-6">
                  {AlertCards.map((card) => (
                    <AlertCard style={card.style} key={card.title} title={card.title} description={card.description} time={card.time} type={card.type} />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1  gap-6 mt-6">
              <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm overflow-x-auto">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">
                    Recent Completed Jobs
                  </h2>

                  <button className="text-blue-600 font-semibold text-sm cursor-pointer">
                    View History →
                  </button>
                </div>

                <table className="w-full mt-6">
                  <thead>
                    <tr className="text-left uppercase tracking-wide text-gray-600 border-b border-gray-100">
                      <th className="pb-4">Job ID</th>
                      <th className="pb-4">Customer</th>
                      <th className="pb-4">Mechanic</th>
                      <th className="pb-4">Status</th>
                      <th className="pb-4 text-right">Revenue</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      {
                        id: "#PW-9902",
                        customer: "Rohan Sharma",
                        car: "Maruti Suzuki Swift",
                        mechanic: "Ali Khan (M-12)",
                        revenue: "₹2,200",
                      },
                      {
                        id: "#PW-9903",
                        customer: "Aditi Verma",
                        car: "Hyundai Creta",
                        mechanic: "Vikram S. (M-8)",
                        revenue: "₹3,800",
                      },
                      {
                        id: "#PW-9904",
                        customer: "Karan Mehta",
                        car: "Mahindra XUV700",
                        mechanic: "Ravi P. (M-21)",
                        revenue: "₹1,900",
                      },
                    ].map((job) => (
                      <tr
                        key={job.id}
                        className="border-b border-gray-50"
                      >
                        <td className="py-5 font-semibold text-blue-600">
                          {job.id}
                        </td>

                        <td>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {job.customer}
                            </p>

                            <p className="text-sm text-gray-400">
                              {job.car}
                            </p>
                          </div>
                        </td>

                        <td className="text-gray-700">
                          {job.mechanic}
                        </td>

                        <td>
                          <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                            COMPLETED
                          </span>
                        </td>

                        <td className="text-right font-bold text-gray-900">
                          {job.revenue}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div >
  );
}