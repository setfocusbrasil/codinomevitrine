import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import * as gtag from "../../lib/gtag";
import styles from "./styles.module.scss";


export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function closeMenu() {
    setShowMenu(false);
  }

  function agendarConsulta() {
    gtag.event({
      action: "agendar_consulta_cabeçalho",
      category: "marcar_consulta_whatsapp_cabeçalho",
      label: "Orçamento pelo Whatsapp",
      value: "Marcar consulta",
    });
  }

  function agendarConsultaMenu() {
    setShowMenu(false);
    gtag.event({
      action: "agendar_consulta_cabeçalho",
      category: "marcar_consulta_whatsapp_cabeçalho",
      label: "Fale com nossos vendedores",
      value: "Fale Conosco",
    });
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.blackBar}>
          <li className={styles.social}>
            <left>
              <Link
                href="https://www.instagram.com/hobbystorelp/"
                legacyBehavior
              >
                <a target="_blank">
                  <Image
                    src="/icons/instaFooter.svg"
                    alt="Logo"
                    width="20"
                    height="20"
                  />
                </a>
              </Link>
              <Link
                href="https://www.facebook.com/hobbyvideostore"
                legacyBehavior
              >
                <a target="_blank">
                  <Image
                    src="/icons/faceFooter.svg"
                    alt="Logo"
                    width="20"
                    height="20"
                  />
                </a>
              </Link>
            </left>
          </li>
        </div>
        <div className={`${styles.mainContainer} ${styles.logoMenuContainer} ${styles.centeredContainer}`}>



          <div className={styles.menuContainer}>
            <Link
              href="https://codinomevitrine.vercel.app/cursos_ead"
              legacyBehavior
            >
              <a className={styles.menuItem}>Home</a>
            </Link>
            <Link href="https://wa.me/5514997374107" legacyBehavior>
              <a className={styles.menuItem}>Fale com um Atendente</a>
            </Link>
          </div>
          
        </div>
        <nav
          className={
            showMenu
              ? `${styles.menuMobile} ${styles.active}`
              : styles.menuMobile
          }
        >
          <ul>
            <li onClick={closeMenu}>
              <Link
                href="https://qualitysegconsultoria.com.br/esocial/"
                legacyBehavior
              >
                <a className={styles.menuItem}>Home</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="https://wa.me/5514997374107" legacyBehavior>
                <a className={styles.menuItem}>Fale com um Atendente</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
