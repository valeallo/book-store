import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';
import BookDetails from './Pages/BookDetails';





function App() {
  return (
    <div className="App overflow-x-hidden">
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/book/:asin' element={<BookDetails />} />
      <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
