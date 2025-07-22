import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { usePostContext } from "../context/PostContext";

const WritePost = () => {
  const [Public, setPublic] = useState(false);
  const [Typing, setTyping] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const { textareaRef, shouldFocusTextarea, setShouldFocusTextarea, Posts, setPosts} =
    usePostContext();

  useEffect(() => {
   if (shouldFocusTextarea && textareaRef.current) {
     textareaRef.current.focus();
     setShouldFocusTextarea(false);
   }
 }, [shouldFocusTextarea, textareaRef, setShouldFocusTextarea]);

 const handleImageClick = () => {
   fileInputRef.current.click();
 };

 const handleImageChange = (e) => {
   if (e.target.files[0]) {
     setSelectedImage(URL.createObjectURL(e.target.files[0]));
     setTyping(true);
   }
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   const text = textareaRef.current.value.trim();
   setPublic(false);
   console.log(text)
   if (text !== "") {
     const newPost = {
       id: Posts.length + 1,
       name: "XYZ",
       username: "XXXXXXXX",
       userImg:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
       verified: true,
       text: text,
       timestamp: "1min",
       image:selectedImage || "",
       likes: 45231,
       comments: 210,
       reposts: 932,
       views: "1",
     };
     setPosts([...Posts, newPost]);
     textareaRef.current.value = "";
     setTyping(false);
     setSelectedImage(null);
   }
 }; 

  return (
    <>
      <div className="writepost pb-2  border-b-[1px] border-zinc-800">
        <form
          onSubmit={handleSubmit}
          className="flex flex-row gap-3 p-5 items-start"
        >
          <div className="userlogo">
            <img
              className="rounded-[50%] w-10"
              src="https://pbs.twimg.com/profile_images/1614570387144323077/IoK5i5fd_x96.jpg"
              alt="userlogo"
            />
          </div>

          <div className="write w-full flex flex-col ">
            <textarea
              ref={textareaRef}
              onFocus={() => setPublic(true)}
              onSubmit={() => setPublic(false)}
              onInput={() => setTyping(true)}
              className="resize-none bg-transparent outline-none text-xl font-light"
              placeholder="What's happening?"
            ></textarea>
            {/* preview of selectedImage */}
            {selectedImage && (
              <div className="image-preview my-2 relative">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="rounded-2xl max-h-80 w-auto border border-zinc-700"
                />
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="absolute cursor-pointer top-2 right-2 bg-black bg-opacity-70 rounded-full p-1"
                >
                  <span className="material-symbols-outlined text-white">
                    close
                  </span>
                </button>
              </div>
            )}
            <div
              className={`${
                Public ? "block" : "hidden"
              } mb-2 border-b-[1px] border-zinc-800`}
            >
              <button className="text-[12px] font-semibold gap-1 flex justify-center items-center p-[2px] mb-1 hover:rounded-2xl hover:bg-sky-950 text-sky-500">
                <span
                  className="material-symbols-outlined "
                  style={{ fontSize: 15 }}
                >
                  public
                </span>
                Everyone can reply
              </button>
            </div>
            <div className="buttons flex justify-start items-center w-full">
              <div className="icons w-full text-sky-500 flex justify-start items-center gap-3 md:gap-5">
                <input
                  ref={fileInputRef}
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <span
                  onClick={handleImageClick}
                  className="material-symbols-outlined smallicons cursor-pointer hover:bg-sky-500/20 p-1 rounded-full"
                  style={{ fontSize: 18 }}
                >
                  image
                </span>
                <span
                  className="material-symbols-outlined smallicons cursor-pointer"
                  style={{ fontSize: 18 }}
                >
                  gif_box
                </span>
                <span
                  className="material-symbols-outlined smallicons cursor-pointer"
                  style={{ fontSize: 18 }}
                >
                  event_list
                </span>
                <span
                  className="material-symbols-outlined smallicons cursor-pointer"
                  style={{ fontSize: 18 }}
                >
                  mood
                </span>
                <span
                  className="material-symbols-outlined smallicons cursor-pointer"
                  style={{ fontSize: 18 }}
                >
                  calendar_clock
                </span>
                <span
                  className="material-symbols-outlined smallicons cursor-pointer"
                  style={{ fontSize: 18 }}
                >
                  location_on
                </span>
              </div>
              <input
                type="submit"
                value="Post"
                className={`${
                  Typing ? "bg-white" : "bg-zinc-500"
                } rounded-2xl font-semibold text-l text-black px-3 py-1 cursor-pointer`}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default WritePost