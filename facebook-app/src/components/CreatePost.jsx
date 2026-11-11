import { useState } from "react";
import { ImagePlus, Video, Smile } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function CreatePost({ onAddPost }) {
  const { user } = useAuth();
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = content.trim();

    if (!trimmed) return;

    const newPost = {
      id: Date.now(),
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      timestamp: "Just now",
      content: trimmed,
      likes: 0,
      comments: 0,
      shares: 0,
    };

    onAddPost(newPost);
    setContent("");
  };

  return (
    <section className="mb-4 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
      <div className="flex items-center gap-3">
        <img src={user.avatar} alt={user.name} className="h-11 w-11 rounded-full object-cover" />
        <form onSubmit={handleSubmit} className="flex-1">
          <textarea
            rows="2"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder={`What's on your mind, ${user.name.split(" ")[0]}?`}
            className="w-full resize-none rounded-full border border-gray-200 bg-[#f0f2f5] px-4 py-3 text-sm text-[#050505] placeholder:text-[#65676b] focus:border-blue-400 focus:outline-none"
          />

          <div className="mt-3 flex items-center justify-between gap-2 border-t border-gray-100 pt-3">
            <div className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#65676b] transition hover:bg-gray-100">
              <Video className="text-red-500" size={18} />
              <span>Live video</span>
            </div>

            <div className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#65676b] transition hover:bg-gray-100">
              <ImagePlus className="text-green-500" size={18} />
              <span>Photo/video</span>
            </div>

            <div className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#65676b] transition hover:bg-gray-100">
              <Smile className="text-yellow-500" size={18} />
              <span>Feeling</span>
            </div>

            <button
              type="submit"
              className="rounded-lg bg-[#1877f2] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#166fe5] disabled:cursor-not-allowed disabled:bg-blue-300"
              disabled={!content.trim()}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}