import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

const SobreMi = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default SobreMi;