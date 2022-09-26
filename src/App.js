import Nav from "./Component/Nav/Nav";
import "../src/Component/style/global.css";
import Header from "./Component/Header/Header";
import { useEffect, useState } from "react";
import "./app.css";
import Book from "./Component/Book/Book";
import Sopn from "./Component/Sopn/Sopn";
import Section from "./Component/Section/Section";

function App() {
  const [menu, setMenu] = useState(false);
 
  return (
    <div className="app">
      <Nav menu={menu} setMenu={setMenu} />

      <div className="section">
        <Header></Header>
        <Book></Book>
        <Sopn></Sopn>
        <Section></Section>
        
      </div>
    </div>
  );
}

export default App;
