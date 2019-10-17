import React, { Component } from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Noticias extends Component {
    render() {
        return ( 
            <div className="row">
                <TransitionGroup>
                    {this.props.noticias.map(noticia => (
                        <CSSTransition
                            key={noticia.url}
                            classNames="fade"
                            timeout={300}
                        >
                        <Noticia noticia={noticia} />

                        </CSSTransition>
                    ))}
                </TransitionGroup>
                
            </div>
        );
    }
}

Noticias.propTypes = {
    noticias: PropTypes.array.isRequired 
}

export default Noticias;