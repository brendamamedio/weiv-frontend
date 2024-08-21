import React from "react";
import "../TelaHome/style.css";
import { Navbar } from "../Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <h1>Bem-vindo à Home</h1>

      <p>Acesse TelaOutrosEventos pelo path "/outros-eventos"</p>
    </>
  );
}

export default Home;
