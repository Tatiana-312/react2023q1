import Header from './components/Header/Header';
import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import { CurrentPageState } from 'currentPageState.interface';

class App extends React.Component<Record<string, never>, CurrentPageState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      currentPage: 'Home',
    };
  }

  render(): React.ReactNode {
    return (
      <>
        <Header {...this.state} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </>
    );
  }
}

export default App;
