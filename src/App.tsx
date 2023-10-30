import React from 'react';
import './index';
import { Header } from './Header';
import TaskManager from './TaskManager';
import Footer from './Footer';
import { TaskDone } from './TaskDone';

function App() :JSX.Element{
  return (
    <>
    <Header />
    <TaskManager />
    <Footer />
    <TaskDone></TaskDone>
    
    </>
  );
}
export default App;
