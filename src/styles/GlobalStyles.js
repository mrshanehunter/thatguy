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

h1 {
  color: var(--highlight);
  font-family: "timberline";
  font-size: 7rem;
}

h3 {
  color: var(--highlight);
  font-family: "timberline";
  font-size: 3rem;
}

.nav {
  width: 90%;
  margin-top: 4rem;
  margin-left: 4rem;
  font-family: "futura";
  font-size: 2rem;
}

.nav-item {
  font-size: 2rem;
  margin-bottom: 1rem;
  :nth-child(1) {
    margin-right: 3rem;
  }
 
}

a {
  color: var(--classic);
  &:hover {
    text-decoration: none;
    color: var(--highlight);
  }
}

.graded {
  width: 90%;
  margin-left: 4rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  height: 5px;
  background-image: linear-gradient(to right, rgba(217,217,217,0), rgba(217,217,217, 1))
}

.logomark {
  margin-top: 2rem;
}

.copy {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.service {
  margin-top: 4rem;
  margin-bottom: 3rem;
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
}

.copy p {
  font-family: "futura";
  color: var(--gray);
  font-size: 2rem;
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
  font-size: 1.6rem;
}

.form-group label {
  color: var(--classic);
  font-family: "futura";
  font-size: 1.6rem;
}

.form-group textarea {
  background: var(--base);
  border: 0.05rem solid var(--accent);
  font-family: "futura";
  font-size: 1.6rem;
}

.thankyou {
  color: var(--gray);
  font-size: 1.8rem;
}





`;

export default GlobalStyles