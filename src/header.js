import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {slide as Menu} from 'react-burger-menu';
import Radium from 'radium';

let RadiumLink = Radium(Link);
let RadiumIndexLink = Radium(IndexLink);

const SideBar = () => {
    return (


        <Menu>
            <RadiumIndexLink className="menu-item" to="/" activeClassName="active">Home</RadiumIndexLink>
            <RadiumLink className="menu-item" to="/courses" activeClassName="active">Courses</RadiumLink>
            <RadiumLink className="menu-item" to="/about" activeClassName="active">About</RadiumLink>
        </Menu>

    );
};

export default SideBar;
