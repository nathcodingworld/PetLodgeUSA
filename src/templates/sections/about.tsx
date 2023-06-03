import MainArticle from "@components/main/mainArticle";
import style from "@styles/sections/section.module.scss"
import Image from "next/image";

export default function About() { 

    return (
    <section className={style.About}>
        <div >
            <Image src='/icon.webp' alt="main logo" width={550} height={360}/>
        </div>
        <div >
            <MainArticle title="About US" link={{url:'/about', title: 'Read More'}}>
                <p>We are Veteran/Minority-owned (Husband and wife) that specialize in loving and caring for your pets! Scott and Kim opened Pet Lodge USA on June 28, 2008, when they recognized a need for &ldquo;affordable&rdquo;, &ldquo;trustworthy&rdquo; pet care in the Mahoning, Trumbull, Columbiana, and even Mercer and Lawerence Counties too. With 10 dogs of their own, Scott and Kim know what it means to make a pet happy. They have 10 pet-loving caregivers who have nearly 50 pets between them! Scott and Kim are dedicated to the well-being of animals everywhere, they are board members of Angels for Animals and Friends of Fido, and are on the fundraising committee of The Mahoning County Dog Pound.</p>
            </MainArticle>
        </div>
    </section>
    )
}