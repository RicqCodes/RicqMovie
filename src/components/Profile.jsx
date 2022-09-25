import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import {
  updateDoc,
  doc,
  //  getDoc
} from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import moment from "moment";

import Header from "./Header";
import Footer from "./Footer";

import {
  Container,
  Main,
  AccountHeader,
  HeaderDescription,
  Icon,
  UserGreeting,
  MainContainer,
  PersonalDetailsContainer,
  PersonalHeadingBox,
  PersonalDetailsBox,
  Name,
  ChangePassword,
  Email,
  Phone,
  VerifyNumber,
  PaymentInfo,
  Billing,
  Plan,
  DetailsContainer,
  SignOutBtn,
  SpaceBelow,
} from "../styles/Profile.styled";

const Profile = () => {
  const auth = getAuth();
  const nameref = useRef();
  const emailref = useRef();
  const phoneref = useRef();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    phone: auth.currentUser.phone,
  });
  const [changeDetails, setChangeDetails] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const { name, email, phone } = formData;
  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // UPDATE USERNAME IN FIREBASE
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name,
        });
        toast.success("Display Name updated succesfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (err) {
      toast.error(err, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const getTime = () => {
    const today = new Date();
    const curHr = today.getHours();

    if (curHr < 12) {
      return "Good Morning";
    } else if (curHr < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Main>
          <AccountHeader>
            <HeaderDescription>
              <p>Account</p>
              <Icon>
                <GroupAddIcon />
                <span>
                  Member since{" "}
                  {moment
                    .utc(auth.currentUser.metadata.creationTime)
                    .format("MMMM YYYY")}
                </span>
              </Icon>
            </HeaderDescription>
            <UserGreeting>
              <p>
                {getTime()}
                <span>{" " + name}</span>
              </p>
            </UserGreeting>
          </AccountHeader>
          <MainContainer>
            <PersonalDetailsContainer>
              <PersonalHeadingBox>
                <h2>PERSONAL DETAILS</h2>
              </PersonalHeadingBox>
              <PersonalDetailsBox>
                <Name>
                  <form>
                    <input
                      ref={nameref}
                      type="text"
                      id="name"
                      disabled={!changeDetails.name}
                      value={name}
                      onChange={onChange}
                    />
                  </form>
                  <p
                    onClick={() => {
                      changeDetails.name && onSubmit();
                      setChangeDetails((prevState) => ({
                        ...prevState,
                        [nameref.current.id]: !prevState[nameref.current.id],
                      }));
                    }}
                  >
                    {changeDetails.name ? "Done" : "Change name"}
                  </p>
                </Name>

                <Email>
                  <form>
                    <input
                      ref={emailref}
                      type="text"
                      id="email"
                      disabled={!changeDetails.email}
                      value={email}
                      onChange={onChange}
                    />
                  </form>
                  <p
                    onClick={() => {
                      changeDetails.email && onSubmit();
                      setChangeDetails((prevState) => ({
                        ...prevState,
                        [emailref.current.id]: !prevState[emailref.current.id],
                      }));
                    }}
                  >
                    {changeDetails.email ? "Done" : "Change email"}
                  </p>
                </Email>

                <ChangePassword>
                  <div></div>
                  <p>Change password</p>
                </ChangePassword>

                <Phone>
                  <form>
                    <input
                      ref={phoneref}
                      type="text"
                      id="phone"
                      disabled={!changeDetails.phone}
                      value={phone}
                      onChange={onChange}
                    />
                  </form>
                  <p
                    onClick={() => {
                      changeDetails.phone && onSubmit();
                      setChangeDetails((prevState) => ({
                        ...prevState,
                        [phoneref.current.id]: !prevState[phoneref.current.id],
                      }));
                    }}
                  >
                    {changeDetails.phone ? "Done" : "Add phone number"}
                  </p>
                </Phone>
                <VerifyNumber>
                  <div></div>
                  <p>Verify phone number</p>
                </VerifyNumber>
                <PaymentInfo>
                  <div></div>
                  <p>Manage payment info</p>
                </PaymentInfo>
                <Billing>
                  <div></div>
                  <p>Billing details</p>
                </Billing>
              </PersonalDetailsBox>
            </PersonalDetailsContainer>
            <Plan>
              <PersonalHeadingBox>
                <h2>PLAN DETAILS</h2>
              </PersonalHeadingBox>
              <DetailsContainer>
                <h3>Free</h3>
                <p>Change plan</p>
              </DetailsContainer>
            </Plan>
          </MainContainer>
        </Main>
        <SpaceBelow>
          <SignOutBtn onClick={onLogout}>Signout all device</SignOutBtn>
        </SpaceBelow>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
