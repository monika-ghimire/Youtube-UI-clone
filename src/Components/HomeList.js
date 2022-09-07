import React from 'react'
import Video from '../Components/video.png';
import styles from '../styles/Home.module.css';
import JsHosting from '../Components/jsHosting.png';
import Motivation from '../Components/motivation.png';
import Song from '../Components/song.png';

export default function HomeList() {
    let  ContenetList=[
        {
            Img:Video,Title:"This ia the is ahthajh ha",Viwers:"34k Views",upoad_Time:"4day ago"},
          {  Img:JsHosting,Title:"This ia is ahthajsh ha",Viwers:"34k Views",upoad_Time:"1day ago"},
           { Img:Motivation ,Title:"This ia the is ahthash ha",Viwers:"34k Views",upoad_Time:"3months ago"},
           { Img:Song,Title:"This ia the  ahthajsh ha",Viwers:"34k Views",upoad_Time:"1week ago"},
        
    ]
  return (
  <>
    <div  className={styles.ContainerHolder}>
  {ContenetList.map((x) => (
    <div class={styles.ContainerHolderShow}>
   <img src={x.Img} class={styles.image}/>
    <h4>{x.Title}</h4>
    <p>{ x.Viwers} . {x.upoad_Time}</p>
   </div>
      ))}
      </div>
  </>
  )
}
