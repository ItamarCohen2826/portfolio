import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/future/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faCode } from '@fortawesome/fontawesome-free-solid';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';
import GithubLogo from '../public/GitHubLogo.png';
import StackOverflowLogo from '../public/stack.png';
import FiverrLogo from '../public/fiverr.png';
import dynamic from "next/dynamic";
import CopyToClipboard from 'react-copy-to-clipboard';
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { library } from '@fortawesome/fontawesome-svg-core';
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
library.add(faCode);
library.add();

function Home() {
  const [copied, setCopied] = useState(false);
  const {text} = useTypewriter({
    deleteSpeed: 100,
    delaySpeed: 2000,
    words: ['front end developer.', 'back end developer.', 'full stack developer.'],
    loop: 1, // 1 time
  })
  return (
    <div className={`${styles.container} bg-dark bg-gradient`}>
      <Head>
        <title>Itamar Cohen</title>
        <meta name="description" content="Portfolio website Itamar Cohen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
          <ScrollContainer>
          <ScrollPage page={0}>
              <Animator animation={FadeUp}>
                <h1 className={styles.title}>Itamar Cohen</h1>
                <h2 className={styles.subtitle}>I&apos;m a {text}<Cursor /></h2> 
                <FontAwesomeIcon icon={faCode} style={{ zIndex: 2}} height={100} width={100} />             
              </Animator>
            </ScrollPage>
            <ScrollPage page={1}>
              <Animator animation={FadeUp}>
                <span className={`${styles.about} fs-1`}>About me</span>
                <br />
                <span className={`${styles.content} fs-3`}>
                  I live in Israel and I&apos;m a ReactJS and NextJS programmer.
                <br />
                you can contact me via my mail: 
                </span>
                <CopyToClipboard text={"itamar_cohen@outlook.com"}
                onCopy={() =>setCopied(true)}>
                  <span className={`${styles.content}  ${styles.copy} fst-italic success fs-3`}> itamar_cohen@outlook.com</span>
              </CopyToClipboard>
              <br />
              {copied ? <span className={`${styles.content} fst-italic success fs-3`}>Copied.</span> : null}
              <br />
              <br />
              <div>
                <a rel="noopener noreferrer" className={styles.redirect} target="_blank" href='https://github.com/ItamarCohen2826/ItamarCohen2826'>
                  <Image src={GithubLogo} className={styles.logo} height={50} width={50}></Image>
                </a>
                <a rel="noopener noreferrer" className={styles.redirect} target="_blank" href='https://stackoverflow.com/users/16891993/itamar-cohen'>
                  <Image src={StackOverflowLogo} className={styles.logo} height={50} width={50}></Image>
                </a>
                <a rel="noopener noreferrer" className={styles.redirect} target="_blank" href='https://www.fiverr.com/share/KXRrxW'>
                  <Image src={FiverrLogo} className={styles.logo} height={50} width={50}></Image>
                </a>
              </div>
              </Animator>
            </ScrollPage>
          </ScrollContainer>
        </main> 
    </div>
  )
}

export default Home;