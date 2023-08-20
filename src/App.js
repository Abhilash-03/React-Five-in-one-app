import './App.css';
import Accordian from './components/Accordian';
import Carousel from './components/Carousel'
import Navbar from './components/Navbar';
import { Route, Routes} from 'react-router-dom';
import Quotes from './components/Quotes';
import ShoppingList from './components/ShoppingList';
import GithubUsers from './components/GithubUsers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route index element={ <Carousel title = "Image Carousel"/>} />
      <Route path='/accordian' element={<Accordian/>} />
      <Route path='/quote' element={<Quotes/>} />
      <Route path='/shopping-list' element={<ShoppingList/>} />
      <Route path='/github-user' element={<GithubUsers/>} />
    </Routes>
    </div>
  );
}

export default App;
