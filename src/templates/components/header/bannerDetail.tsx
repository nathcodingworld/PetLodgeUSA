import Image from "next/image";

type bannerDetType = {
    style: {[key: string]: string};
}

export default function BannerDetail({style}: bannerDetType) {
    return (
        <div className={style.BannerDetail}>
            <article>
                <h1>Pet Lodge USA of Boardman</h1>
                <span>We Are Open</span>
                <p>Stay safe and be well! Kim, Scott, and all of us at Pet Lodge USA of Boardman.</p>
            </article>
            <div className={style.BannerLogos}>
                <Image src='/cyquest.webp' alt='readers choice gpld award' width={267} height={230} />
                <Image src='/rcga.webp' alt='readers choice gpld award' width={257} height={230} />
            </div>
        </div>
    )
}