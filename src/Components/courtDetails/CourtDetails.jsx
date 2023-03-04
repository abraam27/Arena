import React,{useState,useEffect} from "react";
import style from'./courtDetails.module.css';
import {
    MDBContainer
    ,MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBRipple,
    MDBBtn,
}  from 'mdb-react-ui-kit'
export default function CourtDetails(){
    let [courtDetails, setCourtDetails] = useState({
        courtName: "",
        ownerName: "", 
        location: "",
        price:"",
        image:"",
        ownerPhone:""
      });


      return(
        <MDBContainer fluid>
          <h1 className="text-center">court details</h1>
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBCardImage
                    src="https://www.weareimps.com/siteassets/club/3g-header.jpg/Large"
                    fluid
                    className="w-100"
                  />
                </MDBCol>
                <MDBCol md="6">
                  <h4>Court name</h4>
                  <div className="mt-1 mb-0 text-muted small">
                    <h5>Location</h5>
                  </div>
                  {/* <div className="mb-2 text-muted small">
                    <h5>ownerName</h5>
                  </div> */}
                  {/* <div className="mb-2 text-muted small">
                    <h5>Owner Name</h5>
                  </div>
                  <div className="mb-2 text-muted small">
                    <h5>Owner Phone</h5>
                  </div> */}
                  
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">price from api</h4>
                  </div>
                  <div className="d-flex flex-column mt-5">
                    <input
                      type="submit"
                      className="btn btn-outline-success"
                      value="Reserve Now "
                        // onClick={Reserve}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
      )
}