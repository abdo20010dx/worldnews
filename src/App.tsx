import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import PrimarySearchAppBar from './components/appbar/page';
import { ThemeProvider } from '@mui/material';
import theme from './global/theme';
import { DataCards } from './components/DataCards/page';

function App() {
  return (

    <HashRouter>
      <ThemeProvider theme={theme}>
        <PrimarySearchAppBar />
        <Routes>
          <Route path="/" element={<DataCards />} />
          <Route index element={<DataCards />} />
          <Route path="*" element={<DataCards />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>

  );
}
export default App;
