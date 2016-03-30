import React from 'react';

export default class Layout extends React.Component {

  render() {

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>React Universal Render</title>
        </head>
        <body>
          <div>
            {this.props.children}
          </div>
          <script src='/app.js'></script>
        </body>
      </html>
    );
  }
}
