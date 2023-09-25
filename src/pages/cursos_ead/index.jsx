import { useEffect } from "react";
import Head from "next/head";

import Image from "next/image";
import Link from 'next/link';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";
import CursosEad from "../../components/SearchBar";

export default function Tratamentos() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header/>
      <section className={styles.images} >
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <Title title="HOBBY VIDEO STORE" subtitle="Presentes e Muito Mais" />
          </div>
        
          <div className={styles.imageContainer}>
            <Image src="https://imgur.com/skSoNAN.png" alt="Logo" layout="intrinsic" width={350} height={260} data-aos="fade-in"/>
          </div>
        </div>
      </section>
      
      <CursosEad/>
      <Footer />
    </>
  );
}
