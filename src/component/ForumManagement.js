import React, { Component } from 'react';
import ForumList from './ForumList';
import PostDetails from './PostDetails';

import Aux from './Ax';
import Layout from './Layout';
import Sidebar from './Sidebar';

class ForumManagement extends Component {
    constructor() {
        super();
    }

    
    render() {
        return (     
                     <Aux><div></div>
                           {/* <Layout children={{main: <ForumList/>, sidebar: <Sidebar/>}}/>  */}
                        </Aux>
                        
                
        );
    }
}

export default ForumManagement;