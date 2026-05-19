import React from 'react'

type Steps = {
  w: string;
  count: number;
  percentage: number;
}
const OnboardingStep = ({ w, count, percentage }: Steps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 mb-6 flex flex-col">
      <div className="flex items-center justify-between">
        <p className="text-xs tracking-wider uppercase text-gray-500 font-semibold">
          {`Step ${count} of 4`}
        </p>
        <p className="text-sm font-semibold text-gray-500">{`${percentage}% Complete`}</p>

      </div>
      <div className="">
        <div className="w-full h-2 bg-gray-100 rounded-full mt-3 flex items-center">
          <div className={`${w} h-full bg-blue-600 rounded-full`} />
          <div className="w-4 h-4 bg-blue-600 rounded-full" />
        </div>
      </div>
      <div className="text-gray-600 flex justify-between">
        <p>Info</p>
        <p>Documents</p>
        <p>Terms</p>
        <p>Review</p>
      </div>


    </div>
  )
}

export default OnboardingStep