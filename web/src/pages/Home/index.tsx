import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom'; 

import './style.css';
import logo from '../../assets/logo.svg';

const Home = () => {

    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecotune"/>
                </header>

                <main>
                    <h1>Seu marketplace de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.

                        <Link to="/criar-ponto">
                            <span>
                                <FiLogIn />
                            </span>
                            <strong>Cadastre um ponto de coleta</strong>
                        </Link>
                    </p>
                </main>
            </div>
        </div>
    );
};

export default Home;
