import React from "react"
import { Heading } from "~/components/heading"
import { DecoderText } from "~/components/decoder-text"
import { Button } from "~/components/button"
import styles from "./pricing.module.css"

export const FeatureComparison = ({ visible, titleId }) => (
  <React.Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Pricing" start={visible} delay={500} />
    </Heading>
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
  </React.Fragment>
)