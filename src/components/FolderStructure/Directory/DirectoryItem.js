const DirectoryItem = ({ name, type, isOpen, disabled }) => {
    return (
        <div className={`directory-item ${isOpen ? "open" : ""}`} data-type={type}>
            <span className="dir-icon">
                {type === "folder" && !disabled ? (isOpen ? "<" : ">") : null}
            </span>
            {name}
        </div>
    );
};

export default DirectoryItem;

  // Directory item can be a file or folder and both will have a name
