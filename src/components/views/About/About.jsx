import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import MenuSuperiorAbout from './MenuSuperiorAbout';
import './About.css';
import { Message } from 'semantic-ui-react';


class About extends Component {
    render() {
        return (

            <div className="About">

                <div className="Menu">
                    <MenuSuperiorAbout />
                </div>


                <div className="Message">
                    <Message
                        color="blue"
                        attached
                        header="A propos de la bibliothèque"
                        content="Notre bibliothèque en quelques chiffres"
                    />
                </div>

                <div className="Stats">
                    <div className="Text">
                        <p>Nombre de laboratoires lecteurs</p>
                    </div>
                    <div className="Number">
                        <div>
                            <p>24</p>
                        </div>
                    </div>
                </div>

                <div className="Stats">
                    <div className="Text">
                        <p>Nombre d'articles datant de 2017 à aujourd'hui présent dans la bibliothèque</p>
                    </div>
                    <div className="Number">
                        <p>2000</p>
                    </div>
                </div>

                <div className="Stats">
                    <div className="Text">
                        <p>Nombre de thèses présentes dans la bibliothèque</p>
                    </div>
                    <div className="Number">
                        <p>150</p>
                    </div>
                </div>

                <div className="Stats">
                    <div className="Text">
                        <p>Nombre de journaux cités dans la bibliothèque</p>
                    </div>
                    <div className="Number">
                        <p>100</p>
                    </div>
                </div>

                <div className="Stats">
                    <div className="Text">
                        <p>Conférences répertoriées dans la bibliothèque</p>
                    </div>
                    <div className="Number">
                        <p>20</p>
                    </div>
                </div>

                <div className="Stats">
                    <div className="Text">
                        <p>
La bibliothécaire
                            <a href="/formLab">Profil de la bibliothécaire</a>
                            {' '}

                        </p>
                    </div>
                </div>

            </div>
        );
    }
}
export default About;
