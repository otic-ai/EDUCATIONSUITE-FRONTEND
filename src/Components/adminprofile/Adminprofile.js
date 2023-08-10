import "./Adminprofile.css";
import { adminprofile } from "../../Data/profile.js";
const Adminprofile = () => {
  const adminData = adminprofile[0];
  return (
    <div className="adminprofile">
      <ul className="admin">
        {Object.keys(adminData).map((key) => (
          <li key={key} className="list-item">
            <strong>{key}:</strong> {adminData[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Adminprofile;
