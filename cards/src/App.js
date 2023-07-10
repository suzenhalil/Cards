import './App.css';
import  Course  from "./Course";
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Csharp from './images/ccsharp.png';
import Kompleweb from './images/kompleweb.jpg';



function App() {
  return (
    <div className="App">
      {/* <img src={Angular} alt=''/> */}
      
     <Course image={Angular} title='Angular' description='ernaaaaaaaaaaaaaaaaaaaaaaaa'/>
     <Course image={Bootstrap} title='Bootstrap 5' description='ernaaaaaaaaaaaaaaaaaaaaaaaa'/>
     <Course image={Csharp} title='Komple Web' description='ernaaaaaaaaaaaaaaaaaaaaaaaa'/>
     <Course image={Kompleweb} title='Frontend' description='ernaaaaaaaaaaaaaaaaaaaaaaaa'/>
    
    
    </div>
    
  );
}

export default App;
