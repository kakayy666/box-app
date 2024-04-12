import React, { Component } from 'react';

const NavBar = (props) => {
    return (
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                        <a className="navbar-brand" href="/">Navbar
                            <span>Boxes Count: { props.boxesCount}</span></a>
                </div>
            </nav>
            );
}
 
export default NavBar;

// class NavBar extends Component {
//     componentDidUpdate(prevProps, prevState) {
//         console.log('navbar - updated')
//         console.log('prevProps', prevProps)
//         console.log('prevState', prevState)
//     }
//     render() { 
//         console.log('navbar - render')
//         return (
//         <nav className="navbar bg-body-tertiary">
//             <div className="container-fluid">
//                     <a className="navbar-brand" href="/">Navbar
//                         <span>Boxes Count: { this.props.boxesCount}</span></a>
//             </div>
//         </nav>
//         );
//     }
// }
 
// export default NavBar;