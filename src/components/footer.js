import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


const footer = () => {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted' style={{ color: 'white' }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block' style={{ color: 'white' }}>
          <span>Get connected with us on social networks:</span>
        </div>

        <div style={{ color: 'white' }}>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className='' style={{ color: 'white' }}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{marginLeft:'15px'}}>
              <img src='/logo.png' alt='Logo' style={{ height: '65px' , marginRight:'20PX' }} />
                HANDLING INNOVATION INC.
              </h6>
              <p> The company was establish on 2002 and been continuously growing ever since. It started as the official distributor of BT products (Sweden-2002), Raymond products (US-2005) and then Toyota warehouse trucks (Japan-2009).
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ color: 'white' }}>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                 FORKLIFT
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  GT
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Toyota Highlander
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Toyota Sienna
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Toyota GR Supra
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4' style={{ color: 'white' }}>
              <h6 className='text-uppercase fw-bold mb-4'>MORE</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Reservation
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Km 19 West Service Road, South Luzon Expressway, Marcelo Green
Paranaque, Philippines
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                sales@toyotaforklifts-philippines.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> (+63) 2 8821 1414
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> (+63) 2 8821 1414
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} style={{ color: 'white' }}>
        © 2024 Copyright: 
        <a className='text-reset fw-bold' href='https://facebook.com' style={{ marginLeft: '5px' }}>
          JOHN NERI ESCOBELLA
        </a>
      </div>
    </MDBFooter>
  )
}

export default footer
