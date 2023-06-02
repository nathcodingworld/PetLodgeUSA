import FooterDetail from '@components/footer/footerDetails'
import FooterLinks from '@components/footer/footerLinks'
import style from '@styles/sections/footer.module.scss'
import Image from 'next/image'
const links = [ 
    { title: "Home", href: "/" },
    { title: "What We Do", href: "/service" },
    { title: "Who are We", href: "/about" },
    { title: "Them vs US", href: "/themvsus" }
]
export default function Footer() {
    return (
    <footer className={style.Footer}>
        <div>
            <div className={style.FooterLogo}>
                <Image src='/icontrans.png' alt='icon' width={347} height={300}/>
            </div>
            <nav>
                <FooterLinks links={links} />
                <FooterLinks links={links} />
                <FooterLinks links={links} />
            </nav>
            <div className={style.FooterRight}>
                <FooterDetail />
            </div>
        </div>
    </footer>
    )
}