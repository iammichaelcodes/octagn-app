import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import styles from "../components/css/Header.module.css"
import logo from "../assets/octagn.jpg";

  

const Header = () => {
    const OCTAGN = '/';
    const buy = '/buy octagn';
    const chart = '/chart octagn'

    const [show, handle_show] = useState(false);
    return(
       <Fragment>
           <nav>
                <div className={`${styles.mobile} ${show?styles.open:''}`}>
                    <div >
                        <img src={logo}></img>
                        <span className={styles.Menu_Icon} onClick={()=>handle_show(!show)}>
                            {show?<>&times;</>:<>&#9776;</>}
                        </span>
                    </div>
                    <ul>
                        <Link to = {OCTAGN}>
                           <li>OCTAGN</li>
                        </Link>
                        <Link to = {buy}>
                        <li>BUY OCTAGN</li>
                        </Link>
                        <Link to={chart}>
                            <li>CHART OCTAGN</li>
                        </Link>
                    </ul>
                    
                </div>
                <div className={styles.desktop}>
                    <ul>
                        <Link to = {OCTAGN}>
                           <li>OCTAGN</li>
                        </Link>
                        <Link to = {buy}>
                        <li>BUY OCTAGN</li>
                        </Link>
                        <Link to={chart}>
                            <li>CHART OCTAGN</li>
                        </Link>
                    </ul>
                </div> 
           </nav>
       </Fragment>
    )
}

export default Header;