import React from "react";
import { MDBCol } from "mdbreact";


const SearchBar = () => {
  return (
    <MDBCol md="6">
        <input className="form-control" style={{borderRadius: '25px', width: '350px' }}  type="text" placeholder="Search" aria-label="Search" />
    </MDBCol>
  );
}

export default SearchBar;
