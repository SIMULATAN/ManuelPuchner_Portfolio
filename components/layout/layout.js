import Head from "next/head";

import Header from "../header/header.js";
import Navbar from "../navbar/navbar.js";

import styles from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <div className={styles.layoutWrapper}>{children}</div>
    </>
  );
}

export default Layout;
