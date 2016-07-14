import React from 'react'
import { Link,IndexLink } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React balabala</h1>
        <ul role="nav">
          <li>
            <IndexLink to="/" activeClassName="active">Home </IndexLink>
          </li>    
          <li><Link to="/about" activeStyle={{color:'red'}}>About</Link></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>

        {this.props.children}

      </div>
    )
  }
})
