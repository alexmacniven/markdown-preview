import React from 'react';
import marked from 'marked';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      preview : `# markdown-preview
      
![logo](https://markdown-here.com/img/icon256.png)

## A Markdown Editor by Alex Macniven

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber and Aaron Swartz.

Hello, I'm Alex and I built this web application using React. It uses CSS Flexbox and is powered by [Marked](https://cdnjs.com/libraries/marked).

You can read up on markdown syntax in [this article](https://daringfireball.net/projects/markdown/) over at **Daring Fireball**.

## Contribute
First, have the required tools;
 - \`node\`
 - \`npm\`

Then you're ready to clone the project;
\`\`\`bash
git clone ...
\`\`\`

Launch a development build;
\`\`\`bash
npm start
\`\`\``
    }
    this.handleChange = this.handleChange.bind(this)
    this.formatMarkdown = this.formatMarkdown.bind(this)
  }

  handleChange(event) {
    this.setState({preview : event.target.value})
  }

  formatMarkdown(){
    const markdownText = marked(this.state.preview, {sanitize:true, breaks:true})
    return {__html:markdownText}
  }

  render() {
    return (
      <section class="Container">
          <div>
            <textarea id="editor" onChange={this.handleChange}>{this.state.preview}</textarea></div>
          <div id="preview" dangerouslySetInnerHTML={this.formatMarkdown()}></div>
      </section>
    )
  }
}

export default App;
