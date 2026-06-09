import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.content}>
          <h1>
            Connect Freely.
            <br />
            Chat Securely.
          </h1>

          <p>
            LINKSCHAT helps you stay connected through fast, secure and private
            messaging.
          </p>

          <div className={styles.buttons}>
            <button>Download App</button>
            <button className={styles.secondary}>Learn More</button>
          </div>
        </div>

        <div className={styles.phoneMockup}>
          <div className={styles.phone}>
            <div className={styles.chat}>👋 Hello there!</div>

            <div className={styles.chatRight}>Welcome to LINKSCHAT</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
