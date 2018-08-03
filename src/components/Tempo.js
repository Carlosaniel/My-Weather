import React, { Component } from 'react';

const Tempo = props => (
    <div>
        { props.cidade && props.pais && <p> <div className="Tempo-list"> Cidade: </div> {props.cidade}, {props.pais}</p> }
        { props.temperatura && <p> <div className="Tempo-list">  Temperatura: </div> {props.temperatura}</p> }
        { props.humidade && <p> <div className="Tempo-list">  Humidade: </div> {props.humidade}</p> }
        { props.descricao && <p> <div className="Tempo-list">  Descrição: </div> {props.descricao}</p> }
        { props.erro && <p> {props.erro}</p> }
    </div>    
);

export default Tempo;


/* 
import React, { Component } from 'react';

class Tempo extends React.Component {
    render() {
        return (
            <div>
                { this.props.cidade && this.props.pais && <p> Localização: {this.props.cidade}, {this.props.pais}</p> }
                { this.props.temperatura && <p> Temperatura: {this.props.temperatura}</p> }
                { this.props.humidade && <p> Humidade: {this.props.humidade}</p> }
                { this.props.descricao && <p> Descrição: {this.props.descricao}</p> }
            </div>
        );
    }
};

export default Tempo;
*/
