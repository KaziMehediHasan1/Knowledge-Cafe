import Header from "./components/Header/Header"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import { useState } from "react"


function App() {
  const [bookmarks,setBookmarks]=useState([]);

  const handleBookmarks = blog =>{
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  }
  return (
    <div>
      <Header></Header>
      <main className="md:flex container mx-auto mt-4">
      <Blogs handleBookmarks={ handleBookmarks}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      
      </main>
    </div>
  )
}

export default App
