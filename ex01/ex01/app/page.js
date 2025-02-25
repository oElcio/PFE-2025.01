'use client'

import {useState} from "react";

function Pai (){
  return <p>Pragrafo do texto</p>;
}

function numero () {
  return Math.floor(Math.random()* 100) + 1;
}
 

export default function Home() {
  const [hide, setHide] = useState(false);
  const aula = 2;
  const [numAltert, setNumAlet] = useState(numero());
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Olá Mundo</h1>
      <p>Boas vindas à {aula} aula de React </p>
      <h1>Fazendo Botão Aleatorio</h1>
      <button onClick={() => setHide (!hide)}>{hide ? "escondido" : "aparecendo"}</button>
      <button onClick={() => setNumAlet (numero())}>Aleatorio: {numAltert}</button>
      {!hide && ( 
        <Pai/>
      )}
    </div>
  );
}