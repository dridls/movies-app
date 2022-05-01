import { React } from "react";
import "./App.css";
import Footer from "./components/footer";
import Logo from "./components/logo";
import Nav from "./components/nav";
import Main from "./components";
import Login from "./components/login";
import "./App.css";
import Register from "./components/register";


function App() {
  return (
    <div className="App">
      <div className="header">
        <Logo className="logo">Here is the header</Logo>
        <Nav className="nav">This is a navbar</Nav>
      </div>
      <Main className="main"></Main>
      <Register  />
      <Login />
      <Footer className="footer">Here is the footer</Footer>
    </div>
  );
}

export default App;
