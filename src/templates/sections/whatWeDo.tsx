import MainArticle from '@components/main/mainArticle'
import style from "@styles/sections/section.module.scss"

import React from 'react'

export default function WhatWeDo() {
  return (
    <section className={style.Section}>
        <MainArticle title='What We Do' subtitle='16, 000 Square Feet of Fun' >
            <p>Leaving your pet is hard - they are part of the family! Whether you need to leave your pet for a day, a week, or even an extended stay - we can help make it easier for everyone! <b>We offer affordable, convenient, and loving solutions so that your pet doesn&apos;t feel scared or alone and you can have peace of mind knowing they are being cared for and loved!</b> All-day long with our ALL inclusive boarding that includes a fun-filled day of daycare or one-on-one if that is best. Do medication need to be given? NO Problem! We do that free of charge also!</p>
            <br></br>
            <p><b>We know that you and your pet will love Pet Lodge USA of Boardman! 14 Years of Caring for you Fur-Babies!</b></p>
        </MainArticle>
    </section>
  )
}
