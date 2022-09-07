import React from "react";
import LeftTopNav from "../Components/LeftTopNav";
import SideNav from "../Components/SideNav";
import styles from '../styles/Explore.module.css';
import trin from '../Components/trin.png'
export default function Explore() {
  let tagList=[
    {
      tag_Name:"Trending",
    },
   {tag_Name:"Music"},
   {tag_Name:"Gaming"},
   {tag_Name:"Sport"},

  ]
  return (
    <>
      <div class="row ">
        <div class="col-2">
          <SideNav />
        </div>
        <div class="col-10">
          <LeftTopNav />
          <div class={styles.Holder}>
          <div  class={styles.containerHolder}>
          {tagList.map((x) => (
            <div class={styles.tagHeading}>
            <i class="fa fa-music"></i>
           <p class={styles.tagheadingName}>{x.tag_Name}</p>
            </div>
           ))}

           

          </div>
          <p class={styles.Trending}>  Trending Videos</p>
         
         <div class={styles.trendingHolder}>
          <img src={trin}/>
          <div>
           <p class={styles.videoTitle}>Title of the video </p> 
            <p>viwes . Time </p>
          </div>
        </div>
        <div class={styles.trendingHolder}>
          <img src={trin}/>
          <div>
           <p class={styles.videoTitle}>Title of the video </p> 
            <p>viwes . Time </p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}
