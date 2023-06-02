import Link from 'next/link'
import style from '@styles/components/navigation.module.scss' 

export default function Navigation() {
    return (
    <div className={style.navigation}> 
        <nav>
            <Link href='#' >Home</Link>
            <Link href='#' >Who We Are</Link>
            <Link href='#' >What We Do</Link>
            <Link href='#' >Them vs US</Link>
            <Link href='#' >Testimonials</Link>
            <Link href='#' >FAQ</Link>
        </nav>
    </div>
    )
}