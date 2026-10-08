
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import React from 'react'
import Home from './pages/Home'
import Contato from './pages/Contato'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/produtos" element={<h1>Produtos</h1>} />
        <Route path="/sobre" element={<h1>Sobre</h1>} />
        <Route path="/contato" element={<h1>Contato</h1>} />
      </Routes>

      <div>
        <Home/>
      </div>
    </>

  )
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";

// function App() {
//   return (
//     <BrowserRouter>

//       <Header />

//       <Routes>
//         <Route path="/" element={<h1>Home</h1>} />
//         <Route path="/produtos" element={<h1>Produtos</h1>} />
//         <Route path="/sobre" element={<h1>Sobre</h1>} />
//         <Route path="/contato" element={<h1>Contato</h1>} />
//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;