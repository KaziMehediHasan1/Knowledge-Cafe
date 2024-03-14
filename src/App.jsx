import Header from "./components/Header/Header"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"


function App() {

  return (
    <div>
      <Header></Header>
      <main className="md:flex container mx-auto mt-4">
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      
      </main>
    </div>
  )
}

export default App
