import "../components/program.css"
import { Link } from "react-router-dom"
let Program=()=>{
    return(
        <div className="pgmbody">
            <div className="ult">The Ultimate Workout Plans </div>
            <div className="card">
                <div className="card1"></div>
                <div className="card2"></div>
            </div>
            <div className="wrk">
                <Link to="/workoutmen" className="wrkfor"  onMouseOver={(e)=>e.target.style.color="yellow"}  onMouseOut={(e)=>e.target.style.color="white"}>Workouts for Men</Link>
                <Link to="/workoutwomen" className="wrkfor" onMouseOver={(e)=>e.target.style.color="yellow"}  onMouseOut={(e)=>e.target.style.color="white"}>Workouts for Women</Link>
            </div>
        </div>
    )
}
export default Program