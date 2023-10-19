import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function Page3() {
  return (
    <div className='page3'>
        <Sidebar/>
        <div className='mainblock'>
            <Header/>
            <div className='mainblock1'>
            <div  className='omnisend'>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img className='windsor' style={{borderRadius:8}} src='omnisend.png' alt='omnisend'/>
                    <h2 style={{margin:20}}>Omnisend</h2>
                    </div>
                    <button className='needhelp'>Need Help?</button>
                </div>
                <div>
                    <h3>Connect to Omnisend</h3>
                    <p className='content'>To connect to omnisend, find your Omnisend API key on your Omnisend account and enter it below.</p>
                </div>
                <div>
                    <h4>Paste your API Key</h4>
                    <input id='input3'type='text' value='API'/>
                    <button id='applykey'>Apply Key</button>
                </div>
                <div>
                    <h4>Don't have access to the Account?</h4>
                    <p className='content'>Share this with a teammate who has the credentials for this integration. They don't need a Windsor account to complete this step.</p>
                </div>
                <button id='askteam'><img className='sidebarimgs' src='teammate.png' alt='ask teammate'/>Ask Teammate</button>
                </div>
        </div>
    </div>
  )
}

export default Page3