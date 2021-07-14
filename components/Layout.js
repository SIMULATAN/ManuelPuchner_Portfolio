import Head from 'next/head';

import Header from './Header.js'

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
