import MainArticle from '@components/main/mainArticle'
import style from "@styles/sections/section.module.scss"

import React from 'react'

export default function WhoWeAre() {
  return (
    <section className={style.Section}>
        <MainArticle title='Who We Are' subtitle='16, 000 Square Feet of Fun' >
            <p>We are Veteran/Minority-owned (Husband and wife) that specialize in loving and caring for your pets! Scott and Kim opened Pet Lodge USA on June 28, 2008, when they recognized a need for &ldquo;affordable&rdquo;, &ldquo;trustworthy&rdquo; pet care in the Mahoning, Trumbull, Columbiana, and even Mercer and Lawerence Counties too. With 10 dogs of their own, Scott and Kim know what it means to make a pet happy. They have 10 pet-loving caregivers who have nearly 50 pets between them! Scott and Kim are dedicated to the well-being of animals everywhere, they are board members of Angels for Animals and Friends of Fido, and are on the fundraising committee of The Mahoning County Dog Pound.</p>
            <h6>&ldquo;Love, Care, and Compassion&rdquo; is The Pet Lodge&apos;s motto!</h6>
            <p>Each pet has a unique personality and disposition. Because of this, every guest will be cared for in his/her own special way. This requires lots of love, care, compassion, and even patience. We can accommodate any request you may have, even for special needs pets. Each caregiver has a range of experience and a wealth of knowledge.</p>
            <p>We are NOT a typical Kennel- our pet suites are spacious, clean, and private. Our love, time, and attention are included- we never charge you to play and interact with your pets! We want them to be as comfortable and happy as possible when they have to be away from you - that&apos;s why we treat your family as though they are our own.
            Whether you want to lodge your pets for the day, overnight, a week, month or even extended stays - because you love your pets, you can count on Pet Lodge USA of Boardman to care for them with love and compassion too.</p>
            <p>Our staff is fully trained, ready to love your pet, and in the facility 24 hours a day. Thank you for choosing Pet Lodge USA of Boardman - we know you and your pets are going to love it here!&quot; - Kim and Scott</p>
        </MainArticle>
    </section>
  )
}
