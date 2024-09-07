import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom'
import NavRoutes from './navigation-routes/NavRoutes';

function App() {
  return (
    <BrowserRouter>
      <NavRoutes />
    </BrowserRouter>
  );
}

export default App;
