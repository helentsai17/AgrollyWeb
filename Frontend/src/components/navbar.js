import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { withTranslation } from 'react-i18next';

class navbar extends Component {

    logOut(e) {
        localStorage.removeItem('usertoken')
        window.location = '/'
    }

    render() {
    const { t } = this.props;
    const loginRegLink = (

        <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {t('about.1')}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/about/technology">{t('technology.1')}</a>
                    <a className="dropdown-item" href="/our-team">{t('our-team.1')}</a>
                    <a className="dropdown-item" href="/work-with-us">{t('work-with-us.1')}</a>
                </div>
            </li>

        </ul>
    )

    const userLink = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/farmer/cropSell" className="nav-link">
                {t("sell.1")}
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/croprisk" className="nav-link">
                    {t("cropRisk.1")}
                </Link>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="ForumDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {t("forum.1")}
                </a>
                <div className="dropdown-menu" aria-labelledby="ForumDropdown">
                    <a className="dropdown-item" href="/forum/brazil">discussion</a>
                    <a className="dropdown-item" href="/forum/myquesiton">my question</a>
                </div>
            </li>

            <li className="nav-item">
                <Link to="/farmer/profile" className="nav-link">
                    {t("profile.1")}
                </Link>
            </li>
            <li className="nav-item">
                <a onClick={this.logOut.bind(this)} className="nav-link">
                    {t("logout.1")}
                </a>
            </li>


        </ul>
    )

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{"font-size":"20px"}}>
            <a style={{"font-size":"20px"}} className="navbar-brand" href="/">Agrolly</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li>
                        <Link to="/" className="nav-link">
                            {t("home.1")}
                        </Link>
                    </li>
                    {localStorage.usertoken ? userLink : loginRegLink}
                    <li>
                        <Link to="/news" className="nav-link">
                            {t("news.1")}
                        </Link>
                    </li>
                </ul>
               
            </div>
        </nav>
    );
    }

}
let Navbar = withTranslation()(navbar)

export default Navbar
