import React from "react";
import styles from '../styles/NavR.module.css'
export default function LeftTopNav() {
  return (
    <>
      <div class={styles.NavBarHolder}>
        <ul class="nav ">
          
            <form class="d-flex" role="search">
              <input
                
                type="search"
                placeholder="Search"
                aria-label="Search"
                class={styles.searchBar}
              />
              <button class={styles.micSearch}type="submit">
                <i class="fa fa-microphone" ></i>
              </button>
            </form>
          
          <li class={styles.videoAdded}>
            <i class="fa fa-video-camera"></i>
          </li>
          <li  class={styles.bellIcon}>
            <i class="fa fa-bell"></i>
          </li>
          <li >
           <div class={styles.Account}>S</div>
          </li>
        </ul>
      </div>
    </>
  );
}
