import React from 'react';
import { Header } from './Header';
import Footer from './Footer';
import NavigationMenu from './Navigationmenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskDone from './TaskDone';
import TaskManager from './TaskManager';
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<TaskManager/>} />
          <Route path="a" element={<TaskDone/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
