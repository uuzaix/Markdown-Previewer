import React from 'react';
import marked from 'marked';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <textarea name="markdown" id="userInput" cols="70" rows="30" onChange={this.handleChange} style={{ margin: '20px' }}></textarea>
        <div id="output" dangerouslySetInnerHTML={{ __html: marked(this.state.value) }}></div>
      </div>)
  }
}
export default App;