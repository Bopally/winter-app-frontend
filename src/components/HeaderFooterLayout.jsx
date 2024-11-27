import Header from "./Header";
import Footer from "./Footer";

function HeaderFooterLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default HeaderFooterLayout;