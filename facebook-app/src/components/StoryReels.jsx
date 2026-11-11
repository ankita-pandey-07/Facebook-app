import { storiesData } from "../data/DummyData";

export default function StoryReels() {
  return (
    <div className="mb-4 flex gap-3 overflow-x-auto pb-2 no-scrollbar">
      {storiesData.map((story) => (
        <div key={story.id} className="min-w-[110px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="relative h-40">
            <img src={story.storyImg} alt={story.name} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-white">
                <img src={story.userImg} alt={story.name} className="h-full w-full rounded-full object-cover" />
              </div>
            </div>
          </div>
          <div className="bg-white px-2 py-2 text-center text-xs font-semibold text-[#050505]">{story.name}</div>
        </div>
      ))}
    </div>
  );
}
