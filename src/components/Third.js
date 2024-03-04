import "./third.css"
let Third=(props)=>{
    return(
      
        <div className="cloth" >
            {
                props.cloth.map((item)=><img src={item.cloth}/>)
            }
            <div className="active">Gymshark Activewear</div>
            <div className="Escape">
                
                Escape the Ordinary</div>

     <button className="button">Shop for Men</button>
<button className="button">Shop for Women</button>
        </div>
       
    )
}
export default Third