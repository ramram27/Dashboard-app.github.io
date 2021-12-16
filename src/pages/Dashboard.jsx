
import React from "react";

import MultipleLineGraph from "./MultipleLineGraph";
import "./css/Dashboard.css";
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";
import LineBar from "./LineBar";
import PieGraph from "./PieGraph";


function Dashboard() {
  const d = new Date();

  return (
    <>

      <div className="a">
        <div className="b">
          <div className="c">

            {/*    HYGIENE index first page line graph    */}
            <div className="d">
           
              <div style={{ fontWeight: "bold", marginLeft: "30px", fontSize: "30px", paddingTop: "30px" }}>HYGIENE INDEX </div>
              <p style={{ marginLeft: "30px", fontSize: "15px" }}>DATA FOR NOV 25 2021 FROM 12:00 AM TO
                {" " + d.toLocaleString('hi-IN')}</p>
              <div style={{ fontWeight: "bold", marginLeft: "30px", fontSize: "30px" }}>PPE CHECK </div>
              <p style={{ color: "blue", marginLeft: "30px", fontSize: "15px" }}>Hygiene Deviation Trend </p>
              <p style={{ marginLeft: "30px", fontSize: "15px", marginTop: "-12px" }}>The hygiene Index Value at
                {" " + d.toLocaleTimeString('hi-IN')} is 1.81 </p>

              <LineGraph />
            </div> <br />
            {/*    HYGIENE index Second page line graph    */}
            <div className="d">

              <div style={{ fontWeight: "bold", marginLeft: "30px", fontSize: "30px", paddingTop: "30px" }}>Hourly averages of last 7 days to last 30 days </div>
              <p style={{ color: "blue", marginLeft: "30px", fontSize: "18px" }}>(In outlet time zone)</p>
              <p style={{ marginLeft: "30px", fontSize: "18px" }}>The Hygiene Value
                at {" " + d.toLocaleTimeString('hi-IN')}  for Today is 0 Last 7 Days is 0 and Last 30 Days is 0 </p>

              <MultipleLineGraph />

            </div><br />

            <div className="d">

              <div style={{ fontWeight: "bold", marginLeft: "30px", fontSize: "30px", paddingTop: "30px" }}>SAFETY INDEX </div>
              <p style={{ marginLeft: "30px", fontSize: "15px" }}>DATA FOR NOV 25 2021 FROM 12:00 AM TO
                {" " + d.toLocaleString('hi-IN')} </p>
              <div style={{ fontWeight: "bold", marginLeft: "30px", fontSize: "30px" }}>PPE CHECK </div>
              <p style={{ color: "blue", marginLeft: "30px", fontSize: "15px" }}>SAFETY Deviation Trend </p>
              <p style={{ marginLeft: "30px", fontSize: "15px", marginTop: "-12px" }}>The SAFETY Index Value at
                {" " + d.toLocaleTimeString('hi-IN')}  is 1.81 </p>

              <BarGraph />
            </div> <br />


            {/*    HYGIENE index Second page line graph    */}
            <div className="d">

              <div style={{ fontWeight: "bold", marginLeft: "30px", fontSize: "30px", paddingTop: "30px" }}>Hourly averages of last 7 days to last 30 days </div>
              <p style={{ color: "blue", marginLeft: "30px", fontSize: "18px" }}>(In outlet time zone)</p>
              <p style={{ marginLeft: "30px", fontSize: "18px" }}>The SAFETY Value
                at {" " + d.toLocaleTimeString('hi-IN')}  for Today is 0 Last 7 Days is 0 and Last 30 Days is 0 </p>

             <LineBar />

            </div><br />

            <div className="d">
           
              <div style={{ fontWeight: "bold", marginLeft: "30px", fontSize: "30px", paddingTop: "30px" }}>QUALITY INDEX </div>
              <p style={{ marginLeft: "30px", fontSize: "15px" }}>DATA FOR NOV 25 2021 FROM 12:00 AM TO
                {" " + d.toLocaleString('hi-IN')}</p>
            
              <p style={{ color: "blue", marginLeft: "30px", fontSize: "15px" }}>QUALITY Deviation Trend </p>
              <p style={{ marginLeft: "30px", fontSize: "15px", marginTop: "-12px" }}>The QUALITY Index Value at
                {" " + d.toLocaleTimeString('hi-IN')} is 1.81 </p>

              <PieGraph />              
            </div> <br />

            <div className="Live-view">
           
           <div style={{ fontWeight: "bold", marginLeft: "30px", fontSize: "30px", 
           paddingTop: "30px",color:"white" }}>Live view </div>
          
                        
         </div> <br />



            {/* // Award Earned of HYGIENE index fourth page */}

            {/* <h2 style={{ marginLeft: "60px", fontSize: "40px" }}>Award Earned</h2> */}
            <div className="d">
              <div style={{ textAlign: "center", paddingTop: "80px" }} >
                <img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-golden-three-dimensional-awards-logo-png-image_5062598.jpg"
                  style={{ width: "300px", hight: "300px" }}
                />
              </div>
            </div>


          </div>
        </div>
      </div>


    </>
  );
}

export default Dashboard;
