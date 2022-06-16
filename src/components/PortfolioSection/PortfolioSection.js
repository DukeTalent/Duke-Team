import css from './PortfolioSection.module.css';
import React from 'react';

const PortfolioSection = props =>
{
  return (
    <div>
      <section className="duke-contractor-second">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
              <div className={css.uploadContent}>
                <h3 className={css.numberHeading}>01</h3>
                <h4 className={css.middleHeading}>Upload Your</h4>
                <h4 className={css.middleHeading}>Resume</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <div className="upload-form">
                  <form action="/action_page.php">
                    <div className="upload-form">
                      <p className={css.uploadBtn}>Upload</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className={css.uploadContent}>
                <h3 className={css.numberHeading}>02</h3>
                <h4 className={css.middleHeading}>Upload Your Best</h4>
                <h4 className={css.middleHeading}>Portfolio</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <div className="upload-form">
                  <form action="/action_page.php">
                    <div className="upload-form">
                      <p className={css.uploadBtn}>Upload</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className={css.uploadContent}>
                <h3 className={css.numberHeading}>03</h3>
                <h4 className={css.middleHeading}>Searching</h4>
                <h4 className={css.middleHeading}>for Job Posted</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <div className="job-btn">
                  <a href="#" className={css.uploadBtn}>Find A Job</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
 
export default PortfolioSection;