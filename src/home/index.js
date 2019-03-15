import React, { Component } from 'react';
import { Container } from 'reactstrap';
// import UserRepos from './containers/UserRepos';
import HomeContainer from './containers/Home';
import './style.scss';

class Home extends Component {
	render() {
		return (
			<div id="home">
				<Container fluid={true}>
					<HomeContainer/>
				</Container>
			</div>
		);
	}
}

export default Home;
