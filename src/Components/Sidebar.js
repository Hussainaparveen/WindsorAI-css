import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
            <div className='sidemenu1'>
                <div id='logo'>
                    <img className='windsor' src='windsorlogo.jfif' alt='windsor' />
                    <p className='logoname'>windsor</p>
                </div>
                <div className='sidemenu'>
                    <img className='sidebarimgs' src='graph.png' alt='graph'/>
                    <p>Campaigns</p>
                </div>
                <div className='sidemenu'>
                    <img className='sidebarimgs' src='play.png' alt='play'/>
                    <p> Templates</p>
                </div>
                <div className='sidemenu'>
                    <img className='sidebarimgs' src='face.png' alt='face'/>
                    <p> Avatars</p>
                </div>
                <div className='sidemenu'>
                    <img className='sidebarimgs' src='plug.jpg' alt='plug'/>
                    <p> Integrations</p>
                </div>
                <div className='sidemenu' style={{borderBottom:'1px solid rgba(204, 201, 201, 0.575)'}}>
                    <img className='sidebarimgs' src='settings.png' alt='settings'/>
                    <p> Settings</p>
                </div>
                <div className='sidemenu'>
                    <img className='sidebarimgs' src='document.png' alt='documents'/>
                    <p> Documentation</p>
                </div>
            </div>

            <div className='sidemenu2'>
                <h3 style={{borderBottom:'1px solid rgba(204, 201, 201, 0.575)',textAlign:'center'}}>First steps in windsor</h3>
                <p><img className='sidebarimgs'  src='tick.png' alt='tick'/> Connect Integrations</p>
                <p><img className='sidebarimgs'  src='tick.png' alt='tick'/> Create Avatar</p>
                <p><img className='sidebarimgs'  src='tick.png' alt='tick'/> Create Template</p>
                <p><img className='sidebarimgs'  src='tick.png' alt='tick'/> Start a campaign</p>
                <p><img className='sidebarimgs'  src='tick.png' alt='tick'/> Set Up Your Domain</p>
            </div>
        </div>
  )
}

export default Sidebar