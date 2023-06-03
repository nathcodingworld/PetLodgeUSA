import MainListing from "@components/main/mainListing";
import MainCard from "@components/main/mainCard"; 
import style from "@styles/sections/section.module.scss"


export default function Services() {
    return (
        <section className={style.Section}> 
            <MainListing w="330px">
                <MainCard 
                    media="/offers/dc1.webp"
                    title="DAYCARE"
                    description="Bring your paw-kids to daycare and go to work guilt-free."
                    link="/service/daycare"
                    price="$ 25"
                />
                <MainCard 
                    media="/offers/dc1.webp"
                    title="DAYCARE"
                    description="Bring your paw-kids to daycare and go to work guilt-free."
                    link="/service/daycare"
                    price="$ 25"
                />
                <MainCard 
                    media="/offers/dc1.webp"
                    title="DAYCARE"
                    description="Bring your paw-kids to daycare and go to work guilt-free."
                    link="/service/daycare"
                    price="$ 25"
                />
                 <MainCard 
                    media="/offers/dc1.webp"
                    title="DAYCARE"
                    description="Bring your paw-kids to daycare and go to work guilt-free."
                    link="/service/daycare"
                    price="$ 25"
                />
                <MainCard 
                    media="/offers/dc1.webp"
                    title="DAYCARE"
                    description="Bring your paw-kids to daycare and go to work guilt-free."
                    link="/service/daycare"
                    price="$ 25"
                />
            </MainListing>
        </section>
    )
}