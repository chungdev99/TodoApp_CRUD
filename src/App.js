import React from 'react';
import { Route, Routes } from "react-router-dom";
import Calendar from './components/Calendar';
import ButtonAppBar from './components/Header';
import NotFound from './components/NotFound/NotFound';
import Layout from "./feature";
import About1 from "./feature/components/About/About1";
import AddList1 from "./feature/components/AddStudents/AddList1";
import Update1 from "./feature/components/UpdateStudents/Update1";

function App() {
  return (
    <div >
      <ButtonAppBar />
      <p></p>
      <Routes>
      
        <Route path="/" element={<Layout />} />
        <Route path="/add" element={<AddList1 />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/update" element={<Update1 />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
