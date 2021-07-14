import Link from 'next/link'


import styles from './Header.module.scss'

function Header({ children }) {
  return (
    <>
      <header>
        <h1>Manuel Puchner</h1>
        
        {children}
      </header>
    </>
  )
}



export default Header
