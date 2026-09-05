import styles from "./CTA.module.css";

function CTA() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <h2>Ready To Start Chatting?</h2>

        <p>Join millions of users connecting through LinksChat.</p>

        <div className={styles.buttons}>
          <button><a href="https://play.google.com/store/apps/details?id=com.deejoft.linkschat&pcampaignid=web_share">Download for Android</a></button>
          <button>Download for iOS</button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
