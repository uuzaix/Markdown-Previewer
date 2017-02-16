import React from 'react';
import marked from 'marked';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Markdown Previewer\n=====\n\nTry it out!\n----\n\n*This text will be italic* \n\n**This text will be bold**\n\nYou can create lists:\n\n * like\n * this\n\nFor more examples read [GitHub Guide](https://guides.github.com/features/mastering-markdown)" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div className='container'>
        <textarea className='box' name="markdown" id="userInput" rows="20" onChange={this.handleChange} value={this.state.value}></textarea>
        <div id="output" className='box' dangerouslySetInnerHTML={{ __html: marked(this.state.value) }}></div>
      </div>)
  }
}

export default App;