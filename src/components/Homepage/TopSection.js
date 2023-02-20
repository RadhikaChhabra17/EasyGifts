import React from "react";

const headerHeight = { height: window.innerHeight };
const TopSection = () => {
  return (
    <div className="section" style={headerHeight}>
      <h1>Gifts at your door steps</h1>
      <p>
        Spend less time worrying about how to make moments special for your loved ones.
      </p>
    </div>
  );
};

export default TopSection;
