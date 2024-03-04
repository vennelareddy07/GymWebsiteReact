import "./fifth.css"
import { Link } from "react-router-dom"
let Fifth=()=>{
    let WomenC=[{"cl1":"https://contents.mediadecathlon.com/p2304242/853b1d9cb0324fca30afed02a9040c5f/p2304242.jpg?format=auto&quality=70&f=300x0"},
{"cl1":"https://cdn.shopify.com/s/files/1/1367/5201/products/RestDayCoreSkaterLongSleeveTopEveningBlueB5A1S-UBZF.756.82_384x.jpg?v=1675701381"},
{"cl1":"https://cdn.shopify.com/s/files/1/1367/5201/files/GfxCollegiateOsHoodieInkTeal-ACIDWASHSMALLBALLB5A4L-TBL3-1325_384x.jpg?v=1684922862"},
{"cl1":"https://contents.mediadecathlon.com/p2403285/k$08dc2e3333aae0ffc8af85f5b71889fe/women-short-sleeved-modern-dancing-flowing-t-shirt-grey-black.jpg?format=auto&quality=70&f=300x0"}]
    return(
       <div className="women">
             <div className="forWomen">Women</div>
            <div className="WomenClothes">
                {/* {
                    WomenC.map((item)=>{
                        return<>
                        <img src={item.cl1}/>
                        <img src={item.cl2}/>
                        <img src={item.cl3}/>
                        <img src={item.cl4}/>
                        </>
                    })
                } */}
                
                      <img src={WomenC[0].cl1}/>
                      <img src={WomenC[1].cl1}/>
                      <img src={WomenC[2].cl1}/>
                      <img src={WomenC[3].cl1}/>

                


            </div>

            <div className="View2">
            <Link to="/activewear"  className="all2">View all</Link>
</div>

       </div>
    )
}
export default Fifth