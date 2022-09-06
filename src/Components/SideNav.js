import React from 'react'
import Styles from '../styles/SideNav.module.css'
export default function SideNav() {
  return (
    <>
    <div class={Styles.SideNav}>

    <ul class="nav flex-column">
    <li class="nav-item">
        <div class={Styles.youtubeIcon}><i class="fa fa-youtube-play"></i></div>
    
  < p class={Styles.heading}>YouTube</p>
  </li>
  <li class={Styles.Content}>
  <i class="fa fa-home"></i> <a  href="/app">Home</a>
  </li>
  <li class={Styles.Content}>
  <i class="material-icons">explore</i><a href="/explore">Explore</a>
  </li>
  <li class={Styles.Content}>
  <i class="fa fa-home"></i>  <a  href="#">Shorts</a>
  </li>
  <li class={Styles.Content}>
  <i class="fa fa-home"></i>  <a  href="#"> Subscripitions</a>
  </li>
</ul>
    </div>


 <div class={Styles.SideNav}>

<ul class="nav flex-column">

<li class={Styles.Content}>
<i class="fa fa-home"></i><a  href="#">Library</a>
</li>
<li class={Styles.Content}>
<i class="fa fa-home"></i><a href="#">History</a>
</li>
<li class={Styles.Content}>
<i class="fa fa-home"></i><a  href="#">Your Video</a>
</li>
<li class={Styles.Content}>
<i class="fa fa-home"></i><a  href="#"> whatch Later</a>
</li>

<li class={Styles.Content}>
<i class="fa fa-home"></i><a  href="#"> Liked Video</a>
</li>

</ul>
</div>
   
    </>
  )
}
