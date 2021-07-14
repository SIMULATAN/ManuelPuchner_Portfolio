import Head from "next/head";

import Header from "../header/header.js";
import Navbar from "../navbar/navbar.js";

import styles from './Layout.module.scss'

function Layout({ children }) {
  return (
    <div>
      <Header>
        <Navbar />
      </Header>
      {children}
    </div>
  );
}

export default Layout;
