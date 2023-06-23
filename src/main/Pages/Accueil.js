import { React, useEffect, useState, Fragment } from 'react';
import { Link } from "react-router-dom";


import ImageProjectA1 from '../Style/Images/Project/Exterior-0.jpg';

import ImageProjectB1 from '../Style/Images/Project/City-1.jpg';
import ImageProjectB2 from '../Style/Images/Project/City-1.jpg';
import ImageProjectB3 from '../Style/Images/Project/City-3.jpg';
import ImageProjectB9 from '../Style/Images/Project/City-9.jpg';

import ImageProjectC1 from '../Style/Images/Project/Interior-1-1.jpg';
import ImageProjectC2 from '../Style/Images/Project/Interior-1-2.jpg';
import ImageProjectC3 from '../Style/Images/Project/Interior-1-3.jpg';
import ImageProjectC4 from '../Style/Images/Project/Interior-1-4.jpg';


import ImageProjectD1 from '../Style/Images/Project/NFT-1.jpg';

import ImageProjectE2 from '../Style/Images/Project/Pharmacie-2.jpg';
import ImageProjectE3 from '../Style/Images/Project/Pharmacie-3.jpg';
import ImageProjectE4 from '../Style/Images/Project/Pharmacie-4.jpg';

import ImageProjectF2 from '../Style/Images/Project/Hangar-2.jpg';
import ImageProjectF3 from '../Style/Images/Project/Hangar-3.jpg';

import ImageProjectG2 from '../Style/Images/Project/MSAD_2.jpg';

import ImageProjectH3 from '../Style/Images/Project/Villa_A-3.jpg';

import ImageProjectI2 from '../Style/Images/Project/Villa_B-2.jpg';
import ImageProjectI3 from '../Style/Images/Project/Villa_B-3.jpg';

import ImageProjectK2 from '../Style/Images/Project/Pharmacie_C-2.jpg';
import ImageProjectK1 from '../Style/Images/Project/Pharmacie_C-1.jpg';
import ImageProjectK5 from '../Style/Images/Project/Pharmacie_C-5.jpg';

import ImageProjectL1 from '../Style/Images/Project/Villa_Teranga_Al_Amin-1.jpg';
import ImageProjectL2 from '../Style/Images/Project/Villa_Teranga_Al_Amin-2.jpg';
import ImageProjectL3 from '../Style/Images/Project/Villa_Teranga_Al_Amin-3.jpg';
import ImageProjectL4 from '../Style/Images/Project/Villa_Teranga_Al_Amin-4.jpg';
import ImageProjectL6 from '../Style/Images/Project/Villa_Teranga_Al_Amin-6.jpg';

import ImageProjectM1 from '../Style/Images/Project/ProductA-1.jpg';


import ImageProject_3 from '../Style/Images/Infos/Event-2.jpg';

import ImageProject_4 from '../Style/Images/Infos/Event-12.jpg';


