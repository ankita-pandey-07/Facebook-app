import { Bookmark, CalendarDays, Flag, Group, Store, Users } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const shortcuts = [
  { icon: Users, label: "Friends" },
  { icon: Group, label: "Groups" },
  { icon: Store, label: "Marketplace" },
  { icon: Bookmark, label: "Saved" },
  { icon: CalendarDays, label: "Events" },
  { icon: Flag, label: "Pages" },
];

export default function SidebarLeft() {
  const { user } = useAuth();

  return (
    <aside className="hidden w-[280px] shrink-0 lg:block">
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-white">
          <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full object-cover" />
          <span className="text-sm font-semibold text-[#050505]">{user.name}</span>
        </div>

        {shortcuts.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4e6eb] text-[#050505]">
              <Icon size={18} />
            </div>
            <span className="text-sm font-medium text-[#050505]">{label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
