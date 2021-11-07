import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Rexct</title>
        <meta property="og:title" content="Rexct" />
      </Helmet>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <img
            alt="image"
            src="/playground_assets/logo.svg"
            className={styles['image']}
          />
          <button
            className={` ${projectStyles['button']} ${styles['button']} `}
          >
            Button
          </button>
        </div>
        <div className={styles['container3']}>
          <h1 className={styles['text']}>
            <span>Host clubs and teams</span>
            <br></br>
            <span>easily with our app</span>
          </h1>
          <h1 className={styles['text3']}>
            <span>
              Rexct is an app that brings people together through clubs to share
              life events through posts, join clubs/communities, host events and
              communicate easily.
            </span>
          </h1>
          <form className={styles['form']}>
            <input
              type="text"
              placeholder="placeholder"
              className={` ${projectStyles['input']} ${styles['textinput']} `}
            />
            <button
              className={` ${projectStyles['button']} ${styles['button1']} `}
            >
              <span className={styles['text5']}>
                <span>Subscribe</span>
                <span></span>
              </span>
            </button>
          </form>
        </div>
        <img
          alt="image"
          src="/playground_assets/screens-1200h.png"
          className={styles['image1']}
        />
      </div>
    </div>
  )
}

export default Home
