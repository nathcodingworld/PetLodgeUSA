import React from 'react'
import style from '@styles/sections/header.module.scss'
import BannerBody from "@components/body/banner";
import BannerDetail from "@components/header/bannerDetail";

export default function PageBanner() {
  return (
    <section className={style.Banner} > 
        <BannerBody  
            style={style}
            background={{
                url: '/dog2.png',
                alt: 'location view',
                h: 450,
                w: 390
            }}> 
            <BannerDetail style={style} /> 
        </BannerBody> 
    </section>
  )
}
