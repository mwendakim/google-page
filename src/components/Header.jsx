import React from 'react'

function Header() {
  return (
    <div className='header'>
       <ul>
       <li> <img
        src="./src/assets/user.png"
        alt="Go to About Page"
        style={{ width: "30px", height: "auto", cursor: "pointer" }}
      /></li>
       <li> <img
        src="./src/assets/menu.png"
        alt="Go to About Page"
        style={{ width: "30px", height: "auto", cursor: "pointer" }}
        
      /></li>
       <li><a href='https://www.google.com/imghp?hl=en&authuser=0&ogbl'>Images</a></li>
       <li><a href='https://mail.google.com/mail/u/0/?ogbl#inbox'>Gmail</a></li>
       </ul>
    </div>
  )
}

export default Header