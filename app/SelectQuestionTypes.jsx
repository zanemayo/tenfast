var React = require('react');

var SelectQuestionTypes = React.createClass({

  getInitialState: function() {
    return {
      questionTypes: [
        {name: 'Addition', isChecked: false, key: 1},
        {name: 'Subtraction', isChecked: false, key: 2},
      ]
    };

  },
  generateClick: function() {
    alert('boom');
  },
  handleCheckboxClick: function(event) {
    this.setState({value: event.target.value});
    debugger;
  },

  render: function() {
    var questionTypes = this.state.questionTypes;
    var self = this;

    return <div id="select-question-types">
      <strong>Select some question types</strong>
      <ul>
        {questionTypes.map(function(result) {
          return <li key={result.key}>
            <input type="checkbox"
              defaultChecked={result.isChecked}
              onChange={self.handleCheckboxClick}  />
            {result.name}
          </li>
        })}
      </ul>
      <button onClick={this.generateClick}>Generate Questions</button>
    </div>;
  }
});

module.exports = SelectQuestionTypes;
