import React,{useState} from "react";
import style from'./discoverCourts.module.css';
import { useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
}  from 'mdb-react-ui-kit'

// export default function Search({ searchInput, search }) {
   
//   }
    
   
export default function DiscoverCourts(){
    
    let [courts, setCourts] = useState({
        courtName: "",
        // ownerName: "", 2
        location: "",
        price:"",
        image:"",
      });
      
      
      const navigate = useNavigate();
     
   
  //  async function GetAllFields(e) {

  //   await axios.get(`http://localhost:7500/api/discover`, courts);
    
     
    
  // }
    
  // useEffect(()=>{
  //   GetAllFields()
  // },[])

   function Reserve(){
    
    if(localStorage.getItem("userToken")){
     

        navigate("/courtDetails");
    }
    else{
        navigate("/login");
    }
  }

return (
  <div className={style.MDBContainer}>
    <div className=" col-lg-5 justify-content-center d-flex p-2  ">
      <input
        className="search-bar  rounded border-dark  text-center w-50 "
        type="text"
        placeholder="Search for court by location..."

        //   onChange={courts}
        //   onKeyPress={courts}
      />
    </div>
    <MDBContainer fluid>
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
                  <h4>Court 1</h4>
                  <div className="mt-1 mb-0 text-muted small">
                    <h5>Location</h5>
                  </div>
                  {/* <div className="mb-2 text-muted small">
                    <h5>ownerName</h5>
                  </div> */}
                  <div className="mb-2 text-muted small">
                    <h5>Phone</h5>
                  </div>
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$13.99</h4>
                  </div>
                  <div className="d-flex flex-column mt-5">
                    <input
                      type="submit"
                      className="btn btn-outline-success"
                      value="Reserve "
                        onClick={Reserve}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
  </div>
);
  
}



