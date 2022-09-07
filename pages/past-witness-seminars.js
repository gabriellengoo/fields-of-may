import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import * as React from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
  } from "react-device-detect";
  import { browserName, CustomView } from "react-device-detect";
  import Hamburger from 'hamburger-react'
  import { useState } from "react";

 
export default function Home() {

    let url = 'https://value-parser.herokuapp.com/';

    const [isOpen, setOpen] = useState(false)
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
        <div>
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

         <div className={
            styles.containermobile
        }>

 <main className={
                styles.mainmobile
            }>
                
 {/* <section className={
                    styles.gradientTop
                }></section> */}


<section>
    <div className={styles.popupmobile}>

       <div className={styles.columnmobile}>  


<div className={styles.mobilenav}>
<div className={styles.contentTitlemobile}>
                    <div className={
                            styles.titleMobile
                        }>
                        <a href="./past-witness-seminars">Past Witness Seminars</a>
                    </div>
                    <div>  
                    <a className={styles.hamburgernav} href="./mobilemenu">        
                        <Hamburger size={50} toggled={isOpen} toggle={setOpen} /></a>   
</div>
                </div>


</div>

{/* <div id="tooltip"
          className={
              styles.cursorimg
      }>
          <Image src="/assets/images/Fish.png" alt="Herring Fish" width="100px" height="25px"/>
      </div> */}

      
       <div className={styles.FixedHeightContainermobile}>
  <div className={styles.Contentmobile}>


  <div className={styles.nav2}>
  <div>
                            <a  href="#placeholder">Scroll to first Sec ↓</a>
                            <a  href="#placeholder2">Scroll to second Sec ↓</a>
                    </div>
                    </div>  



                    <p id="placeholder" className={
              styles.subtitlemobile
          }>Placeholder Text</p>
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
              <p id="placeholder2" className={
              styles.subtitlemobile
          }>Placeholder Text Two</p>
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

       
       </div>




             

    </div>
</section>


            </main>
            </div>

         </MobileView>



<div className={
                styles.container
            }>
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
                                styles.linkTop
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


<div className={
                            styles.backlink
                        }>
                            <div><a href="./"
                                >
                                Back
                            </a></div>
                            
                            </div>


                            <p className={
                            styles.titlewitness
                        }>Past Seminars</p>
                            {/* <Image src="/assets/images/Placeholder.jpeg" alt="Herring Fish" width="800px" height="400px"/> */}
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

                              
                            </div>
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
                                                                                                      legal system rooted in a more-than-human ecological paradigm).
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
                                                                                                      legal system rooted in a more-than-human ecological paradigm).
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
                                                                                                      legal system rooted in a more-than-human ecological paradigm).
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
        </div>


    )
}

