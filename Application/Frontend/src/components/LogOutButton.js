import logout from "../services/Logout_API";
import { Link } from "react-router-dom";
import {useState} from "react"
import styles from "../pages/home.module.css";
import { useHistory } from "react-router-dom";


const LogOutButton = () => {

    let history = useHistory();

    const [isLoggedout, setLoggedout] = useState(false);

    function handleClick(event) {
        event.preventDefault();
        logout().then((res) => {
          if (res === null) {
            setLoggedout(true);
            setTimeout(() => {
              history.push("/");
            }, "1500");
          }
        });
      }

    return (
    <Link to="/">
        <button
        className={styles.mybutton}
        style={{ position: "absolute", top: "20px", right: "5px" }}
        onClick={handleClick}
        >
        Log out
        </button>
    </Link>
  )
}



export default LogOutButton