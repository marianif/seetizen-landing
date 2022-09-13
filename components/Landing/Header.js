import styles from '@/styles/components/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

const LOGO = require('@/images/logo-v1.png')

const Header = () => {
  return (
      <div className={styles.wrapper}>
       <div className={styles.logoContainer}>
        <Link href='/'>
        <Image src={LOGO} priority layout='responsive' />
        </Link>
        </div>
      </div>
  )
}

export default Header