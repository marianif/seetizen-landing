import Meta from "./Meta";
import styles from "@/styles/shared/Layout.module.css";
import { Header, AppHeader, Footer } from ".";


const Layout = ({
  title,
  description,
  keywords,
  children,
  hiddenFooter,
  headerType,
  user,
}) => {
  return (
    <div>
      <Meta title={title} description={description} keywords={keywords} />
      {headerType === "landing" && <Header />}
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
