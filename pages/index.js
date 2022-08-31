import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import {useEffect} from 'react'
import Draggable from 'draggable_dialog'
// import MyComponent from './MyComponent.js'



export default function Home() {

    

    let url = 'https://value-parser.herokuapp.com/';
    
    // create state variable to store the value
    const [valueState, setValueState] = React.useState(styles.goodVision);
    const [valueStatee, setValueStatee] = React.useState('XXUg/L');
    const [dateState, setDateState] = React.useState('00.00.0000');
    const [faviconState, setFaviconState] = React.useState('/favicon.ico');

    // fetch value from url and set the value to the state
    React.useEffect(() => {
        fetch(url)
        .then(res => res.text())
        .then(data => {

            //  fetch date
            let arr = data.split(' ');
            setDateState(arr[0]);


            // fetch XXUg/L value 
            let arrr = data.split(' ');
            setValueStatee(arrr[2]);
          

            // fetch value for blur
            let value = parseFloat(arr[2]);

            if(value > 0 && value <= 2) {
                setValueState(styles.ExcellentVision);
                setFaviconState('/Excellent.ico');
            } else if(value > 2.0 && value <= 2.5) {
                setValueState(styles.goodVision);
                setFaviconState('/Good.ico');
            } else if(value > 2.6 && value <= 5.8) {                
                setValueState(styles.fairVision);
                setFaviconState('/Fair.ico');
            } 
            else if(value > 5.9) {
                setValueState(styles.poorVision);
                setFaviconState('/Poor.ico');
            }
          
        })
    }

    
    , []);

    const MyComponentDraggable = () => {
        useEffect( () => 
          new Draggable({
            "dialogId" : "MyComponentId",
            "elementThatCaptureTheClick" : "MyComponentId"
          })
        )
        // return <MyComponent/>
      }


    return (
        <div className={
            styles.container
        }>
            <Head>
                <title>Fields of May</title>
                <meta name="description" content="Fields of May"/>
                <link rel="icon" href={faviconState}/>
                <script type="text/javascript" src="//code.jquery.com/jquery-1.10.2.min.js" defer></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" defer></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" defer></script>
                {/* <script src="./path/to/blotter.js" defer></script> */}
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
                        >Witness Seminars
                        </a>


                     










                        <a className={
                                styles.linkTop
                            }
                            href="./">Past Witness Seminars</a>
                        <a className={
                                styles.linkTop
                            }
                            href="./about">About</a>
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
                            }><div 
                            className={
                                styles.livetext
                        } >
                            <span className={valueState}>Fields of May</span>
                        </div></div>
<div id="tooltip" className={
                                    styles.nppostname
                            }>     <p  className={
                                styles.subTextOpacity
                            }>The concentration of Baltic Sea Algae as of 25.08.2022 is  
                            <b> {valueStatee}</b></p></div>


                        </div>
                    </div>

               

                    {/* <Image id="image" className={styles.cursorimg} src={cursor}  alt="Herring Fish" width="400px" height="350px"/> */}

                    {/* <div className="centerdiv"livetextWrapper>
<div className="container">
        <div id="follower"></div>
</div></div>*/}


                    {/*---------------------------- Sub text ----------- */}
                    <div className={
                        styles.subText
                    }>

{/* id="image"  */}
                        <p className={
                            styles.subTextOpacity
                        }>Text legabilaty <i>(through blur)</i> representing the Amount of
                            <a href="https://www.google.com/maps/place/Baltic+Sea/@57.2610777,19.7297928,6z/data=!3m1!4b1!4m5!3m4!1s0x46f4d7d988201b2b:0xb43097ae8474cb3!8m2!3d58.487952!4d19.863281"
                                className={
                                    styles.link
                            }><b>Baltic Sea Algae</b></a>
                            as of <b>{dateState}</b></p>
                            
                            


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
