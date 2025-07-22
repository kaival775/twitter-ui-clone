// src/App.jsx
import { useState } from "react";
import "./App.css";
import Left from "./components/LeftContainer/Left";
import Mid from "./components/MiddleContainer/Mid";
import Right from "./components/RightContainer/Right";
import { PostProvider } from "./components/context/PostContext";

function App() {
  return (
 <>
      <PostProvider>
        <div className="bg-zinc-950 w-full h-screen flex text-white overflow-hidden">
          <div className="fixed h-screen">
            <Left />
          </div>
          <div className="ml-16 md:ml-[275px] flex-1 overflow-y-auto h-screen">
            <div className="flex w-auto">
              <Mid />
              <Right />
            </div>
          </div>
        </div>
      </PostProvider>
    </>
  );
}

export default App;
