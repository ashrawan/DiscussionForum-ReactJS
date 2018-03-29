import React, { Component } from 'react';
import Search from './Search';
import Category from './Category';

import Aux from './Ax';


class Sidebar extends Component {
    render() {
        return (
            <Aux>
                <Search/>
                <Category/>
            </Aux>
        );
    }
}

export default Sidebar;