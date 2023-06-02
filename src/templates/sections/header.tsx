import BannerDetail from "@components/header/bannerDetail";
import NavBar from "@components/header/navBar";
import Navigation from "@components/header/navigation";
import SplideBanner from "@components/header/splideBanner";
import style from '@styles/sections/header.module.scss'

type headType = {
    home?: boolean
}
export default function Header({home = true}: headType) {
    return(
    <header>
        <NavBar />
        <Navigation />
        <div className={style.Banner} >
            <SplideBanner />
            <BannerDetail style={style} />
        </div>
    </header>
    )
}