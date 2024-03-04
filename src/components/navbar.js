
import "./navbar.css"
import { Link } from "react-router-dom"
let Navbar=(props)=>{
   
    return (
            <div className="navbar">
                        <img className="logo" src={props.data.logo} />
                        <div className="nav2">
                        <Link to="/"             className="navdata" onMouseOver={(e)=>e.target.style.color="yellow"}  onMouseOut={(e)=>e.target.style.color="white"} >Home</Link>
                        <Link to="/activewear"   className="navdata" onMouseOver={(e)=>e.target.style.color="yellow"}  onMouseOut={(e)=>e.target.style.color="white"}  >Activewear</Link>
                        <Link to="/program"      className="navdata" onMouseOver={(e)=>e.target.style.color="yellow"}  onMouseOut={(e)=>e.target.style.color="white"}  >Programs</Link>
                      
                        <Link to="/nutrition"    className="navdata" onMouseOver={(e)=>e.target.style.color="yellow"}  onMouseOut={(e)=>e.target.style.color="white"}  >Nutrition</Link>
                        </div>
             </div>  
    )
}
export default Navbar