import Image from 'next/image'
import style from './navigation.module.scss'


export default function NavBar() {
    return (
        <div className={style.navbar}>
            <nav>
                <Image src='/icon.webp' alt='company logo' height={100} width={153}/>
            </nav>
        </div>
    )
}