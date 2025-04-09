// import Home from "./pages/Home";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import bg from "/public/bg.jpg"; 
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// export default function App() {
//   return (
//     // <main  
//     //   style={{
//     //     backgroundImage: `url(${bg})`,
//     //     backgroundSize: 'cover',
//     //     backgroundPosition: 'center',
//     //     backgroundRepeat: 'no-repeat',
//     //     minHeight: '150vh',
//     //     position: 'relative',}} >
//     //   <div 
//     //     style={{
//     //       position: 'absolute',
//     //       top: 0,
//     //       left: 0,
//     //       right: 0,
//     //       bottom: 0,
//     //       backgroundColor: 'rgba(5, 5, 5, 0.5) rgba(10, 9, 9, 0.1)  ', }} ></div>
//     //   <div style={{ position: 'relative',  }}>


//     <Router>
//     <Routes>
//     <Route path="/Movie" element={<Home />} />
//     <Route path="/Movie/login" element={<Login />} />
//     <Route path="/Movie/register" element={<Register />} />
//     <Route path="*" element={ "404 Not Found"} />
//   </Routes>
// </Router>


//   );
// }




import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import bg from "/public/bg.jpg"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <main  
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '150vh',
        position: 'relative',
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(5, 5, 5, 0.5)', // لایه تیره برای پس‌زمینه
        }}
      ></div>
      <div style={{ position: 'relative' }}>
        <Router>
          <Routes>
            <Route path="/Movie" element={<Home />} />
            <Route path="/Movie/login" element={<Login />} />
            <Route path="/Movie/register" element={<Register />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </Router>
      </div>
    </main>
  );
}