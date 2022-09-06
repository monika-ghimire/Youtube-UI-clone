
import LeftTopNav from './Components/LeftTopNav';
import SideNav from './Components/SideNav';

function App() {
  return (
   <>
  
  <div class="row ">
    <div class="col-2">
  
      <SideNav/>
    </div>
    <div class="col-10">
    
    <LeftTopNav/> 
    </div>
  </div>
 

  
   </>
  );
}

export default App;
