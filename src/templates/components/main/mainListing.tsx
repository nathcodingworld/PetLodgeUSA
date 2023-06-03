 
import React, { ReactNode } from 'react'
import style from '@styles/components/mains.module.scss'

type articleType = {
    children?: ReactNode; 
    w?: string
}

export default function MainListing({children, w}: articleType) {
    return (
        <div className={style.MainListings}>
            {children}
            {w && <div className={style.MainListingsHide}  style={{width: w}}></div>}
        </div>
    )
}