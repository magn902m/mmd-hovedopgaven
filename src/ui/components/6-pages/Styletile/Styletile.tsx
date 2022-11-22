import React from "react";
import styles from "./Styletile.module.scss";

export default function Styletile() {
  return (
    <div className={styles.styletile}>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>Paragraph</p>

      <section className={styles.colorSection}>
        <div className={styles.box1}>lightblue</div>
        <div className={styles.box2}>darkblue</div>
        <div className={styles.box3}>orange</div>
        <div className={styles.box4}>brightblue</div>
        <div className={styles.box5}>bluegrey</div>
        <div className={styles.box6}>middleblue</div>
      </section>

      <a href="/home">Home</a>
      <button>Click me</button>
      <button className="cta">Click me</button>
    </div>
  );
}
