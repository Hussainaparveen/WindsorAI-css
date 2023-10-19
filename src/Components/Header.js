import React from 'react'

function header() {
  return (
    <div className='main-head' style={{borderBottom:'1px solid rgba(204, 201, 201, 0.575)'}}>
                <div className='main-head1'>
                   <button id='back-button'>
                    <img src='arrowleft.png' alt='arrow' id='arrowleft'/> Back</button>
                   <p style={{padding:20}}>INTEGRATIONS</p>
                </div>
                <div className='main-head1'>
                   <img className='sidebarimgs' src='lifesaver.png' alt='lifesaver'/>
                   <img className='sidebarimgs' src='bell.png' alt='bell'/>
                   <div className='girl-pic'style={{border:'none'}}>
                      <img  id='girl' src='jenny.jfif' alt='jenny'/>
                      <p id='girl-text'> Jenny Wilson</p>
                   </div>
                    <img src='arrowdown.png' alt='arrow' id='arrowdown'/>
                </div>
            </div>
  )
}

export default header