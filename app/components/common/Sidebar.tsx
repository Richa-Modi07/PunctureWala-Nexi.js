import { Home, Wrench, Wallet, BarChart3, Settings, Truck, MessageCircleQuestionMark, LogOut, Plus } from "lucide-react"

type sidebarType = {
  newDispatch?: boolean
}
function Sidebar({ newDispatch }: sidebarType) {
  const items = [
    { icon: Home, label: "Dashboard" },
    { icon: Truck, label: "Fleet Management" },
    { icon: Wrench, label: "Live Jobs" },
    { icon: Wallet, label: "Earnings" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Settings, label: "System Settings" }
  ];

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 h-full p-5 fixed flex flex-col ">
      <div className="p-2 space-y-2">
        <h1 className="text-3xl font-bold text-blue-600">
          PunctureWala
        </h1>
        <h2 className="text-2xl font-bold text-blue-600">Admin Panel</h2>
        <p className="text-sm text-gray-600 mb-8">Puncture Wala HQ</p>
      </div>
      <div className="flex flex-col justify-between flex-1 ">
        <nav className="space-y-3">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-100 cursor-pointer ">
              <item.icon size={18} className='text-gray-600' />
              <span className=" text-gray-600">{item.label}</span>
            </div>
          ))}
        </nav>
        <div className="space-y-3">
          {newDispatch && <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white rounded-2xl py-4 flex items-center justify-center gap-2 font-semibold shadow-lg shadow-blue-200">
            <Plus size={18} />
            New Dispatch
          </button>}
          {[{ icon: MessageCircleQuestionMark, label: "Help Center" },
          { icon: LogOut, label: "Logout" },
          ].map(
            (item) =>
            (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-100 cursor-pointer">
                <item.icon size={18} className='text-gray-600' />
                <span className=" text-gray-600">{item.label}</span>
              </div>
            )

          )}
        </div>
      </div>

    </aside>
  )
}

export default Sidebar;
