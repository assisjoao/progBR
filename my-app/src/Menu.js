import React from 'react'


function Menu(props){

    const lisLinks = props.links.map((link, index) => <li key={index}></li>)
    return (<ul className="menu">
    {lisLinks}
  </ul>)
  }

  export default Menu;