import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";

const App = () => {
  return ( 
     <>
     <div className="App">
       <Header />
       <Sidebar />
      <Dashboard />
     </div>
     </> 
  );
}
 
export default App;