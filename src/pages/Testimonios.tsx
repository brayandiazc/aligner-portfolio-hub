import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const TestimoniosPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default TestimoniosPage;