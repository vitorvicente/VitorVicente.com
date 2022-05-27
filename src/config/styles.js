import styled, { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import {Router} from "@reach/router";
import {Col, Container, Image, Navbar, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Background from "../assets/main-background.jpeg";
import {Link} from "gatsby";

export const FullSizeRouter = styled(Router)`
  display: flex;
  flex-grow: 1;
`;

export const PaddedRow = styled(Row)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const StyledImage = styled(Image)`
  width: 450px;
  height: 250px;
  padding-left: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
  padding-top: 20px;
`;

export const StyledContainer = styled(Container)`
  text-align: center;
  content-align: center;
  p {
    line-height: 1.5;
    font-size: 20px;
    color: #585858;
    max-width: 90%;
    text-align: center;
    margin: 0 auto;
    padding: 1.5rem;
    font-family:Lora,'Times New Roman',serif
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
    font-family:Lora,'Times New Roman',serif
  }
  h5 {
    text-transform:uppercase;
    font-size: 30px;
    font-weight:800;
    color: #D3D3D3;
    font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif
  }
`;

export const StyledButton = styled.button`
  font-size:14px;
  font-weight:800;
  padding: 15px 25px;
  letter-spacing:1px;
  text-transform:uppercase;
  border-radius:5px;
  font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
  background-color: #0085a1;
  border-color: #0085a1;
  transition:all .2s;
  color: #fff;
  width:20%;
  
  &:hover {
    background-color: #00657b;
    border-color: #00657b;
  }
`;

export const AboutContainer = styled(Container)`
  padding-bottom: 10%;
  p, li {
    line-height:1.2;
    font-size: 17px;
    color: #585858;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family:Lora,'Times New Roman',serif;
  }
  h2 {
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 500;
    color: #404040;
    font-size: 40px;
    letter-spacing: 1px;
    font-family:'pen Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
  }
  h3 {
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 501;
    color: #404040;
    font-size: 30px;
    letter-spacing: 1px;
    padding-top: 30px;
    padding-bottom: 30px;
    font-family:'pen Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
  }
  h5 {
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 500;
    color: #404040;
    font-size: 20px;
    letter-spacing: 1px;
    font-family:'pen Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
  }
  hr {
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const Quotation = styled.div`
  p {
    font-size: 30px;
    quotes: "\\201C""\\201D""\\2018""\\2019";
    padding: 10px 20px;
    line-height: 1.4;

    &:before {
      content: open-quote;
      display: inline;
      height: 0;
      line-height: 0;
      left: -10px;
      position: relative;
      top: 30px;
      color: #ccc;
      font-size: 3em;
    }
    &::after {
      content: close-quote;
      display: inline;
      height: 0;
      line-height: 0;
      left: 10px;
      position: relative;
      top: 35px;
      color: #ccc;
      font-size: 3em;
    }
  }

  footer {
    text-align: center;
    font-size: 1.5em;
    font-style: italic;
  }
`;

export const StyledSideNav = styled(Col)`
  h5 {
    padding-left: 0px!important;
    padding-right: 0px!important;
    font-size: 25px!important;
    padding-top: 30px!important;
    font-weight: 800!important;
    font-family: Lora,'Times New Roman',serif!important;
    color: #1790b8!important;
  }
  a {
    font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-size: 18px;
    color: #808080;
    text-decoration:none
  }
  a:hover {
    color:#404040;
    text-decoration:none
  }
  a[aria-current="page"] {
    color:#585858;
    font-weight: 600;
    text-decoration:none
  }
`;

export const StyledCardImg = styled(Image)`
  width: 100%;
`;

export const StyledCard = styled.div`
	text-align: center;
	position: relative;
	overflow: hidden;
	border-radius: 5px;
	margin: 0 10px 40px 10px;
	box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
	transition: all 0.3s ease-in-out;
	&:hover {
	  -webkit-transform: translateY(-5px);
		transform: translateY(-5px);
		
		& h3 {
			color: #00657b;
		}
	}

	& h3 {
	  padding-top: 1.5rem;
    color: #111;
    font-size: 30px;
    font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    text-decoration: none;
    font-weight: 400!important;
	}
	 p {
    padding-top: 0.5rem!important;
    padding-bottom: 1.5rem!important;
  }
`;

export const StyledCardBtn = styled.button`
  margin-bottom: 1.5rem;
  font-size:14px;
  font-weight:800;
  padding: 15px 25px;
  letter-spacing:1px;
  text-transform:uppercase;
  font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
  background-color: #0085a1;
  border-color: #0085a1;
  transition:all .2s;
  color: #fff;
  width:50%;
  
  &:hover {
    background-color: #00657b;
    border-color: #00657b;
  }
  a {
    text-decoration: none;
    color: #fff;
    
    &:hover {
      text-decoration: none;
      color: #fff;
    }
  }
`;

export const StyledFooterIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 55px;
  padding-left: 50px;
  padding-right: 50px;
  &:hover {
    "-webkit-transform": translateY(-5px);
    transform: translateY(-5px);
    transition: all .3s linear;
  }
`;

export const StyledSocialDiv = styled.div`
	background-color: #2c3e50;
	font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
	font-size: 25px;
	color: #fff;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex-direction: row;
	padding: 30px;
	position:relative;
	padding-top: 5rem;
  padding-bottom: 5rem;
  & h1 {
    font-size: 30px;
    font-weight: 900;
    padding-bottom: 2rem;
    text-transform: UpperCase;
  }
`;

export const StyledCopyrightDiv = styled.div`
	background-color: #1a252f;
	font-family:'Times New Roman',serif;
	font-size: 20px;
	color: #fff;
	align-items: center;
	justify-content: center;
	text-align: center;
	display: flex;
	flex-direction: row;
	padding: 30px;
	position:relative;
	left:0;
	bottom:0;
	right:0;
`;

export const MastHead = styled.div`
	margin-bottom:50px;
	background:no-repeat center center;
	background-color:#868e96;
	background-attachment:scroll;
	position:relative;
	background-size:cover;
	background-image: url(${Background});
`;

export const SiteHeading = styled.div`
  width: 100%;
	padding:250px 0 150px;
	color:#fff;
	text-align: center;
	justify-content: center;
	& h1 {
		font-size:50px;
		margin-top:0
	}
`;

export const StyledNav = styled(Navbar)`
  margin-left: auto;
  position:relative;
  font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif
`;

export const StyledNavBrand = styled(Link)`
  font-weight:800;
  color:#fff;
  font-size: 30px;
  text-decoration: none;
  
  &:hover {
    color:rgba(255,255,255,.8);
    transition:transform .2s;
  }
`;

export const StyledNavToggle = styled(Navbar.Toggle)`
  font-size:12px;
  font-weight:800;
  padding:13px;
  text-transform:uppercase;
  color:#fff;
`;

export const StyledNavLink = styled(Link)`
  font-size:16px;
  font-weight:800;
  letter-spacing:1px;
  text-transform:uppercase;
  color: #fff;
  text-decoration: none;
  &:hover {
    color:rgba(255,255,255,.8);
  }
`;

export const StyledLanguageLink = styled.button`
  background: none;
  border: none;
  font-size:12px;
  font-weight:800;
  letter-spacing:1px;
  text-transform:uppercase;
  color: ${props => (props.selected ? "#0085a1" : "#fff")};
  text-decoration: none;
  &:hover {
    color: ${props => (props.selected ? "#0085a1" : "rgba(255,255,255,.8)")};
  }
`;

export const StyledLanguageDivider = styled.p`
  color: #999;
  position: relative;
`;

export const StyledCollapse = styled(Navbar.Collapse)`
  text-align: right;
  align-content: right;
  align-items: right;
  float: right;
`;

export default createGlobalStyle`
  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
  }
  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }
  body {
    font-size:20px;
    color:#212529;
    font-family:Lora,'Times New Roman',serif;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
  }
  
  p {
    line-height:1.5;
    margin:30px 0
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight:800;
    font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif
  }

  a {
    color:#212529;
    transition:all .2s
  }

  a:focus,a:hover {
    color:#0085a1;
    text-decoration: none;
  }
`;