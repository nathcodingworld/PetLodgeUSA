import Image from 'next/image'
import style from '@styles/components/navigation.module.scss' 
import PhoneDetail from '@snippets/textwithicon/phoneDetail'
import EmailDetail from '@snippets/textwithicon/emailDetail'

export default function NavBar() {
    return (
        <div className={style.navbar}>
            <nav>
                <div className={style.navbarLogos}>
                    <Image src='/icon.webp' alt='company logo' height={100} width={153}/>
                    <p>Hotel For Pets</p>
                </div>
                <div className={style.navbardetails}>
                    <PhoneDetail phone='330-726-2222'/>
                    <EmailDetail email='petlodgeusa@gmail.com'/>
                </div>
            </nav>
        </div>
    )
}