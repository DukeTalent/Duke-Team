import css from './NavbarSection.module.css';
import React from 'react';
import DukeLogo from "../../assets/logo.png";
import SearchBar from '../../components/SearchBar/SearchBar';

const NavbarSection = props =>
{
  return (
    <header className={css.navbarContainer}>
        <div className={css.navContainer}>
           <div class="row">
              <nav class="navbar navbar-expand-lg" className={css.navpad}>
                  <div class="col-6">
                    <div class="row">
                      <div class="col">
                        <img src={DukeLogo} alt="Logo" className={css.navLogo} />
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                   <div class="row">
                      <div className={css.buttonsMargin}>
                        <div className={css.navbarCollapse}>
                          <div class="col-4">
                            <ul class="navbar-nav">
                              <li class="nav-item active">
                                <a href="#" className={css.contBtn}>BECOME CONTRACTOR</a>
                              </li>
                            </ul>
                          </div>
                          <div class="col-7">
                            <SearchBar />
                          </div>
                          <div class="header-links">
                            <div class="col-2">
                              <a href="#" className={css.registerBtn}>Register</a>
                              <a href="#" className={css.loginBtn}>Login</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               </nav>
          </div>
         </div>
     </header>
  );
};

export default NavbarSection;
