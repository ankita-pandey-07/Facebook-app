import { useState } from "react";
import Navbar from "./components/Navbar";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import Feed from "./components/Feed";
import { initialPosts } from "./data/DummyData";

export default function App() {
  const [posts, setPosts] = useState(initialPosts);

  const handleAddPost = (newPost) => {
    setPosts((currentPosts) => [newPost, ...currentPosts]);
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] text-[#050505]">
      <Navbar />

      <div className="mx-auto flex max-w-[1400px] justify-center gap-6 px-3 py-4">
        <SidebarLeft />
        <Feed posts={posts} onAddPost={handleAddPost} />
        <SidebarRight />
      </div>
    </div>
  );
}