function Accueil({ GetImageToApp }) {

    useEffect(() => {

        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;

        let Page_slider = document.querySelector('.page_title_slider')
        Page_slider.style.top = `-0%`

        let hoverLoaderContainer = document.querySelector(".hover_loader_container")
        hoverLoaderContainer.style.display = 'flex';

        setTimeout(function () {
            hoverLoaderContainer.style.display = '';
        }, 1500);

        let ThesliderImg = document.querySelectorAll(".slider")
        let thePageWidth = window.innerWidth

        if (thePageWidth >= 1000) {
            return AccueilContainer.addEventListener('scroll', (event) => {
                let TheScrollTop = AccueilContainer.scrollTop;
                let TheScrollHeight = AccueilContainer.scrollHeight;
                let WindowInnerHeight = window.innerHeight;
                let TheScrollTopInP = (TheScrollTop / (TheScrollHeight - WindowInnerHeight)) * 100;

                ThesliderImg.forEach(element => {
                    element.style.backgroundPositionY = `-${TheScrollTopInP * 10}%`;
                });
            })
        }
        return () => {
        }
    }, []);

    const GetImageOnApp = (theimage, title, date, link) => {
        GetImageToApp(theimage, title, date, link);
    }

    return (
        <div id="Accueil">
            <AccueilSlider />
            <section className='archviz_presantation' >
                <h2 className='qui_somme_nous' >
                    Qui sommes-nous ?
                </h2>
                <p>

                    404 digital est une startup novatrice dans le domaine de la réalité virtuelle (RV), cherchant à repousser les limites de l'immersion et à créer des expériences virtuelles inoubliables. En s'appuyant sur une équipe de passionnés et d'experts en RV, nous visons à révolutionner la façon dont nous interagissons avec le monde numérique.
                </p>

                <div className='network_container'>
                    <a href="https://www.instagram.com/arch_viz_sn/" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=221777278655&text=Message provenant de ArchViz.sn" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </div>
                    </a>
                    <a href="mailto:archviz.sn@gmail.com?subject=Message provenant de ArchViz.sn" target="_blank">
                        <div className="network">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                    </a>
                </div>
            </section>

            <div className='intervention-area'>
                <div className='one-card'>
                    <div className='card-cover card-cover-1'>
                        gy
                    </div>
                    <div className='title-of-card'>
                        RÉALITÉ AUGMENTÉE
                    </div>
                    <p>
                        La réalité augmentée (AR) est une version améliorée du monde physique qui ajoute des éléments numériques à une vue en direct du monde physique grâce au suivi et au rendu. l'AR représente l'un de nos principaux objectifs.                   </p>
                </div>
                <div className='one-card'>
                    <div className='card-cover card-cover-2'>

                    </div>
                    <div className='title-of-card'>
                        VISUALISATION 3D
                    </div>
                    <p>
                        La visualisation 3D est une méthode puissante et polyvalente qui présente de nombreux avantages pour différentes industries. Elle permet de représenter graphiquement des objets, des scènes ou des données dans un environnement tridimensionnel, offrant ainsi une expérience visuelle immersive et réaliste.
                    </p>

                </div>
                <div className='one-card'>
                    <div className='card-cover card-cover-3'>

                    </div>
                    <div className='title-of-card'>
                        RÉALITÉ VIRTUEL
                    </div>
                    <p>
                        La technologie de réalité virtuelle (VR) permet à l'utilisateur de se retrouver dans un environnement simulé, idéalement accompagné de son interaction. En bref, les technologies VR créent l'illusion du monde réel. Avec le potentiel illimité des offres de réalité virtuelle, il devient progressivement un nouvel outil de prédilection pour de nombreuses industries et entreprises.                    </p>

                </div>
            </div>

            <div className='software'>
                <div className='apple'>
                </div>
                <div className='blender'>
                </div>
                <div className='unreal'>
                </div>
                <div className='ds'>
                </div>
                <div className='oculus'>
                </div>
                <div className='meta'>
                </div>
                <div className='nvidia'>
                </div>
                <div className='arch'>
                </div>
            </div>



            <section className='AccueilBigProjectsSection'>

                <OneBigProject title={'Manufactures Sénégalaises Des Arts Décoratifs de THIES'} image={ImageProject_4}
                    description={"404_digital et yord.studio (République Tchèque) ont collaboré afin de numériser la salle d’exposition des Manufactures Sénégalaises des Arts Décoratifs de Thiès."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={1} The_Experience={false} The_Experience_Link={'https://villa-r-1.netlify.app/'} link={'/Articles_2'} side={'right'} />

                <OneBigProject title={'FORAFRICC 2023'} image={ImageProject_3}
                    description={`Dans le cadre du FORAFRICC organisé par la Fondation Youssou Ndour pour les industries culturelles et créatives, le pôle EUNIC Sénégal organisera un panel avec : 404 Digital`}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={1} The_Experience={false} The_Experience_Link={'https://villa-r-1.netlify.app/'} link={'/Articles_1'} side={'left'} />


            </section>

            <section className='galerie_presantation'>
                <Link className='nos_réalisations' to={'./Articles'}>
                    Nos Article  <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link>
            </section>

            <section className='AccueilBigProjectsSection'>

                <OneBigProject title={'Design de Maison Moderne'} image={ImageProjectA1}
                    description={"Nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={2} side={'right'} The_Experience={false} link={'/SmallHouse1'} />

                <OneBigProject title={'Visualisation de projets immobiliers'} image={ImageProjectL2}
                    description={"Les visites virtuelles offrent de nombreux avantages pour les acheteurs, propriétaires et agents immobiliers. Pour les acheteurs, elles permettent de visualiser les propriétés sans se déplacer. Pour les agents immobiliers, elles peuvent diffuser les propriétés à plus de gens, ce qui peut conduire à une vente plus rapide."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={3} side={'left'} link={'/VillaTerangaAlAmin'} The_Experience={true} The_Experience_Link={'https://archviz-villa-teranga-al-amine.netlify.app/'} />

                <OneBigProject title={'Visualisaoions 3D De Produits'} image={ImageProjectM1}
                    description={"Cette technique offre de nombreux avantages pour différentes industries, en leur permettant de mieux visualiser, de présenter et de commercialiser leurs produits."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={4} link={'/ProduitsA'} side={'right'} The_Experience={false} />

                <OneBigProject title={'Décoration Intérieur'} image={ImageProjectC2}
                    description={"À l'aide des logiciels de dernière génération et de notre savoir-faire dans le domaine de l’architecture d’intérieur. Nous vous aidons dans l’aménagement de vos espaces."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={5} side={'left'} link={'/Interior1'} The_Experience={true} The_Experience_Link={'https://papemndiaye1.github.io/ArchViz_Interior_Design_1/'} />

                <OneBigProject title={'La 3D dans le domaine des Industries'} image={ImageProjectF2}
                    description={"Le rendu et l'animation avec des temps de production de plus en plus rapide ont ouvert la porte à un monde de variations infinies dans la conception graphique adaptée à vos demandes uniques."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={6} The_Experience={false} link={'/Hangar1'} side={'right'} />

                <OneBigProject title={'Cité El Hadj Amadou BA'} image={ImageProjectB1}
                    description={"Ce projet comprend des villas familiales, des bâtiments commerciaux et résidentiels ainsi que des lieux publics. Notre travail se partage à parts égales entre les animations architecturales et les rendus 3D. Nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={7} link={'/City1'} side={'left'} The_Experience={false} />


            </section>





            <section className='galerie_presantation'>
                <Link className='nos_réalisations' to={'./Traveaux'}>
                    Nos Réalisations   <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link>
            </section>
        </div >
    );
}
//!###############################################################
function AccueilSlider() {


    const onClickOnDot = (e) => {
        let AllSlider = document.querySelectorAll(".slider")
        let AllDot = document.querySelectorAll(".dot")
        let theSliderKey = e.target.getAttribute('theSlider')

        AllDot.forEach(element => {
            element.classList.remove('ativeDot')
        });
        e.target.classList.add('ativeDot')

        AllSlider.forEach(element => {
            element.style.opacity = '0'
        });
        AllSlider[theSliderKey - 1].style.opacity = '1'

        setTimeout(function () {
            AllSlider.forEach(element => {
                element.style.zIndex = '1'
            });
            AllSlider[theSliderKey - 1].style.zIndex = '4'
        }, 6100);

    }

    useEffect(() => {
        let sliderBtnContainer = document.querySelector(".slider_btn_container")
        let AllDot = sliderBtnContainer.childNodes

        AllDot.forEach(element => {
            element.addEventListener("click", onClickOnDot);
        });

        AllDot[0].classList.add('ativeDot')
        let theCourentSlide = 0

        return () => {
            sliderBtnContainer.innerHTML = '';
        }
    }, [])
    const CreateSliderBtn = (theSlider) => {
        let sliderBtnContainer = document.querySelector(".slider_btn_container")
        let OneDot = document.createElement("div")
        OneDot.classList.add('dot');
        OneDot.setAttribute("theSlider", theSlider);
        sliderBtnContainer.appendChild(OneDot)
    }
    return (
        <div className="Accueil_Slider">
            <Slider giveSliderKey={CreateSliderBtn} theKey={1} date={'Séngal, Dakar'} title={<p>DÉVELOPPEMENT <dr />D'EXPERIENCE DE RÉALITÉ VIRTUELLE <br />POUR LES ENTREPRISES</p>} />
            <Slider giveSliderKey={CreateSliderBtn} theKey={2} date={'Séngal, Dakar'} title={<p>CRÉATION DE <dr />MAQUETTES </p>} />
            <Slider giveSliderKey={CreateSliderBtn} theKey={3} date={'Séngal, Dakar'} title={<p>VISUALISATIONS 3D <dr /> DE PRODUITS</p>} />
            <Slider giveSliderKey={CreateSliderBtn} theKey={4} date={'Séngal, Dakar'} title={<p>VISUALISATIONS <dr /> ARCHITECTURALS ET IMMOBILIERS</p>} />
            <div className='slider_btn_container'>
            </div>
        </div>
    );
}
//!###############################################################
function Slider({ giveSliderKey, title, date, theKey }) {

    useEffect(() => {
        giveSliderKey(theKey)
    });
    return (
        <div className='slider'>
            <div className='slider_title'>
                {title}
            </div>
            <div className='slider_date'>
                {date}
            </div>
        </div>
    );
}
//!###############################################################
function TheGallery({ GetImageOnAccueil }) {

    const onClickOnImage = (theimage, title, date, link) => {
        GetImageOnAccueil(theimage, title, date, link);
    }

    return (
        <div className="the_galerie_container">

            <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC3} title={'Décoration Interieur'} date={'03 Juin, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Villa-Saly'} image={ImageProjectI2} title={'Villa Saly'} date={'06 Juin, 2023'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/VillaTerangaAlAmin'} image={ImageProjectL6} title={"Villa Al Amin"} date={'26 Janvier, 2023'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/VillaTerangaAlAmin'} image={ImageProjectL1} title={'Villa Al Amin'} date={'26 Janvier, 2023'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/City1'} image={ImageProjectB2} title={'Cité El Hadj Amadou BA'} date={'12 Juin, 2023'} />

            <OneGalerieElement giveImageId={onClickOnImage} link={'/Touba'} image={ImageProjectD1} title={'Maquette de la Grande Mosquée de Touba'} date={'09 Mars, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Articles_2'} image={ImageProjectK1} title={'Espace Sportif'} date={'07 Mai, 2023'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Articles_2'} image={ImageProjectK5} title={'Espace Sportif'} date={'07 Mai, 2023'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/City1'} image={ImageProjectB3} title={'Cité El Hadj Amadou BA'} date={'12 Juin, 2023'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC4} title={'Décoration Interieur'} date={'03 Juin, 2022'} />

            <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE4} title={'Décoration Interieur'} date={'27 Mai, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Villa'} image={ImageProjectH3} title={'Immeuble Thiès Grand Standing'} date={'06 Juin, 2012'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Villa-Saly'} image={ImageProjectI3} title={'Villa Saly'} date={'06 Juin, 2023'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC2} title={'Décoration Interieur'} date={'03 Juin, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/VillaTerangaAlAmin'} image={ImageProjectL3} title={'Villa Al Amin'} date={'26 Janvier, 2023'} />

            <OneGalerieElement giveImageId={onClickOnImage} link={'/MSAD'} image={ImageProjectG2} title={'Manufacture des Arts Décoratifs de Thiés'} date={'03 Septembre, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE2} title={'Pharmacie Design'} date={'27 Mai, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/City1'} image={ImageProjectB9} title={'Cité El Hadj Amadou BA'} date={'12 Juin, 2023'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/SmallHouse1'} image={ImageProjectA1} title={'Design de Maison Moderne'} date={'15 avril, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Hangar1'} image={ImageProjectF3} title={'Maquette Hangar Photovoltaïque'} date={'29 Juin, 2021'} />

            <OneGalerieElement giveImageId={onClickOnImage} link={'/VillaTerangaAlAmin'} image={ImageProjectL4} title={'Villa Al Amin'} date={'26 Janvier, 2023'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/VillaTerangaAlAmin'} image={ImageProjectL2} title={'Villa Al Amin'} date={'26 Janvier, 2023'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE3} title={'Pharmacie Design'} date={'27 Mai, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Articles_2'} image={ImageProjectK2} title={'Espace Sportif'} date={'07 Mai, 2023'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC1} title={'Décoration Interieur'} date={'03 Juin, 2022'} />

        </div>
    );
}
//!###############################################################
function OneGalerieElement({ giveImageId, title, theKey, image, date, link }) {

    const clickOnImage = (e) => {
        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;
        giveImageId(image, title, date, link)
    }

    return (
        <div className='one_galerie_element'>
            <img src={image} width='100%' alt={title} />
            <div className='one_galerie_element_hover'>
                <div className='iner_container' >

                    <Link onClick={clickOnImage} to={'/ARTICLES'}>
                        <div
                            className='Icon-to-click-on'>
                            <ion-icon name="expand-sharp"></ion-icon>
                        </div>
                    </Link >

                    <Link className='titre' to={link}>
                        {title}
                    </Link>
                    <p className='date'>
                        {date}
                    </p>
                </div>
            </div>
        </div>
    );
}
//!###############################################################
function OneBigProject({ color, title, description, side, textcolor, theKey, image, link, The_Experience, The_Experience_Link }) {
    const [TheSide, setTheSide] = useState('');

    useEffect(() => {
        setTheSide(side)
        let TheSidedProject = document.querySelectorAll('.One_Project_In_Home')
        TheSidedProject[theKey - 1].style.backgroundColor = color;
        TheSidedProject[theKey - 1].style.border = `.5em solid ${color}`;
    });

    return (
        <Fragment>
            {TheSide === "right" ? (
                <section className="One_Project_In_Home right">
                    <div
                        style={{
                            color: textcolor,
                        }}
                        className='info_container '>
                        <h3
                            style={{
                                color: textcolor,
                            }} className='title'>
                            {title}
                        </h3>
                        <p
                            className='description'>
                            <div
                                style={{
                                    backgroundColor: textcolor,
                                }}
                                className='bar'>
                            </div>
                            {description}
                            <Link className='the_link'
                                style={{
                                    color: textcolor,
                                    border: `.1em solid ${textcolor}`
                                }} to={link}>
                                Voir plus  <ion-icon name="arrow-forward-outline"></ion-icon>
                            </Link>
                            {The_Experience ? (
                                <a
                                    style={{
                                        color: textcolor,
                                        border: `.1em solid ${textcolor}`
                                    }}
                                    className='the_link' href={The_Experience_Link} target="_blank" >

                                    Experience VR/AR <ion-icon name="arrow-forward-outline"></ion-icon>
                                </a>
                            ) : (
                                <div></div>
                            )}
                        </p>
                    </div>
                    <div
                        role="img" alt={title}
                        className='image_container'
                        style={{
                            backgroundImage: `url('${image}')`,
                        }}
                    >
                    </div>
                </section>
            ) : (
                <section className="One_Project_In_Home left">
                    <div
                        style={{
                            color: textcolor,
                        }}
                        className='info_container' >
                        <h3
                            style={{
                                color: textcolor,
                            }}
                            className='title' >
                            {title}
                        </h3>
                        <p
                            className='description'>
                            <div
                                style={{
                                    backgroundColor: textcolor,
                                }}
                                className='bar'>
                            </div>
                            {description}
                            <Link className='the_link'
                                style={{
                                    color: textcolor,
                                    border: `.1em solid ${textcolor}`
                                }} to={link}>

                                Voir plus  <ion-icon name="arrow-forward-outline"></ion-icon>
                            </Link>
                            {The_Experience ? (
                                <a
                                    style={{
                                        color: textcolor,
                                        border: `.1em solid ${textcolor}`
                                    }}
                                    className='the_link' href={The_Experience_Link} target="_blank" >

                                    Experience VR/AR <ion-icon name="arrow-forward-outline"></ion-icon>
                                </a>
                            ) : (
                                <div></div>
                            )}
                        </p>
                    </div>
                    <div
                        role="img" alt={title}
                        className='image_container'
                        style={{
                            backgroundImage: `url('${image}')`,
                        }}
                    >
                    </div>
                </section>
            )
            }
        </Fragment >
    );
}

//!###############################################################
function TheFooter({ }) {

    const onClickOnTab = () => {
        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;
    }

    return (
        <footer className='the_footer'>
            <div
                role="img" alt='ArchVizLogo'
                className='logo-container'>
            </div>
            <div className='titles'>Categories</div>
            <div className='titles'>Contacts</div>
            <div className='titles'>Reseaux</div>
            <div className='titles'></div>

            {/* <a href="https://pape-momar-ndiaye-portfolio.netlify.app/" target="_blank"
                className='portfolio_link'>Voir le portfolio <ion-icon name="arrow-forward-outline"></ion-icon></a> */}

            <p className='archviz_description'>
                Notre mission est d'explorer les possibilités infinies offertes par la réalité virtuelle pour transformer la manière dont les individus travaillent, se divertissent et se connectent entre eux. Nous nous efforçons de créer des expériences RV de haute qualité qui plongent les utilisateurs dans des environnements virtuels saisissants, réalistes et captivants.
            </p>

            <nav className='menu_elemant_container'>
                <Link className='menu_elemant' to={'/'} onClick={onClickOnTab}>
                    Accueil
                </Link>
                <Link className='menu_elemant' to={'/Traveaux'} onClick={onClickOnTab}>
                    Traveaux
                </Link>
                <Link className='menu_elemant' to={'/Service'} onClick={onClickOnTab}>
                    Services
                </Link>
                <Link className='menu_elemant' to={'/ARTICLES'} onClick={onClickOnTab}>
                    Articles
                </Link>
                <div className='menu_elemant'></div>

            </nav>

            <div className='categories_elemant_container'>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Visualisation</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Creation de Visite Web</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Experience de Realite Virtuel</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Experience de Realite Augmentée</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Visualisations Architecturals</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Creation de Maquette</div>
            </div>

            <div className='contact_elemant_container'>
                <div className='contact_elemant '>digital404sn@gmail.com</div>
                <div className='contact_elemant '>Tel: 77 727 86 55</div>
            </div>

            <div className='network_container'>

                <a href="https://www.instagram.com/404_digital/" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                </a>

                <a href="mailto:digital404sn@gmail.com?subject=The message" target="_blank">
                    <div className="network">
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/digital-sn-50276a222/" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </div>
                </a>

                <a href="https://web.facebook.com/profile.php?id=100083761231857" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </div>
                </a>

                <a href="https://api.whatsapp.com/send?phone=221777278655&text=Message provenant de 404 Digital.sn" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </div>
                </a>
            </div>

            <div className='the_line'>
            </div>
            <div className='country'>
                <ion-icon name="globe-outline"></ion-icon>  Sénégal
            </div>
            <div className='rights'>
                © 2023 | 404 Digital. Tout droit réservé.
            </div>
        </footer>
    );
}




export { Accueil, TheGallery, OneBigProject, TheFooter };
