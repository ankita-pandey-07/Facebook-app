import { useState } from "react";
import { MoreHorizontal, MessageSquare, Share2, ThumbsUp } from "lucide-react";

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes ?? 0);

  const handleLike = () => {
    setLiked((current) => !current);
    setLikeCount((current) => (liked ? current - 1 : current + 1));
  };

  return (
    <article className="mb-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img src={post.author.avatar} alt={post.author.name} className="h-11 w-11 rounded-full object-cover" />
          <div>
            <h3 className="text-sm font-semibold text-[#050505]">{post.author.name}</h3>
            <p className="text-xs text-[#65676b]">{post.timestamp}</p>
          </div>
        </div>

        <button className="flex h-9 w-9 items-center justify-center rounded-full text-[#65676b] transition hover:bg-gray-100" aria-label="More options">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <p className="px-4 pb-3 text-sm leading-6 text-[#050505]">{post.content}</p>

      {post.image && (
        <div className="border-t border-gray-100">
          <img src={post.image} alt="Post content" className="h-auto w-full object-cover" />
        </div>
      )}

      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2 text-xs text-[#65676b]">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1877f2] text-white">
            <ThumbsUp size={10} />
          </span>
          <span>{likeCount}</span>
        </div>

        <div className="flex items-center gap-3">
          <span>{post.comments} comments</span>
          <span>{post.shares} shares</span>
        </div>
      </div>

      <div className="flex gap-2 px-2 py-2">
        <button
          type="button"
          onClick={handleLike}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
            liked ? "bg-blue-50 text-[#1877f2]" : "text-[#65676b] hover:bg-gray-100"
          }`}
        >
          <ThumbsUp size={18} className={liked ? "fill-current" : ""} />
          <span>Like</span>
        </button>

        <button type="button" className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-[#65676b] transition hover:bg-gray-100">
          <MessageSquare size={18} />
          <span>Comment</span>
        </button>

        <button type="button" className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-[#65676b] transition hover:bg-gray-100">
          <Share2 size={18} />
          <span>Share</span>
        </button>
      </div>
    </article>
  );
}
