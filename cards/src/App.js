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
      
     <Course image={Angular} title='Angular' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat, lectus sed elementum gravida, mauris nibh vestibulum tortor, vel mattis massa ligula ac mi. Curabitur sed quam fermentum, rhoncus ipsum a, aliquet nibh. Vestibulum faucibus ipsum dolor, pharetra dictum enim scelerisque eget. Pellentesque aliquet mi est, et rhoncus ex tristique eu. Morbi malesuada nisi sed purus mattis congue. Maecenas nec erat id ex tempus gravida a a nisi. Ut a vulputate nisl, at volutpat diam. Vivamus commodo dui nec arcu finibus dapibus. Proin facilisis ultricies molestie. Quisque non tellus non nulla tincidunt ornare id et sapien. Nullam eget posuere velit. Aliquam ultrices, erat non aliquam consequat, sapien turpis posuere ligula, nec bibendum velit lorem ornare orci. Ut eleifend mi nec libero faucibus tincidunt.'/>
     <Course image={Bootstrap} title='Bootstrap 5' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat, lectus sed elementum gravida, mauris nibh vestibulum tortor, vel mattis massa ligula ac mi. Curabitur sed quam fermentum, rhoncus ipsum a, aliquet nibh. Vestibulum faucibus ipsum dolor, pharetra dictum enim scelerisque eget. Pellentesque aliquet mi est, et rhoncus ex tristique eu. Morbi malesuada nisi sed purus mattis congue. Maecenas nec erat id ex tempus gravida a a nisi. Ut a vulputate nisl, at volutpat diam. Vivamus commodo dui nec arcu finibus dapibus. Proin facilisis ultricies molestie. Quisque non tellus non nulla tincidunt ornare id et sapien. Nullam eget posuere velit. Aliquam ultrices, erat non aliquam consequat, sapien turpis posuere ligula, nec bibendum velit lorem ornare orci. Ut eleifend mi nec libero faucibus tincidunt.'/>
     <Course image={Csharp} title='Komple Web' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat, lectus sed elementum gravida, mauris nibh vestibulum tortor, vel mattis massa ligula ac mi. Curabitur sed quam fermentum, rhoncus ipsum a, aliquet nibh. Vestibulum faucibus ipsum dolor, pharetra dictum enim scelerisque eget. Pellentesque aliquet mi est, et rhoncus ex tristique eu. Morbi malesuada nisi sed purus mattis congue. Maecenas nec erat id ex tempus gravida a a nisi. Ut a vulputate nisl, at volutpat diam. Vivamus commodo dui nec arcu finibus dapibus. Proin facilisis ultricies molestie. Quisque non tellus non nulla tincidunt ornare id et sapien. Nullam eget posuere velit. Aliquam ultrices, erat non aliquam consequat, sapien turpis posuere ligula, nec bibendum velit lorem ornare orci. Ut eleifend mi nec libero faucibus tincidunt.'/>
     <Course image={Kompleweb} title='Frontend' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat, lectus sed elementum gravida, mauris nibh vestibulum tortor, vel mattis massa ligula ac mi. Curabitur sed quam fermentum, rhoncus ipsum a, aliquet nibh. Vestibulum faucibus ipsum dolor, pharetra dictum enim scelerisque eget. Pellentesque aliquet mi est, et rhoncus ex tristique eu. Morbi malesuada nisi sed purus mattis congue. Maecenas nec erat id ex tempus gravida a a nisi. Ut a vulputate nisl, at volutpat diam. Vivamus commodo dui nec arcu finibus dapibus. Proin facilisis ultricies molestie. Quisque non tellus non nulla tincidunt ornare id et sapien. Nullam eget posuere velit. Aliquam ultrices, erat non aliquam consequat, sapien turpis posuere ligula, nec bibendum velit lorem ornare orci. Ut eleifend mi nec libero faucibus tincidunt.'/>
    
    
    </div>
  
    
  );
}

export default App;
