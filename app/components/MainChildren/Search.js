// Include React 
var React = require('react');

// Include React Components - Still need to create SearchChildren
var Query = require('./SearchChildren/Query');
var Results = require('./SearchChildren/Results');
var SaveItem = require('./SearchChildren/ResultsChildren/SaveItem');
var Notification = require('./SearchChildren/Notification');

// Helper Function - still need to create helpers
var helpers = require('../utils/helpers');

var Search = React.createClass({

	// Here we set a generic state associated with the text being searched for
	getInitialState: function(){
		return {
			search: "",
			start: "",
			end: "",
			same: false,
			results: [],
			modalIsOpen: false,
			type: "",
			message: ""
		}
	},

	// This function will respond to the user input 
	handleChange: function(event){

  	// Here we create syntax to capture any change in text to the query terms (pre-search).
  	var newState = {};
  	newState[event.target.id] = event.target.value;
  	// Allows the submit button to send a request again because state has changed
  	newState['same'] = false;
  	this.setState(newState);

	},

	// This function will respond to the user click
	handleClick: function(event){

			// Search for articles
			helpers.getArticles(terms)
				.then(function(data){
					if (data === false) {
						// Show message if no results found
						this.message('Error','No results found. Please refine inputs.');
					} else {
						// Save data to state
						this.setState({
							results: data
						});
					}
				}.bind(this))		
		}
	},

	openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  message: function(type,text) {
  	// Set text
  	this.setState({
  		type: type,
			message: text
		});
		// Show modal
		this.openModal();
  },
// For save render
  saved: function(status) {
  	if (status === 'saved') {
  		// Show successfully saved message
			this.message('Successfully Saved','Click "Saved Articles" in navigation to review.');
  	} else {
  		// Show successfully saved message
			this.message('Error','Article was already saved.');
  	}
		return
  },

	// Here we render the function
	render: function(){

		var saved = this.saved;

		return(
			<div>			

			  <Query handleChange={this.handleChange} handleClick={this.handleClick} />
			  {this.state.results.length !== 0 ? 
			  	<Results fa="fa fa-newspaper-o" text="Results">
			  		{this.state.results.map(function(result) {
				  		return (
				  			<SaveItem 
				  				key={result._id}
				  				title={result.headline.main}
				  				url={result.web_url}
				  				date={result.pub_date}
				  				saved={saved}
				  			/>
				  		)
				  	})}
				  </Results> : null}

			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Search;