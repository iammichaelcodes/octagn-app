import { Fragment } from "react";
import styles from "./css/home.module.css";
import octagn from "../assets/octagn2.jpg";
import samplevid from "../assets/octagn.mp4";


const Home = () => {
    return(
        <Fragment>
             <section className={styles.about}>
                <div>
                    <div className={styles.mainCon}>
                      WHAT ABOUT <span><span className="roboto-medium">$</span>OCTAGN</span> ?
                    </div>
                    <p className="urbanist-medium">For nearly Eight years, two of tech's biggest names — Elon Musk and Mark Zuckerberg — have been caught up in a feud, clashing over topics like artificial intelligence and rockets. The two men have been griping about each other behind closed doors for years, according to (WSJ) Will a Good Old Cage match settle this feud once and for all!!! Let the Fists do the talking in the $OCTAGON.</p><br/>
                    <p className="urbanist-medium">
                    Whoever WINS will be hailed as the greatest Tech baron that ever lived! Bring on $OCTAGN, the meme coin that powers this up-and-coming fight. Community Driven token with a fun play on the "supposedly upcoming" UFC fight between Elon Musk and Mark Zuckerberg! 
                    </p>
                       <img src={octagn} />
                       <span className={styles.line}></span>
                </div>
             </section>
             <section className={styles.video}>
                <div>
                    <h1 className="urbanist-medium">
                        WHAT ABOUT OCTAGN?
                        <span className={styles.span_line}>BE FR</span>
                    </h1>
                    <video controls>
                        <source src={samplevid} type="video/mp4"/>
                   </video>
                </div>
             </section>
             <section className={styles.ringDiv}>
                <div>
                    <h1 className="roboto-medium">MUSK VS ZUCK</h1>    
                    <p className="urbanist-medium">The MUSKVZUCK Meme is a playful and engaging cryptocurrency project centred around the "supposedly upcoming" UFC fight between Elon Musk and Mark Zuckerberg. 
                    The aim is to create a fun and light-hearted community that promotes monumental fight! Which side are you Elon or Zuck! Bring on the $OCTAGN Imagine if Elon Retweets Us! -Well help fund the FIGHT!By the community For the Community</p>
                </div>
             </section>
        </Fragment>
    )

}

export default Home;