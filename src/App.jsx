import './App.css'
import { useState } from 'react';
import YoungMan from './assets/images/young-man.png';
import Kid from './assets/images/kid.png';
import Clock from './assets/images/clock.png'
import ImageBarbecue from './assets/images/Barbecue-amico.svg'

export default function App() {
  const [adultos, setAdultos] = useState('');
  const [criancas, setCriancas] = useState('');
  const [duracao, setDuracao] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    if (adultos <= 0 || adultos === '') {
      alert('Escolha um número válido para adultos');
    } else if (criancas < 0) {
      alert('Escolha um número válido para crianças');
    } else if (duracao <= 0 || duracao === '') {
      alert('Escolha um número válido para a duração');
    } else {
      const qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
      const qdtTotalCerveja = cervejaPP(duracao) * adultos;
      const qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

      setResultado(
        <div>
          <div className="result-block">
            <img src="./images/carne.svg" alt="carne" />
            <p>{qdtTotalCarne / 1000} Kg de Carne</p>
          </div>
          <div className="result-block">
            <img src="./images/cerveja.svg" alt="cerveja" />
            <p>{qdtTotalCerveja / 1000} L de Cerveja</p>
          </div>
          <div className="result-block">
            <img src="./images/refri.svg" alt="refri" />
            <p>{qdtTotalBebidas / 1000} L de Refri</p>
          </div>
        </div>
      );
    }
  }

  function carnePP(duracao) {
    if (duracao >= 6) {
      return 650;
    } else {
      return 400;
    }
  }

  function cervejaPP(duracao) {
    if (duracao >= 6) {
      return 2000;
    } else {
      return 1200;
    }
  }

  function bebidasPP(duracao) {
    if (duracao >= 6) {
      return 1500;
    } else {
      return 1000;
    }
  }

  return (
    <div className='container'>
      <img className='image-churrasco' src={ImageBarbecue}/>
      <main className="main">
        <h1>Churrascômetro</h1>

        <img src={YoungMan} alt="adultos" />
        <input
          name="adultos"
          id="adultos"
          placeholder="Adultos"
          type="number"
          value={adultos}
          onChange={(e) => setAdultos(e.target.value)}
        />

        <img src={Kid} alt="crianças" />
        <input
          type="number"
          name="crianças"
          id="criancas"
          placeholder="Crianças"
          value={criancas}
          onChange={(e) => setCriancas(e.target.value)}
        />

        <img src={Clock} alt="duração" />
        <input
          id="duracao"
          name="duracao"
          type="number"
          placeholder="Duração (h)"
          value={duracao}
          onChange={(e) => setDuracao(e.target.value)}
        />

        <button onClick={calcular}>Calcular</button>

        <div>
          <p>{resultado}</p>
        </div>

        

    </main>
    </div>
   
  )
}      
