import { navigationData } from "@/data/homeData";
import Footer from "@/home/components/Footer";
import Header from "@/home/components/Header";
import { Outlet } from "react-router-dom";



const MainLayout = () => {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col">
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className="flex flex-col pt-17.5">
        <Outlet/>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
