import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import {useEffect} from 'react'
import { useState } from "react";
import {
    BrowserView,
    MobileView,
    isBrowser, 
    isMobile,
  } from "react-device-detect";
  import { browserName, CustomView } from "react-device-detect";
  import Hamburger from 'hamburger-react'
 

export default function Home() {

    const [isLoaded, setisLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setisLoaded(true); 
    }, 5000);
  }, []);

    const [isOpen, setOpen] = useState(false)

    let url = 'https://value-parser.herokuapp.com/';

    // create state variable to store the value
    const [valueState, setValueState] = React.useState(styles.goodVision);
    const [valueStatemobile, setValueStatemobile] = React.useState(styles.goodVisionmobile);
    const [valueStatemobilehome, setValueStatemobilehome] = React.useState(styles.goodVisionmobilehome);
    const [valueStatee, setValueStatee] = React.useState('XXUg/L');
    const [dateState, setDateState] = React.useState('00.00.0000');
    const [faviconState, setFaviconState] = React.useState('/favicon.ico');

    // fetch value from url and set the value to the state
    React.useEffect(() => {
        fetch(url).then(res => res.text()).then(data => { // fetch date
            let arr = data.split(' ');
            setDateState(arr[0]);


            // fetch XXUg/L value
            let arrr = data.split(' ');
            setValueStatee(arrr[2]);


            // fetch value for blur
            let value = parseFloat(arr[2]);

            if (value > 0 && value <= 2) {
                setValueState(styles.ExcellentVision);
                setFaviconState('/Excellent.ico');
            } else if (value > 2.0 && value <= 2.5) {
                setValueState(styles.goodVision);
                setFaviconState('/Good.ico');
            } else if (value > 2.6 && value <= 5.8) {
                setValueState(styles.fairVision);
                setFaviconState('/Fair.ico');
            } else if (value > 5.9) {
                setValueState(styles.poorVision);
                setFaviconState('/Poor.ico');
            }

            if (value > 0 && value <= 2) {
                setValueStatemobile(styles.ExcellentVisionmobile);
                setFaviconState('/Excellent.ico');
            } else if (value > 2.0 && value <= 2.5) {
                setValueStatemobile(styles.goodVisionmobile);
                setFaviconState('/Good.ico');
            } else if (value > 2.6 && value <= 5.8) {
                setValueStatemobile(styles.fairVisionmobile);
                setFaviconState('/Fair.ico');
            } else if (value > 5.9) {
                setValueStatemobile(styles.poorVisionmobile);
                setFaviconState('/Poor.ico');
            }

            if (value > 0 && value <= 2) {
                setValueStatemobilehome(styles.ExcellentVisionmobilehome);
                setFaviconState('/Excellent.ico');
            } else if (value > 2.0 && value <= 2.5) {
                setValueStatemobilehome(styles.goodVisionmobilehome);
                setFaviconState('/Good.ico');
            } else if (value > 2.6 && value <= 5.8) {
                setValueStatemobilehome(styles.fairVisionmobilehome);
                setFaviconState('/Fair.ico');
            } else if (value > 5.9) {
                setValueStatemobilehome(styles.poorVisionmobilehome);
                setFaviconState('/Poor.ico');
            }

        })
    }, []);



    return (
        <div>
            <Head>
                <title>Fields of May</title>
                <meta name="description" content="Fields of May"/>
                <link rel="icon" href={faviconState}/>
                <link rel="apple-touch-icon" href={faviconState} />
                <script type="text/javascript" src="//code.jquery.com/jquery-1.10.2.min.js" defer></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.1/jquery.min.js" defer></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" defer></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" defer></link>
                {/* <script src="./path/to/blotter.js" defer></script> */}
                <script src="assets/app.js" defer></script>
                <script src="assets/shared.js" defer></script>
                <script src="assets/simulation.js" defer></script>
                <script src="assets/ui.js" defer></script>
                <script src="assets/waves.js" defer></script>
            </Head>
            
            {isLoaded ? (
        <>
      <noscript>You need to enable JavaScript to run this site.</noscript>




            <MobileView>
            <div className={
            styles.containermobile
        }>
            <main className={
                styles.mainmobile
            }>




                <div id="tooltip"
                    className={
                        styles.cursorimg
                }>
                    <Image src="/assets/images/Fish.png" alt="Herring Fish" width="100px" height="25px"/>
                </div>






                {/*---------------------------- hamburger ----------- */}
                <div className={
                    styles.nav
                }>
        
        <div>  <a href="./mobileinfo">Fields of May</a> </div> 
    
                <div>   
                    <a href="./mobilemenu">        
                        <Hamburger size={25} toggled={isOpen} toggle={setOpen} /></a>   
</div>
                </div>


<div className={
                        styles.subTextmobile
                    }>


                        {/* <p className={
                            styles.subTextOpacity
                        }>The concentration of Baltic Sea Algae as of {dateState} is {valueStatee}. For several decades the Archipelago Research
                         Institute has been measuring the shrinking Herring and traced the cause to the morphing plankton due to changes in salinity and eutrophication. In short, Algae concentration is an indicator of the Baltic Sea&apos;s health here reflected in the legibility of the font.
                        </p> */}

                        {/* <div className={
                    styles.question
                } >  <a href="./mobileinfo">About</a> </div> 
                    <div className={
                    styles.question
                } >  <a href="./mobileinfo">Past Witness Seminars</a> </div> 
                       <div className={
                    styles.question
                } >  <a href="./mobileinfo">Witness Seminars</a> </div>  */}


           
                    </div>


                {/*---------------------------- centered text ----------- */}
                <section className={
                    styles.centeredElementsmobile
                }>



                    {/*---------------------------- live text ----------- */}


                    <div className={
                        styles.livetextWrappermobile
                    }>
                        <div className={
                            styles.livetextContainermobile
                        }>



                            <div className={
                                styles.nppostmobile
                            }>
                                <div className={
                                    styles.livetextmobile
                                }>
                                    <span className={valueStatemobilehome}>Fields of May</span>
                                </div>
                            </div>
                           




  
    



                    {/*---------------------------- Sub text ----------- */}
                    <div className={
                        styles.subTextmobile
                    }>


                        <p className={
                            styles.subTextOpacitymobile
                        }>The concentration of Baltic Sea Algae as of {dateState} is {valueStatee}. For several decades the Archipelago Research
                         Institute has been measuring the shrinking Herring and traced the cause to the morphing plankton due to changes in salinity and eutrophication. In short, Algae concentration is an indicator of the Baltic Sea&apos;s health here reflected in the legibility of the font.
                        </p>


            <div className={
                            styles.centermobile
                        }>
                        <div className={
                            styles.algaeListContainermobile
                        }>
                            <p className={
                                styles.algaeListTitlemobile
                            }>Algae Concentration</p>

                            <div className={
                                styles.algaeListWrappermobile
                            }>

                                <div className={
                                    styles.algaeList
                                }>
                                    <li className={
                                        styles.excellentVisiontext
                                    }>Excellent</li>
                                    <li className={
                                        styles.goodVisiontext
                                    }>Good</li>
                                    <li className={
                                        styles.fairVisiontext
                                    }>Fair</li>
                                    <li className={
                                        styles.poorVisiontext
                                    }>Poor</li>
                                </div>
                            </div>

                            <div className={
                                styles.algaeListWrappermobile
                            }>
                                <div className={
                                    styles.algaeList
                                }>
                                    <li className={
                                        styles.excellentVisiontext
                                    }>0–2.0</li>
                                    <li className={
                                        styles.goodVisiontext
                                    }>2.1–2.5</li>
                                    <li className={
                                        styles.fairVisiontext
                                    }>2.6–5.8</li>
                                    <li className={
                                        styles.poorVisiontext
                                    }>5.9+</li>
                                </div>
                            </div>


                            <div className={
                                styles.algaeListWrappermobile
                            }>
                                <div className={
                                    styles.algaeList
                                }>
                                    <li className={
                                        styles.excellentVisiontext
                                    }>UG/L</li>
                                    <li className={
                                        styles.goodVisiontext
                                    }>UG/L</li>
                                    <li className={
                                        styles.fairVisiontext
                                    }>UG/L</li>
                                    <li className={
                                        styles.poorVisiontext
                                    }>UG/L</li>
                                </div>
                            </div>
            </div>

</div> 
                    </div>
                            {/* <div 
                                className={
                                    styles.nppostnamemobile
                            }>Text legabilaty
                            (through blur) 
                            representing the Amount of
                            <a href=" https://goo.gl/maps/sLnY9MYMYfbBCA5y8"
                                className={
                                    styles.link
                            }>
                                Baltic Sea Algae
                            </a>




                                <p><b> </b>
                                </p>
                            </div>  */}


                        </div>
                    </div>


  
    



                    {/*---------------------------- Sub text ----------- */}
                    <div className={
                        styles.subTextmobile
                    }>


                        {/* <p className={
                            styles.subTextOpacity
                        }>The concentration of Baltic Sea Algae as of {dateState} is {valueStatee}. For several decades the Archipelago Research Institute has been measuring the shrinking Herring and traced the cause to the morphing plankton due to changes in salinity and eutrophication. In short, Algae concentration is an indicator of the Baltic Sea's health here reflected in the legibility of the font.
                        </p> */}


            <div className={
                            styles.centermobile
                        }>
                        <div className={
                            styles.algaeListContainermobile
                        }>
                            {/* <p className={
                                styles.algaeListTitlemobile
                            }>Algae Concentration</p> */}

                            {/* <div className={
                                styles.algaeListWrappermobile
                            }> */}

                                {/* <div className={
                                    styles.algaeList
                                }>
                                    <li className={
                                        styles.excellentVisiontext
                                    }>Excellent</li>
                                    <li className={
                                        styles.goodVisiontext
                                    }>Good</li>
                                    <li className={
                                        styles.fairVisiontext
                                    }>Fair</li>
                                    <li className={
                                        styles.poorVisiontext
                                    }>Poor</li>
                                </div>
                            </div> */}

                            {/* <div className={
                                styles.algaeListWrappermobile
                            }>
                                <div className={
                                    styles.algaeList
                                }>
                                    <li className={
                                        styles.excellentVisiontext
                                    }>0–2.0</li>
                                    <li className={
                                        styles.goodVisiontext
                                    }>2.1–2.5</li>
                                    <li className={
                                        styles.fairVisiontext
                                    }>2.6–5.8</li>
                                    <li className={
                                        styles.poorVisiontext
                                    }>5.9+</li>
                                </div>
                            </div> */}


                            {/* <div className={
                                styles.algaeListWrappermobile
                            }>
                                <div className={
                                    styles.algaeList
                                }>
                                    <li className={
                                        styles.excellentVisiontext
                                    }>UG/L</li>
                                    <li className={
                                        styles.goodVisiontext
                                    }>UG/L</li>
                                    <li className={
                                        styles.fairVisiontext
                                    }>UG/L</li>
                                    <li className={
                                        styles.poorVisiontext
                                    }>UG/L</li>
                                </div>
                            </div> */}
            </div>

</div> 
                    </div>
                </section>







            </main>
            </div>
            </MobileView>




{/* ----------------------------------------------------------------Browser  */}


            <BrowserView>
<div className={
            styles.container
        }>
            <main className={
                styles.main
            }>




                <div id="tooltip"
                    className={
                        styles.cursorimg
                }>
                    <Image src="/assets/images/Fish.png" alt="Herring Fish" width="100px" height="25px"/>
                </div>






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
                        <a href="./commingsoon" className={
                            styles.linkTop
                        }>Witness Seminars
                        </a>


                        <a className={
                                styles.linkTop
                            }
                            href="./commingsoon">Past Witness Seminars</a>
                        <a className={
                                styles.linkTop
                            }
                            href="./commingsoon">About</a>
                    </div>


                    {/*---------------------------- live text ----------- */}


                    <div className={
                        styles.livetextWrapper
                    }>
                        <div className={
                            styles.livetextContainer
                        }>

                            {/* <h4 id="log">pageX: -, pageY: -</h4> */}

                            {/* <div id="tooltip"
                                className={
                                    styles.livetext
                            } >
                                <span className={valueState}>Fields of May</span>
                            </div> */}


                            <div className={
                                styles.nppost
                            }>
                                <div className={
                                    styles.livetext
                                }>
                                    <span className={valueState}>Fields of May</span>
                                </div>
                            </div>
                            {/* <div id="image" id="tooltip"
                                className={
                                    styles.nppostname
                            }>
                                <p>The concentration of Baltic Sea Algae as of 25.08.2022 is
                                    <b> {valueStatee}</b>
                                </p>
                            </div> */}
                            <div 
                                className={
                                    styles.nppostname
                            }>Text legabilaty
                            (through blur) 
                            representing the Amount of
                            <a href=" https://goo.gl/maps/sLnY9MYMYfbBCA5y8"
                                className={
                                    styles.link
                            }>
                                Baltic Sea Algae
                            </a>




                                <p><b> </b>
                                </p>
                            </div> 


                        </div>
                    </div>


  
    



                    {/*---------------------------- Sub text ----------- */}
                    <div className={
                        styles.subText
                    }>


                        <p className={
                            styles.subTextOpacity
                        }>The concentration of Baltic Sea Algae as of {dateState} is {valueStatee}. For several decades the Archipelago Research Institute has been measuring the shrinking Herring and traced the cause to the 
                        morphing plankton due to changes in salinity and eutrophication. In short, Algae concentration is an indicator of the Baltic Sea&apos;s health here reflected in the legibility of the font.
                        </p>


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
                                    <li className={
                                        styles.excellentVisiontext
                                    }>Excellent</li>
                                    <li className={
                                        styles.goodVisiontext
                                    }>Good</li>
                                    <li className={
                                        styles.fairVisiontext
                                    }>Fair</li>
                                    <li className={
                                        styles.poorVisiontext
                                    }>Poor</li>
                                </div>
                            </div>

                            <div className={
                                styles.algaeListWrapper
                            }>
                                <div className={
                                    styles.algaeList
                                }>
                                    <li className={
                                        styles.excellentVisiontext
                                    }>0–2.0</li>
                                    <li className={
                                        styles.goodVisiontext
                                    }>2.1–2.5</li>
                                    <li className={
                                        styles.fairVisiontext
                                    }>2.6–5.8</li>
                                    <li className={
                                        styles.poorVisiontext
                                    }>5.9+</li>
                                </div>
                            </div>


                            <div className={
                                styles.algaeListWrapper
                            }>
                                <div className={
                                    styles.algaeList
                                }>
                                    <li className={
                                        styles.excellentVisiontext
                                    }>UG/L</li>
                                    <li className={
                                        styles.goodVisiontext
                                    }>UG/L</li>
                                    <li className={
                                        styles.fairVisiontext
                                    }>UG/L</li>
                                    <li className={
                                        styles.poorVisiontext
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



{/* ----------------------------  wave -----------  */}
            {/* <div className={styles.overlay} id="overlay"></div>
        <div className={styles.ui} id="ui">
        <div className={styles.camera} id="camera">
            <canvas className={styles.profile} id="profile" width="350" height="105"></canvas>
                <div className={styles.length} id="length"></div>
                <div className={styles.end} id="end"></div>
                <div className={styles.wind} id="wind">
                    <span className={styles.windspeed} id="wind-speed"></span><span id="wind-unit"></span>
                    <div className={styles.windlabel} id="wind-label"></div>
                </div>

                <div className={styles.size} id="size">
                    <span className={styles.sizevalue} id="size-value"></span><span id="size-unit"></span>
                </div>
                <div className={styles.sizelabe} id="size-label"></div>
                <div className={styles.choppiness} id="choppiness"></div>
                <div className={styles.choppinesslabel} id="choppiness-label"></div>
            </div>
        </div>
        <canvas className={styles.simulator} id="simulator"></canvas> */}



</div>
</BrowserView>
</>
      ) : (
        <div className={styles.loader}>
          <Image
            src="/assets/images/loader.gif"
            width={70}
            height={70}
            alt="Loader GIF - Loading fallback"
          />
        </div>
      )}
          </div>
    )
}
