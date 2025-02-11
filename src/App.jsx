
import Header from "./components/header/Header.jsx";
import Nav from "./components/header/Nav.jsx";
import ShearcheBox from "./components/header/ShearcheBox.jsx";
import FollowUs from "./components/header/FollowUs.jsx";
import HeaderSlider from "./components/header/HeaderSlider.jsx";
import bg from "/public/bg.jpg"; 

export default function App() {
  return (
    <main 
      className="container mx-auto" 
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '150vh',
        position: 'relative',}} >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(5, 5, 5, 0.5) rgba(10, 9, 9, 0.1)  ', }} ></div>
      <div style={{ position: 'relative',  }}>



        <Header />
        <Nav />
        <ShearcheBox />
        <FollowUs />
        <HeaderSlider />


      </div>
    </main>
  );
}