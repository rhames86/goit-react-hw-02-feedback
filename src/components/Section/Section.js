import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ title = "", children }) => {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.section__title}>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Section;
