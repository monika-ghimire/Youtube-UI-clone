import React from "react";
import LeftTopNav from "../Components/LeftTopNav";
import SideNav from "../Components/SideNav";
import styles from "../styles/shorts.module.css";
import shorts from "../Components/shorts.png";
export default function Shorts() {
  return (
    <>
      <div class="row ">
        <div class="col-2">
          <SideNav />
        </div>
        <div class="col-10">
          <LeftTopNav />
          <div class={styles.shortsHolder}>
            <div>
              <img src={shorts} />
            </div>
            <div class={styles.iconsHolder}>
            <i class="fa fa-thumbs-up"></i> <p>1223k</p>
            <i class="fa fa-thumbs-down"></i> <p>3k</p>
            <i class="fa fa-download"></i> <p>769</p>      
            <i class="fa fa-comments-o"></i>  <p>124k</p>
            <i class="fa fa-share-alt"></i>  <p>20k</p>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}
