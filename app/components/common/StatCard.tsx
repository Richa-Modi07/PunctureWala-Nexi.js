import { IconType } from "react-icons";
type statCard = {
  title: string,
  value: string,
  subtitle?: string,
  subtitleColor?: string,
  icon: IconType,
  iconClass: string
}

export default function StatCard({ title, value, subtitle, subtitleColor, icon: Icon, iconClass }: statCard) {
  return (
    <div className="rounded-2xl bg-white shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-base uppercase text-gray-600 ">{title}</p>
        <Icon className={`w-12 h-12 p-2 rounded-2xl flex items-center justify-center ${iconClass} `} />
      </div>
      <p className="text-2xl font-bold mt-4 text-gray-900">{value}</p>
      <p className={`text-sm text-blue-600 font-medium mt-1 ${subtitleColor}`}>{subtitle}</p>
    </div>
  );
}

