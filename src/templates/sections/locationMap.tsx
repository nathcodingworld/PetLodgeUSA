import React from 'react'
import style from '@styles/sections/header.module.scss'

export default function LocationMap() {
  return (
    <section className={style.BannerMap}>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.9704386631743!2d-80.66409758783723!3d41.00402021956678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8833fa473c0b6315%3A0xa68fd5a0022dbd35!2s8063%20Market%20St%2C%20Boardman%2C%20OH%2044512%2C%20USA!5e0!3m2!1sen!2sph!4v1685803953740!5m2!1sen!2sph" 
        width='100%' 
        height={700} 
        style={{border:0}} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div>
            
        </div>
    </section>
  )
}
