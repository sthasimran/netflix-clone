import styles from "./page.module.css";
import Button from "./components/Button/Button";
import Content1 from "./components/Custom/CustomRight";
import Content3 from "./components/Custom/CustomLeft";
import Content2 from "./components/Custom/ImageCustom";
import Trend from "./components/TrendingContent/Trend";
import Navbar from "./Layout/Navbar/Navbar";
import MovieDescription from "./components/DescriptionMovie/Description";

export default function Home() {
  return (
    <>
      <Navbar />
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
      <Trend />
      <Content1 />
      <Content2 />
      <Content3 />
    </>
  );
}
