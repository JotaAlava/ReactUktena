var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return (
      React.createElement("div", null, 
        "Hello Woasd asda sda adsrld!"
      )
    )
  }
});

ReactDOM.render(
  React.createElement(HelloWorld, null),
  document.getElementById('app')
);