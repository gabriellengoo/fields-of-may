import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import { color } from '@mui/system';


export default function Home() {

    let url = 'https://value-parser.herokuapp.com/';
    
    // create state variable to store the value
    const [valueState, setValueState] = React.useState(styles.goodVision);
    const [dateState, setDateState] = React.useState('//DATEFETCHED//');

    // fetch value from url and set the value to the state
    React.useEffect(() => {
        fetch(url)
        .then(res => res.text())
        .then(data => {
            let arr = data.split(' ');
            setDateState(arr[0]);
          
            let value = parseFloat(arr[2]);
            if(value > 0 && value <= 2) {
                setValueState(styles.goodVision);
            } else if(value > 2.0 && value <= 2.5) {
                setValueState(styles.fairVision);
            } else if(value > 2.6 && value <= 5.8) {                
                setValueState(styles.poorVision);
            } else if(value > 5.9) {
                setValueState(styles.veryPoorVision);
            }
          
        })
    }
    , []);




    return (
        <div className={
            styles.container
        }>
            <Head>
                <title>Fields of May</title>
                <meta name="description" content="Fields of May"/>
                <link rel="icon" href="/favicon.ico"/>
                <script type="text/javascript" src="//code.jquery.com/jquery-1.10.2.min.js" defer></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" defer></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" defer></script>
                <script src="assets/app.js" defer></script>
            </Head>


            <main className={
                styles.main
            }>


                {/* <Image id="image" className={styles.cursorimg} src={cursor}  alt="Herring Fish" width="400px" height="350px"/> */}


                {/*---------------------------- header----------- */}


                <header className={
                    styles.header
                }>
                    <div className={
                        styles.wrapperHeader
                    }>

                        <div className={
                            styles.containerHeader
                        }>


                            <div className={
                                styles.headertime
                            }>
                                <div lassName={styles}>
                                    <ul className={
                                        styles.ul
                                    }>
                                        {/* <h4 className={
                                                styles.spaceingAxies
                                            }id="log">pageX: -, pageY: - </h4> */}
                                        
                                        <span className={
                                                styles.fieldtext
                                            }
                                            id="day">day</span>
                                        <span className={
                                                styles.fieldtext
                                            }
                                            id="daynum">00</span>
                                        <span className={
                                                styles.fieldtext
                                            }
                                            id="month">month</span>


                                        <li className={
                                                styles.spaceingTime
                                            }
                                            id="hours"></li>
                                        <li id="point">:</li>
                                        <li id="min"></li>
                                        <li id="point">:</li>
                                        <li id="sec"></li>
                                    </ul>
                                </div>

                                <div></div>
                            </div>


                        </div>
                    </div>
                </header>


                {/*---------------------------- horizontal gradient ----------- */}
                <section className={
                    styles.gradientTop
                }></section>


                {/*---------------------------- centered text ----------- */}
                <section className={
                    styles.centeredElements
                }>

                    <div className={
                        styles.subMenu
                    }>
                        <a className={
                                styles.linkTop
                            }
                            href="./">Witness Seminars []
                        </a>
                        <a className={
                                styles.linkTop
                            }
                            href="./">Past Witness Seminars []</a>
                        <a className={
                                styles.linkTop
                            }
                            href="./about">about []</a>
                    </div>


                    {/*---------------------------- live text ----------- */}


                    <div className={
                        styles.livetextWrapper
                    }>
                        <div className={
                            styles.livetextContainer
                        }>

                            {/* <h4 id="log">pageX: -, pageY: -</h4> */}

                            <div id="tooltip"
                                className={
                                    styles.livetext
                            } >
                                <span className={valueState}>Fields of May</span>
                            </div>


                        </div>
                    </div>


                    {/* <Image id="image" className={styles.cursorimg} src={cursor}  alt="Herring Fish" width="400px" height="350px"/> */}

                    {/* <div class="centerdiv"livetextWrapper>
<div class="container">
        <div id="follower"></div>
</div></div>*/}


                    {/*---------------------------- Sub text ----------- */}
                    <div className={
                        styles.subText
                    }>
                        <p className={
                            styles.subTextOpacity
                        }>Opacity representing the Amount of
                            <a href="https://www.google.com/maps/place/Baltic+Sea/@57.2610777,19.7297928,6z/data=!3m1!4b1!4m5!3m4!1s0x46f4d7d988201b2b:0xb43097ae8474cb3!8m2!3d58.487952!4d19.863281"
                                className={
                                    styles.link
                            }>Baltic Sea Algae</a>
                            as of {dateState}</p>


                        <div className={
                            styles.algaeListContainer
                        }>


                            <p className={
                                styles.algaeListTitle
                            }>Algae Concentration</p>

                            <div className={
                                styles.algaeListWrapper
                            }>

                                <div className={
                                    styles.algaeList
                                }>
                                    <li>Excellent</li>
                                    <li className={
                                        styles.goodVision
                                    }>Good</li>
                                    <li className={
                                        styles.fairVision
                                    }>Fair</li>
                                    <li className={
                                        styles.poorVision
                                    }>Poor</li>
                                </div>
                            </div>

                            <div className={
                                styles.algaeListWrapper
                            }>
                                <div className={
                                    styles.algaeList
                                }>
                                    <li>0–2.0</li>
                                    <li className={
                                        styles.goodVision
                                    }>2.1–2.5</li>
                                    <li className={
                                        styles.fairVision
                                    }>2.6–5.8</li>
                                    <li className={
                                        styles.poorVision
                                    }>5.9+</li>
                                </div>
                            </div>


                            <div className={
                                styles.algaeListWrapper
                            }>
                                <div className={
                                    styles.algaeList
                                }>
                                    <li>UG/L</li>
                                    <li className={
                                        styles.goodVision
                                    }>UG/L</li>
                                    <li className={
                                        styles.fairVision
                                    }>UG/L</li>
                                    <li className={
                                        styles.poorVision
                                    }>UG/L</li>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>


                {/* Decorative-------------------------------------------------------- */}
                <section className={
                    styles.cordiantesContainer
                }>
                    <div className={
                            styles.cordBottomLeft
                        }
                        id="cordBottomLeft">
                        <p className={
                            styles.cord
                        }>+ (10°e)</p>
                    </div>

                    <div className={
                            styles.cord__bottomMiddle
                        }
                        id="cordBottomMiddle">
                        {/* <p className={styles.plus}>+</p> */}
                        <p className={
                            styles.cord
                        }>+ (20°e)</p>
                    </div>

                    <div className={
                            styles.cord__bottomEnd
                        }
                        id="cordBottomEnd">
                        <p className={
                            styles.cord
                        }>+ (30°e)</p>
                    </div>
                </section>


            </main>


            {/*---------------------------- footer----------- */}
            {/* <footer className={
                styles.footer
            }>
                <p>
                Fields of May (2022), Public sculpture
Artists: FRAUD (Audrey Samson & Francisco Gallardo)
Rope weaving: Maija Toukolehto
Woodwork: Joel Simberg
Herbarium: Lotta Petronella
Flag design: Francisca Roseiro
Commissioner: Contemporary Art Archipelago (CAA)
Collaboration with the Archipelago Research Institute.
<a>http://fieldsofmay.net/</a>

                </p>
            </footer> */} </div>
    )
}
