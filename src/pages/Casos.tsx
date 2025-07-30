import Header from "@/components/Header";
import Cases from "@/components/Cases";
import Footer from "@/components/Footer";

const CasosPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Cases />
      </div>
      <Footer />
    </div>
  );
};

export default CasosPage;