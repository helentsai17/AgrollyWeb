import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useTranslation } from 'react-i18next';

import Navbar from "./components/navbar"
import homePage from './components/homePage/homepage'



import farmerLogin from "./components/farmer/farmer.login"
import register from "./components/farmer/register"

import cropSell from './components/farmer/ShoppingPages/CropSell'
import cropCreate from "./components/farmer/ShoppingPages/CreateSell"
import farmerProfile from './components/farmer/FarmerProfile'
import shopper from './components/shopper/Shopping'
import OneTimePassword from './components/farmer/OneTimePassword'
import technology from './components/aboutPage/technology'
import forgetPassword from './components/farmer/forgetPassword'
import resetPassword from './components/farmer/resetPassword'
import profileEdit from './components/farmer/editProfile'
import Allforum from './components/forum/displaychat'
import joinchat from './components/forum/joinOneChat'
import askquestion from './components/forum/askquestion/askquestion'
import MyQuestionList from './components/forum/myquestion'
import editquestion from './components/forum/editquestion';
import annaulweather from './components/weatherPage/annualpage'
import weeklyweather from './components/weatherPage/weeklyweather'
import hourlyweather from './components/weatherPage/hourlyweather'
import riskpage from './components/riskManagement/riskpage'
import requiresearch from './components/riskManagement/requireSearch'
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
        
        <Route path="/shop" exact component={shopper} />
        <Route path="/our-team" component={ourteam} />
        <Route path="/work-with-us" component={workWithUs} />
        <Route path="/register" exact component={register} />
        <Route path="/farmer/login" exact component={farmerLogin} />
        <Route path="/farmer/forgetpassword" exact component={forgetPassword} />
        <Route path="/farmer/resetpassword" component={resetPassword} />
        <Route path="/farmer/profileEdit" component={profileEdit} />
        <Route path="/farmer/profile" exact component={farmerProfile} />
        <Route path="/farmer/onetimepassword" exact component={OneTimePassword} />

        <Route path="/forum/brazil" exact component={Allforum} />
        {/* <Route path ="/forum/askquestion" exact component = {askquestion} /> */}
        <Route path="/forum/myquesiton" exact component={MyQuestionList} />
        <Route path="/forum/joinchat/:id" exact component={joinchat} />
        <Route path="/forum/editquestion/:id" exact component={editquestion} />

        <Route path="/weather/annaul" exact component={annaulweather} />
        <Route path="/weather/weekly" exact component={weeklyweather} />
        <Route path="/weather/hourly" exact component={hourlyweather} />

        <Route path="/farmer/cropSell" exact component={cropSell} />
        <Route path="/farmer/cropCreate" exact component={cropCreate} />

        <Route path="/croprisk" exact component={requiresearch} />
        <Route path="/croprisk/display" exact component={riskpage} />

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
