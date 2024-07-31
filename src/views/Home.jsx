import { Fragment } from "react";
import styles from "./css/home.module.css";
import octagn from "../assets/octagn.jpg";


const Home = () => {
    return(
        <Fragment>
             <section className={styles.about}>
                <div>
                    <div className={styles.mainCon}>
                      WHAT ABOUT <span><span className="roboto-medium">$</span>OCTAGN</span> ?
                    </div>
                    <p>For nearly Eight years, two of tech's biggest names — Elon Musk and Mark Zuckerberg — have been caught up in a feud, clashing over topics like artificial intelligence and rockets. The two men have been griping about each other behind closed doors for years, according to (WSJ) Will a Good Old Cage match settle this feud once and for all!!! Let the Fists do the talking in the $OCTAGON.</p><br/>
                    <p>
                    Whoever WINS will be hailed as the greatest Tech baron that ever lived! Bring on $OCTAGN, the meme coin that powers this up-and-coming fight. Community Driven token with a fun play on the "supposedly upcoming" UFC fight between Elon Musk and Mark Zuckerberg! 
                    </p>
                    <img src={octagn} />
                </div>
                    
             </section>
        </Fragment>
    )

}

export default Home;