import Navigation from "./navigation";
import Footer from "./footer";
import UtilityBar from "./utility-bar";
import FloatingChatbot from "./floating-chatbot";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <UtilityBar />
      <Navigation />
      <main>{children}</main>
      <Footer />
      <FloatingChatbot />
    </>
  );
};

export default Layout;

