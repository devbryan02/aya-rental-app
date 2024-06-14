import Banner from "@/components/inicio/Banner";
import Benneficios from "@/components/inicio/Beneficios";
import Opiniones from "@/components/inicio/Opiniones";
import Footer from "@/components/inicio/Footer";
import NavBar from "@/components/nav/NavBar";

function HomePage() {
  return (
    <>
      <NavBar />
      <Banner />
      <Benneficios />
      <Opiniones />
      <Footer />
    </>
  );
}

export default HomePage;
