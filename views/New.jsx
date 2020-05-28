const React = require('react');
const Layout = require('./components/Layout.jsx')

class New extends React.Component {
    render() {
        return(
            <Layout>
                <div className="newbackground">
                <div className="link"><a href={'/items'} id="backbutton" role="button">Inventory</a></div>
                    <div className="add">
                        <h1>Grocery Haul</h1>
                        <form action="/items" method="POST">
                            Name: <input type="text" name="name"/><br/>
                            Type: <input type="text" name="type" placeholder="produce, meat, etc."/><br/>
                            Quantity: <input type="text" name="quantity"/><br/>
                            Other: <input type="text" name="other" placeholder="any reminders?"/><br/>
                            <input className="addbutton" type="submit" name="" value="Add Item"/>
                        </form>
                    </div>
                    </div>
            </Layout>
        )
    }
}


module.exports = New;