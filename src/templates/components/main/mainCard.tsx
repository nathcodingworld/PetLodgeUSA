
import style from '@styles/components/mains.module.scss'
import Image from 'next/image'
import Link from 'next/link'

type carType = {
    media: string 
    title: string
    description: string
    price: string
    link: string
}

export default function MainCard({media, title, description, price, link}: carType) {
    return(
    <div className={style.Card}>
        <div className={style.CardMedia}>
            <Link href={link}>
                <Image src={media} alt={title+'-image'} width={330} height={244}/>
            </Link>
        </div>
        <div className={style.CardContents}>
            <Link href={link}>
                <h5>{title}</h5>
                <p>{description}</p>
            </Link>
        </div>
        <div className={style.CardAction}>
            <div>
                <span>From:</span><br /><b>{price}</b>
            </div>
            <Link href={link}>Learn More</Link>
        </div>
    </div>
    )
}