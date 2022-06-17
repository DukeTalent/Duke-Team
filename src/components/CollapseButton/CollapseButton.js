import { Button, Collapse, Dropdown } from 'react-bootstrap';
import React, { useState } from 'react';
import css from './CollapseButton.module.css';


function CollapseButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
        <Button
          className={css.darkBtn}
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div class="row">
            <div class="col-6">
              <div class="row">
                <div class= "col-3">
                  <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="">Speciality</Dropdown.Item>
                        <Dropdown.Item href="">Hospitality</Dropdown.Item>
                        <Dropdown.Item href="">Civic</Dropdown.Item>
                        <Dropdown.Item href="">Landscape</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div class= "col-3">
                  <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="">Area of Focus </Dropdown.Item>
                        <Dropdown.Item href="">Hospitality</Dropdown.Item>
                        <Dropdown.Item href="">Civic</Dropdown.Item>
                        <Dropdown.Item href="">Landscape</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div class= "col-3">
                  <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="">Style </Dropdown.Item>
                        <Dropdown.Item href="">Hospitality</Dropdown.Item>
                        <Dropdown.Item href="">Civic</Dropdown.Item>
                        <Dropdown.Item href="">Landscape</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
}
export default CollapseButton;
