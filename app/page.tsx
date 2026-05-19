"use client";
import Sidebar from './components/common/Sidebar'
import ActiveJobCard from './components/dashboard/ActiveJobCard';
import StatCard from './components/common/StatCard';
import NearbyJobs from './components/dashboard/NearbyJobs';
import { BsCashStack } from "react-icons/bs";

const jobs = [
  { title: "Wheel Balancing", distance: "102 km away", price: "₹380", location: "Sector 45, Gurgaon", time: "5 mins ago" },
  { title: "Double Puncture Repair", distance: "102 km away", price: "₹550", location: "Sector 45, Gurgaon", time: "12 mins ago" },
  { title: "Valve Replacement", distance: "102 km away", price: "₹250", location: "Sector 45, Gurgaon", time: "20 mins ago" },
];

const stats = [
  { title: "Today's Earnings", value: "₹2,450", icon: BsCashStack, iconClass: "text-blue-600 bg-blue-100" },
  { title: "Jobs Completed", value: "08", icon: BsCashStack, iconClass: "text-orange-500 bg-orange-100" },
  { title: "Average Rating", value: "4.92", icon: BsCashStack, iconClass: "text-blue-600 bg-blue-100" },
  { title: "Bonus Progress", value: "₹500 left", icon: BsCashStack, iconClass: "text-blue-600 bg-blue-100" },
];

export default function page() {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />

      <main className="ml-64 flex-1 p-8">
        <div className='mb-10 flex justify-between'>
          <div className='flex flex-col'>
            <h1 className="text-4xl font-bold text-black">Work Dashboard</h1>
            <p className="text-gray-500">Welcome back, Mechanic ID #9921</p>
          </div>
          <div className='bg-gray-200 rounded-full flex items-center justify-end p-3 gap-x-2 font-semibold'>
            <div className="text-gray-600 ">You are Online</div>
            <div className="bg-green-400 rounded-full h-full w-28 justify-center items-center flex">ACTIVE</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 mb-12">
          {stats.map((stat, i) => (
            <StatCard key={i} title={stat.title} value={stat.value} icon={stat.icon} iconClass={stat.iconClass} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <ActiveJobCard />
          </div>

          <div className="space-y-6 ">
            <NearbyJobs jobs={jobs} />
          </div>
        </div>
      </main>
    </div>
  )
}
