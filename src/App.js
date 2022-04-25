import ReactDOM from "react-dom/client";
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Learn from './pages/Learn';
import SetAlerts from './pages/SetAlerts';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={HomePage}/>

          <Route path="/Learn" element={Learn}/>

          <Route path="/SetAlerts" element={SetAlerts}/>
        </Routes>


      </BrowserRouter>
      <HomePage />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path='/' component={<HomePage />}>
    //       <Route exact path='/Learn' component={<Learn />} />
    //       <Route exact path='/SetAlerts' component={<SetAlerts />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);