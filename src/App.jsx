import { createContext,useState } from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import './App.css'
import Form from './components/Blog/Form'
import BlogList from './components/Blog/BlogList'
import BlogDetails from './components/Blog/BlogDetails'
import Home from './components/Blog/Home'
import NotFound from './components/Blog/NotFound'
export const BlogComponent = createContext()
function App() {
  const [blog,setBlog] = useState([])

  return (
    <>
    <BrowserRouter>
    <BlogComponent.Provider value={{blog,setBlog}}>
    <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="details/:id" element = {<BlogDetails/>}/>
    <Route path="*" element = {<NotFound/>}/>
    {/* <Route path="details/*" element = {<NotFound/>}/> */}
    </Routes>
    </BlogComponent.Provider>
    </BrowserRouter>
      
    </>
  )
}

export default App
