import React from 'react'

const FollowingContainer = () => {
  return (
    <>
      <div className="following-content p-4">
        <div className="flex flex-col items-center justify-center py-8">
          <span className="material-symbols-outlined text-4xl mb-2">group</span>
          <h2 className="text-2xl font-bold mb-1">Welcome to your timeline!</h2>
          <p className="text-gray-500 text-center max-w-md mb-4">
            This is where you'll see posts from accounts that you follow. You
            can like, repost, reply, or take more actions on each post.
          </p>
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full px-4 py-2">
            Find accounts to follow
          </button>
        </div>
      </div>
    </>
  );
}

export default FollowingContainer