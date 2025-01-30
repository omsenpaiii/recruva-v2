import profileImgLarge from "~/assets/profile-img-shrey.jpeg"
import profileImgPlaceholder from "~/assets/profile-placeholder.jpg"
import profileImg from "~/assets/profile.jpg"
import { Button } from "~/components/button"
import { DecoderText } from "~/components/decoder-text"
import { Divider } from "~/components/divider"
import { Heading } from "~/components/heading"
import { Image } from "~/components/image"
import { Link } from "~/components/link"
import { Section } from "~/components/section"
import { Text } from "~/components/text"
import { Transition } from "~/components/transition"
import { Fragment, useState } from "react"
import { media } from "~/utils/style"
import katakana from "./katakana.svg"
import styles from "./profile.module.css"
import config from "~/config.json"
import { Check, Rocket, Flame } from 'lucide-react'

const PricingPage = ({ visible, titleId }) => {
  const [billingCycle, setBillingCycle] = useState('monthly')
  
  const prices = {
    pro: {
      monthly: 590,
      annually: 406
    },
    scale: {
      monthly: 3750,
      annually: 2580
    }
  }

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <Heading className={styles.mainTitle} data-visible={visible} level={3} id={titleId}>
              <DecoderText text="Pricing" start={visible} delay={500} />
            </Heading>
            <div className={styles.stars}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
                <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
                <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
              </svg>
            </div>
          </div>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Simple pricing
              <br />
              for companies and agencies
            </h1>
            <p className={styles.subtitle}>Start your free trial, without your credit card</p>
          </div>

          <div className={styles.billingToggle}>
            <button 
              className={styles.toggleButton} 
              data-active={billingCycle === 'monthly'}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={styles.toggleButton} 
              data-active={billingCycle === 'annually'}
              onClick={() => setBillingCycle('annually')}
            >
              Annually
            </button>
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
                  <span className={styles.price}>${prices.pro[billingCycle]}</span>
                  <span className={styles.period}>/ team / mo</span>
                </div>
                <p className={styles.description}>
                  The most powerful cloud automation designed for PRO teams
                </p>
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
                <div className={styles.feature}>
                  <Check className={styles.checkIcon} />
                  <span>Hire 30+ people monthly</span>
                </div>
                <div className={styles.feature}>
                  <Check className={styles.checkIcon} />
                  <span>Generate 100+ B2B/B2C warm leads monthly</span>
                </div>
              </div>
              <a href="https://app.recruva.io/signup">
                <button className={styles.purchaseButton}>
                  Start for free
                </button>
              </a>
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
                  <span className={styles.price}>${prices.scale[billingCycle]}</span>
                  <span className={styles.period}>/ team / mo</span>
                </div>
                <p className={styles.description}>
                  The best way to scale outbound channel and maximize ROI
                </p>
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
                <div className={styles.feature}>
                  <Check className={styles.checkIcon} />
                  <span>Hire 300+ people monthly, ideal for agencies</span>
                </div>
                <div className={styles.feature}>
                  <Check className={styles.checkIcon} />
                  <span>Generate 1000+ B2B/B2C warm leads monthly</span>
                </div>
              </div>
              <a href="https://app.recruva.io/signup">
                <button className={styles.purchaseButton}>
                  Start for free
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const FeatureComparison = ({ visible, titleId }) => (
  <Fragment>
    <div className={styles.pricingContainer} data-visible={visible}>
      <div className={styles.pricingTable}>
        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Exclusive</th>
                <th>Pro</th>
                <th>Scale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unlimited LinkedIn & Email accounts</td>
                <td>
                  <Button icon="check" secondary />
                </td>
                <td>
                  <Button icon="check" secondary />
                </td>
              </tr>
              <tr>
                <td>Sender Profiles rotation</td>
                <td>
                  <Button icon="check" secondary />
                </td>
                <td>
                  <Button icon="check" secondary />
                </td>
              </tr>
              <tr>
                <td>Exclusive account safety with Single Session Protection</td>
                <td>
                  <Button icon="check" secondary />
                </td>
                <td>
                  <Button icon="check" secondary />
                </td>
              </tr>
              <tr>
                <td>Unified senders dashboard</td>
                <td>
                  <Button icon="check" secondary />
                </td>
                <td>
                  <Button icon="check" secondary />
                </td>
              </tr>
              <tr>
                <td>LinkedIn & Email full historical communication sync</td>
                <td>
                  <Button icon="check" secondary />
                </td>
                <td>
                  <Button icon="check" secondary />
                </td>
              </tr>
              <tr>
                <td>Advanced Enrichment credits</td>
                <td>10,000</td>
                <td>100,000</td>
              </tr>
              <tr>
                <td>Activities limit</td>
                <td>40,000</td>
                <td>400,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Core Features</th>
                <th>Pro</th>
                <th>Scale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cloud LinkedIn automation (Residential proxy included)</td>
                <td>
                  <Button icon="check" secondary />
                </td>
                <td>
                  <Button icon="check" secondary />
                </td>
              </tr>
              <tr>
                <td>Cloud Email automation</td>
                <td>
                  <Button icon="check" secondary />
                </td>
                <td>
                  <Button icon="check" secondary />
                </td>
              </tr>
              <tr>
                <td>A-Z Testing</td>
                <td>
                  <Button icon="check" secondary />
                </td>
                <td>
                  <Button icon="check" secondary />
                </td>
              </tr>
              <tr>
                <td>Data Import from LinkedIn and CSV</td>
                <td>
                  <Button icon="check" secondary />
                </td>
                <td>
                  <Button icon="check" secondary />
                </td>
              </tr>
              <tr>
                <td>LinkedIn Chrome Extension to save leads from LinkedIn</td>
                <td>
                  <Button icon="check" secondary />
                </td>
                <td>
                  <Button icon="check" secondary />
                </td>
              </tr>
              <tr>
                <td>CRM with advanced filters</td>
                <td>
                  <Button icon="check" secondary />
                </td>
                <td>
                  <Button icon="check" secondary />
                </td>
              </tr>
              <tr>
                <td>SDR Task Manager</td>
                <td>
                  <Button icon="check" secondary />
                </td>
                <td>
                  <Button icon="check" secondary />
                </td>
              </tr>
              <tr>
                <td>Webhooks</td>
                <td>
                  <Button icon="check" secondary />
                </td>
                <td>
                  <Button icon="check" secondary />
                </td>
              </tr>
              <tr>
                <td>API</td>
                <td>
                  <Button icon="check" secondary />
                </td>
                <td>
                  <Button icon="check" secondary />
                </td>
              </tr>
              <tr>
                <td>Number of users</td>
                <td>5 users</td>
                <td>Unlimited</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Fragment>
)

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false)
  const titleId = `${id}-title`

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <PricingPage visible={visible} titleId={titleId} />
            <FeatureComparison visible={visible} titleId={titleId} />
            <div className={styles.aboutUs}>
              <div className={styles.tag} aria-hidden>
                <Divider notchWidth="64px" notchHeight="8px" collapsed={!visible} collapseDelay={1000} />
                <div className={styles.tagText} data-visible={visible}>
                  About Us.
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Shrey smiling like a goofball at the home office in India."
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
            <Button secondary className={styles.button} data-visible={visible} href="/contact" icon="send">
              Get Started
            </Button>
          </div>
        )}
      </Transition>
    </Section>
  )
}
