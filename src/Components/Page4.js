import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function Page4() {
  return (
    <div className='page4'>
        <Sidebar/>
        <div className='mainblock'>
            <Header/>
            <div className='mainblock1'>
                <div  className='omnisend'>
                <div className='omnisend1'>
                    <img className='windsor' style={{borderRadius:8}} src='hubSpot.png' alt='hubSpot'/>
                    <h2 style={{margin:20}}>Hubspot</h2>
                    </div>
                    <button className='needhelp'>Need Help?</button>
                </div>
                <div>
                    <h3>Connect to Hubspot</h3>
                    <p className='content'>To connect to Hubspot, click the button below and sign into your Hubspot account.</p>
                </div>
                <div>
                    {/* <h4>Paste your API Key</h4>
                    <input id='input3'type='text' value='API'/> */}
                    <button id='applykey' style={{width:150}}>Create Hubspot</button>
                </div>
                <div>
                    <h4>Don't have access to the Account?</h4>
                    <p className='content'><button id='clipboard'>Copied to Clipboard!</button><br/>Share this with a teammate who has the credentials for this integration. They don't need a Windsor account to complete this step.</p>
                </div>
                <button id='askteam'><img className='sidebarimgs' src='teammate.png' alt='ask teammate'/>Ask Teammate</button>
                </div>
        </div>
    </div>
  )
}

export default Page4