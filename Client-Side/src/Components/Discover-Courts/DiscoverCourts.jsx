import React, { useState,useEffect} from "react";
import style from "./discoverCourts.module.css";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

import axios from "axios";


import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInputGroup
} from "mdb-react-ui-kit";

//TODO need to check if the field is validated by admin
export default function DiscoverCourts() {

///////////////////////////
  let fields = useLoaderData();
  // console.log(fields);

  const navigate = useNavigate();

  function reserve() {
    if (localStorage.getItem("userToken")) {
      navigate("/court-details");
    } else {
      navigate("/login");
    }
  }
  //////////////////////////
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    // console.log(searchValue)
    if(searchInput!==''){

      const filteredData =fields.filter(({location})=>{
        return Object.values(location).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      console.log(filteredData)
      setFilteredResults(filteredData)
    }
    else{
      setFilteredResults(fields)
    }
  }
  ////////////////////////
  

  return (
    <div className={style.MDBContainer}>
      <div className=" col-lg-5 justify-content-center d-flex p-2  ">
        <MDBContainer fluid >
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="Search for court by location..." aria-label="Search" type='search' onChange={(e) => searchItems(e.target.value)}/>
          {/* <input
             type="submit"
             className="btn btn-outline-success"
             value="Search "
             
             onClick={(e) => searchItems(e.target.value)}
          /> */}
        </MDBInputGroup>
      </MDBContainer>
      </div>
      <MDBContainer fluid>
        <MDBRow className="justify-content-center mb-0">
          <MDBCol md="12" xl="10">
          {searchInput.length > 0 ? (
                  filteredResults.map((f,index) => {
                      return (
                        <div className="container" key={index}>
                        <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3 row">
                          <MDBCardBody>
                            <MDBRow>
                              <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                                <MDBCardImage
                                  src="https://www.weareimps.com/siteassets/club/3g-header.jpg/Large"
                                  fluid
                                  className="w-50"
                                />
                              </MDBCol>
                              <MDBCol md="6">
                                <h4>Field Name: {f.fieldName}</h4>
                                <div className="mt-1 mb-0 text-muted small">
                                  <h5>Field Location: {f.location}</h5>
                                </div>
                              </MDBCol>
                              <MDBCol
                                md="6"
                                lg="3"
                                className="border-sm-start-none border-start">
                                <div className="d-flex flex-row align-items-center mb-1">
                                  <h4 className="mb-1 me-1 mx-5">
                                    Price: {f.price} EGP
                                  </h4>
                                </div>
                                <div className="text-center pt-2">
                                  <button
                                    onClick={reserve}
                                    className="btn btn-success ">
                                    Reserve Now
                                  </button>
                                </div>
                              </MDBCol>
                            </MDBRow>
                          </MDBCardBody>
                        </MDBCard>
                      </div>
                      )
                  })
              ) : (
                fields.map((f,index) => {
                  return (
                    <div className="container" key={index}>
                    <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3 row">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                            <MDBCardImage
                              src="https://www.weareimps.com/siteassets/club/3g-header.jpg/Large"
                              fluid
                              className="w-50"
                            />
                          </MDBCol>
                          <MDBCol md="6">
                            <h4>Field Name: {f.fieldName}</h4>
                            <div className="mt-1 mb-0 text-muted small">
                              <h5>Field Location: {f.location}</h5>
                            </div>
                          </MDBCol>
                          <MDBCol
                            md="6"
                            lg="3"
                            className="border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                              <h4 className="mb-1 me-1 mx-5">
                                Price: {f.price} EGP
                              </h4>
                            </div>
                            <div className="text-center pt-2">
                              <button
                                onClick={reserve}
                                className="btn btn-success ">
                                Reserve Now
                              </button>
                            </div>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                  )
              })
          )}
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export async function discoverFieldsLoader() {
  let { data } = await axios.get(`http://localhost:7500/api/fields`);
  return data;
}


// export async function discoverFieldsLocationLoader(){
//   let{data}=await axios.get(`http://localhost:7500/api/fields/location/`)
//   return data;
// }



