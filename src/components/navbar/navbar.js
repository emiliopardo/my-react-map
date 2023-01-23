import React from 'react';
import './navbar.css';
import logo_cvb100v from './img/logos/logo_cvb100v.jpg'

export default function Navbar() {
    return (
        <div className='heading'>
            <div id='left'>
            <div id='header_corpus'>CORPUS VRBIVM BAETICARVM</div>
            <div id='header_conventvs'>CONVENTVS HISPALENSIS ET ASTIGITANVS - CORDUBENSIS Y GADITANUS EN CONSTRUCCIÓN -</div>
            </div>
            <div id='right'>
                <a title='Corpus' href='http://cvb.vrbanitas.es/lista_ciudades' target='_blank'>
                    <img src={logo_cvb100v} alt="logo" />
                </a>
            </div>
        </div>
    );
}