import React,{useState,useEffect} from "react";
import axios from "axios";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
}  from 'mdb-react-ui-kit'

export default function MyFields(){
let [fieldData,setFieldData]= useState([])
   

useEffect(()=>{
    async function getFieldsData(){

        let {data}= await axios.get(`http://localhost:7500/api/fields`);
        setFieldData(data)
        // console.log(fieldData);
      }
    
      getFieldsData();
},[])
console.log(fieldData)
    return( 
        <>   
    <MDBContainer fluid>
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="10">
            {fieldData.map((f , index)=>
            <div className="container">

                <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3 row" key={index}>
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
                      className="border-sm-start-none border-start"
                      >
                      <div className="d-flex flex-row align-items-center mb-1">
                    

                        <h4 className="mb-1 me-1 mx-5">Price: {f.price} EGP</h4>
                     
                      </div>
                      <div className="d-flex flex-column mt-5">
                          {f.valid == 0 && <h5 className="text-center text-danger">Pending to approve your request...</h5>}
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
              </div>
                     
            )

        }
          
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>

                      </>
    )
}