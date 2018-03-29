import React, {Component} from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

let postBackground = {backgroundColor:'#F5F5F5', margin:'0.6rem'};

const post = (props) => (
            <div style={postBackground} className="row forum-post">
            <div className="col-sm-1 col-md-1 col-lg-1 d-flex align-items-center">
              <img src={logo} className="user-img rounded-circle img-fluid" alt="userImage"/>
            </div>
            <div className="col-lg-8 col-md-8 col-lg-8">
              <blockquote className="blockquote">
              
                <Link to={"/post/"+props.post.id} className="mb-0 forum-title" onClick={props.onTitleClick}>{props.post.title}</Link>

                <footer className="blockquote-footer">By &nbsp;
                <Link to={"/user/"+props.user.id}><cite title="Source Title">{props.user.username}</cite></Link>
      
                  <small className="ml-2">
                    <i className="fas fa-calendar"></i>{props.post.date}</small>
      
                  <div className="pull-right">
                    <span className="badge badge-secondary ml-1">
                      <i className="fas fa-comments"></i> {props.post.commentsCount} comments</span>
                  </div>
                </footer>
      
              </blockquote>
      
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2 d-flex align-items-center">
              <button type="button" className="btn btn-outline-primary" aria-label="Left Align" style={{marginRight:'0.8em'}}>
                <i className="fa fa-comment">Up-vote</i>
              </button>
              <button type="button" className="btn btn-outline-danger" aria-label="Left Align">
                <i className="fas fa-comments">Down-Vote</i>
            </button>
            </div>
          </div>
        );


export default post;