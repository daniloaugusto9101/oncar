import { Link } from "react-router-dom";
import url from "../../assets/img/logo.png";

const Logo = () => {
  return (
    <div className="w-28 md:w-40">
      <Link to={"/oncar"}>
        <img src={url} alt="Logo da empresa" />
      </Link>
    </div>
  );
};

export default Logo;
