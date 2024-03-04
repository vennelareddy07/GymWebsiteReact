import "../components/womenCart.css"
let Women=(props)=>{
  let   WomenClothesCart=props.WomenClothesCart
    return(
        <div className="womenCart">
            <div className="forher">For Her </div>
                <div className="sec1">
                   {
                    WomenClothesCart.map((item,index)=>
                    {
                        return(
                            <div className="itemsSec">
                                <img src={item.cl}/>
                                <div className="tp">{item.Title}</div>
                                <div className="tp">Price : ${item.Price}</div>
                                <button onClick={()=>console.log(index, item)}>Add to Cart</button>
                            </div>
                        )
                    })
                   }
                </div>
               
        </div>
    )
}

export default Women