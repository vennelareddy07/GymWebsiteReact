
import { Link } from "react-router-dom"
import Third from "./Third"
import './sddiv.css'
let SecondDiv=()=>{
    let back=[{"back":"https://i.pinimg.com/originals/f1/db/bc/f1dbbc52a0f2b879860216f34b93f167.jpg"}]
    let cd=[{"weight":"https://media.istockphoto.com/id/838386570/photo/strong-man-doing-deadlift-training-in-gym.jpg?s=612x612&w=0&k=20&c=ok5sL3Fr8dos-fthuxQkjTZsIRN9mu0bhNE4RODC9CI="},{"crossfit":"https://www.physioatlas.com/wp-content/uploads/crossfit-750x500.jpg"},
{"Nutrition":"https://www.healthifyme.com/blog/wp-content/uploads/2020/01/gym-diet-cover-1.jpg"}]
    return(
        <div>
            <div className="sddiv">
              {
                back.map((item)=><img className="bk2" src={item.back}/>)
              }
<div className="getstart">Get Started</div>
                
                <div className="pg">
              
                 <Link to="/program"> <img src={cd[0].weight}/>  </Link>
                  <Link to="/program"><img src={cd[1].crossfit}/></Link>  
                  <Link to="/nutrition">
                    <img src={cd[2].Nutrition}/>
                    </Link>
               </div>
            <div className="cardName">
                <div className="crdName2" onMouseOver={(e)=>e.target.style.color="yellow"}  onMouseOut={(e)=>e.target.style.color="white"}>Weight Training </div>
                <div className="crdName2" onMouseOver={(e)=>e.target.style.color="yellow"}  onMouseOut={(e)=>e.target.style.color="white"}>Crossfit</div>
                <div className="crdName2" onMouseOver={(e)=>e.target.style.color="yellow"}  onMouseOut={(e)=>e.target.style.color="white"}>Nutrition</div>
            </div>
             
            </div>
        


        </div>
    )
}
export default SecondDiv