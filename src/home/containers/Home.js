import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Repo from '../components/Repo';
import getUserRepos from '../thunks/getUserRepos';

import { bindActionCreators } from 'redux'

var blogData = [
  {
    image: require('../../static/blog-01.png'),
    title: 'Digital Marketing',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inven.',
    date: 'June 19 2018',
  },
  {
    image: require('../../static/blog-02.png'),
    title: 'Digital Marketing',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inven.',
    date: 'June 19 2018',
  },
  {
    image: require('../../static/blog-03.png'),
    title: 'Digital Marketing',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inven.',
    date: 'June 19 2018',
  },
]

class UserRepos extends Component {

	componentDidMount() {
		let username = 'mohandere';
		this.props.getUserRepos(username);
	}

	render() {
		let pageContent = ''
		let { repos, isLoading } = this.props;

		return (
			<div className='home-wrapper'>
        <div id='homeHead' className='container space-4' style={{marginTop: '50px'}}>
          <div className='row'>
            <div className='col-sm-6 vcenter'>
              <div className=''>
                <h1 className='main-heading space-4'>A high performing workforce is A huge market advantage</h1>
                <div>
                  <button className='btn'>Learn more</button>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <img width='100%' src={require('../../static/banner-image.svg')} alt=""/>
            </div>
          </div>
        </div>
        <div className='info-section row' id='info'>
          <div className='container'>
            <div className='row'>
            <div className='col-sm-6'>
              <div className='row'>
                <div className='col-sm-6 no-padding'>
                  <div className='info-block'>
                    <div>
                      <img src={require('../../static/whoweare.png')} width='30%' alt=""/>
                    </div>
                    <h3 className='info-block-heading'>Who We Are</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ton</p>
                  </div>
                </div>
                <div className='col-sm-6 no-padding'>
                  <div className='info-block'>
                    <img src={require('../../static/our-approach.png')} width='30%' alt=""/>
                    <h3 className='info-block-heading'>Our Approach</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ton</p>
                  </div>
                </div>
                <div className='col-sm-6 no-padding'>
                  <div className='info-block'>
                    <img src={require('../../static/profile.png')} width='30%' alt=""/>
                    <h3 className='info-block-heading'>Profile</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ton</p>
                  </div>
                </div>
                <div className='col-sm-6 no-padding'>
                  <div className='info-block'>
                    <img src={require('../../static/opportunities.png')} width='30%' alt=""/>
                    <h3 className='info-block-heading'>Opportunities</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ton</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6 vcenter'>
              <div className='info-main-text'>
                <h1 className='fw-200 space-4'>
                  We are Civil Society Human & Institutional Development Programme (CHIP)
                </h1>
                <button className='btn'>Learn more</button>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div id='our-mission-section' className='mission-wrapper'>
          <div className='row'>
            <div className='col-sm-6 extra-padding vcenter'>
              <div className=''>
                <h1 className='fw-100'>Learn more about</h1>
                <h1 className='blue'>Our Missions</h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inven.
                </p>
                <p>
                tore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                </p>
              </div>
            </div>
            <div className='col-sm-6 hidden-xs no-padding text-right'>
              <img height='600px' className='mission-img-back' src={require('../../static/mission-back(img).png')} alt=""/>
              <img height='600px' className='mission-img-front' src={require('../../static/mission-front(img).png')} alt=""/>
            </div>
          </div>
        </div>
        <div id='icons-section' className='row text-center icons-wrapper space-8'>
          {/* <div className='col-sm-2'>
            <img height='100px' src={require('../../static/strategy.png')} alt=""/>
            <h5>Strategy Development</h5>
          </div> */}
          <div className='col-sm-3'>
            <img height='100px' src={require('../../static/HID.png')} alt=""/>
            <h5>HID</h5>
          </div>
          <div className='col-sm-3'>
            <img height='100px' src={require('../../static/research.png')} alt=""/>
            <h5>Research</h5>
          </div>
          <div className='col-sm-3'>
            <img height='100px' src={require('../../static/monitoring.png')} alt=""/>
            <h5>Monitoring & Evaluation</h5>
          </div>
          <div className='col-sm-3'>
            <img height='100px' src={require('../../static/enterprise-dev.png')} alt=""/>
            <h5>Enterprise Development</h5>
          </div>
          {/* <div className='col-sm-2'>
            <img height='100px' src={require('../../static/HID.png')} alt=""/>
          </div> */}
        </div>
        <div id='blog-section' className='blog-wrapper container space-8'>
          <div className='blog-heading text-center'>
            <p>Our <span>Blog</span></p>
          </div>
          <div className='row'>
            {blogData.map((item, index) => {
              return <div className='col-sm-4 space-4'>
                <div className='blog-tile'>
                  <div className='blog-tile-image' style={{background: `url(${item.image})`}}>
                  </div>
                  <div className='tile-contents'>
                    <p className='date space-2'>{item.date}</p>
                    <h3 className='heading space-2'>{item.title}</h3>
                    <p className='text space-2'>{item.text}</p>
                    <a className='blue'>Read more</a>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
        <div id='testimonials-section' className='testimonials-wrapper container space-8'>
          <div className='row'>
            <div className='col-sm-6 vcenter hidden-xs'>
              <div className='testimonials-text'>
                <h1 className='commas'>"</h1>
                <p>I have had the pleasure of working with CTC as a Consultant/Trainer in Health and Nutrition on numerous occasions. The entire CTC team is very professional, courteous and respectful at all times. I would recommend CTC without hesitation to colleagues and agencies for their expertise in numerous areas and professional attitude in meeting deadlines etc</p>
                <h5>Dr.Safdar Kamal Pasha</h5>
              </div>
            </div>
            <div className='col-sm-6 testimonials-image'>
              <img width='100%' height='400px' src={require('../../static/testimonial-pic.png')} alt=""/>
            </div>
          </div>
        </div>
        <div id='clients-section' className='clients-wrapper container space-4'>
          <div className='blog-heading text-center'>
            <p>Our <span>Clients</span></p>
          </div>
            <div className="row">
              <div className="col-sm-3 text-center">
                <div className='clients-tile space-2'>
                  <img src={require('../../static/client-01.png')} alt=""/>
                </div>
                <p>Winrock</p>
              </div>
              <div className="col-sm-3 text-center">
                <div className='clients-tile space-2'>
                  <img src={require('../../static/client-02.png')} alt=""/>
                </div>
                <p>Who</p>
              </div>
              <div className="col-sm-3 text-center">
                <div className='clients-tile space-2'>
                  <img src={require('../../static/client-03.png')} alt=""/>
                </div>
                <p>Usaid</p>
              </div>
              <div className="col-sm-3 text-center">
                <div className='clients-tile space-2'>
                  <img src={require('../../static/client-04.png')} alt=""/>
                </div>
                <p>Unicef</p>
              </div>
            </div>
        </div>
			</div>
		);

	}
}

UserRepos.propTypes = {
	repos: PropTypes.array
};

const mapStateToProps = (state) => {
	return {
		repos: state.home.userRepos.repos,
		isLoading: state.home.userRepos.isLoading
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		getUserRepos,
	}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRepos);
