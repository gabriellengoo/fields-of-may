import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import * as React from 'react';


export default function Home() {

    let url = 'https://value-parser.herokuapp.com/';
    
    // create state variable to store the value
    const [valueState, setValueState] = React.useState(styles.goodVision);
    const [dateState, setDateState] = React.useState('//DATEFETCHED//');
    const [faviconState, setFaviconState] = React.useState('/favicon.ico');

    // fetch value from url and set the value to the state
    React.useEffect(() => {
        fetch(url)
        .then(res => res.text())
        .then(data => {
            let arr = data.split(' ');
            setDateState(arr[0]);
          
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
                <script src="assets/app.js" defer></script>
            </Head>





 {/*---------------------------- Faded background ignore this ----------- */}
 <div className={styles.fadeMe}>
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
                            }>
                                Fields of May
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
                            as of //DATEFETCHED//</p>


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
</div>




            <main className={
                styles.main
            }>



 {/*---------------------------- horizontal gradient ----------- */}
 <section className={
                    styles.gradientTop
                }></section>

                {/* <Image id="image" className={styles.cursorimg} src={cursor}  alt="Herring Fish" width="400px" height="350px"/> */}


    

    {/*---------------------------- // ----------- */}




    <section className={styles.content}>
        <div className={styles.contentSection}>
            <div className={styles.contentHeader}>
                <div className={styles.contentTitle}>
                    <div>
                        <a href="./about">About</a>
                    </div>
                </div>
                <div className={styles.contentSubTitle}>
                    <div>
                        {/* <a href="./witness-Seminar">[ Next ]</a> */}
                        <a href="./"> Back </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className={styles.content}>
        <div className={styles.contentSection}>
            <div className={styles.contentHeader}>
                {/* <div className={styles.contentTitle}> */}
                    <div>
                        <a href="./about">ON RHYTHM</a>
                    </div>
                </div>
                <div className={styles.contentSubTitle}>
                    <div>
                        {/* <a href="./witness-Seminar">[ Next ]</a> */}
                        <a href="./"> MATERIAL SPECIFICITY </a>
                    </div>
                </div>
            {/* </div> */}
        </div>
    </section>






<section>
    <div className={styles.popup}>

       <div className={styles.column}>  




       <div className={styles.FixedHeightContainer}>
  <div className={styles.Content}>
  <div>
            <b><i>Fields of May is an infrastructure converging practices and historical-material specificity which create the conditions of possibility to conjure worlds attuned to non-extractive rhythms.</i></b>
           
            <br></br>

            {/* <div className={styles.subheader} >On Rhythm</div> */}
             
       </div>


   <div className={styles.paragraph}> <span className={styles.subheader}>On Rhythm</span>
                Silvia Rivera Cusicanqui, an Andean philosopher who is known for her contribution to postcolonial and subaltern studies, writes about a “rhythm with the cosmos”. This rhythm is namely generated through the repetition of bodily political practices. Practice and rhythm become concomitant, and essential to the production of “counter-knowledge” and “counter-power” to de-centre the ocular-centric colonial gaze. We propose here to consider the human as well as the non-human bodies to re-configure the otherwise Cartesian apparatus and anthropocentric legal system. Calling upon the bodily, the multiple-more-than-human bodily gestures to inhabit space-time. Listen to the rhythm of woven nets which recall the invisible woman’s work, to the mast and its archive of travels through wonder and unspeakable pain, and to the stinging nettle, the subaltern queer, queen of the healers. Rhythm calls attention to bodies’ centrality in attuning to the non-human environment, a more-than-critical-raw-materiality that is predicated upon non-transactional relationships of mutual respect.
                </div>
            

                <div className={styles.paragraph}> 
                <span className={styles.subheader}>Material specificity</span>
                This installation consists of salvaged discarded masts, spars and other maritime wares donated from the museum-ship Sigyn, a wooden barque built in 1887 that crossed the oceans and seas for trade. As Seili is situated next to the old Baltic maritime trade route, where passenger ferries pass today, Sigyn would have routinely sailed past this island. In 2018, the ship needed new masts. Unlike last century, when Finland provided most European Empires with the timber and tar to build their fleets, when scouting for the mast material in 2018, only a handful of trees in all of Finland were found to be of suitable size. The masts which compose the seating area bear witness to the transatlantic slave and timber trade as much as to the changing nature of Finnish forests, now largely servicing pulp production.
                </div>


                <div className={styles.paragraph}> 
                <span className={styles.subheader}>Popular court history</span>
                The Sigyn’s masts were previously erected in an installation named Midsummer Mast in 2020 (Fiskars) and 2021 (Turku). Following the pre-modern summer-solstice related tradition where birch and pine garlands decorated poles which were erected in offering of good harvests, celebration of the beginning of the ‘light days’ (Celtic calendar). Here in the Archipelago, maypoles were bound to the liberalisation of maritime trade, and in the 19th Century the appearance of the ritual in the area demonstrated the prowess of the village&apos;s shipbuilding capacity, and ability to collaborate. Earlier in England, these structures also acted as popular tribunals where governors, barons and kings were deposed and punished if ruled guilty. ‘May Poles’ were hoisted in fields and meadows known as the ‘Ey-commons’ or ‘Fields of May’. Fields of May operated as the highest court in popular law - now known for example as ‘commons law’. Juridical and environmental maypole traditions thus inform Fields of May as an infrastructure which aims to foster an inquiry into the reach of the so-called Blue Economy in the Baltic Sea, and to imagine a legal system rooted in a more-than-human ecological paradigms through witness seminars.
                </div>

                <div className={styles.paragraph}> 
                <span className={styles.subheader}>Blue Economy tribunal</span>
                The 2022 EU Directive on Maritime Spatial Planning is the most recent blueprint towards the full exploitation of marine & forest resources in the Baltic Sea; the response to the deep economic crisis ushered by the COVID pandemic. And yet, as shown by the People’s Tribunals on the ‘Blue Economy‘ across the Indian Ocean region, this model is based on fundamentally erroneous premises such as the notion that accelerated growth can bring reductions of greenhouse emissions, that oceans are natural capital and environmental services provider, or that Blue growth is beneficial for both the environment and economic ‘development’. Such assumptions are devastating seas and forests worldwide. Fields of May aims to instigate an enquiry into such economic paradigms, and create an architecture of engagement that fosters kinship rituals, more-than-traditional knowledge exchanges and critical legal ecologies that help to produce apprehensions of forest/marine environments beyond predatory regimes of value.
                </div>

                <div className={styles.paragraph}> 
                <span className={styles.subheader}>Future tradition</span>
                <i><b>“The question then becomes: what languages and visions will be appropriate to today&apos;s problem- space of capitalist hegemony and counter-hegemonic struggles? What might be the role, if any, of what used to be called &apos;traditions&apos; in this regard? Can new forms of utopianism be invented? What should be the contribution of Western modernity to this endeavour? Conversely, at what point should we attempt to move beyond it?” Arturo Escobar
                    </b></i>
                    Key to this project is putting notions of tradition and salvaging into discussion. Following Mignolo & Walsh, we denounce how modernity was posited in contradistinction with tradition, enabling modernity to mobilise a fiction that defined socio-economic order and particular modes of subjectivities. In this fiction that became reality, tradition is posited as the predecessor of a civilised modernity, obfuscating the operating logic of coloniality. It is in this sense that we must deconstruct “tradition”, and valorise a diversity of historical processes. With Fields of May, we propose salvaging as a way to question and re-claim the meaning of traditions. Katriina Siivonen has put forward the concept of ‘heritage futures’ - as a departure from cultural heritage - in which the main concern is about preserving. Heritage futures is about developing rituals for ecological survival, and according to Siivonen, art is instrumental in this process.
                    </div>


                    <div className={styles.paragraph}> 
                <span className={styles.subheader}>Legal Ecologies</span>
                <b>The legal system is fundamentally anthropocentric
                Multispecies legal ecologies… (this section will be expanded)
                </b>
                </div>


          
                </div>
</div>

       
       </div>


       <div className={styles.column}> 
       <div className={styles.FixedHeightContainer}>
  <div className={styles.Content}>



                <div className={styles.paragraph}> 
                <span className={styles.subheader}>Witness seminar</span>
                A Witness Seminar is a format in which people with a specialised interest around a topic, issue of concern, or an event, gather and verbally exchange, discuss, and debate with the aim of advancing critical dialogue on the matter of address. During a seminar, participants are invited to speak from their position of situated knowledge and experience as a means to initiate and stimulate discussion. These conversations are often chaired and recorded. The seminar transcript becomes an archival source for future use that emphasises the capacities of interdisciplinary collaboration and embodied practice, much like the midsummer poles used to function in the archipelago. Though witness seminars have often situated themselves in contradistinction to oral history. FRAUD proposes a re-interpretation that welcomes constituencies outside academia as specialists in their own right, and integrates oral history as an affirmative grounding force, while manoeuvring the legitimacy conferred through the archival form.
                <b>Instigating a series of seminars… CRM / more-than-human materialities
                Baltic strata – one sentence
                </b>
                former masts act as a structure to chair witness seminars and events to discuss the potentiality of more-than-human legal ecologies.
                </div>


                <div className={styles.paragraph}> 
                <span className={styles.subheader}>Commoning</span>
                <b>Ilppo Vuorinen, former director of the Archipelago Research Institute, explicates the mostly forgotten places of common use in the archipelago, the commons as sites of silent knowledge, and how that knowledge is disappearing with the privatisation of these spaces. To discuss these practices and places is also a means of commoning. Other effaced histories include women’s crucial role in boat building and navigation in the archipelago. Their importance is mostly undocumented. How can we address gendered and knowledge exchange gaps in the Archive
                </b>
                </div>


                <div className={styles.paragraph}> 
                <span className={styles.subheader}>Commoning Knowledge</span>
                <b>Another aspect of this project is a collaboration of building knowledges. The Sagalund museum director John Bjorman has discussed how in the Finnish Archipelago in the 19th Century, the Midsummer Pole tradition is a demonstration of the community’s shipbuilding capacity, as well as a social display of collective organisation, depending on how well the village members could build and hoist this large structure together. The Midsummer Pole tradition in the archipelago was thus an important demonstration of a village’s ability to collaborate. To foster an exchange between traditional and contemporary practices, the Midsummer Mast and Fields of May were conceptualised and built in collaboration with shipwrights, carpenters, garlands makers, weavers and a plant whisperer.
                </b>
                </div>


                <div className={styles.paragraph}> 
                <span className={styles.subheader}>A convergence of practices</span>
                <b>“From ancient times through the present, it has been the weavers and astrologer-poets of the communities and villages who have revealed to us this alternative and subversive thread of knowledges and practices capable of restoring the world and setting it on its rightful course.” 
                -- boat building-ship-building-weaving-herbariums…
                </b>
                </div>


                <div className={styles.paragraph}> 
                <span className={styles.subheader}>Windsock</span>
                <b>Last but not least, in honour of one of the Archipelago Research Institute’s important protagonists and research focus, a herring indicator of wind speed and direction, reminding us to, amongst our other oceanic friends, to follow the herring.
                </b>
                </div>  </div>
</div>

       


        </div>

    </div>
</section>


              </main>




             {/*---------------------------- footer----------- */}
            <footer className={
                styles.footer
            }>
                {/* <p>
                Fields of May is commissioned by CAA as part of Spectres in Change, funded by Kone Foundation. It was inaugurated in the spring 2022 in Seili as part of an exhibition and a public programme in collaboration with the Archipelago Research Institute. 
<a>http://fieldsofmay.net/</a>

                </p> */}
            </footer>
             </div>

    )
}
