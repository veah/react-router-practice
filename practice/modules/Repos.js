import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass(
    {
        render() {
            return (
                <div>
                    <h2>Repos</h2>
                    <ul>
                        <li><Link to="/repos/ractjs/react-router">React Router</Link></li>
                        <li><NavLink to="/repos/facebook/react">React</NavLink></li>
                    </ul>

                    {this.props.children}
                </div>
            )
        }
    }
)