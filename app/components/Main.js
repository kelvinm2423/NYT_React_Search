// Include React 
var React = require('react');

// Include React Components - Still need to build these out
var Nav = require('./MainChildren/Nav');
var Jumbotron = require('./MainChildren/Jumbotron');

// Helper Function - still need to build this out
var helpers = require('./utils/helpers');

var Main = React.createClass({

	// Here we render the function - not completed the nav or jumbotron
	render: function(){

		return(
			<div className="main-container">
				<div className="container">

					<Nav />
					<Jumbotron />
						
					{/*This code will dump the correct Child Component*/
					{this.props.children}

				</div>
			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Main;