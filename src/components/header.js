import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
const Header = () => {
  const [showBasic, setShowBasic, openBasic, setOpenBasic] = useState(false);

  return (
    <header>
     <MDBNavbar expand='lg' light bgColor='dark' style={{ color: 'white' }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'style={{ color: 'white', marginRight:'800px'}} >
        <img src='/logo.png' alt='Logo' style={{ height: '40px', marginRight:'20px' }} />
            HANDLING INNOVATION INC.
            
            </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' style={{ color: 'white' }}>
                HOME
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{ color: 'white' }}>SERVICES</MDBNavbarLink >
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button' style={{ color: 'white' }}>
                  MENU
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link style={{ color: 'white' }}>Action</MDBDropdownItem>
                  <MDBDropdownItem link style={{ color: 'white' }}>Another action</MDBDropdownItem>
                  <MDBDropdownItem link style={{ color: 'white' }}>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

           
          </MDBNavbarNav>

         
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
      
     
    </header>
  );
}

export default Header;
