import React from 'react';
import Navbar from '../components/navbar/Navbar';

const ResumeScreen = () => {
  console.log('ResumeScreen');
  return (
    <div className='full-height' style={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar color={'black'} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '20%', marginRight: '20%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ fontWeight: 'bold' }}>BAPTISTE</h1>
          <h1 style={{ fontWeight: 'bold' }}>HURIER</h1>
          <h2 style={{ fontWeight: 'bold' }}>EXPERT EN INFORMATIQUE ET</h2>
          <h2 style={{ fontWeight: 'bold' }}>SYSTEMES D'INFORMATIONS</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', backgroundColor: 'rgb(240, 240, 240)', paddingLeft: '15%', paddingRight: '15%', paddingTop: 25, paddingBottom: 25 }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
              <h1 style={{ fontSize: 'bold' }}>A PROPOS</h1>
              <p>Récemment diplômé et en fin de CDD dans l'entreprise Futur Composé , je suis à la recherche d'un nouveau poste afin de mettre en pratique les différentes compétences acquises grâce à mes cinq années d'études et mes différentes expériences professionnelles. </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column',  width: '45%' }}>
              <h1 style={{ fontWeight: 'bold' }}>MES INFORMATIONS</h1>
              <ul>
                <li>Téléphone: +33 6 34 42 04 11</li>
                <li>Mail: baptiste@hurier.fr</li>
                <li>
                  <span>27 Rue de la Miséricorde</span>
                  <br />
                  <span>14 000 Caen</span>
                </li>
                <li>Date de naissance: 31/08/1995</li>
                <li>Permis B</li>
              </ul>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>EXPERIENCES PROFESSIONNELLES</h1>
            <h2>DEVELOPPEUR | TESTEUR</h2>
            <ul>
              <li>
                <p><strong>Futur Composé Avril 2019 - Avril 2021 :</strong>Gestion et développement d'une application mobile et web en React Native et JS</p>
                <p>Mise en place de l'intégration continue et du déploiement automatique des applications Android et iOS.</p>
                <p>Développement d'une application interne en Laravel recensant les formateurs selon différents critères.</p>
              </li>
              <li>
                <p><strong>SNCF Novembre 2017 - Octobre 2018 :</strong> Mise en place de tests et de leurs automatisations sur l'application iOS SIRIUS à destination des conducteurs de train (développement sous Unix, objective C).</p>
                <p>Participation à la mise en place d'une plateforme d'intégration continue (docker, jenkins, gerrit, git).</p>
              </li>
              <li>
                <p><strong>Websilog Aout 2017 - Octobre 2017 :</strong> Stage de développement Web front-end/back-end sur un site de e-commerce entre magasins et grossistes de l'alimentation (HTML / CSS / JS Bootstrap / PHP / SQL)</p>
              </li>
              <li>
                <p><strong>Aout 2016 - Octobre 2016 :</strong> Stage de développement Web, site vitrine</p>
              </li>
            </ul>
            <h2>AUTRES</h2>
            <ul>
              <li>
                <p><strong>Juillet - Aout 2015 :</strong> Nageur sauveteur en piscine</p>
              </li>
              <li>
                <p><strong>Juillet - Aout 2014 :</strong> Nageur sauveteur en plage</p>
              </li>
            </ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h1 style={{ fontSize: 'bold' }}>QUALIFICATIONS</h1>
              <ul>
                <li>
                  <p><strong>2020</strong>  EXPERT EN INFORMATIQUE ET SUSTEMES D'INFORMATIONS</p>
                </li>
                <li>
                  <p><strong>2015 - 2020</strong>  ECOLE D'INGENIEUR INFORMATIQUE SUPINFO CAEN</p>
                </li>
                <li>
                  <p><strong>2015</strong>  IUT GENIE MECANIQUE ET PRODUCTIQUE </p>
                </li>
                <li>
                  <p><strong>2014</strong>  BAC S OPTION SVT | BNSSA | PSE1 </p>
                </li>
              </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h1 style={{ fontSize: 'bold' }}>COMPETENCES</h1>
              <ul>
                <li>REACT NATIVE | REACT JS | REDUX | TYPESCRIPT </li>
                <li>CORDOVA | VUE JS</li>
                <li>HTML | JAVASCRIPT | CSS | BOOTSTRAP | VUETIFY</li>
                <li>LARAVEL | PHP | SQL </li>
                <li>GIT | GITLAB</li>
                <li>INTEGRATION CONTINUE</li>
                <li>UNIX | WINDOWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeScreen;
