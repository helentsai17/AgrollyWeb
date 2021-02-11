import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useTranslation } from 'react-i18next';

import Navbar from "./components/navbar"
import homePage from './components/homePage/homepage'
import technology from './components/aboutPage/technology'
import ourteam from './components/aboutPage/ourTeam'
import workWithUs from './components/aboutPage/WorkWithUs/workWithUs'
import i18next from 'i18next';
import news from './components/WorldNews/newsHomePage'
import createnews from './components/WorldNews/inputNews'
import newsTemplet from './components/WorldNews/newsTemplet'
import feedback from './components/feedbackpage/feedbackpage'

function App() {

  const { t, i18n } = useTranslation();

  function LanguageClick(lang) {
    i18n.changeLanguage(lang)
  }

  return (
    <div>
      <Router >
        <Navbar />
        <ul style={{"zIndex":"999","position": "absolute","right": "3%"}}  className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="WeatherDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Language</a>
            <div className="dropdown-menu" aria-labelledby="WeatherDropdown">
              <button className="dropdown-item" onClick={() => { LanguageClick('en') }}>English</button>
              <button className="dropdown-item" onClick={() => { LanguageClick('po') }}>Portuguese</button>
              <button className="dropdown-item" onClick={() => { LanguageClick('mo') }}>Mongolian</button>
              <button className="dropdown-item" onClick={() => { LanguageClick('ch') }}>中文</button>
            </div>
          </li>
        </ul>
        <Route path="/" exact component={homePage} />
        <Route path="/our-team" component={ourteam} />
        <Route path="/work-with-us" component={workWithUs} />
        <Route path='/news' component={news}/>
        <Route path='/happened/:id' component={newsTemplet}/>
        <Route path='/createNews' exact component={createnews}/>
        <Route path='/feedback' exact component={feedback}/>
        <Route path="/about/technology" exact component={technology} />
       
      </Router>
    </div>
  );
}

export default App;
