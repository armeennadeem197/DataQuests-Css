"use client"; // Add if you need client-side interactivity

import styles from '@/app/styles/about.module.css';
import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <div className={styles.container}>
      <section className={styles.aboutUs}>
        <div className={styles.about1}>
          <h1 className={styles.title}>About Us</h1>
          <Image 
            src="/1.jpg" 
            width={1200} 
            height={800} 
            alt="About Us Image"
            className={styles.mainImage}
            priority // Add priority for above-the-fold images
          />
          <div className={styles.contents}>
            {[{
              title: "Who We Are?",
              description: "Contextual advertising programs sometimes have strict policies that need to be adhered to. Let&apos;s take Google as an example."
            }, {
              title: "What We Do?",
              description: "In this digital generation where information can be easily obtained within seconds, business cards still have retained their importance."
            }, {
              title: "Why Choose Us?",
              description: "A two or three storey house is the ideal way to maximise the piece of earth on which our home sits, but for older or infirm people."
            }].map((item, index) => (
              <div key={index} className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.about2}>
          <Image 
            src="/2.jpg" 
            width={600} 
            height={400} 
            alt="Quote Image"
            className={styles.quoteImage}
          />
          <div className={styles.testimonial}>
            <i className="fa-solid fa-quote-left"></i>
            <blockquote>
              &quot;Going out after work? Take your butane curling iron with you to the 
              office, heat it up, style your hair before you leave the office and you won&apos;t 
              have to make a trip back home.&quot;
            </blockquote>
            <div className={styles.profile}>
              <Image 
                src="/4.png" 
                alt="Profile Image" 
                width={80} 
                height={80}
                className={styles.profileImage}
              />
              <div className={styles.profileContent}>
                <h4>Armeen Nadeem</h4>
                <span>Front-end Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
