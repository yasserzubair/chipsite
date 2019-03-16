import React, { Component } from 'react';

class Footer extends Component {

	render () {
		return (
	    <footer>
	      <div className="footer-wrapper container">
	       	<div className="row">
						<div className="col-sm-4 tors">
							<h5 className='space-4'>TORs</h5>
							<div>
								<p className='no-margin'>Terms Of Reference – CBV Security Coordinator</p>
								<p className='no-margin'>Pakistan CHIP Training & Consulting</p>
								<a href="">Security Coordinator</a>
							</div>
							<hr/>
							<div>
								<p className='no-margin'>Terms Of Reference – Union Council Social Mobilizer (UCSM)</p>
								<p className='no-margin'>Pakistan CHIP Training & Consulting</p>
								<a href="tor-link">UCSM</a>
							</div>
						</div>
						<div className="col-sm-4">
							<h5 className='space-4'>Contact Us</h5>
							<div className='row'>
								<div className='col-sm-1'>
									<img height={'20px'} src={require('../../static/address-icon.png')} alt=""/>
								</div>
								<div className='col-sm-11'>
									<p>Plot 1, Street 9 Fayyaz Market, G-8/2, Islamabad, Pakistan</p>
								</div>
							</div>
							<div className='row'>
								<div className='col-sm-1'>
									<img height={'20px'} src={require('../../static/phone-icon.png')} alt=""/>
								</div>
								<div className='col-sm-11'>
									<p>+92-51-111-111-920</p>
								</div>
							</div>
							<div className='row'>
								<div className='col-sm-1'>
									<img height={'20px'} src={require('../../static/phone-icon.png')} alt=""/>
								</div>
								<div className='col-sm-11'>
									<p>+92-51-228-0081</p>
								</div>
							</div>
							<div className='row'>
								<div className='col-sm-1'>
									<img height={'20px'} src={require('../../static/mail-icon.png')} alt=""/>
								</div>
								<div className='col-sm-11'>
									<p>info@ctc.org.pk</p>
								</div>
							</div>
							<div className='row'>
								<div className='col-sm-1'>
									<img height={'20px'} src={require('../../static/web-icon.png')} alt=""/>
								</div>
								<div className='col-sm-11'>
									<p>www.ctc.org.pk</p>
								</div>
							</div>
						</div>
						<div className="col-sm-4 vcenter">
							<div>
								<img height='250px' src={require('../../static/map-location.png')} alt=""/>
							</div>
						</div>
					 </div>
	      </div>
	    </footer>
	  )
	}
}

export default Footer;