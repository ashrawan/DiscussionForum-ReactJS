import React, { Component } from 'react';

class Layout extends Component {
    render() {
        const { main, sidebar } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-8">
                        {main}
                    </div>
                    <div className="col-md-4">
                        {sidebar}
                    </div>
                 </div>
            </div>
        );
    }
}

export default Layout;