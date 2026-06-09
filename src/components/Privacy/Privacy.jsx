import styles from "./Privacy.module.css";
import { FaCheckCircle } from "react-icons/fa";

function Privacy() {
  return (
    <section className={styles.privacy}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.imageSide}>
          <div className={styles.phone}>
            <div className={styles.lock}>🔒</div>
          </div>
        </div>

        <div className={styles.content}>
          <span>PRIVACY FIRST</span>

          <h2>
            Your Conversations Stay Between You and the People You Choose.
          </h2>

          <p>
            LINKSCHAT uses advanced encryption technology to protect your
            messages, calls, media, and files.
          </p>

          <ul>
            <li>
              <FaCheckCircle />
              End-to-End Encryption
            </li>

            <li>
              <FaCheckCircle />
              Two-Factor Authentication
            </li>

            <li>
              <FaCheckCircle />
              Device Protection
            </li>

            <li>
              <FaCheckCircle />
              Secure Cloud Backup
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Privacy;
