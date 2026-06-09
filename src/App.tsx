import {Routes, Route} from "react-router-dom"

import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import Settings from "./pages/Settings.tsx"

export default function App() {
  return ( 
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Routes>
  )
}