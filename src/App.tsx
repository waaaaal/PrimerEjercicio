import React from 'react';
import './index.css';
import { Header } from './Greaters';
import MainContent from './MainContent';
import Footer from './Footer';
import { pathToFileURL } from 'url';
function App() {
  return (
    <>
    <Header />
    <MainContent />
    <Footer />
    </>
  );
}
// Prueba para PullRequest..
export default App;
