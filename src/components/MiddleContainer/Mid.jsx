import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import PostContainer from './PostContainer';
import FollowingContainer from './FollowingContainer';
import WritePost from './WritePost';

const Mid = () => {

  const [activeTab, setActiveTab] = useState('forYou'); 
 
  return (
    <div className="border-x-[1px] border-zinc-800 flex-grow min-h-screen w-full md:max-w-[600px]">
      <div className="header border-b-[1px] border-zinc-800 flex flex-row w-full">
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("forYou");
          }}
          className={`font-semibold text-sm w-full flex justify-center cursor-pointer hover:bg-zinc-900 py-3 outline-none ${
            activeTab === "forYou" ? "border-b-4 border-sky-500" : ""
          }`}
        >
          For You
        </a>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("following");
          }}
          className={`font-semibold text-sm w-full flex justify-center cursor-pointer hover:bg-zinc-900 py-3 outline-none ${
            activeTab === "following" ? "border-b-4 border-sky-500" : ""
          }`}
        >
          Following
        </a>
      </div>
      <WritePost />
      {activeTab === "forYou" ? (
        <PostContainer
        />
      ) : (
        <FollowingContainer />
      )}
    </div>
  );} 

export default Mid