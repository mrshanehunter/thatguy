import "bootstrap/dist/css/bootstrap.min.css"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

:root {
  --classic: #0f4c81;
  --accent: #223275;
  --highlight: #8abdde;
  --gray: #d9d9d9;
  --base: #080424;
}

html {
  background-color: var(--base);
  font-size: 62.5%;
  margin: 0;
  padding: 0;
}

body {
  background-color: transparent;
  height: 100%;
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
      color: var(--gray)
    }
  }
}

.visibility h1 {
  color: var(--highlight);
  font-family: "timberline";
  font-size: clamp(5rem, 4vw, 7rem);
  a {
    &:hover {
      color: var(--gray);
    }
  }
}

h3 {
  color: var(--highlight);
  font-family: "timberline";
  font-size: 3rem;
}

.nav {
  width: 95%;
  margin: 0 auto;
  padding-top: 4rem;
  font-family: "montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
}

.nav-item {
  font-size: clamp(1.6rem, 1.3vw, 1.8rem);
  margin-bottom: 1rem;
  margin-right: 2vw;
  :nth-child(4) {
    margin-right: 0;
  }
}

a {
  color: var(--highlight);
  &:hover {
    text-decoration: none;
    color: var(--classic);
  }
}

.graded {
  width: 95%;
  margin: 0 auto;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  height: 5px;
  background: rgba(0,0,0, 0);
background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(217,217,217,0.75) 45%, rgba(217,217,217,1) 100%);
}

.copy p {
  font-family: "montserrat", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: clamp(1.4rem, 1.2vw, 1.8rem);
  color: var(--gray);
}

.card {
  background: transparent;
  border: none;
}

.form-group input {
  background: var(--base);
  border: 0.05rem solid var(--accent);
  color: var(--highlight);
  font-family: "montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: clamp(1.4rem, 1.2vw, 1.8rem);
}

.form-group label {
  color: var(--highlight);
  font-family: "montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: clamp(1.4rem, 1.2vw, 1.8rem);
}

.form-group textarea {
  background: var(--base);
  border: 0.05rem solid var(--accent);
  font-family: "montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: clamp(1.4rem, 1.2vw, 1.8rem);
}

.thankyou {
  color: var(--gray);
  font-size: clamp(1.4rem, 1.2vw, 1.8rem);
}

.pageNF h1 {
  color: var(--gray);
  text-shadow: 0.5vw 0.5vw 0.5rem var(--base);
  font-family: "montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: clamp(1.8rem, 3vw, 10rem)
}

.pageNF p {
  font-size: clamp(2rem, 1.95vw, 4rem);
  font-family: "timberline";
  color: var(--gray);
  text-shadow: 0.5vw 0.5vw 0.5rem var(--base);
}

.pnfLink {
  margin: 0 auto;
  padding: 1vw;
  background: rgba(8, 4, 36, 0.45);
  border-radius: 5px;
  border: 0.05rem solid var(--base);
  font-family: "montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: clamp(1.8rem, 1.5vw, 4rem);
  color: var(----highlight);
  text-shadow: 0.5vw 0.5vw 0.5rem var(--base);

}

.serviceP p {
  padding-top: 0;
  padding-bottom: 0.2rem;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'montserrat', sans-serif;
  font-weight: 500;
  font-style: normal;
  color: var(--gray);
  font-size: 1.4rem;
}

.flipBtnF {
  
  padding: 0;
  border-style: none;
}

.flipBtnB {
  border: thin solid var(--highlight);
  background: var(--base);
}
.carousel-indicators {   
  margin-bottom: -30px;
}

.carousel-control-next-icon {
  position: absolute;
  z-index: 3000;
  bottom: 0;
  right: 0;
  margin-right: 35px;
  margin-bottom: -30px;
  // border: 2px ridge var(--highlight);
  border-radius: 50%;
  // background-color: rgba(07, 07, 07, 0.9);
  background-size: 20px 20px;
  
  
}  
.carousel-control-prev-icon {
  position: absolute;
  z-index: 3000;
  bottom: 0;
  left: 0;
  margin-left: 35px;
  margin-bottom: -30px;
  // border: 2px ridge var(--highlight);
  border-radius: 50%;
  // background-color: var(--highlight);
  background-size: 20px 20px;
  
}  

.SSMbl.card-body{
  background: var(--highlight);
  border-radius: 1rem;
  a {
    cursor: pointer;
    margin: 0 auto;
    color: var(--classic);
    font-size: 1.6rem;
    font-family: "montserrat", sans-serif;
    font-weight: 600;
    font-style: normal;
    text-align: center;
  }

.SSMbl1.card-header {
  .gatsby-image-wrapper {
    object-fit: contain;
    object-position: center;
  }
}

.SSMbl.card-header{
  .gatsby-image-wrapper {
    width: 50%;
    height: 50%;
  }
} 
.SSMbl.card-title {
  font-family: "montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  color: var(--base);
}
 .SSMbl.card-text {
  font-family: "montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  color:  var(--base);
}

}
.SubmitBtn {
  font-family: timberline;
  font-size: 2.4rem;
  background: var(--classic);
  border: 0.05rem thin var(--accent);
  color: var(--gray);
  &:hover {
    background: var(--highlight);
    color: var(---base);
    border: 0.1rem solid var(--accent);
    box-shadow: 0 0 0.5rem 0.5rem rgba(254, 254, 212, 0.4);
  }
}





`

export default GlobalStyles
