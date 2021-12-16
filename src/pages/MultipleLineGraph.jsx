import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Legend,Tooltip} from "recharts";

var data =[
  {
    name:"00:00",
    Today:0,
    "Last 7 Days":3,
    "Last 30 Days":5,

  },
  {
    name:"02:00",
    Today:2,
    "Last 7 Days":6,
    "Last 30 Days":5,
  },
  {
    name:"04:00",
    Today:4,
    "Last 7 Days":9,
    "Last 30 Days":10,
  },
  {
    name:"06:00",
    Today:10,
    "Last 7 Days":8,
    "Last 30 Days":10,
  },
  {
    name:"08:00",
    Today:8,
    "Last 7 Days":10,
    "Last 30 Days":12,
  },
  {
    name:"10:00",
    Today:10,
    "Last 7 Days":10,
    "Last 30 Days":8,
  },
 
 
];

const MultipleLineGraph = () => {
  return ( 
    <>
     <ResponsiveContainer width="100%" aspect={3}>
                   <LineChart data={data} width={400} height={400} margin={{
                     top:20,right:100,left:20,bottom:2
                   }}>
                     
                     <XAxis dataKey="name"  /> 
                   
                     <YAxis  dataKey="Today" />
                    
                     <Tooltip />
                     <Line  dataKey="Today"  stroke="red" activeDot={{r:5}} />
                   
                     <Line dataKey="Last 7 Days" stroke="green" activeDot={{r:5}}/>
                  
                     <Line dataKey="Last 30 Days" stroke="blue" activeDot={{r:5}}/>
                   
                   
                   </LineChart>
                 
                 </ResponsiveContainer>
    </>
   );
}
 
export default MultipleLineGraph;