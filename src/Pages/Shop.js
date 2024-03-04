
import { useState } from "react"
import { Link } from "react-router-dom"

import Men from "../components/Men"
import Women from "../components/Women"
// import Cart from "../components/Cart"


let Shop=()=>{
    let [menCart, setmenCart] = useState([])

    let menClothesCart=[{"id":1,"cl":"https://cdn.shopify.com/s/files/1/1367/5201/files/GfxCollegiateHoodiePebbleGrey-ACIDWASHSMALLBALLA4A4G-GCB4137_384x.jpg?v=1684919195","Title":"COLLEGIATE HOODIE",'Price':30},
{"id":2, "cl":"https://cdn.shopify.com/s/files/1/1367/5201/files/GfxCollegiateOversizedSsT-ShirtWhiteA4A4D-WBBM_384x.jpg?v=1684919198","Title":"COLLEGIATE OVERSIZED T-SHIRT",'Price':30},
{"id":3, "cl":"https://cdn.shopify.com/s/files/1/1367/5201/files/GfxCoreRegularSsT-ShirtDenimBlue-A4A3X-UBZ0.208_1920x.jpg?v=1684919199","Title":"CORE T-SHIRT",'Price':30},
{"id":4, "cl":"https://cdn.shopify.com/s/files/1/1367/5201/files/GfxCollegiateHoodieBlack-ACIDWASHSMALLBALLA4A4G-BB7Q151_1920x.jpg?v=1684919195","Title":"COLLEGIATE HOODIE",'Price':30},
{"id":5, "cl":"https://cdn.shopify.com/s/files/1/1367/5201/files/GfxCollegiateOversizedSsT-ShirtLightGreyCoreMarlA4A4D-GBCN_1920x.jpg?v=1684919197","Title":"COLLEGIATE OVERSIZED T-SHIRT",'Price':30},
{"id":6, "cl":"https://cdn.shopify.com/s/files/1/1367/5201/products/SportLsT-ShirtBlack-BlackMarlA2A7L-BBQF-0021.2_1920x.jpg?v=1683124926","Title":"SPORT LONG SLEEVE T-SHIRT",'Price':30},
{"id":7, "cl":"https://cdn.shopify.com/s/files/1/1367/5201/files/RaisetheBarHoodieGSBlackA4A7C-BB2J-1341_26210086-31fe-4ea5-a152-3dd94e68a87a_384x.jpg?v=1696606402","Title":"SPORT SEAMLESS TANK",'Price':30},
{"id":8, "cl":"https://cdn.shopify.com/s/files/1/1367/5201/products/SportSeamlessTankBlack-SilhouetteGreyA2A8S-BBMW-0579_828x.jpg?v=1665513912","Title":"SPORT SEAMLESS TANK",'Price':30}]



let WomenClothesCart=[{"cl":"https://cdn.shopify.com/s/files/1/1367/5201/products/VitalSeamlessHighNeckLsCropTopBlackMarlB3A8I-BBF323.VitalSeamlessHighNeckLsCropTopBlackMarlB3A8I-BBF3_384x.jpg?v=1660210264","Title":"COLLEGIATE HOODIE",'Price':30},
{"cl":"https://cdn.shopify.com/s/files/1/1367/5201/products/BaselayerC_SSsTopWhiteB1A9K.A_ZH_ZH_6de9571d-ab13-4dcd-961a-0a3bd0020907_384x.jpg?v=1652177572","Title":"COLLEGIATE OVERSIZED T-SHIRT",'Price':30},
{"cl":"https://cdn.shopify.com/s/files/1/1367/5201/files/TRAININGCROPHOODIE-BlackB3A6G-BBBB-1786.532_384x.jpg?v=1687365731","Title":"CORE T-SHIRT",'Price':30},
{"cl":"https://cdn.shopify.com/s/files/1/1367/5201/files/HoltTexturedFleece-Black-B5A9B-BBBB-1213_384x.jpg?v=1695117258","Title":"COLLEGIATE HOODIE",'Price':30},
{"cl":"https://cdn.shopify.com/s/files/1/1367/5201/files/VitalSeamless2.0CropTopGSCobaltPurpleMarlB1A3D-PBQG-0554_384x.jpg?v=1696606379","Title":"COLLEGIATE OVERSIZED T-SHIRT",'Price':30},
{"cl":"https://cdn.shopify.com/s/files/1/1367/5201/files/SweatSeamlessLsCropTopBlackB3A6H-BBBB1_384x.jpg?v=1697797672","Title":"SPORT LONG SLEEVE T-SHIRT",'Price':30},
{"cl":"https://cdn.shopify.com/s/files/1/1367/5201/products/LegacyLsTopLakesideBlue-B3A9L-UBPF.1440.231-Edit_6b3ffafe-bc11-4250-be79-e3379f2a6f72_384x.jpg?v=1679304757","Title":"SPORT SEAMLESS TANK",'Price':30},
{"cl":"https://cdn.shopify.com/s/files/1/1367/5201/products/AdaptAnimalOversizedSsTopENG-L-A0115UrbanGrey-BlackB4A7G-GBY4256_cba74829-7c8c-4a88-b193-cff692c4760a_384x.jpg?v=1679990776","Title":"SPORT SEAMLESS TANK",'Price':30}]





// let add=(item)=>{
//     let cartObj=menCart.filter((item2)=>item2.id==item.id)
//     console.log(cartObj)
//     // console.log(cartObj.length)
//     if (cartObj.length==0){
//     setmenCart([...menCart,{...item,"qty":1,"Total":item.price}])
//     console.log(menCart)
//     // setTotal((prev)=>prev+item.price)
//   }
//   else{
//     alert("Already Added")
//   }
// }

    
    
    return(
        <div>
            {/* <Link to="/cart">Cart</Link> */}
            <Men menClothesCart={menClothesCart}  />
            {/* <Men menClothesCart={menClothesCart}  add={add} /> */}
            <Women WomenClothesCart={WomenClothesCart}    />
            {/* <Cart menCart={menCart}/> */}
        </div>
    )
}
export default Shop