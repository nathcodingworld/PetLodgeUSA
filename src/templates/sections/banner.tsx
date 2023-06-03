import BannerBody from '@components/body/banner'
import MainArticle from '@components/main/mainArticle'
import style from '@styles/sections/header.module.scss' 

 
export default function Banner( ) {
    return(
        <div className={style.Banner} > 
            <BannerBody 
                body
                style={style}
                background={{
                    url: '/location.webp',
                    alt: 'location view',
                    h: 550,
                    w: 1103
                }}> 
                <MainArticle title="Location"> 
                    <b>8063 Market Street Boardman, OH 44512</b>
                    <p>1 Mile South of the Southern Park Mall next to the Eat&apos;n Park Plaza</p>
                </MainArticle> 
            </BannerBody>
        </div>
    )
}