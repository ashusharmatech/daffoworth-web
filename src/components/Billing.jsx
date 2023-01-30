import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import ProductSimple from "./ProductSimple";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
{/*        
      {Array(5).fill(1).map((el, i) =>

        <ProductSimple/>
        
        )} */}

    </div>

    <div className={layout.sectionInfo}>
      
    </div>
  </section>
);

export default Billing;