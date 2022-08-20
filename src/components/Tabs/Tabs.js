import React, { cloneElement } from "react";

const Tabs = ({ activeIndex, onChangeTab, children }) => {
  let tabs = React.Children.toArray(children).filter(
    (child) => child.type.name === "Tab"
  );
  let tabsPane = React.Children.toArray(children).filter(
    (child) => child.type.name === "TabPane"
  );
  return (
    <div>
      <div className="tabsContainer">
        {tabs.map((tab, index) =>
          cloneElement(tab, {
            isSelected: activeIndex === index,
            onClick: () => onChangeTab(index)
          })
        )}
      </div>
      {tabsPane.find((tabsPane, index) => activeIndex === index)}
    </div>
  );
};

export default Tabs;
