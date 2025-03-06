import React from "react";
import styles from "./Custom.module.css";

const ImageCustom = () => {
  return (
    <>
      <section className={styles.CustomImage}>
          <div>
            <img src="/assets/4.png" alt="" />
          </div>
          <div className={styles.CustomContentImage}>
            <h6>Create Profiles for Kids</h6>
            <p>
              Send Children on Adventures with their Favorite Characters in a
              Space Made Just for Them Free with Your Membership.
            </p>
          </div>
      </section>
    </>
  );
};

export default ImageCustom;
