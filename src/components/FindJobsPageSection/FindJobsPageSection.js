import css from './FindJobsPageSection.module.css';
import React from 'react';
import contractor1 from "../../assets/contractor2@2x.png";
import contractor2 from "../../assets/contractor1@2x.png";
import contractor3 from "../../assets/contractor3@2x.png";
import save from "../../assets/save.png";
// import { FormattedMessage } from '../../util/reactIntl';
import { FormattedMessage } from 'react-intl';
import { NamedLink } from '..';
// import classNames from 'classnames';
import classNames from 'classnames';
import NamedRedirect from '../NamedRedirect/NamedRedirect';



const FindJobsSection = props =>
{
  return (
  <section className={css.dukeContractorFourth}>
    <div className={css.container}>
        <h2 className={css.middleHeading}>Find Jobs</h2>
          <div className={css.jobContractorCol && 'row'}>
            <div className="col-12 col-md-6 col-lg-4 jobs-col">
              <div className={css.findJobWrapper}>
                  <div className={css.saveImg} ><img src={save} alt="Logo" /></div>
                  <div className={css.jobsHeader}>
                    <div className={css.jobIcon}>
                      <img src={contractor1} alt="Logo" className={css.jobIconImg} />
                    </div>
                    <div className="job-content">
                      <h4 className={css.jobsTitle}>Executive Interior</h4>
                      <p className={css.jobsSubheading}>Arch & Interior Company </p>
                    </div>
                  </div>
                  <div className={css.jobLinks}>
                    <span className={css.jobsLink}>Hospitality</span>
                    <span className={css.jobsLink}>Hospitals</span>
                    <span className={css.jobsLink}>Civic</span>
                  </div>
                  <h6 className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                  <ul className={css.jobListing}>
                    <li className={css.listFont}>Architecture & Interior Both</li>
                    <li className={css.listFont}>Multi Family Residential, Commercial, Large Scale </li>
                    <li className={css.listFont}>Contemporary, Glamorous and Modern</li>
                  </ul>
                  <div className="job-btn"><a className="upload-btn" href="#">Apply</a></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 jobs-col">
              <div className={css.findJobWrapper}>
                  <div className={css.saveImg} ><img src={save} alt="Logo" /></div>
                  <div className={css.jobsHeader}>
                    <div className={css.jobIcon}>
                    <img src={contractor3} alt="Logo" className={css.jobIconImg}/>
                    </div>
                    <div className="job-content">
                      <h4 className={css.jobsTitle}>Senior Arch</h4>
                      <p className={css.jobsSubheading}>Archi Company </p>
                    </div>
                  </div>
                  <div className={css.jobLinks}>
                    <span className={css.jobsLink}>Hospitality</span>
                    <span className={css.jobsLink}>Industrial</span>
                    <span className={css.jobsLink}>Landscape</span>
                  </div>
                  <h6 className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                  <ul className={css.jobListing}>
                    <li className={css.listFont}>Architecture & Interior Both</li>
                    <li className={css.listFont}>Multi Family Residential, Commercial, Large Scale </li>
                    <li className={css.listFont}>Contemporary, Glamorous and Modern</li>
                  </ul>
                  <div className="job-btn"><a className="upload-btn" href="#">Apply</a></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 jobs-col">
              <div className={css.findJobWrapper}>
                  <div className={css.saveImg} ><img src={save} alt="Logo" /></div>
                  <div className={css.jobsHeader}>
                    <div className={css.jobIcon}>
                    <img src={contractor2} alt="Logo" className={css.jobIconImg}/>
                    </div>
                    <div className="job-content">
                      <h4 className={css.jobsTitle}>Intern Interior</h4>
                      <p className={css.jobsSubheading}>Interior Agency Company </p>
                    </div>
                  </div>
                  <div className={css.jobLinks}>
                    <span className={css.jobsLink}>Hospitality</span>
                    <span className={css.jobsLink}>Industrial</span>
                    <span className={css.jobsLink}>Landscape</span>
                  </div>
                  <h6 className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                  <ul className={css.jobListing}>
                    <li className={css.listFont}>Architecture & Interior Both</li>
                    <li className={css.listFont}>Multi Family Residential, Commercial, Large Scale </li>
                    <li className={css.listFont}>Contemporary, Glamorous and Modern</li>
                  </ul>
                  <div className="job-btn"><a className="upload-btn" href="#">Apply</a></div>
               </div>
            </div>
          </div>
          <div className={css.jobContractorCol && 'row'}>
            <div className="col-12 col-md-6 col-lg-4 jobs-col">
              <div className={css.findJobWrapper}>
                  <div className={css.saveImg} ><img src={save} alt="Logo" /></div>
                  <div className={css.jobsHeader}>
                    <div className={css.jobIcon}>
                      <img src={contractor1} alt="Logo" className={css.jobIconImg} />
                    </div>
                    <div className="job-content">
                      <h4 className={css.jobsTitle}>Executive Interior</h4>
                      <p className={css.jobsSubheading}>Arch & Interior Company </p>
                    </div>
                  </div>
                  <div className={css.jobLinks}>
                    <span className={css.jobsLink}>Hospitality</span>
                    <span className={css.jobsLink}>Hospitals</span>
                    <span className={css.jobsLink}>Civic</span>
                  </div>
                  <h6 className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                  <ul className={css.jobListing}>
                    <li className={css.listFont}>Architecture & Interior Both</li>
                    <li className={css.listFont}>Multi Family Residential, Commercial, Large Scale </li>
                    <li className={css.listFont}>Contemporary, Glamorous and Modern</li>
                  </ul>
                  <div className="job-btn"><a className="upload-btn" href="#">Apply</a></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 jobs-col">
              <div className={css.findJobWrapper}>
                  <div className={css.saveImg} ><img src={save} alt="Logo" /></div>
                  <div className={css.jobsHeader}>
                    <div className={css.jobIcon}>
                    <img src={contractor3} alt="Logo" className={css.jobIconImg}/>
                    </div>
                    <div className="job-content">
                      <h4 className={css.jobsTitle}>Senior Arch</h4>
                      <p className={css.jobsSubheading}>Archi Company </p>
                    </div>
                  </div>
                  <div className={css.jobLinks}>
                    <span className={css.jobsLink}>Hospitality</span>
                    <span className={css.jobsLink}>Industrial</span>
                    <span className={css.jobsLink}>Landscape</span>
                  </div>
                  <h6 className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                  <ul className={css.jobListing}>
                    <li className={css.listFont}>Architecture & Interior Both</li>
                    <li className={css.listFont}>Multi Family Residential, Commercial, Large Scale </li>
                    <li className={css.listFont}>Contemporary, Glamorous and Modern</li>
                  </ul>
                  <div className="job-btn"><a className="upload-btn" href="#">Apply</a></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 jobs-col">
              <div className={css.findJobWrapper}>
                  <div className={css.saveImg} ><img src={save} alt="Logo" /></div>
                  <div className={css.jobsHeader}>
                    <div className={css.jobIcon}>
                    <img src={contractor2} alt="Logo" className={css.jobIconImg}/>
                    </div>
                    <div className="job-content">
                      <h4 className={css.jobsTitle}>Intern Interior</h4>
                      <p className={css.jobsSubheading}>Interior Agency Company </p>
                    </div>
                  </div>
                  <div className={css.jobLinks}>
                    <span className={css.jobsLink}>Hospitality</span>
                    <span className={css.jobsLink}>Industrial</span>
                    <span className={css.jobsLink}>Landscape</span>
                  </div>
                  <h6 className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                  <ul className={css.jobListing}>
                    <li className={css.listFont}>Architecture & Interior Both</li>
                    <li className={css.listFont}>Multi Family Residential, Commercial, Large Scale </li>
                    <li className={css.listFont}>Contemporary, Glamorous and Modern</li>
                  </ul>
                  <div className="job-btn"><a className="upload-btn" href="#">Apply</a></div>
               </div>
            </div>
          </div>
          <div className={css.jobContractorCol && 'row'}>
            <div className="col-12 col-md-6 col-lg-4 jobs-col">
              <div className={css.findJobWrapper}>
                  <div className={css.saveImg} ><img src={save} alt="Logo" /></div>
                  <div className={css.jobsHeader}>
                    <div className={css.jobIcon}>
                      <img src={contractor1} alt="Logo" className={css.jobIconImg} />
                    </div>
                    <div className="job-content">
                      <h4 className={css.jobsTitle}>Executive Interior</h4>
                      <p className={css.jobsSubheading}>Arch & Interior Company </p>
                    </div>
                  </div>
                  <div className={css.jobLinks}>
                    <span className={css.jobsLink}>Hospitality</span>
                    <span className={css.jobsLink}>Hospitals</span>
                    <span className={css.jobsLink}>Civic</span>
                  </div>
                  <h6 className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                  <ul className={css.jobListing}>
                    <li className={css.listFont}>Architecture & Interior Both</li>
                    <li className={css.listFont}>Multi Family Residential, Commercial, Large Scale </li>
                    <li className={css.listFont}>Contemporary, Glamorous and Modern</li>
                  </ul>
                  <div className="job-btn"><a className="upload-btn" href="#">Apply</a></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 jobs-col">
              <div className={css.findJobWrapper}>
                  <div className={css.saveImg} ><img src={save} alt="Logo" /></div>
                  <div className={css.jobsHeader}>
                    <div className={css.jobIcon}>
                    <img src={contractor3} alt="Logo" className={css.jobIconImg}/>
                    </div>
                    <div className="job-content">
                      <h4 className={css.jobsTitle}>Senior Arch</h4>
                      <p className={css.jobsSubheading}>Archi Company </p>
                    </div>
                  </div>
                  <div className={css.jobLinks}>
                    <span className={css.jobsLink}>Hospitality</span>
                    <span className={css.jobsLink}>Industrial</span>
                    <span className={css.jobsLink}>Landscape</span>
                  </div>
                  <h6 className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                  <ul className={css.jobListing}>
                    <li className={css.listFont}>Architecture & Interior Both</li>
                    <li className={css.listFont}>Multi Family Residential, Commercial, Large Scale </li>
                    <li className={css.listFont}>Contemporary, Glamorous and Modern</li>
                  </ul>
                  <div className="job-btn"><a className="upload-btn" href="#">Apply</a></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 jobs-col">
              <div className={css.findJobWrapper}>
                  <div className={css.saveImg} ><img src={save} alt="Logo" /></div>
                  <div className={css.jobsHeader}>
                    <div className={css.jobIcon}>
                    <img src={contractor2} alt="Logo" className={css.jobIconImg}/>
                    </div>
                    <div className="job-content">
                      <h4 className={css.jobsTitle}>Intern Interior</h4>
                      <p className={css.jobsSubheading}>Interior Agency Company </p>
                    </div>
                  </div>
                  <div className={css.jobLinks}>
                    <span className={css.jobsLink}>Hospitality</span>
                    <span className={css.jobsLink}>Industrial</span>
                    <span className={css.jobsLink}>Landscape</span>
                  </div>
                  <h6 className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                  <ul className={css.jobListing}>
                    <li className={css.listFont}>Architecture & Interior Both</li>
                    <li className={css.listFont}>Multi Family Residential, Commercial, Large Scale </li>
                    <li className={css.listFont}>Contemporary, Glamorous and Modern</li>
                  </ul>
                  <div className="job-btn"><a className="upload-btn" href="#">Apply</a></div>
               </div>
            </div>
          </div>
          <div className={css.jobContractorCol && 'row'}>
            <div className="col-12 col-md-6 col-lg-4 jobs-col">
              <div className={css.findJobWrapper}>
                  <div className={css.saveImg} ><img src={save} alt="Logo" /></div>
                  <div className={css.jobsHeader}>
                    <div className={css.jobIcon}>
                      <img src={contractor1} alt="Logo" className={css.jobIconImg} />
                    </div>
                    <div className="job-content">
                      <h4 className={css.jobsTitle}>Executive Interior</h4>
                      <p className={css.jobsSubheading}>Arch & Interior Company </p>
                    </div>
                  </div>
                  <div className={css.jobLinks}>
                    <span className={css.jobsLink}>Hospitality</span>
                    <span className={css.jobsLink}>Hospitals</span>
                    <span className={css.jobsLink}>Civic</span>
                  </div>
                  <h6 className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                  <ul className={css.jobListing}>
                    <li className={css.listFont}>Architecture & Interior Both</li>
                    <li className={css.listFont}>Multi Family Residential, Commercial, Large Scale </li>
                    <li className={css.listFont}>Contemporary, Glamorous and Modern</li>
                  </ul>
                  <div className="job-btn"><a className="upload-btn" href="#">Apply</a></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 jobs-col">
              <div className={css.findJobWrapper}>
                  <div className={css.saveImg} ><img src={save} alt="Logo" /></div>
                  <div className={css.jobsHeader}>
                    <div className={css.jobIcon}>
                    <img src={contractor3} alt="Logo" className={css.jobIconImg}/>
                    </div>
                    <div className="job-content">
                      <h4 className={css.jobsTitle}>Senior Arch</h4>
                      <p className={css.jobsSubheading}>Archi Company </p>
                    </div>
                  </div>
                  <div className={css.jobLinks}>
                    <span className={css.jobsLink}>Hospitality</span>
                    <span className={css.jobsLink}>Industrial</span>
                    <span className={css.jobsLink}>Landscape</span>
                  </div>
                  <h6 className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                  <ul className={css.jobListing}>
                    <li className={css.listFont}>Architecture & Interior Both</li>
                    <li className={css.listFont}>Multi Family Residential, Commercial, Large Scale </li>
                    <li className={css.listFont}>Contemporary, Glamorous and Modern</li>
                  </ul>
                  <div className="job-btn"><a className="upload-btn" href="#">Apply</a></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 jobs-col">
              <div className={css.findJobWrapper}>
                  <div className={css.saveImg} ><img src={save} alt="Logo" /></div>
                  <div className={css.jobsHeader}>
                    <div className={css.jobIcon}>
                    <img src={contractor2} alt="Logo" className={css.jobIconImg}/>
                    </div>
                    <div className="job-content">
                      <h4 className={css.jobsTitle}>Intern Interior</h4>
                      <p className={css.jobsSubheading}>Interior Agency Company </p>
                    </div>
                  </div>
                  <div className={css.jobLinks}>
                    <span className={css.jobsLink}>Hospitality</span>
                    <span className={css.jobsLink}>Industrial</span>
                    <span className={css.jobsLink}>Landscape</span>
                  </div>
                  <h6 className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                  <ul className={css.jobListing}>
                    <li className={css.listFont}>Architecture & Interior Both</li>
                    <li className={css.listFont}>Multi Family Residential, Commercial, Large Scale </li>
                    <li className={css.listFont}>Contemporary, Glamorous and Modern</li>
                  </ul>
                  <div className="job-btn"><a className="upload-btn" href="#">Apply</a></div>
               </div>
            </div>
          </div>

          <div class="bottom-pagination">
              <ul id="pagination">
                <li><a class="arrow-first" href="#">«</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#" class="active">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">6</a></li>
                <li><a href="#">7</a></li>
                <li><a class="arrow-first" href="#">»</a></li>
              </ul>
           </div>





    </div>
  </section>
  );
};

export default FindJobsSection;
