import React from "react";
import { Link } from "react-router-dom";
import Styles from "../styles/SideNav.module.css";
export default function SideNav() {
  return (
    <>
      <div class={Styles.SideNav}>
        <ul class="nav flex-column">
          <li class="nav-item">
            <div class={Styles.youtubeIcon}>
              <i class="fa fa-youtube-play"></i>
            </div>

            <p class={Styles.heading}>YouTube</p>
          </li>
          <li class={Styles.Content}>
            <i class="fa fa-home"></i> <Link to="/">Home</Link>
          </li>
          <li class={Styles.Content}>
            <i class="material-icons">explore</i>
            <Link to="/explore">Explore</Link>
          </li>
          <li class={Styles.Content}>
            <i class="fa fa-home"></i> <Link to="/shorts">Shorts</Link>
          </li>
          <li class={Styles.Content}>
            <i class="fa fa-home"></i>{" "}
            <Link to="/subscripitions"> Subscripitions</Link>
          </li>
        </ul>
      </div>

      <div class={Styles.SideNav}>
        <ul class="nav flex-column">
          <li class={Styles.Content}>
            <i class="fa fa-home"></i>
            <Link to="#">Library</Link>
          </li>
          <li class={Styles.Content}>
            <i class="fa fa-home"></i>
            <Link to="#">History</Link>
          </li>
          <li class={Styles.Content}>
            <i class="fa fa-home"></i>
            <Link to="#">Your Video</Link>
          </li>
          <li class={Styles.Content}>
            <i class="fa fa-home"></i>
            <Link to="#"> whatch Later</Link>
          </li>

          <li class={Styles.Content}>
            <i class="fa fa-home"></i>
            <Link to="#"> Liked Video</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
