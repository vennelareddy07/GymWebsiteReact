import "./forth.css"
import { Link } from "react-router-dom"
let Forth=()=>{
  let  menC=[{"cl1":"https://cdn.shopify.com/s/files/1/1367/5201/files/RestDayT-shirtSilhouette_Grey_Black_SPIRALOPTICWASHA3A8S-GCB2-0880_384x.jpg?v=1684919213"},{
       "cl1":"https://cdn.shopify.com/s/files/1/1367/5201/files/RaisetheBarHoodieGSBlackA4A7C-BB2J-1341_26210086-31fe-4ea5-a152-3dd94e68a87a_384x.jpg?v=1696606402" 
    },{"cl1":"https://cdn.shopify.com/s/files/1/1367/5201/products/BoldReactCrewBlackA2A8E-BBBB1_7222b71d-181e-4c07-9998-94a502287523_384x.jpg?v=1665514333"},{"cl1":"https://cdn.shopify.com/s/files/1/1367/5201/products/CriticalSlimZipUpHoodieBlackA1A1H9.A_ZH_GB_f42848e6-971a-410f-8171-f47c43707623_384x.jpg?v=1664781522"}]
    return(
        <div className="men" >
            <div className="release">New Release</div>
            <div className="forMen">Men</div>
            
            <div className="menClothes">
                {
                    menC.map((item)=>{
                        return<>
                        <img src={item.cl1}/>
                        {/* <img src={item.cl2}/>
                        <img src={item.cl3}/>
                        <img src={item.cl4}/> */}
                        </>
                    })
                }

            </div>
<div className="View">
<Link to="/activewear"  className="all">View all</Link>
</div>

        </div>
    )
}
export default Forth