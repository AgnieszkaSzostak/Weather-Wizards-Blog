import { Footer } from "./Footer";

export const Layout = ({ wrapperClass, title, children }) => (
  <div className={wrapperClass}>
    {children}
    <Footer />
  </div>
);
