import React from "react";

import Col from "react-bootstrap/Col";

import InquisitorImg from "../assets/projects/inquisitor.png";
import BHacksImg from "../assets/projects/bhacks.png";
import ComponentsImg from "../assets/projects/components.jpg";
import FirebaseImg from "../assets/projects/firebase.jpg";
import ClassConnectImg from "../assets/projects/classconnect.png";
import ThirdEyeImg from "../assets/projects/MH2020.png"

import {StyledCardImg, StyledCard, StyledCardBtn} from "../config/styles";

const Card = ({title, text, btnText, img, link, backUpImage}) => {
  let Img;
  switch (img) {
    case "inquisitor":
      Img = InquisitorImg;
      break;
    case "bhacks":
      Img = BHacksImg;
      break;
    case "components":
      Img = ComponentsImg;
      break;
    case "firebaseMaster":
      Img = FirebaseImg;
      break;
    case "classConnect":
      Img = ClassConnectImg;
      break;
    case "thirdEye":
      Img = ThirdEyeImg;
      break;
    default:
      Img = backUpImage;
  }

  return (<Col>
    <StyledCard>
      <StyledCardImg src={Img}/>
      <h3>{title}</h3>
      <p>{text}</p>
      <StyledCardBtn> <a href={link}> {btnText} </a> </StyledCardBtn>
    </StyledCard>
  </Col>);
}

export default Card;