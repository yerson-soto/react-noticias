import React, { Component } from 'react';
import Header from './components/Header';
import Noticias from './components/Noticias';
import Formulario from './components/Formulario';

class App extends Component {
    state = {
        noticias: []
    }

    componentDidMount() {
        this.consultarNoticias();
    }

    consultarNoticias = (categoria = 'general' ) => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=8a581c3115a54b029cca531958a55cfa`;
        
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(noticias => {
                this.setState({
                    noticias: noticias.articles
                });
            })
    }

    render() {
        return (
            <div className="contenedor-app">
                <Header 
                    titulo='Noticias'
                />

                <div className="container white contenedor-noticias">
                    <Formulario 
                        consultarNoticias={this.consultarNoticias}
                    />
                    
                    <Noticias
                        noticias={this.state.noticias}
                    />
                </div>
            </div>
        );    
    }
}

export default App;
