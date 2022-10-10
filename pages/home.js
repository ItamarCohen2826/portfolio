import Head from 'next/head'
import Image from 'next/future/image'
import styles from '../styles/Home.module.css'
import backgroundStyle from '../styles/Background.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts';
import { useInView } from 'react-intersection-observer';

import { Toaster, toast } from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faCode } from '@fortawesome/fontawesome-free-solid';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';
import StackOverflowLogo from '../public/stack.png';
import FiverrLogo from '../public/fiverr.png';


import { library } from '@fortawesome/fontawesome-svg-core';
import Script from 'next/script';
import { motion, useAnimation } from "framer-motion";


library.add(faCode);
library.add();

const sectionVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 }},
  hidden: { opacity: 0, scale: 0 }
};



function Home() {
  const [cursorOn, setCursor] = useState(true);
  const [ref, inView] = useInView();
  const control = useAnimation();

  const {text} = useTypewriter({
    deleteSpeed: 100,
    delaySpeed: 1500,
    words: ['front end developer', 'back end developer', 'full stack developer'],
    loop: 1, // 1 time
    onLoopDone: () => {
      setCursor(false);
    },
  })
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  
  return (
    <div className={`${styles.container} ${backgroundStyle.wrapper}`}>
      <Toaster />
      <Head>
        <title>Itamar Cohen</title>
        <meta name="description" content="Portfolio website Itamar Cohen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
          <motion.section ref={ref} className={`${styles.section}`} variants={sectionVariant} initial='hidden' animate={control} viewport={{ root: ref }}>
            <h1 className={styles.title}>Itamar Cohen</h1>
            <h2 className={styles.subtitle}>I&apos;m a {text}{cursorOn ? <Cursor /> : '.'}</h2> 
            <FontAwesomeIcon icon={faCode} style={{ zIndex: 2}} height={100} width={100} />             
          </motion.section>
          <motion.section className={`${styles.section}`} initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}>
                <span className={`${styles.about} fs-1`}>About me</span>
                <br />
                <span className={`${styles.content} fs-3`}>
                  I live in Israel and I&apos;m a ReactJS and NextJS programmer.
                <br />
                you can contact me via my mail: 
                </span>
                <span onClick={() => {
                  setTimeout(async() => 
                    await window.navigator.clipboard.writeText("itamar_cohen@outlook.com"), 3000);
                    toast.success("Copied!");
                }}>
                  <span className={`${styles.content}  ${styles.copy} fst-italic success fs-3`}> itamar_cohen@outlook.com</span>
                </span>
              <br />
              <br />
              <br />
              <div>
                <a rel="noopener noreferrer" className={styles.redirect} target="_blank" href='https://github.com/ItamarCohen2826/ItamarCohen2826'>
                  {/* <Image src={GithubLogo} className={styles.logo} height={50} width={50}></Image> */}
                  <FontAwesomeIcon icon={faGithub} className={styles.logo} style={{ zIndex: 2}} height={50} width={50} />             
                </a>
                <a rel="noopener noreferrer" className={styles.redirect} target="_blank" href='https://stackoverflow.com/users/16891993/itamar-cohen'>
                  <Image src={StackOverflowLogo} className={styles.logo} height={50} width={50} alt=''></Image>
                </a>
                <a rel="noopener noreferrer" className={styles.redirect} target="_blank" href='https://www.fiverr.com/share/KXRrxW'>
                  <Image src={FiverrLogo} className={styles.logo} height={50} width={50} alt=''></Image>
                </a>
              </div>
            </motion.section>
        </main> 
    </div>
  )
}

export default Home;