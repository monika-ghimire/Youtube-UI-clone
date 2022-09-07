import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/Home.module.css'
import All from '../tagpages/All'
export default function ContentNav() {
 let   tagList=[
        {tagName:"All",link:All},
        {tagName:"Game",link:All},
        {tagName:"Songs",link:All},
        {tagName:"Flims",link:All},
        {tagName:"Funny ",link:All},
        {tagName:"Drama",link:All},
        {tagName:"Horror",link:All},
        {tagName:"cartoon",link:All},
        {tagName:"nepali",link:All},
        {tagName:"Dance",link:All},
        
    ]
  return (
   <>
   <div class={styles.container}>
   
  <div class="row">
  {tagList.map((x) => (
    <div class='col-1 '>
        <div class={styles.Topics}>
        <Link  to={x.link}>{x.tagName} </Link>
        </div>
     
    </div>
 ))}
   </div>
   </div>
 
   </>
  )
}
