import React from 'react'

function Body() {
  return (
    <div className='image'>
      <div className='logo'></div>
    <div className='search'>
    <input type="text" placeholder='Search Google or type a URL' /><br/>
    <button>Google Search</button><button>I'm Feeling Lucky</button>
    </div>
    <h3 className='h3'>Google offered in:kiswahili</h3>

    </div>
  )
}

export default Body