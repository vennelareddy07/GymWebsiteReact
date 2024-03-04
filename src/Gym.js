import './gym.css'
let Gym=(props)=>{
    return (
        <div className="backimg">
           <img  className="gymimg"  src={props.data.back}  />
           <div className="tranform">Transform Your Life With<br/>Gymshark</div>
         
        </div>
    )
}
export default Gym