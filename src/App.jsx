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
import Subscription from "./pages/Subscription";
import CreateKidProfilePage from "./pages/CreateKidProfilePage";
import KidsWatchPage from "./pages/KidsWatchPage";
import Layout from "./components/Layout";
import InstallPrompt from "./components/InstallPrompt";
import bg from "/public/bg.jpg"; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Detect if the app is running on GitHub Pages to set a proper basename
const isGitHubPages = window.location.hostname === 'darkcode-it.github.io';
const routerBasename = isGitHubPages ? '/Movie' : '/';

// کامپوننت محافظت شده برای پنل ادمین
const ProtectedAdminRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
  
  if (!isAdminLoggedIn) {
    console.log('Admin not logged in, redirecting to login');
    return <Navigate to="/admin/login" />;
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
        <InstallPrompt />
        <Router basename={routerBasename}>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/login" element={<Layout><Login /></Layout>} />
            <Route path="/register" element={<Layout><Register /></Layout>} />
            <Route path="/details/:id" element={<Layout><MovieDetails /></Layout>} />
            <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/admin/login" element={<Layout><AdminLogin /></Layout>} />
            <Route path="/movies" element={<Layout><Movies /></Layout>} />
            <Route path="/tv-shows" element={<Layout><TVShows /></Layout>} />
            <Route path="/children" element={<Layout><ChildrenMovies /></Layout>} />
            <Route path="/more" element={<Layout><MoreMovies /></Layout>} />
            <Route path="/subscription" element={<Layout><Subscription /></Layout>} />
            <Route path="/create-kid-profile" element={<Layout><CreateKidProfilePage /></Layout>} />
            <Route path="/kids-watch" element={<Layout><KidsWatchPage /></Layout>} />
            <Route 
              path="/admin/*" 
              element={
                <ProtectedAdminRoute>
                  <Layout><AdminPanel /></Layout>
                </ProtectedAdminRoute>
              } 
            />
            <Route path="*" element={<Layout><div>404 Not Found</div></Layout>} />
          </Routes>
        </Router>
      </div>
    </main>
  );
}