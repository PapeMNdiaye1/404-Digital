import './Style/Style.css';
import { React, useState } from 'react';
import { Routes, BrowserRouter, Route, } from "react-router-dom";

import TopBare from './TopBare';
import { Accueil } from './Pages/Accueil';
import { TheFooter } from './Pages/Accueil';
import Articles from './Pages/Articles';
import Travaux from './Pages/Travaux';
import Service from './Pages/Service';
import Contact from './Pages/Contact';

import Interior1 from './Pages/Projects/Interior_Design';
import SmallHouse1 from './Pages/Projects/Small_House_1';
import Hangar1 from './Pages/Projects/Hangar_1';
import Touba from './Pages/Projects/Touba';
import ProduitsA from './Pages/Projects/ProduitsA';
import Articles_1 from './Pages/Projects/Articles_1';
import Articles_2 from './Pages/Projects/Articles_2';
import Articles_3 from './Pages/Projects/Articles_3';
import Articles_4 from './Pages/Projects/Articles_4';
import City1 from './Pages/Projects/Cité';
import MSAD from './Pages/Projects/MSAD';
import ProduitsB from './Pages/Projects/ProduitsB';
import Villa_Saly from './Pages/Projects/Villa_B';
import VillaTerangaAlAmin from './Pages/Projects/Villa_Teranga_Al_Amin';

function App() {

  const [TheImage, setTheImage] = useState('');
  const [TheTitle, setTheTitle] = useState('');
  const [TheDate, setTheDate] = useState('');
  const [TheLink, setTheLink] = useState('/');


  const changeTab = (newTab, link) => {
    console.log(newTab, link);
  }

  const GetImage = (theimage, title, date, link) => {
    setTheImage(theimage);
    setTheTitle(title);
    setTheDate(date);
    setTheLink(link);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <TopBare onChangeTab={changeTab} />
        <div className='App_container'>
          <div className='hover_loader_container'>
            <div className='hover_loader'>
              <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
          <Routes>
            <Route exact path="/"
              element={<Accueil GetImageToApp={GetImage} />}
            />
            <Route exact path="/Travaux" element={<Travaux />} />
            <Route exact path="/Service" element={<Service />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/ARTICLES" element={<Articles
            />} />
            {/* !############################################## */}
            <Route exact path="/Interior1" element={<Interior1 />} />
            <Route exact path="/SmallHouse1" element={<SmallHouse1 />} />
            <Route exact path="/Hangar1" element={<Hangar1 />} />
            <Route exact path="/Touba" element={<Touba />} />
            <Route exact path="/ProduitsA" element={<ProduitsA />} />
            <Route exact path="/FORAFRICC_2023" element={<Articles_1 />} />
            <Route exact path="/MSDAD-de-THIES" element={<Articles_2 />} />
            <Route exact path="/Articles_3" element={<Articles_3 />} />
            <Route exact path="/Articles_4" element={<Articles_4 />} />
            <Route exact path="/City1" element={<City1 />} />
            <Route exact path="/MSAD" element={<MSAD />} />
            <Route exact path="/ProduitsB" element={<ProduitsB />} />
            <Route exact path="/Villa-Saly" element={<Villa_Saly />} />
            <Route exact path="/VillaTerangaAlAmin" element={<VillaTerangaAlAmin />} />
          </Routes>
          <TheFooter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;