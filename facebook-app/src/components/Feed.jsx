import StoryReels from "./StoryReels";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";

export default function Feed({ posts, onAddPost }) {
  return (
    <main className="mx-auto w-full max-w-[680px] px-2 py-4 sm:px-4">
      <StoryReels />
      <CreatePost onAddPost={onAddPost} />

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
