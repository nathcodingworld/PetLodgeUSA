import style from '@styles/components/mains.module.scss' 

export default function MainHeading({title, sub = false}: {title:string, sub?: boolean}) {
    return <h2 className={sub ? style.subHeading : style.MainHeading }> {title}</h2> 
}