import { useState } from "react";
import {
  Bell,
  ChevronDown,
  Gamepad2,
  Home,
  Menu,
  MessageCircle,
  Search,
  Store,
  Tv,
  Users,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("home");

  const navigationItems = [
    { id: "home", icon: Home },
    { id: "watch", icon: Tv },
    { id: "marketplace", icon: Store },
    { id: "groups", icon: Users },
    { id: "gaming", icon: Gamepad2 },
  ];

  const actionIcons = [Menu, MessageCircle, Bell];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-3 px-3 sm:px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877f2] text-2xl font-black text-white shadow-md">
            f
          </div>

          <div className="hidden items-center rounded-full bg-[#f0f2f5] px-3 py-2 text-gray-500 md:flex md:w-60">
            <Search size={18} className="min-w-[18px]" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="ml-2 w-full border-none bg-transparent text-sm text-[#050505] placeholder:text-[#65676b] outline-none"
            />
          </div>
        </div>

        <nav className="hidden flex-1 items-center justify-center sm:flex">
          <div className="flex h-full w-full max-w-[560px] items-center justify-around">
            {navigationItems.map(({ id, icon: Icon }) => {
              const isActive = activeTab === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={`flex h-14 w-full items-center justify-center rounded-lg border-b-4 transition-all ${
                    isActive
                      ? "border-[#1877f2] text-[#1877f2]"
                      : "border-transparent text-[#65676b] hover:bg-gray-100"
                  }`}
                >
                  <Icon size={26} />
                </button>
              );
            })}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" className="hidden items-center gap-2 rounded-full bg-[#e4e6eb] px-2 py-1.5 text-sm font-semibold text-[#050505] hover:bg-[#d8dadf] lg:flex">
            <img src={user.avatar} alt={user.name} className="h-7 w-7 rounded-full object-cover" />
            <span>{user.name.split(" ")[0]}</span>
          </button>

          {actionIcons.map((Icon, index) => (
            <button
              key={index}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e4e6eb] text-[#050505] transition hover:bg-[#d8dadf]"
            >
              <Icon size={18} />
            </button>
          ))}

          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e4e6eb] text-[#050505] transition hover:bg-[#d8dadf]">
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

