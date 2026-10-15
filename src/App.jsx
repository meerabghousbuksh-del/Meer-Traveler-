import { Routes, Route } from 'react-router-dom'  
import Navbar from './component/navbar'
import Home from './component/pages/home'
import CityDetail from './component/pages/CityDetail'
import Explore from './component/pages/Explore'
import Saved from './component/pages/saved'
import Planner from './component/pages/Planner'
import Footer from './component/Footer'
 import './index.css';
 
function App() {  
  
return (  
  <>
  <Navbar/>
  
<Routes>  
{/* path = browser URL, element = jo page dikhana hai */}  
<Route path="/" element={<Home />} />  
<Route path="/city/:cityName" element={<CityDetail />} />
<Route path="/Explore" element={<Explore />} />  
<Route path='/Planner' element={<Planner/>}/>
<Route path='Saved' element={<Saved/>}/>
</Routes>
 <Footer/>  
</>
)

}  
export default App 