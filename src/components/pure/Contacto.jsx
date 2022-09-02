import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ContactCard} from './ContactCard'
import {Contact} from '../../models/contacto'


class Contacto extends Component {
    render() {
        const defaultContacto = new Contact('Valentin', 'Di Capua', 'valendc@abc.com', false)

        return (
            <div>
                <ContactCard props={defaultContacto}/>
            </div>
        );
    }
}


Contacto.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool,
};


export default Contacto;

