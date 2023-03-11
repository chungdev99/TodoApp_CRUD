import React from 'react';
import { Route, Routes } from "react-router-dom";
import Calendar from './components/Calendar';
import ButtonAppBar from './components/Header';
import NotFound from './components/NotFound/NotFound';
import Layout from "./feature";
import AboutLayout from './feature/components/About/AboutLayout';
import AddListLayout from './feature/components/AddStudents/AddListLayout';
import UpdateLayout from './feature/components/UpdateStudents/UpdateLayout';

function App() {
  return (
    <div >
      <ButtonAppBar />
      <p></p>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/add" element={<AddListLayout />} />
        <Route path="/about" element={<AboutLayout />} />
        <Route path="/update" element={<UpdateLayout />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
