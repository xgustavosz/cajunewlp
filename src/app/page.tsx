import About from "@/components/layout/About";
import Carousel from "@/components/layout/Carousel";
import Class from "@/components/layout/Class";
import Event from "@/components/layout/Event";
import Footer from "@/components/layout/Footer";
import FormContact from "@/components/layout/FormContact";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Carousel />
      <About />
      <Class />
      <Event />
      <FormContact />
      <Footer />
    </div>
  );
}
