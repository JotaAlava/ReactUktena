var App = React.createClass({
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
            <div className="container">
                <NavBarHeader></NavBarHeader>
                <NavBar></NavBar>
                <EstimatesPanel></EstimatesPanel>
            </div>
        )
    }
});

var NavBarHeader = React.createClass({
    render: function () {
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Project name</a>
            </div>
        );
    }
});

var NavBar = React.createClass({
    render: function () {
        return (
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false">Dropdown <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" className="divider"></li>
                            <li className="dropdown-header">Nav header</li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li className="active"><a href="./">Default <span className="sr-only">(current)</span></a></li>
                    <li><a href="../navbar-static-top/">Static top</a></li>
                    <li><a href="../navbar-fixed-top/">Fixed top</a></li>
                </ul>
            </div>
        )
    }
});

var EstimatesPanel = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    Basic panel example
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);