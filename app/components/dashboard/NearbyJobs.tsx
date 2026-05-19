import { ArrowRight } from "lucide-react";
import { IoLocation } from "react-icons/io5";


export default function NearbyJobs({ jobs }: { jobs: any[] }) {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex justify-between">
        <div className="text-2xl text-black font-semibold">Jobs Nearby</div>
        <div className="text-base text-blue-600 flex cursor-pointer ">
          View All
          <ArrowRight className="text-blue-600" size={20} />
        </div>
      </div>

      <div className="space-y-4">
        {jobs.map((job, i) => (
          <div key={i} className="bg-gray-100 border border-gray-100 shadow-sm rounded-2xl p-4 flex flex-col gap-y-2">
            <div className="flex justify-between">
              <div className="">
                <p className="text-black text-lg font-semibold">{job.title}</p>
                <p className="text-xs text-gray-600">{job.distance}</p>
              </div>
              <span className="font-bold text-green-600">{job.price}</span>
            </div>

            <div className="flex justify-between">
              <p className="text-xs text-gray-600 uppercase">{job.location}</p>
              <p className="text-xs text-gray-400">{job.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-2 shadow-sm border-orange-200 bg-orange-50 rounded-3xl border-dashed p-6 text-center">
        <IoLocation className="mx-auto text-orange-500 mb-3" size={36} />
        <h3 className="font-bold text-2xl text-orange-700">SOS Signal Detected</h3>
        <p className="text-sm text-orange-500 mb-4">Critical emergency repair needed at 0.8km. Hign priority payout applies.</p>
        <button className="bg-orange-500 text-white rounded-full uppercase px-4 py-2 hover:bg-orange-600">View Emergency Job</button>
      </div>
    </div>

  );
}

