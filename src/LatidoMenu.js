import React, { Component } from 'react';
import './LatidoMenu.css';
import searchIcon from './search-icon.png';

class LatidoMenu extends Component {

    constructor() {
        super();

        this.state = {
            showForm: false
        }
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm
            
        });
    }

    render() {


        let linksItems = this.props.links.map((link, index) => {

            let linkItem = link.active ? (<a className="menu__link menu__link--active" href={link.link}>{link.label}</a>) : (<a className="menu__link" href={link.link}>{link.label}</a>);

            return (
                <li key={index} className="menu__list-item">{linkItem}</li>
            );
        });

        return (
            <nav className="menu">
                <h1 style={{backgroundImage: 'url(' + this.props.logo + ')'}} className="menu__logo"></h1>

                <div className="menu__right">
                    <ul className="menu__list">
                        {linksItems}
                    </ul>

                    <button onClick={this.showForm.bind(this)} style={{
                        backgroundImage: 'url(' + searchIcon + ')'
                    }} className="menu__search-button"></button>

                

                </div>
            </nav>
        );
    }
}

export default LatidoMenu;