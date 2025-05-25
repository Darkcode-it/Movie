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




import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import MovieDetails from "./pages/MovieDetails";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import ChildrenMovies from "./components/ChildrenMovies";
import MoreMovies from "./components/MoreMovies";
import Layout from "./components/Layout";
import bg from "/public/bg.jpg"; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// کامپوننت محافظت شده برای پنل ادمین
const ProtectedAdminRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
  
  if (!isAdminLoggedIn) {
    console.log('Admin not logged in, redirecting to login');
    return <Navigate to="/Movie/admin/login" />;
  }
  
  console.log('Admin is logged in, showing admin panel');
  return children;
};

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
          backgroundColor: 'rgba(5, 5, 5, 0.5)',
        }}
      ></div>
      <div style={{ position: 'relative' }}>
        <Router>
          <Routes>
            <Route path="/Movie" element={<Layout><Home /></Layout>} />
            <Route path="/Movie/login" element={<Layout><Login /></Layout>} />
            <Route path="/Movie/register" element={<Layout><Register /></Layout>} />
            <Route path="/Movie/details/:id" element={<Layout><MovieDetails /></Layout>} />
            <Route path="/Movie/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/Movie/admin/login" element={<Layout><AdminLogin /></Layout>} />
            <Route path="/Movie/movies" element={<Layout><Movies /></Layout>} />
            <Route path="/Movie/tv-shows" element={<Layout><TVShows /></Layout>} />
            <Route path="/Movie/children" element={<Layout><ChildrenMovies /></Layout>} />
            <Route path="/Movie/more" element={<Layout><MoreMovies /></Layout>} />
            <Route 
              path="/Movie/admin/*" 
              element={
                <ProtectedAdminRoute>
                  <Layout><AdminPanel /></Layout>
                </ProtectedAdminRoute>
              } 
            />
            <Route path="/" element={<Navigate to="/Movie" />} />
            <Route path="*" element={<Layout><div>404 Not Found</div></Layout>} />
          </Routes>
        </Router>
      </div>
    </main>
  );
}