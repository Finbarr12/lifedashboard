import React, { useState } from "react";
import styled from "styled-components";
import {
  AiFillCloseCircle,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

const Settings = () => {
  const [show, setShow] = useState(false);
  const [popup, setpopup] = useState(false);
  const [password, setPassword] = useState(false);
  const [nextofkin, setnextofkin] = useState(false);
  const [phoneNo, setPhoneno] = useState(false);

  const Toogle = () => {
    setShow(!show);
  };

  const kintogg = () => {
    setnextofkin(!nextofkin);
  };
  const phonetogg = () => {
    setPhoneno(!phoneNo);
  };

  const Passtogg = () => {
    setPassword(!password);
  };

  const Togglepopup = () => {
    setpopup(!popup);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",

        flexDirection: "column",
      }}
    >
      <HeadHolder>
        <Holder>
          <Circle>O</Circle>
          <Held>
            <h2>Ogbonna Finbarr</h2>
            <pre>ogbonnfinbarr@gmail.com</pre>
          </Held>
        </Holder>
        {!show ? (
          <Icon size={25} onClick={Toogle} />
        ) : (
          <Close size={28} onClick={Toogle} />
        )}
      </HeadHolder>
      <Main style={{ marginTop: "50px" }}>
        <Title>Phone No.</Title>
        <HoldTitle>08097654312</HoldTitle>
      </Main>
      <Main>
        <Title>Genotype</Title>
        <HoldTitle>AA</HoldTitle>
      </Main>
      <Main>
        <Title>Bloodgroup</Title>
        <HoldTitle>O+</HoldTitle>
      </Main>
      <Main>
        <Title>Next of Kin</Title>
        <HoldTitle>Kolawole Paul</HoldTitle>
      </Main>
      {show ? (
        <Box>
          <Txth
            onClick={() => {
              Toogle();
              Togglepopup();
            }}
          >
            <p>Change E-mail</p>
          </Txth>
          <Txth
            onClick={() => {
              Toogle();
              Passtogg();
            }}
          >
            <p>Change Password</p>
          </Txth>
          <Txth
            onClick={() => {
              Toogle();
              kintogg();
            }}
          >
            <p>Change Next-of-kin</p>
          </Txth>
          <Txth
            onClick={() => {
              Toogle();
              phonetogg();
            }}
          >
            <p>Change Phone-number</p>
          </Txth>
        </Box>
      ) : null}

      {popup ? (
        <Popup>
          <EmailBox>
            <h3>Change E-mail</h3>
            <input type="text" defaultValue={"ogbonnfinbarr@gmail.com"} />
            <ButHold>
              <button>Update</button>
            </ButHold>
          </EmailBox>
          <Icons onClick={Togglepopup} />
        </Popup>
      ) : null}
      {nextofkin ? (
        <Popup>
          <EmailBox>
            <h3>Change Next-of-kin</h3>
            <input type="text" defaultValue={"Kolawole Paul"} />
            <ButHold>
              <button>Update</button>
            </ButHold>
          </EmailBox>
          <Icons onClick={kintogg} />
        </Popup>
      ) : null}

      {phoneNo ? (
        <Popup>
          <EmailBox>
            <h3>Change PhoneNumber</h3>
            <input type="text" defaultValue={"08097654312"} />
            <ButHold>
              <button>Update</button>
            </ButHold>
          </EmailBox>
          <Icons onClick={phonetogg} />
        </Popup>
      ) : null}

      {password ? (
        <Popup>
          <EmailBox style={{ height: "280px" }}>
            <h3 style={{ marginTop: "20px" }}>Change Password</h3>
            <input
              type="text"
              placeholder="Old password..."
              style={{ marginBottom: "20px" }}
            />
            <input
              type="text"
              placeholder="New password..."
              style={{ marginBottom: "20px" }}
            />
            <input
              type="text"
              placeholder="Confirm new password..."
              style={{ marginBottom: "20px" }}
            />
            <ButHold>
              <button style={{ marginTop: "5px" }}>Update</button>
            </ButHold>
          </EmailBox>
          <Icons onClick={Passtogg} />
        </Popup>
      ) : null}
    </div>
  );
};

export default Settings;

const Close = styled(AiFillCloseCircle)`
  margin-right: 40px;
  margin-top: 20px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    margin: 0;
    margin-top: 27px;
    margin-right: 13px;
  }
`;

const Icons = styled(AiOutlineClose)`
  color: white;
  position: absolute;
  right: 20%;
  top: 30%;
  cursor: pointer;
  size: 30;

  @media screen and (max-width: 900px) {
    right: 5%;
    top: 10%;
    size: 35;
  }
`;

const ButHold = styled.div`
  width: 93%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    width: 90px;
    height: 40px;
    background-color: purple;
    color: white;
    font-size: 17px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;

    :hover {
      transform: scale(0.9);
    }
  }
`;

const EmailBox = styled.div`
  width: 500px;
  height: 200px;
  background-color: white;
  padding-left: 20px;

  @media screen and (max-width: 900px) {
    width: 85%;
  }

  h3 {
    margin: 0;
    margin-top: 50px;
    margin-bottom: 15px;
  }

  input {
    width: 90%;
    height: 30px;
    border: 1px solid silver;
    outline: none;
    padding-left: 10px;
  }
`;

const Popup = styled.div`
  width: 82%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Txth = styled.div`
  width: 100%;
  cursor: pointer;
  height: 50px;
  display: flex;
  align-items: center;

  :hover {
    background-color: purple;
    color: white;
  }
`;

const Box = styled.div`
  width: 240px;

  background-color: white;
  box-shadow: 0px 1px 1px rgba(138, 137, 137, 0.8);
  position: absolute;
  right: 1px;
  margin-top: 4%;

  p {
    margin: 0;
    margin-left: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    transition: all 350ms ease-in-out;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    top: 14%;
  }
`;

const Main = styled.div`
  width: 95%;
  /* background-color: red; */
  margin-top: 30px;
  /* margin-left: 20px; */

  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Title = styled.h3`
  margin: 0;
`;
const HoldTitle = styled.div`
  width: 80%;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 20px;
  margin-top: 10px;
  padding-left: 18px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

const Icon = styled(AiOutlineMenu)`
  margin-right: 40px;
  margin-top: 20px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    margin: 0;
    margin-top: 27px;
    margin-right: 13px;
  }
`;

const HeadHolder = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  /* background-color: red; */
`;

const Holder = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
  align-items: center;

  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Circle = styled.div`
  width: 75px;
  height: 75px;
  /* background-color: silver; */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #8a2be2;
  font-size: 31px;
  font-weight: 700;

  @media screen and (max-width: 500px) {
    width: 44px;
    height: 44px;
    font-size: 23px;
  }
`;
const Held = styled.div`
  margin-left: 15px;

  h2 {
    margin: 0;

    @media screen and (max-width: 500px) {
      font-size: 18px;
    }
  }
  pre {
    margin: 0;
    margin-top: 6px;
    font-size: 16px;
    color: #b3abab;

    @media screen and (max-width: 500px) {
      font-size: 13px;
    }
  }
`;
