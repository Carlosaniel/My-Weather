import React, { Component } from 'react';
import Titulos from './components/Titulos';
import Form from './components/Form';
import Tempo from './components/Tempo';
import './App.css';

const API_KEY = "7f774a3feca33ec5c69fa227a5e35852"; 

class App extends React.Component {

  state = {
    temperatura: undefined,
    cidade: undefined,
    pais: undefined,
    humidade: undefined,
    descricao: undefined,
    erro: undefined,    
  }
  
  getTempo = async (e) => {
    
    e.preventDefault();

    const cidade = e.target.elements.cidade.value;
    const pais = e.target.elements.pais.value;
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${API_KEY}&units=metric`);    
    
    
    const data = await api_call.json();

    if (cidade && pais) {
      this.setState({
        temperatura: data.main.temp,
        cidade: data.name,
        pais: data.sys.country,
        humidade: data.main.humidity,
        descricao: data.weather[0].description,
        erro: "",
      })
    } else { 
      this.setState({
        temperatura: undefined,
        cidade: undefined,
        pais: undefined,
        humidade: undefined,
        descricao: undefined,
        erro: "Por favor, insira uma localização.",
      })

    }  
     
 }

  render() {    
    return (
      <div className="Main">
        <div class="Header">
          <div className="Titulos"> <Titulos/> </div>
        </div>
        
        <div className="Formulario">
            <Form getTempo={this.getTempo}/>
        </div>

        <div className="Tempo">
          <Tempo 
            temperatura={this.state.temperatura}
            cidade={this.state.cidade}
            pais={this.state.pais}
            humidade={this.state.pais}
            descricao={this.state.descricao}
            erro={this.state.erro}/>
        </div>
      </div>
    );
  }
};

export default App;
