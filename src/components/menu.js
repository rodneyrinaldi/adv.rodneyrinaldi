import React from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion';

import styles from './menu.module.css';

const variants = {
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
  },
  hover: { scale: 1.04 }
}

function Menu({ url, alt, pic, title, description, type }) {
  return (<>
    <div className={styles.wrapperCard}>
      <Link href={url}>
        <a>
          <motion.div variants={variants} className={styles.wrapperMotion}
            initial="initial" animate="enter" exit="exit" whileHover="hover"
          >
            <div className={styles.wrapperIcon}>
              <img src={pic} alt={alt} className={styles.icon} />
            </div>
            <h1 className={styles.wrapperTitle} >{title}</h1>
            <h1 className={styles.wrapperDescription} >{description}</h1>
          </motion.div>
        </a>
      </Link>
    </div>
  </>);
}

function xxx({ url, alt, pic, title, description, type }) {
  return (
    <motion.div variants={variants}
      initial="initial" animate="enter" exit="exit" whileHover="hover"
    >
      <Link href={url}>
        <div>
          <a>
            <img src={pic} alt={alt} />
            {
              (!type ? <h1>{title}</h1> : <h3>{title}</h3>)
            }
            {
              (!type ? <h2>{description}</h2> : <></>)
            }
          </a>
        </div>
      </Link>
    </motion.div>
  );
}

export default Menu