import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function Page2() {
  return (
    <div className='page2'>
        <Sidebar/>
        <div className='main-page2'>
        <Header/>
        <div className='mainblock1'>
            <div className='whatpage'style={{padding:0}}>
            <h1>Integrations</h1>
            <p>Integrations allows you to automatically import recipients to your Windsor campaigns, and also enable you to deliver videos to your recipients.</p>
            </div>
            <div className='integration'>
            <div className='body-input'>
                <div className='button-top'>
                <p className='input1'><img className='windsor'src='zapier.png' alt='zapier'/>Zapier</p>
                <p id='input'>Product that allows you to integrate the web applications they use</p>
                </div>
                <div className='apply-button'>
                <button className='view'>View Integration</button>
                </div>
            </div>
            <div className='body-input'>
                <div className='button-top'>
                <p className='input1'><img className='windsor'src='hubSpot.png' alt='hubSpot'/>HubSpot</p>
                <p id='input'>Product for inbound marketing, sales, and customer service</p>
                </div>
                <div className='apply-button'>
                <button className='view'>View Integration</button>
                </div>
            </div>
            <div className='body-input'>
                <div className='button-top'>
                <p className='input1'><img className='windsor'src='klaviyo.jfif' alt='klaviyo'/>Klaviyo</p>
                <p id='input'>Customer Growth Platform that automates SMS and E-Mail marketing</p>
                </div>
                <div className='apply-button'>
                <button className='view'>View Integration</button>
                </div>
            </div>
            <div className='body-input'>
                <div className='button-top'>
                <p className='input1'><img className='windsor'src='mailchimp.png' alt='mailchimp'/>Mailchimp</p>
                <p id='input'>All-In-One integrated marketing platform dor small businesses</p>
                </div>
                <div className='apply-button'>
                <button className='view'>View Integration</button>
                </div>
            </div>
            <div className='body-input'>
                <div className='button-top'>
                <p className='input1'><img className='windsor'src='shopify.png' alt='shopify'/>Shopify</p>
                <p id='input'>Ecommerce Platform for All Businesses to Create and Customize Your Store</p>
                </div>
                <div className='apply-button'>
                <button className='view'>View Integration</button>
                </div>
            </div>
            <div className='body-input'>
                <div className='button-top'>
                <p className='input1'><img className='windsor' style={{borderRadius:8}}src='omnisend.png' alt='omnisend'/>Omnisend </p>
                <p id='input'>Platform for ecommerce email marketing, SMS and automation</p>
                </div>
                <div className='apply-button'>
                <button className='view'>View Integration</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Page2