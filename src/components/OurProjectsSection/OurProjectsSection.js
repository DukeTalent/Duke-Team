import css from './OurProjectsSection.module.css';
import React from 'react';
import project1 from "../../assets/our_project1.png";
import project2 from "../../assets/our_project1@2x.png";
import project3 from "../../assets/our_project2.png";
import project4 from "../../assets/our_project2@2x.png";

const OurProjectsSection = props =>
{
  return (

    <div className={css.navContainer}>
      <h3 className={css.smallHeading}>Best Work</h3>
      <h2 className={css.middleHeading}>Our Projects</h2>
      <div className={css.mainTabs}>
        <ul className={css.navTabs } className="nav" id="myTab" role="tablist">
          <li className={css.navItem} role="presentation">
            <button className="active" className={css.navLink} id="hospitality-tab" data-bs-toggle="tab" data-bs-target="#hospitality" type="button" role="tab" aria-controls="hospitality" aria-selected="true">Hospitality</button>
          </li>
          <li className={css.navItem} role="presentation">
            <button className={css.navLink} id="single-tab" data-bs-toggle="tab" data-bs-target="#single" type="button" role="tab" aria-controls="single" aria-selected="false">Single Residency</button>
          </li>
          <li className={css.navItem} role="presentation">
            <button className={css.navLink} id="commercial-tab" data-bs-toggle="tab" data-bs-target="#commercial" type="button" role="tab" aria-controls="commercial" aria-selected="false">Commercial</button>
          </li>
          <li className={css.navItem} role="presentation">
            <button className={css.navLink} id="retail-tab" data-bs-toggle="tab" data-bs-target="#retail" type="button" role="tab" aria-controls="retail" aria-selected="false">Retail</button>
          </li>
          <li className={css.navItem} role="presentation">
            <button className={css.navLink} id="hospitals-tab" data-bs-toggle="tab" data-bs-target="#hospitals" type="button" role="tab" aria-controls="hospitals" aria-selected="false">Hospitals</button>
          </li>
          <li className={css.navItem} role="presentation">
            <button className={css.navLink} id="scale-tab" data-bs-toggle="tab" data-bs-target="#scale" type="button" role="tab" aria-controls="scale" aria-selected="false">Large Scale</button>
          </li>
          <li className={css.navItem} role="presentation">
            <button className={css.navLink} id="civic-tab" data-bs-toggle="tab" data-bs-target="#civic" type="button" role="tab" aria-controls="civic" aria-selected="false">Civic</button>
          </li>
          <li className={css.navItem} role="presentation">
            <button className={css.navLink} id="landscape-tab" data-bs-toggle="tab" data-bs-target="#landscape" type="button" role="tab" aria-controls="landscape" aria-selected="false">Landscape</button>
          </li>
        </ul>
      </div>

      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={project1} alt="Project" className="d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img src={project2} alt="Project" className="d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img src={project3} alt="Project" className="d-block w-100"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>


      <section class="carousel_se_01">
        <div class="container-fluid">
          <div class="row">       
            <div class="col-md-12">
              <div class="col-md-12 px-0 p-t-30">
                <div class="owl-carousel carousel_se_01_carousel owl-theme">
                  <div class="item">
                    <div class="col-md-12">
                      <div class="main_services">
                        <a href="#">
                          <div class="roundimg">
                            <img src={project1} alt="Project" className={css.jobIconImg} />
                          </div>
                          <div class="slider-abs">
                            <h3> Hospitality Home Interior Design</h3>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="item">
                    <div class="col-md-12">
                      <div class="main_services">
                        <a href="#">
                          <div class="roundimg">
                            <img src={project2} alt="Project" className={css.jobIconImg} />
                          </div>
                          <div class="slider-abs">
                            <h3> Hospitality Interior Kitchen Design</h3>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="item">
                    <div class="col-md-12">
                      <div class="main_services">
                        <a href="#">
                          <div class="roundimg">
                            <img src={project3} alt="Project" className={css.jobIconImg} />
                          </div>
                          <div class="slider-abs">
                            <h3> Hospitality Interior Kitchen Design</h3>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="item">
                    <div class="col-md-12">
                      <div class="main_services">
                        <a href="#">
                          <div class="roundimg">
                            {/* <img src="images/our_project2@2x.png"> */}
                            <img src={project4} alt="Project" className={css.jobIconImg} />
                          </div>
                          <div class="slider-abs">
                            <h3> Hospitality Interior Kitchen Design</h3>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProjectsSection;