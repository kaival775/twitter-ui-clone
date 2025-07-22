import React, { createContext, useContext, useState, useRef } from "react";

// Create a context
const PostContext = createContext();

// Create a provider component
export function PostProvider({ children }) {
  const [shouldFocusTextarea, setShouldFocusTextarea] = useState(false);
  const textareaRef = useRef(null);

  // Function to focus the textarea
  const focusTextarea = () => {
    setShouldFocusTextarea(true);
  };

  const [Posts, setPosts] = useState([
    {
      id: 1,
      name: "Elon Musk",
      username: "elonmusk",
      userImg:
        "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg",
      verified: true,
      text: "Just had an amazing conversation with the SpaceX team about our Mars mission plans!",
      timestamp: "2h",
      image:
        "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202409/66dec1e8417a8-spacexs-starship-to-make-first-landing-on-mars-with-humans-in-2028--says-elon-musk-093742815-16x9.jpg?size=1200:675",
      likes: 45231,
      comments: 3210,
      reposts: 5932,
      views: "5.2M",
    },
    {
      id: 2,
      name: "Bill Gates",
      username: "BillGates",
      userImg:
        "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg",
      verified: true,
      text: "Climate change remains one of our biggest challenges. Here's how innovation can help us reach net zero emissions.",
      timestamp: "5h",
      image: "",
      likes: 32104,
      comments: 1893,
      reposts: 4210,
      views: "3.8M",
    },
    {
      id: 3,
      name: "NASA",
      username: "NASA",
      userImg:
        "https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg",
      verified: true,
      text: "Webb telescope captures stunning new images of distant galaxies, revealing secrets of the early universe.",
      timestamp: "1d",
      image:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/12/18/USAT/77076232007-amassiveclusterisbornn-79-53482934970-o.jpg?width=519&height=610&fit=crop&format=pjpg&auto=webp",
      likes: 89432,
      comments: 5321,
      reposts: 12543,
      views: "7.1M",
    },
    {
      id: 4,
      name: "Sundar Pichai",
      username: "sundarpichai",
      userImg:
        "https://s7d1.scene7.com/is/image/wbcollab/sundar_pichai_google_ceo-1?qlt=90&fmt=webp&resMode=sharp2",
      verified: true,
      text: "Excited to announce our latest AI advancements at Google I/O today. The future of helpful technology is here.",
      timestamp: "2d",
      image: "",
      likes: 28765,
      comments: 2134,
      reposts: 3987,
      views: "4.5M",
    },
    {
      id: 5,
      name: "Tim Cook",
      username: "tim_cook",
      userImg:
        "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
      verified: true,
      text: "Today we're introducing the most powerful iPhone yet. Incredible camera, all-day battery life, and groundbreaking features.",
      timestamp: "3d",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb4GE1aOBPGQYUl0neFx_THl9XT45wfSdXGQ&s",
      likes: 56789,
      comments: 4321,
      reposts: 7654,
      views: "6.3M",
    },
  ]);

  // Values to be provided to consumers
  const value = {
    textareaRef,
    shouldFocusTextarea,
    setShouldFocusTextarea,
    focusTextarea,
    Posts,
    setPosts,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

// Custom hook to use the context
export function usePostContext() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
}
