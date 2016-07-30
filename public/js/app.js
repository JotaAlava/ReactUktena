var App = React.createClass({displayName: "App",
    getInitialState: function () {
        return {
            username: '@tylermcginnis33'
        }
    },
    handleChange: function (e) {
        this.setState({
            username: e.target.value
        })
    },
    render: function () {
        return (
            React.createElement("div", {className: "container"}, 
                React.createElement(NavBarHeader, null), 
                React.createElement(NavBar, null), 
                React.createElement(EstimatesPanel, null)
            )
        )
    }
});

var NavBarHeader = React.createClass({displayName: "NavBarHeader",
    render: function () {
        return (
            React.createElement("div", {className: "navbar-header"}, 
                React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar", 
                        "aria-expanded": "false", "aria-controls": "navbar"}, 
                    React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
                    React.createElement("span", {className: "icon-bar"}), 
                    React.createElement("span", {className: "icon-bar"}), 
                    React.createElement("span", {className: "icon-bar"})
                ), 
                React.createElement("a", {className: "navbar-brand", href: "#"}, "Project name")
            )
        );
    }
});

var NavBar = React.createClass({displayName: "NavBar",
    render: function () {
        return (
            React.createElement("div", {id: "navbar", className: "navbar-collapse collapse"}, 
                React.createElement("ul", {className: "nav navbar-nav"}, 
                    React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "Home")), 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "About")), 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "Contact")), 
                    React.createElement("li", {className: "dropdown"}, 
                        React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", 
                           "aria-expanded": "false"}, "Dropdown ", React.createElement("span", {className: "caret"})), 
                        React.createElement("ul", {className: "dropdown-menu"}, 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
                            React.createElement("li", {role: "separator", className: "divider"}), 
                            React.createElement("li", {className: "dropdown-header"}, "Nav header"), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link")), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "One more separated link"))
                        )
                    )
                ), 
                React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
                    React.createElement("li", {className: "active"}, React.createElement("a", {href: "./"}, "Default ", React.createElement("span", {className: "sr-only"}, "(current)"))), 
                    React.createElement("li", null, React.createElement("a", {href: "../navbar-static-top/"}, "Static top")), 
                    React.createElement("li", null, React.createElement("a", {href: "../navbar-fixed-top/"}, "Fixed top"))
                )
            )
        )
    }
});

var EstimatesPanel = React.createClass({displayName: "EstimatesPanel",
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-body"}, 
                    "Basic panel example"
                )
            )
        )
    }
});

ReactDOM.render(
    React.createElement(App, null),
    document.getElementById('app')
);