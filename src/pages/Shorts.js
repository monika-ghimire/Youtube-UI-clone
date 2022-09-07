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
            <div>
            <p>Likes</p>
              <p>Dislikes</p>
              <p>Dowload</p>
              <p>comment</p>
              <p>share</p>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}
