
import style from '@styles/components/mains.module.scss'
import Image from 'next/image' 

type cardType = {
    media: string 
    title: string 
}

export default function FullBodyCard({media, title}: cardType) {
    return(
    <div className={style.Card}>
        <div className={style.CardFullBody}> 
            <Image src={media} alt={title+'-image'} width={330} height={525}/> 
            <p>{title}</p>
        </div>  
    </div>
    )
}