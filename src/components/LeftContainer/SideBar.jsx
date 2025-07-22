import React from 'react'
import { useState } from 'react'
import { usePostContext } from "../context/PostContext";

const SideBar = ({onPostClick}) => {
    const [Options, setOptions] = useState({
      Home: "home",
      Explore: "explore",
      Notifications: "notifications",
      Messages: "mail",
      Bookmarks: "bookmark",
      Communities: "group",
      "Verified Orgs": "electric_bolt",
      Profile: "person",
      More: "pending",
    });

    const { focusTextarea } = usePostContext();
  return (
    <>
      <div className="sidebar flex flex-col gap-2 justify-start mt-5">
        {Object.keys(Options).map((key) => (
          <div className="sidebar-option " key={key}>
            <a
              className=" outline-none active:font-bold cursor-pointer flex flex-row text-xl justify-center items-start gap-5 rounded-3xl w-fit pl-1 p-2 hover:bg-zinc-900 "
              href={`/${key}`}
            >
              <div className="sidebar-logos">
                <span className="material-symbols-outlined">
                  {Options[key]}
                </span>
              </div>
              <div className="sidebar-names hidden md:block">{key}</div>
            </a>
          </div>
        ))}
      </div>
      <div className="sidebarfooter w-full">
        <div className="postBtn flex justify-center items-center md:hidden">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
               focusTextarea();
            }}
            className="bg-white w-8 flex justify-center items-center rounded-3xl text-sm text-black p-[2px] mt-5"
          >
            <span className="material-symbols-outlined">add</span>
          </a>
        </div>

        <div className="postBtn hidden md:w-full md:block">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              focusTextarea();
            }}
            className="bg-white rounded-3xl font-bold text-l text-black px-20 py-3 mt-5 inline-block"
          >
            Post
          </a>
        </div>
        <div className="user flex flex-row mt-10 gap-3 items-center">
          <div className="userlogo flex w-full justify-center items-center">
            <img
              className="rounded-[50%] w-9 p-1 md:w-10"
              src="https://pbs.twimg.com/profile_images/1614570387144323077/IoK5i5fd_x96.jpg"
              alt="userlogo"
            />
          </div>
          <div className="usernames hidden md:block">
            <p className="font-semibold">@kaivalya_775</p>
            <p className="font-light text-zinc-600">@kaival4</p>
          </div>
          <div className="usermore hidden md:block md:w-1/3 md:pr-4">
            <span className="material-symbols-outlined font-light">
              more_horiz
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar