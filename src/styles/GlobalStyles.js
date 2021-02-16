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
  width: 90%;
  padding-top: 4rem;
  font-family: "futura";
}

.nav-item {
  font-size: clamp(1.6rem, 1.3vw, 2rem);
  margin-bottom: 1rem;
  :nth-child(1) {
    margin-right: 2vw;
  }
  :nth-child(2) {
    margin-right: 2vw;
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
  width: 90%;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  height: 5px;
  background-image: linear-gradient(to right, rgba(217,217,217,0), rgba(217,217,217, 1))
}

.copy p {
  font-size: clamp(1.4rem, 1.2vw, 2rem);
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
  font-family: "futura";
  font-size: clamp(1.4rem, 1.2vw, 2rem);
}

.form-group label {
  color: var(--highlight);
  font-family: "futura";
  font-size: clamp(1.4rem, 1.2vw, 2rem);
}

.form-group textarea {
  background: var(--base);
  border: 0.05rem solid var(--accent);
  font-family: "futura";
  font-size: clamp(1.4rem, 1.2vw, 2rem);
}

.thankyou {
  color: var(--gray);
  font-size: clamp(1.4rem, 1.2vw, 2rem);
}

.pageNF h1 {
  color: var(--gray);
  text-shadow: 0.5vw 0.5vw 0.5rem var(--base);
  font-family: "futura";
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
  font-family: "futura";
  font-size: clamp(1.8rem, 1.5vw, 4rem);
  color: var(----highlight);
  text-shadow: 0.5vw 0.5vw 0.5rem var(--base);

}

.serviceP p {
  padding-top: 0;
  padding-bottom: 0.2rem;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'futura';
}

.flipBtnF {
  
  padding: 0;
  border-style: none;
}





`

export default GlobalStyles
