import React, { Component } from 'react';


const Form = props => (
    <form onSubmit={props.getTempo}>
                <input type="text" name="cidade" placeholder="Cidade..." className="Cidade-form" autocomplete="off"/>
                <input type="text" name="pais" placeholder="País..." className="Pais-form" autocomplete="off"/>
                <button className="Botao-form"></button>
    </form>
) 

export default Form;

/*

import React, { Component } from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getTempo}>
                <input type="text" name="cidade" placeholder="Cidade..."/>
                <input type="text" name="pais" placeholder="País..."/>
                <button>Search</button>
            </form>
        );
    }
};

export default Form;

*/