import React from 'react'
import LeftTopNav from '../Components/LeftTopNav';
import SideNav from '../Components/SideNav';

import HomeList from '../Components/HomeList';
import ContentNav from '../Components/ContentNav';

export default function Home() {
  
  return (
    <>
     <div class="row ">
    <div class="col-2">
  
      <SideNav/>
    </div>
    <div class="col-10">
    <LeftTopNav/> 
    <ContentNav/>
    <div class="row ">
    <div class="col-12">
    <HomeList/>
        </div>
        <div class="col-12">
    <HomeList/>
        </div>
        </div>
     
       

   
    </div>
  </div>
 


    </>
  )
}
