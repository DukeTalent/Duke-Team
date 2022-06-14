import css from './OurProjectsSection.module.css';
import React from 'react';
import project1 from "../../assets/our_project1.png";
import project2 from "../../assets/our_project1@2x.png";
import project3 from "../../assets/our_project2.png";
import project4 from "../../assets/our_project2@2x.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OurProjectsSection = props =>
{
  return (


    <div className={css.dukeContractor}>
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

          <div className={css.carousalPad}>
            <div class='container-fluid' >
              <OwlCarousel items={2}
                  className="owl-theme"
                  loop
                  nav
                  margin={1} >
                  <div>
                    <img src={project1} alt="Project" className={css.imgSizee} />
                    <h3 className={css.sliderAbs}> Hospitality Interior Kitchen Design</h3>
                  </div>

                  <div>
                    <img src={project2} alt="Project" className={css.imgSizee} />
                    <h3 className={css.sliderAbs}> Hospitality Interior Kitchen Design</h3>
                  </div>

                  <div>
                    <img src={project3} alt="Project" className={css.imgSizee} />
                    <h3 className={css.sliderAbs}> Hospitality Interior Kitchen Design</h3>
                  </div>

                  <div>
                    <img src={project4} alt="Project" className={css.imgSizee} />
                    <h3 className={css.sliderAbs}> Hospitality Interior Kitchen Design</h3>
                  </div>
              </OwlCarousel>
            </div>
          </div>
      </div>
    </div>
  );
};

export default OurProjectsSection;
