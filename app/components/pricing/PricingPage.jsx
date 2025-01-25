import React from "react"
import { Check, Rocket, Flame } from "lucide-react"
import styles from "./pricing.module.css"

export const PricingPage = ({ visible, titleId }) => (
  <div className={styles.wrapper}>
    <div className={styles.stars}>
      <svg viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
        <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
      </svg>
      <svg viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
        <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
      </svg>
    </div>

    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Simple pricing
          <br />
          for agencies of all sizes
        </h1>
        <p className={styles.subtitle}>Project-based payments, as you go</p>
      </div>

      <div className={styles.billingToggle}>
        <button className={styles.toggleButton} data-active="true">
          Monthly
        </button>
        <button className={styles.toggleButton} data-active="false">
          Annually
        </button>
        <span className={styles.discount}>20% off</span>
      </div>

      <div className={styles.pricingGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Pro</h2>
            <div className={styles.iconWrapper}>
              <Rocket className={styles.icon} />
            </div>
          </div>

          <div className={styles.pricing}>
            <div className={styles.amount}>
              <span className={styles.price}>$155</span>
              <span className={styles.period}>/ team</span>
            </div>
            <p className={styles.description}>The most powerful cloud automation designed for PRO teams</p>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <Check className={styles.checkIcon} />
              <span>Unlimited LinkedIn & Email accounts</span>
            </div>
            <div className={styles.feature}>
              <Check className={styles.checkIcon} />
              <span>Unlimited basic enrichment</span>
            </div>
            <div className={styles.feature}>
              <Check className={styles.checkIcon} />
              <span>20k uploaded contacts</span>
            </div>
            <div className={styles.feature}>
              <Check className={styles.checkIcon} />
              <span>40k activities monthly</span>
            </div>
            <div className={styles.feature}>
              <Check className={styles.checkIcon} />
              <span>10k advanced enrichment credits</span>
            </div>
          </div>

          <button className={styles.button}>Start for free</button>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Scale</h2>
            <div className={styles.iconWrapper}>
              <Flame className={styles.icon} />
            </div>
          </div>

          <div className={styles.pricing}>
            <div className={styles.amount}>
              <span className={styles.price}>$557</span>
              <span className={styles.period}>/ team</span>
            </div>
            <p className={styles.description}>The best way to scale outbound channel and maximize ROI</p>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <Check className={styles.checkIcon} />
              <span>Unlimited LinkedIn & Email accounts</span>
            </div>
            <div className={styles.feature}>
              <Check className={styles.checkIcon} />
              <span>Unlimited basic enrichment</span>
            </div>
            <div className={styles.feature}>
              <Check className={styles.checkIcon} />
              <span>200k uploaded contacts</span>
            </div>
            <div className={styles.feature}>
              <Check className={styles.checkIcon} />
              <span>400k activities monthly</span>
            </div>
            <div className={styles.feature}>
              <Check className={styles.checkIcon} />
              <span>100k advanced enrichment credits</span>
            </div>
          </div>

          <button className={styles.button}>Start for free</button>
        </div>
      </div>
    </div>
  </div>
)

