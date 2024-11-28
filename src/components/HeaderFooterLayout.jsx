import Header from "./Header";
import Footer from "./Footer";

function HeaderFooterLayout({ children, title }) {
  return (
    <div>
      <Header title={title} />
      {children}
      <Footer />
    </div>
  );
}

export default HeaderFooterLayout;
