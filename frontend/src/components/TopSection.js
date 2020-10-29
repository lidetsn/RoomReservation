import React from "react";

const TopSection = ({ children, hero }) => {
  
  return <section className={hero}>{children}</section>;
};

export default TopSection;

TopSection.defaultProps = {
  hero: "defaultHero"
};
