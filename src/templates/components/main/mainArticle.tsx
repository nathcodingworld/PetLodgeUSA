

import Link from 'next/link';
import React, { ReactNode } from 'react'
import style from '@styles/components/mains.module.scss'

type articleType = {
    children?: ReactNode;
    title: string;
    subtitle?: string;
    link?: {url: string, title:string}
}

export default function MainArticle({children, title, subtitle, link}:articleType) {
  return (
    <article className={style.MainArticles}>
        <h2>{title}</h2>
        {subtitle && <h4>{subtitle}</h4>}
        {children}
        {link && <Link href={link.url}>{link.title}</Link>}
    </article>
  )
}
