import React, { useState } from "react";
import FieldForm from "./FieldForm";
import Modal from "./Modal";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import styles from "./OwnerProfile.module.css";
const OwnerProfile = () => {
  const [formIsVisible, setFormIsVisible] = useState(false);
  function addField() {
    setFormIsVisible(true);
  }

  return (
    <div className="container">
      {/* <div> */}
      {formIsVisible && (
        <Modal setFormIsVisible={setFormIsVisible}>
          <FieldForm setFormIsVisible={setFormIsVisible}></FieldForm>
        </Modal>
      )}
      <section style={{ backgroundColor: "white" }} className="text-center">
        <MDBRow className="justify-content-between pb-3">
          <p>please add field !</p>
          <MDBCol sm={3}>
            <MDBBtn outline rounded color="success">
              my fields
            </MDBBtn>
          </MDBCol>
          <MDBCol sm={3}>
            <MDBBtn outline color="success">
              show events
            </MDBBtn>
          </MDBCol>
          <MDBCol sm={3}>
            <MDBBtn outline color="success" onClick={addField}>
              Add field
            </MDBBtn>
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
                        name from api
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
                        email from api
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
                        phone from api
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
                        location from api
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