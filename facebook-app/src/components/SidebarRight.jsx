import { contactsData } from "../data/DummyData";

export default function SidebarRight() {
  return (
    <aside className="hidden w-[280px] shrink-0 xl:block">
      <div className="pt-4">
        <div className="mb-4 flex items-center justify-between px-2">
          <h3 className="text-xl font-bold text-[#050505]">Contacts</h3>
        </div>

        <div className="space-y-2">
          {contactsData.map((contact) => (
            <div key={contact.id} className="flex items-center justify-between rounded-xl px-2 py-2 transition hover:bg-white">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={contact.avatar} alt={contact.name} className="h-10 w-10 rounded-full object-cover" />
                  {contact.online && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                  )}
                </div>
                <span className="text-sm font-medium text-[#050505]">{contact.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
