import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'constants/routes';
import workAndCoLogoImg from 'img/workco-logo.svg';

export default class Menu extends Component {
  render() {
    return (
      // <div className='Menu'>
      //   <div className='Menu-logo'>
      //     <a href='https://work.co' target='_blank' rel='noreferrer noopener' aria-label='Work & Co website'>
      //       <img
      //         src={ workAndCoLogoImg }
      //         alt='Work & Co logo'
      //       />
      //     </a>
      //   </div>
      //   <div className='Menu-links'>
      //     <NavLink
      //       activeClassName='Menu-link--active'
      //       className='Menu-link'
      //       exact
      //       to={ routeCodes.HOME }
      //     >
      //       Home
      //     </NavLink>
      //     <NavLink
      //       activeClassName='Menu-link--active'
      //       className='Menu-link'
      //       to={ routeCodes.PEOPLE }
      //     >
      //       API data example
      //     </NavLink>
      //     <NavLink
      //       activeClassName='Menu-link--active'
      //       className='Menu-link'
      //       to='/404'
      //     >
      //       404
      //     </NavLink>
      //   </div>
      // </div>

      <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Logo</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active">
           <NavLink
             activeClassName='Menu-link--active'
             className='Menu-link'
             exact
             to={ routeCodes.HOME }
           >
             Home
           </NavLink>

            </li>
            <li>
                  <NavLink
                      activeClassName='Menu-link--active'
                        className='Menu-link'
                        exact
                        to={ routeCodes.PRODUCTS }
                      >
                        Products
                  </NavLink>
            </li>


            <li>

            <NavLink
             activeClassName='Menu-link--active'
             className='Menu-link'
             to={ routeCodes.PEOPLE }
           >
             People
           </NavLink>

            </li>
            <li><a href="#">Stores</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Your Account</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
          </ul>
        </div>
      </div>
      </nav>
    );
  }
}
