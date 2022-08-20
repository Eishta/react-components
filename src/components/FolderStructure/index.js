import "./style.css";
import directory from "./directoryData";
import Directory from "./Directory";

export default function FolderStructure() {
    return (
        <div className="App">
            {directory.map((item) => (
                <Directory data={item} level={0} />
            ))}
        </div>
    );
}
