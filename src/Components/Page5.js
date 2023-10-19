import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function Page5() {
  return (
    <div className='page5'>
        <Sidebar/>
        <div className='mainblock'>
            <Header/>
            <div className='mainblock1'>
                <div  className='omnisend'>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img className='windsor' style={{borderRadius:8}}src='zapier.png' alt='zapier'/>
                    <h2 style={{margin:20}}>Zapier</h2>
                    </div>
                    <button className='needhelp'>Need Help?</button>
                </div>
                <div>
                    <h3>Connect to Zapier</h3>
                    <p className='content'>To connect to Zapier, Add the windsor app via Zapier.When prompted, use the API key below to connect windsor to Zapier.</p>
                </div>
                <div>
                    <h4>API Key</h4>
                    <input id='input3'type='text' value='API'/>
                    <button id='applykey' style={{backgroundColor:'white',color:'black', border:'1px solid gray'}}>Copy</button>
                </div>
                {/* <div>
                    <h4>Don't have access to the Account?</h4>
                    <p className='content'><button id='clipboard'>Copied to Clipboard!</button>Share this with a teammate who has the credentials for this integration. They don't need a Windsor account to complete this step.</p>
                </div>
                <button id='askteam'><img className='sidebarimgs' src='teammate.png' alt='ask teammate'/>Ask Teammate</button> */}
                </div>
        </div>
    </div>
  )
}

export default Page5