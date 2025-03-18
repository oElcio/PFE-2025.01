"use client"

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  function rolar_dado(){
    Math.floor(Math.random() * 6) + 1;
  }

  const App = () => {
    const [rodada, setRodada] = useState(1); // Número da rodada atual
    const [pontuacaoJogador1, setPontuacaoJogador1] = useState(0); // Pontuação do jogador 1
    const [pontuacaoJogador2, setPontuacaoJogador2] = useState(0); // Pontuação do jogador 2
    const [vencedor, setVencedor] = useState(null); // Quem venceu o jogo
    const [resultadoRodada, setResultadoRodada] = useState(""); // Resultado da rodada atual
    const [jogoAtivo, setJogoAtivo] = useState(true); // Estado que controla se o jogo está ativo
  
    // Função para iniciar a próxima rodada
    const jogarRodada = () => {
      if (rodada <= 5 && jogoAtivo) {
        // Rolar o dado para os dois jogadores
        const dadoJogador1 = rolarDado();
        const dadoJogador2 = rolarDado();
  
        // Determinar quem ganhou a rodada
        let vencedorRodada = "";
        if (dadoJogador1 > dadoJogador2) {
          setPontuacaoJogador1(pontuacaoJogador1 + 1);
          vencedorRodada = "Jogador 1 venceu a rodada!";
        } else if (dadoJogador2 > dadoJogador1) {
          setPontuacaoJogador2(pontuacaoJogador2 + 1);
          vencedorRodada = "Jogador 2 venceu a rodada!";
        } else {
          vencedorRodada = "Empate!";
        }
  
        // Avançar para a próxima rodada
        setResultadoRodada(vencedorRodada);
        setRodada(rodada + 1);
  
        // Verificar se o jogo acabou
        if (rodada === 5) {
          if (pontuacaoJogador1 > pontuacaoJogador2) {
            setVencedor("Jogador 1 venceu o jogo!");
          } else if (pontuacaoJogador2 > pontuacaoJogador1) {
            setVencedor("Jogador 2 venceu o jogo!");
          } else {
            setVencedor("O jogo empatou!");
          }
          setJogoAtivo(false);
        }
      }
    };
  
    // Função para reiniciar o jogo
    const reiniciarJogo = () => {
      setRodada(1);
      setPontuacaoJogador1(0);
      setPontuacaoJogador2(0);
      setVencedor(null);
      setResultadoRodada("");
      setJogoAtivo(true);
    };
  
  return (
    <div className="app">
      <h1>Jogo de Dados</h1>
      <div className="jogo">
        <div className="status">
          <p>Rodada: {rodada}/5</p>
          <p>Jogador 1: {pontuacaoJogador1} pontos</p>
          <p>Jogador 2: {pontuacaoJogador2} pontos</p>
        </div>

        <div className="resultado">
          <p>{resultadoRodada}</p>
          {vencedor && <h2>{vencedor}</h2>}
        </div>

        <div className="acoes">
          {jogoAtivo ? (
            <button onClick={jogarRodada}>Jogar Rodada</button>
          ) : (
            <button onClick={reiniciarJogo}>Jogar Novamente!</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App; }
