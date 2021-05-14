import React from 'react'
import { motion } from 'framer-motion'

import Contact from '../../components/contact'
import Header from '../../components/header'
import Footer from '../../components/footer'

import styles from '../../styles/services.module.css'

export default function Family() {
  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <motion.div
        initial="initial" exit="exit" animate="enter"
        variants={{
          initial: { scale: 1, x: 0, y: 0, opacity: 0 },
          enter: {
            scale: 1, x: 0, y: 0, opacity: 1,
            transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
          },
          exit: {
            scale: 0.6,
            y: 100,
            opacity: 0,
            transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
          }
        }}>
        <Contact showback='yes' />
        <main className={styles.main}>
          <Header />
          <div className={styles.code}>
            <h1>Ações de privacidade</h1>
          </div>
          <div className={styles.grid}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
          </div>
        </main>
        <Footer />
      </motion.div>
    </div>
  )
}