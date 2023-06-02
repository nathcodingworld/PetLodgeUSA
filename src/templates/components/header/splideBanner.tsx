'use client';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import '@splidejs/react-splide/css';



export default function SplideBanner() {
    return ( 
    <Splide 
    aria-label="Website Banner"
    options={{
        type: 'fade', 
        height: 700,
        pagination: false,
        arrows: false,
        cover: true,
        autoplay: true,
        rewind: true
    }}
    >
        <SplideSlide>
            <Image src='/dog1.png' alt="dog looking to user" width={1800} height={1500}/>
        </SplideSlide>
        <SplideSlide>
            <Image src='/cats.png' alt="cats resting" width={1800} height={1500}/> 
        </SplideSlide>
        <SplideSlide>
            <Image src='/dog2.png' alt="cats resting" width={1800} height={1500}/> 
        </SplideSlide>
    </Splide> 
    )
}