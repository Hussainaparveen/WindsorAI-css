import React from 'react'

function Page1() {
  return (
    <div className='page1'>
        <div className='header'>
            <div id='logo'><img className='windsor' src='windsorlogo.jfif' alt='windsor' />
            <p  className='logoname'>windsor</p>
            </div>
            <div>
            <button className='needhelp'>Need Help?</button>
            </div>
        </div>
        <div className='body'>
            <div className='body-text'>
                <div className='girl-pic'>
                <img  id='girl' src='jenny.jfif' alt='jenny'/>
                <p id='girl-text'> Jenny Wilson</p>
                </div>
                <h1 className='body1'>Omnisend Integration Request</h1>
                <div className='body2'>To connect to omnisend you need to copy API key from your Omnisend account and paste it below.</div>
            </div>
            <div className='body-input'>
                <div className='button-top'>
                <p id='input1'>Omnisend API key</p>
                <input id='input2'type='text' value='API'/>
                </div>
                <div className='apply-button'>
                <button id='applykey'>Apply Key</button>
                </div>
            </div>
        </div>
        
        <div className='body-pt2'>
                <div className='whatpage'>
                    <h1 className='body1'>What is this page?</h1>
                    <div className='body2'>Jenny is setting up windsor and would like to enable windsor's omnisend integration . Jenny would like your  help to complete this step by providing the credentials above . If you have any questions please reach out to jenny.</div>
                </div>
                <div><img id='handstogether' src='page1img.png' alt='handstogether'/></div>
            </div>
        <div>

        </div>
    </div>
  )
}

export default Page1