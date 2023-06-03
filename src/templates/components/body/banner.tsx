
import Image from 'next/image'
import { ReactNode } from 'react'

type bannerType =  {
    body?: boolean
    children: ReactNode
    style: {[key: string]: string};
    background: {
        url: string
        alt: string
        w: number
        h: number
    }
}
export default function BannerBody({body, background, children, style}: bannerType) {
    return(
    <div style={{height: background.h+"px"}}>
        <Image className={style.BannerBG} src={background.url} alt={background.alt} width={background.w} height={background.h} />
        <div className={body ? style.BannerBody : style.BannerHead}>
            {children}
        </div>
    </div>
    )
}