import React, { Component } from 'react';

class NoPageFound extends Component {
    render() {
        return (
            <div>
                <div className="alert alert-danger" role="alert">
                    Oops! sorry Page Not Found
                </div>
            </div>
        );
    }
}

export default NoPageFound;