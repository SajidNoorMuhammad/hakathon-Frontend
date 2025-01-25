import MicrofinanceSection from "@/components/User/FirstSection";
import Footer from "@/components/User/Footer";
import Header from "@/components/User/MainHeader";
import SaylaniGuide from "@/components/User/SaylaniGuide";
import TopHeader from "@/components/User/TopHeader";

export default function Home() {
  return (
    <div>
      <div>
        <TopHeader />
        <Header />
        <MicrofinanceSection />
        <SaylaniGuide />
        <Footer />
      </div>
    </div>
  );
}
