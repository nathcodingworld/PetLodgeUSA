import MainListing from "@components/main/mainListing";
import MainCard from "@components/main/mainCard";
import MainHeading from "@snippets/mainHeading";
import style from "@styles/sections/section.module.scss"


export default function Offer() {
    return (
        <section className={style.Section}>
            <MainHeading title="We Offer" />
            <MainListing>
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