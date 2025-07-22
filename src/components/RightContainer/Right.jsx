import React from "react";
import { useState } from "react";
const Right = () => {
  const [Trends, setTrends] = useState({
    CBSE: "1.4M posts",
    "Bharat Jodo Yatra": "1.4M posts",
    RajyaSabha: "1441 posts",
    Population: "1000 posts",
  });

  const [Follow, setFollow] = useState({
    "Elon musk": "@elon123",
    "Bill Gates": "@billgates",
    "Jeff Bezos": "@jeffbezos",
    "Sundar Pichai": "@sundarpichai",
  });

  const [Pfp, setPfp] = useState({
    "Elon musk": "https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg",
    "Bill Gates": "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg",
    "Jeff Bezos": "https://uploads.nationaljeweler.com/uploads/0fd2788e3f3dd3cadfda8a40143ac7d2.jpg",
    "Sundar Pichai": "https://s7d1.scene7.com/is/image/wbcollab/sundar_pichai_google_ceo-1?qlt=90&fmt=webp&resMode=sharp2",
  });



  return (
    <div className="min-h-screen w-full max-w-[350px] hidden md:block">
      <div className="searchbar my-3 mx-5 relative">
        <span
          className="material-symbols-outlined absolute left-3 top-2 text-gray-500"
          style={{ fontSize: "18px" }}
        >
          search
        </span>
        <input
          type="search"
          placeholder="Search"
          className="rounded-3xl text-sm pl-10 pr-4 py-2 border-[1px] border-zinc-800 w-full outline-blue-400 placeholder:text-gray-500"
        />
      </div>
      <div className="premiumbox m-5 border-zinc-800 border-[1px] rounded-2xl p-3">
        <h2 className="font-bold mb-2">Subscribe to Premium</h2>
        <p className="tracking-tighter text-gray-300">
          Subscribe to unlock new features and if eligible, receive a share of
          revenue.
        </p>
        <button className="bg-sky-500 text-white font-semibold text-sm rounded-3xl px-5 py-1 mt-2">
          Subscribe
        </button>
      </div>
      <div className="trending border-[1px] border-zinc-800 rounded-2xl m-5">
        <h2 className="font-bold text-xl mb-2 p-3">What's Happening?</h2>
        <div className="trends w-full">
          {Object.keys(Trends).map((key) => (
            <div className="trend px-2 hover:bg-zinc-900 w-full cursor-pointer">
              <p className="text-[12px] text-zinc-500">Trending in India</p>
              <div className="flex justify-between items-center">
                <p className="inline ">{key}</p>
                <span className="material-symbols-outlined cursor-pointer">
                  more_horiz
                </span>
              </div>
              <p className="text-[12px] text-zinc-500 mb-1">{Trends[key]}</p>
            </div>
          ))}
          <div className="p-2 flex text-sm font-light text-sky-500 justify-start items-center cursor-pointer">
            Show more
          </div>
        </div>
      </div>
      <div className="follow border-[1px] border-zinc-800 rounded-2xl m-5">
        <h2 className="font-bold text-xl mb-2 p-3">Who to follow</h2>
        <div className="follows w-full">
          {Object.keys(Follow).map((key) => (
            <div className="follow px-2 hover:bg-zinc-900 w-full cursor-pointer">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src={Pfp[key]} className="w-10 h-10 rounded-full object-cover " />
                  <div className="ml-2">
                    <p className="font-bold">{key}</p>
                    <p className="text-[12px] text-zinc-500">{Follow[key]}</p>
                  </div>
                </div>              
                <button className="bg-white text-black font-semibold text-sm rounded-3xl px-5 py-1">
                  Follow
                </button>
         </div>
            </div>
          ))}
          <div className="p-2 flex text-sm font-light text-sky-500 justify-start items-center cursor-pointer">
            Show more
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
