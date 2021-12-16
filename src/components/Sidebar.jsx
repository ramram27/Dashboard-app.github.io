import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import { DownbarData } from "./DownbarData";
import { HeaderData } from "./HeaderData";
//import styled from "styled-components";



const Sidebar = () => {
  return ( 
    <div className="sidebar">
     
    <ul className="sidebarlist">
     { HeaderData.map((val,key) => {
        return (
         <li key={key} 
         className="row"
         onClick={() =>{
           window.location.pathname=val.link;
         }}
         >
          {" "}
          <div id="iconmenu">{val.icon}</div> 
          <div  id="logo" >{val.title}</div>
         </li>
        )
      })};
     </ul>
     
     {/* <ul className="sidebarlistp">
       <li className="rowp">
       <div id="iconp">
         <PermIdentityIcon />
       </div>
       <div id="titlep">PROFILE</div>
       </li>
     </ul> */}

      <ul className="sidebarlist">
     { SidebarData.map((val,key) => {
        return (
         <li key={key} 
         className="row"
         onClick={() =>{
           window.location.pathname=val.link;
         }}
         >
          {" "}
          <div id="icon">{val.icon}</div> 
          <div id="title">{val.title}</div>
          <div id="incloseIcon">{val.iconClosed}</div>
          {/* {
            SidebarData. subNav.map((item,index) =>{
              return (
                <>
                
                </>
              )
            })
          } */}
         </li>
        )
      })};
     </ul>
     <div>
       
     </div>
     <ul className="sidebarlist">
     { DownbarData.map((val,key) => {
        return (
         <li key={key} 
         className="row"
         onClick={() =>{
           window.location.pathname=val.link;
         }}
         >
          {" "}
          <div id="iconD">{val.icon}</div> 
          <div id="titleD">{val.title}</div>
         </li>
        )
      })};
     </ul>

    </div>
   );
}
 
export default Sidebar;