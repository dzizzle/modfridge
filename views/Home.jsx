const React = require('react');
const Layout = require('./components/Layout.jsx');

class Home extends React.Component {
    render () {
        return(
            <Layout>
                <div className="home-background">
                    <div className="home">
                        <h1 class="glow">Modfridge</h1>
                        <p>NEXT LEVEL PERSONALIZATION FOR YOUR BUSY LIFESTYLE</p>
                        <a href="/items"><button className="hbutton">START CUSTOMIZING</button></a>
                    </div>
                </div>
            </Layout>
        )
    }
}


module.exports = Home;