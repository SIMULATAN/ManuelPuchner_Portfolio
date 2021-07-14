import Head from 'next/head';

import Header from './header.js'

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
