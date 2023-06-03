import MainListing from "@components/main/mainListing"; 
import MainHeading from "@snippets/mainHeading";
import style from "@styles/sections/section.module.scss"
import FullBodyCard from "@components/main/fullBodyCard";

type TeamType = {
    name: string
    team: string[]
}

export default function Team({name, team}:TeamType) {
    return (
        <section className={style.Section}>
            <MainHeading title={name} />
            <MainListing> 
                {team.map(t => <FullBodyCard key={t}   media={`/team/${t}.webp`} title={t} /> )} 
            </MainListing>
        </section>
    )
}