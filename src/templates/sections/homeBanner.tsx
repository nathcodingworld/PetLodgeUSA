import React from 'react'
import SplideBanner from "@components/header/splideBanner"; 
import style from '@styles/sections/header.module.scss'
import BannerDetail from "@components/header/bannerDetail";

export default function HomeBanner() {
  return (
    <section className={style.Banner} > 
        <SplideBanner />
        <BannerDetail style={style} /> 
    </section>
  )
}
