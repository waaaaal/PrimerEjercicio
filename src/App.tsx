import React from "react";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import NavigationMenu from "./components/Navigationmenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskManager from "./components/TaskManager";
import TaskList from "./components/TaskList";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <NavigationMenu />
      <main>
        <div className="container-wrapper main-content">
          <Routes>
            <Route path="/" element={<TaskManager />} />
            <Route path="a" element={<TaskList />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
