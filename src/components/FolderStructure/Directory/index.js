import React, { useState } from "react";
import DirectoryItem from "./DirectoryItem";

// recursive component
// data is object => file or folder
const Directory = ({ data, level }) => {
  // if folder, can be opened and closed
  let [isOpen, toggleDirectory] = useState(false);
  let type = data.type;
  let directoryItem = (
    <DirectoryItem
      name={data.name}
      type={type}
      isOpen={isOpen}
      disabled={type === "folder" && data.subItems.length === 0}
    />
  );
  const renderFolder = () => {
    let folder = (
      <div>
        <div onClick={() => toggleDirectory((prev) => !prev)}>
          {directoryItem}
        </div>
        {isOpen &&
          data.subItems &&
          data.subItems.length > 0 &&
          data.subItems.map((subItem, index) => (
            <Directory key={index} level={level + 1} data={subItem} />
          ))}
      </div>
    );
    return folder;
  };

  return (
    <div style={{ marginLeft: (level + 1) * 10 }}>
      {type === "file" ? directoryItem : renderFolder()}
    </div>
  );
};
export default Directory;
