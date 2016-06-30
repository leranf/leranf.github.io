var App = React.createClass({displayName: 'App',

  render: function() {
    return (
      React.createElement('div', null, Heyyyyyy)
    );
  }
});   
      
ReactDOM.render(
  React.createElement(App, null),
  document.querySelector('.personalSite')
);