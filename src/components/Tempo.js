import React, { Component } from 'react';

const Tempo = props => (
    <ul className="col_3 container-list">
        { props.cidade && props.pais && <p> <li className="Tempo-list"> Cidade: </li> {props.cidade}, {props.pais}</p> }
        { props.temperatura && <p> <li className="Tempo-list">  Temperatura: </li> {props.temperatura}</p> }
        { props.humidade && <p> <li className="Tempo-list">  Humidade: </li> {props.humidade}</p> }
        { props.descricao && <p> <li className="Tempo-list">  Descrição: </li> {props.descricao}</p> }
        { props.erro && <p> {props.erro}</p> }
    </ul>    
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
