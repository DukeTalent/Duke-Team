import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import DukeLogo from "../../assets/logo.png";
import { twitterPageURL } from '../../util/urlHelpers';
import config from '../../config';
import {
  IconSocialMediaFacebook,
  IconSocialMediaInstagram,
  IconSocialMediaTwitter,
  IconSocialMediaLinkedin,
  Logo,
  ExternalLink,
  NamedLink,
} from '../../components';

import css from './Footer.module.css';

const renderSocialMediaLinks = intl => {
  const { siteFacebookPage, siteInstagramPage, siteTwitterHandle } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const goToFb = intl.formatMessage({ id: 'Footer.goToFacebook' });
  const goToInsta = intl.formatMessage({ id: 'Footer.goToInstagram' });
  const goToTwitter = intl.formatMessage({ id: 'Footer.goToTwitter' });

  const fbLink = siteFacebookPage ? (
    <ExternalLink key="linkToFacebook" href={siteFacebookPage} className={css.icon} title={goToFb}>
    </ExternalLink>
  ) : null;

  const twitterLink = siteTwitterPage ? (
    <ExternalLink
      key="linkToTwitter"
      href={siteTwitterPage}
      className={css.icon}
      title={goToTwitter}
    >
    </ExternalLink>
  ) : null;

  const instragramLink = siteInstagramPage ? (
    <ExternalLink
      key="linkToInstagram"
      href={siteInstagramPage}
      className={css.icon}
      title={goToInsta}
    >
    </ExternalLink>
  ) : null;
  
  return [fbLink, twitterLink, instragramLink].filter(v => v != null);
};




const Footer = props => {
  const { rootClassName, className, intl } = props;
  const socialMediaLinks = renderSocialMediaLinks(intl);
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.background}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>
          <div className={css.someLiksMobile}>{socialMediaLinks}</div>
          <div className={css.links}>
           <div className={css.container}>
              <div class="row">
                 <div class="col-12 col-lg-4 col-md-6">
                    <div>
                      <img src={DukeLogo} alt="Logo" className={css.footerLogo} />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <h6 className={css.footerCol}>Newsletter</h6>
                    <p>Signup for our newsletter to get the latest news in your inbox</p>
                    <form class="newsletter-form">
                      <div className={css.newsletterFields}>
                        {/* <input type="text" placeholder="Enter Your Email" name="mail" required> */}
                        <button className={css.btnNews} type="submit"><i class="fas fa-long-arrow-alt-right"></i></button>
                      </div>
                    </form>
                 </div>
                <div class="col-12 col-lg-4 col-md-3">
                  <div className={css.footerCol2}>
                    <h6>Projects</h6>
                    <ul class="footer-menus">
                      <li><a href="#">Hospitality</a></li>
                      <li><a href="#">Single Residence</a></li>
                      <li><a href="#">Comercial</a></li>
                      <li><a href="#">Retails</a></li>
                      <li><a href="#">Hospitals</a></li>
                      <li><a href="#">Large Scale</a></li>
                      <li><a href="#">Civic</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-lg-4 col-md-3">
                  <div className={css.footerCol}>
                    <h6>Links</h6>
                    <ul class="footer-menus">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Become Contractor</a></li>
                      <li><a href="#">Projects</a></li>
                      <li><a href="#">Blogs</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
              <div className={css.footerBottomBar}>
                <div className={css.container}>
                  <div className={css.footerBottom}>
                    <div className={css.footerCopyright}><p>©Copyright 2022- Duke Talent</p></div>
                    <div class="footer-social">
                      <ul className={css.socialListing}>
                        <div className={css.borderIcon}>
                          <li className={css.socialList}><IconSocialMediaFacebook /></li>
                        </div>
                        <div className={css.borderIcon}>
                          <li className={css.socialList}><IconSocialMediaInstagram /></li>
                        </div>
                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
     </div>
  );
};



export default injectIntl(Footer);

