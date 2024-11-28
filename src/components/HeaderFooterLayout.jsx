import Header from "./Header";
import Footer from "./Footer";

function HeaderFooterLayout({ children, title }) {
  return (
    <div className="HeaderFooterLayout">
      <Header title={title} />
      {children}
      <Footer />
    </div>
  );
}

export default HeaderFooterLayout;
