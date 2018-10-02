import React, { Component } from 'react';

import './header.css';

import Logo from '../logo/logo';
import Menu from '../menu/menu';
import GlobalSearch from '../global-search/global-search';

class Header extends Component {
  render() {
    return (
      <div class='Header'>
          <Logo />
          <Menu />
          <GlobalSearch />
      </div>
    );
  }
}

export default Header;