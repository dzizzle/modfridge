const React = require('react');

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>ModFridge</title>
                    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"></link>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <body>{this.props.children}</body>
            </html>
        )
    }
}


module.exports = Layout;