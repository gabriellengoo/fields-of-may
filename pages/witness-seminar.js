import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Witness.module.css'
import * as React from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
  } from "react-device-detect";
  import { browserName, CustomView } from "react-device-detect";
  import Hamburger from 'hamburger-react'

export default function Home() {

    let url = 'https://value-parser.herokuapp.com/';

    // create state variable to store the value
    const [valueState, setValueState] = React.useState(styles.goodVision);
    const [dateState, setDateState] = React.useState('//DATEFETCHED//');
    const [faviconState, setFaviconState] = React.useState('/favicon.ico');

    // fetch value from url and set the value to the state
    React.useEffect(() => {
        fetch(url).then(res => res.text()).then(data => {
            let arr = data.split(' ');
            setDateState(arr[0]);

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

        })
    }, []);

    const MyComponentDraggable = () => {
        useEffect(() => new Draggable({"dialogId": "MyComponentId", "elementThatCaptureTheClick": "MyComponentId"}))
        // return <MyComponent/>
    }


    return (
        <div className={
            styles.container
        }>
            <Head>
                <title>Fields of May</title>
                <meta name="description" content="Fields of May"/>
                <link rel="icon"
                    href={faviconState}/>
                <script type="text/javascript" src="//code.jquery.com/jquery-1.10.2.min.js" defer></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" defer></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" defer></script>
                <script src="assets/app.js" defer></script>
            </Head>




         {/* ----------------------------------------------------------------Mobile */}
        <MobileView>
        <main className={
                styles.main
            }>


                <section className={
                    styles.centeredElements
                }>


                    <div id="tooltip"
                        className={
                            styles.cursorimg
                    }>
                        <Image src="/assets/images/Fish.png" alt="Herring Fish" width="100px" height="25px"/>
                    </div>


                    {/* <div className={
                        styles.subMenu
                    }>
                        <a href="./witness-seminar"
                            className={
                                styles.linkTop
                        }>Witness Seminars
                        </a>


                        <a className={
                                styles.linkTopActive
                            }
                            href="./past-witness-seminars">Past Witness Seminars</a>
                        <a className={
                                styles.linkTop
                            }
                            href="./about">About</a>
                    </div> */}


                    <div className={
                        styles.content
                    }>

<div className={ styles.linkTopmobilewrapper}>
                            <a href="./"
                                className={
                                    styles.linkTopmobile
                            }
                            >
                                Back
                            </a>
                            </div>

                        <div className={
                            styles.contentwrappermobile
                        }>

                      
                            <p className={
                            styles.titleMobile
                        }>PLACEHOLDER TEXT Witness Seminars</p>
                            <Image src="/assets/images/Placeholder.jpeg" alt="Herring Fish" width="800px" height="400px"/>
                            <div className={
                                styles.contentparagraphmobile
                            }>
                                <p>
                                    If we imagine that each participant is
                                                                                                     invited to speak on behalf of a layer of the stratified seabed. 
                                                                                                     The archived layers are distributed accross phosphate, carbon, fish,
                                                                                                      and salt, and aim to bring into dicussion possible attunement 
                                                                                                      through a grounding in Seili. What post-extractive 
                                                                                                      futures can we imagine through this specific formation? 
                                                                                                      (with specific attention to imagining a 
                                                                                                      legal system rooted in a more-than-human ecological paradigm).</p>

                                <p>
                                    If we imagine that each participant is
                                                                                                     invited to speak on behalf of a layer of the stratified seabed. 
                                                                                                     The archived layers are distributed accross phosphate, carbon, fish,
                                                                                                      and salt, and aim to bring into dicussion possible attunement 
                                                                                                      through a grounding in Seili. What post-extractive 
                                                                                                      futures can we imagine through this specific formation? 
                                                                                                      (with specific attention to imagining a 
                                                                                                      legal system rooted in a more-than-human ecological paradigm).
                                </p>
                            </div>
                        </div>

                    </div>
                </section>


                {/*---------------------------- horizontal gradient ----------- */}
                <section className={
                    styles.gradientTop
                }></section>
            </main>

         </MobileView>



         {/* ----------------------------------------------------------------Browser  */}

        <BrowserView>
            <main className={
                styles.main
            }>


                <section className={
                    styles.centeredElements
                }>


                    <div id="tooltip"
                        className={
                            styles.cursorimg
                    }>
                        <Image src="/assets/images/Fish.png" alt="Herring Fish" width="100px" height="25px"/>
                    </div>


                    <div className={
                        styles.subMenu
                    }>
                        <a href="./witness-seminar"
                            className={
                                styles.linkTop
                        }>Witness Seminars
                        </a>


                        <a className={
                                styles.linkTopActive
                            }
                            href="./past-witness-seminars">Past Witness Seminars</a>
                        <a className={
                                styles.linkTop
                            }
                            href="./about">About</a>
                    </div>


                    <div className={
                        styles.content
                    }>


                        <div className={
                            styles.contentwrapper
                        }>


                            <a href="./"
                                className={
                                    styles.linkTop
                            }>
                                Back
                            </a>


                            <p className={
                            styles.title
                        }>PLACEHOLDER TEXT Witness Seminars</p>
                            <Image src="/assets/images/Placeholder.jpeg" alt="Herring Fish" width="800px" height="400px"/>
                            <div className={
                                styles.contentparagraph
                            }>
                                <p>
                                    If we imagine that each participant is
                                                                                                     invited to speak on behalf of a layer of the stratified seabed. 
                                                                                                     The archived layers are distributed accross phosphate, carbon, fish,
                                                                                                      and salt, and aim to bring into dicussion possible attunement 
                                                                                                      through a grounding in Seili. What post-extractive 
                                                                                                      futures can we imagine through this specific formation? 
                                                                                                      (with specific attention to imagining a 
                                                                                                      legal system rooted in a more-than-human ecological paradigm).</p>

                                <p>
                                    If we imagine that each participant is
                                                                                                     invited to speak on behalf of a layer of the stratified seabed. 
                                                                                                     The archived layers are distributed accross phosphate, carbon, fish,
                                                                                                      and salt, and aim to bring into dicussion possible attunement 
                                                                                                      through a grounding in Seili. What post-extractive 
                                                                                                      futures can we imagine through this specific formation? 
                                                                                                      (with specific attention to imagining a 
                                                                                                      legal system rooted in a more-than-human ecological paradigm).
                                </p>
                            </div>
                        </div>

                    </div>
                </section>


                {/*---------------------------- horizontal gradient ----------- */}
                <section className={
                    styles.gradientTop
                }></section>
            </main>
            </BrowserView>

        </div>


    )
}

