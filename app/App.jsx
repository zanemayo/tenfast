/** @jsx React.DOM */
var React = require('react');
var PageHeader = require('./PageHeader.jsx');
var SelectQuestionTypes = require('./SelectQuestionTypes.jsx');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<PageHeader />
				<SelectQuestionTypes />
			</div>
		);
	}

});

module.exports = App;
