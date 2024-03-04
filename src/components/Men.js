import { useState } from "react"
import "../components/menCart.css"

   
// let [cart,setCart]=useState([])
// let [total,setTotal]=useState(0)


// let add=(item)=>{
//     let cartObj=cart.filter((item2)=>item2.id==item.id)
//     // console.log(cartObj)
//     // console.log(cartObj.length)
//     if (cartObj.length==0){
//     setCart([...cart,{...item,"qty":1,"Total":item.price}])
//     // console.log(cart)
//     // setTotal((prev)=>prev+item.price)
//   }
//   else{
//     alert("Already Added")
//   }
// }
let Men=(props)=>{
    let menClothesCart=props.menClothesCart
return(
        <div className="menCart">
            <div className="forhim">For Him </div>
                <div className="sec1">
                   {
                   menClothesCart.map((item,index)=>
                    {
                        return(
                            <div className="itemsSec">
                                <img src={item.cl}/>
                                <div className="tp">{item.Title}</div>
                                <div className="tp">Price : ${item.Price}</div>
                                <button onClick={()=>{props.add(item)}} >Add to Cart</button>
                            </div>
                        )
                    })
                   }
                </div>
                
               
        </div>
    )
}

export default Men