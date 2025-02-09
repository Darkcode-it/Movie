import Header from "./components/header/Header.jsx";
import Nav from "./components/header/Nav.jsx";
import ShearcheBox from "./components/header/ShearcheBox.jsx";
import FollowUs from "./components/header/FollowUs.jsx";
import HeaderSlider from "./components/header/HeaderSlider.jsx";


export default function App() {

  return (
<main className="container mx-auto">
  <Header/>
  <Nav/>
  <ShearcheBox/>
  <FollowUs/>
  <HeaderSlider/>
</main>
  )

}


