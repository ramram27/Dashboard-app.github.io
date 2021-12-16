import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis,Legend,Tooltip} from "recharts";

var data =[
  {
    name:"00:00",
    Time:0,
    fee:3,

  },
  {
    name:"02:00",
    Time:2,
    fee:6,

  },
  {
    name:"04:00",
    Time:4,
    fee:9,

  },
  {
    name:"06:00",
    Time:10,
    fee:8,

  },
  {
    name:"08:00",
    Time:8,
    fee:10,

  },
  {
    name:"10:00",
    Time:10,
    fee:10,

  },
 
 
];

const BarGraph = () => {
  return ( 
    <>
      <ResponsiveContainer width="100%" aspect={3}>
                   <BarChart data={data} width={100} height={100}  margin={{
                     top:10,right:100,left:20,bottom:20
                   }}> 
                     
                     <XAxis dataKey="name"  /> 
                     <YAxis  dataKey="Time" />
                    
                     <Tooltip />
                     <Bar dataKey="name" fill="#8884d8" />
                      <Bar dataKey="Time" fill="#82ca9d" />
                     <Legend />
                   </BarChart>
                    
                 </ResponsiveContainer>
    </>
   );
}
 
export default BarGraph;