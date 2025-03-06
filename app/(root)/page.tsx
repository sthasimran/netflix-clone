import styles from "./page.module.css";
import Button from "./components/Button/Button";
import CustomRight from "./components/Custom/CustomRight";
import CustomLeft from "./components/Custom/CustomLeft";
import ImageCustom from "./components/Custom/ImageCustom";
import Trend from "./components/TrendingContent/Trend";

export default function Home() {
  return (
    <>
      <section className={styles.Home}>
        <div className={styles.HomeContent}>
          
            <h6>Unlimited Movies, TV shows and more</h6>
            <h5>Starts at USD 2.99. Cancel anytime.</h5>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership
            </h4>
        

          <div className={styles.InputBox}>
            <input type="text" placeholder="Email Address" />
            <Button LinkText="Get Started" LinkTo="" />
          </div>
        </div>
      </section>

      {/* For Custom */}
      <Trend />
      {/* <TrendingContent /> */}
      <CustomRight />
      <ImageCustom />
      <CustomLeft />
    </>
  );
}
