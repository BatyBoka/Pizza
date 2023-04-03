import './App.css';
import Header from './components/header/Header'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/HomePage/HomePage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>

    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/contants' element={<ContactsPage/>}></Route>
      <Route path='/AboutUs' element={<ContactsPage/>}></Route>
      
    </Routes>
      
    </div>
  );
}

export default App;
