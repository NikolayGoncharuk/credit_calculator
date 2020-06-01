import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// Components
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};