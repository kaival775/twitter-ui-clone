import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { usePostContext } from "../context/PostContext";
const PostContainer = () => {
    
  const {Posts, setPosts} = usePostContext();

  useEffect(() => {
    setPosts(Posts)
  }, [Posts])
  
  return (
    <>
      <div className="Posts w-full">
        {[...Posts].reverse().map((post) => (
          <div className="post  border-b-[1px] border-zinc-800 w-full p-3">
            <div className="postHead flex gap-2 flex-row items-center">
              <div className="pfp">
                <img
                  src={post.userImg}
                  className="w-13 h-13 object-cover rounded-[50%] "
                  alt=""
                />
              </div>
              <div className="username flex flex-row items-center gap-1 flex-2/3">
                <h2 className="font-semibold inline-block">{post.name}</h2>
                {post.verified && (
                  <span className="material-symbols-outlined text-[12px] text-sky-500">
                    verified
                  </span>
                )}
                <span className="text-sm font-light text-zinc-500">
                  @{post.username}
                </span>
                <span className="text-zinc-400">&#903;</span>
                <span className="text-zinc-500 text-sm">{post.timestamp}</span>
              </div>
            </div>
            <div className="mt-3 w-full">
              <p className='text-sm'>{post.text}</p>
              <div className="postImg p-2">
                {post.image && (
                  <img
                    src={post.image}
                    className="w-full object-cover rounded-[20px] border-[1px] border-zinc-800"
                    alt="postimage"
                  />
                )}
              </div>
            </div>
            <div className="postFooter flex flex-row justify-evenly items-center mt-2 w-full text-sm">
              <div className="flex items-center group">
                <div className="pl-2 pr-1 md:p-2 rounded-full group-hover:bg-sky-500/10 group-hover:text-sky-500 transition-colors">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18 }}
                  >
                    chat_bubble_outline
                  </span>
                </div>
                <span className="ml-1  text-zinc-500 group-hover:text-sky-500">
                  {post.comments}
                </span>
              </div>

              <div className="flex items-center group">
                <div className="pl-2 pr-1 md:p-2  rounded-full group-hover:bg-green-500/10 group-hover:text-green-500 transition-colors">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18 }}
                  >
                    repeat
                  </span>
                </div>
                <span className="md:ml-1 text-zinc-500 group-hover:text-green-500">
                  {post.reposts}
                </span>
              </div>

              <div className="flex items-center group">
                <div className="pl-2 pr-1 md:p-2 rounded-full group-hover:bg-pink-500/10 group-hover:text-pink-500 transition-colors">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18 }}
                  >
                    favorite
                  </span>
                </div>
                <span className="md:ml-1 text-zinc-500 group-hover:text-pink-500">
                  {post.likes}
                </span>
              </div>

              <div className="flex items-center group">
                <div className="pl-2 pr-1 md:p-2  rounded-full group-hover:bg-sky-500/10 group-hover:text-sky-500 transition-colors">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18 }}
                  >
                    bar_chart
                  </span>
                </div>
                <span className="md:ml-1 text-zinc-500 group-hover:text-sky-500">
                  {post.views}
                </span>
              </div>

              <div className="flex items-center">
                <div className="p-2 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition-colors">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18 }}
                  >
                    upload
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostContainer