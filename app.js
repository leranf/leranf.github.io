var App = React.createClass({displayName: 'App',

  render: function() {
    return (
      React.createElement('img', { className: profilePic, src: 'profile.jpg' })
    );
  }
});   
      
ReactDOM.render(
  React.createElement(App, null),
  document.querySelector('.personalSite')
);