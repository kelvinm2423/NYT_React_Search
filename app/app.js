// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Grab the properties associated with react-router
var Router = require('react-router').Router;
var Route = require('react-router').Route;

// Reference the components - still need to build out save
var Main = require('./components/Main');
var Search = require('./components/MainChildren/Search'); 
var Saved = require('./components/MainChildren/SavedArticles');

// Renders the contents according to the route page. 
ReactDOM.render(

		{/*High level component is the Main component*/}
		<Route path='/' component={Main}>

			{/* If user selects Child1 then show the appropriate component*/}
			<Route path='search' component={Search} />

			{/* If user selects Child2 then show the appropriate component*/}
			<Route path='saved' component={Saved} />
						
		</Route>

	</Router>,
	document.getElementById('app')
)