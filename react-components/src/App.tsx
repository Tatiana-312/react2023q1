import Header from './components/Header/Header';
import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    );
  }
}

export default App;
