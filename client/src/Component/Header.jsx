import React from 'react'

const Header = () => {
  return (
    <div className='navbar'>
      <div className='logo'>LOGO</div>
      <ul className='list'>
        <li><a href="/">Home</a></li>
        <li><a href="/add">Add</a></li>
      </ul>
    </div>
  )
}

export default Header