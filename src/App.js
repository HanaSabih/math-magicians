import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import NoPage from './components/NoPage';
import Navbars from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Navbars />}>
        <Route index element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
