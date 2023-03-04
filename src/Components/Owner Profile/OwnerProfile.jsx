import React, { useState } from "react";
import FieldForm from "./FieldForm";
import Modal from "./Modal";
import style from "./OwnerProfile.module.css";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { redirect } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
const OwnerProfile = () => {
  const [formIsVisible, setFormIsVisible] = useState(false);
  function addField() {
    setFormIsVisible(true);
  }

  let OwnerToken = localStorage.getItem("userToken");
  let ownerData = jwtDecode(OwnerToken);
  console.log(ownerData);

  return (
    <div className="container pt-3">
      {/* <div> */}
      {formIsVisible && (
        <Modal setFormIsVisible={setFormIsVisible}>
          <FieldForm setFormIsVisible={setFormIsVisible}></FieldForm>
        </Modal>
      )}
      <section style={{ backgroundColor: "white" }} className="text-center ">
        <MDBRow className="justify-content-between pb-3 pt-4">
          {/* <p>please add field !</p> */}
          <MDBCol sm={3}>
            <Link to="/my-fields" className={style.btn}>
              <input
                className="btn btn-outline-success"
                type="submit"
                value="My fields"
              />
            </Link>
          </MDBCol>
          <MDBCol sm={3}>
            <input
              className="btn btn-outline-success"
              type="submit"
              value="Show events "
            />
          </MDBCol>
          <MDBCol sm={3}>
            <input
              className="btn btn-outline-success"
              type="submit"
              value="Add Field "
              onClick={addField}
            />
          </MDBCol>
        </MDBRow>
        <MDBContainer className="py-1">
          <MDBRow className="justify-content-between">
            <MDBCol sm="4" lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="text-muted mb-1">Field Owner</p>

                  <div className="d-flex justify-content-center mb-2"></div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm="8" lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {ownerData.fullName}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {ownerData.email}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {ownerData.phone}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Location</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {ownerData.location}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* </div> */}
    </div>
  );
};

export default OwnerProfile;

export function routeProtectionLoader() {
  if (localStorage.getItem("userToken")) {
    return null;
  } else return redirect("/login");
}
