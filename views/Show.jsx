const React = require('react');
const Layout = require('./components/Layout.jsx')

class Show extends React.Component {
    render() {
        const {item} = this.props;
        return(
            <Layout>
                <div className="showimage">
                    <div className="link"><a href={'/items'} id="backbutton" role="button">Inventory</a></div>
                    <div className="stat">
                        <div className="itemstats">
                            <h1>{item.name}</h1>
                            <h3>Type: {item.type}</h3>
                            <h3>Quantity: {item.quantity}</h3>
                            <h3>Other: {item.other}</h3>
                        </div>
                    </div>
                    <div className="actions">
                          <form action={`/items/${item._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete"/>
                        </form>
                        
                        <a href={`/items/edit/${item._id}`}><button>Edit</button></a>
                      
                    </div>
                </div>
            </Layout>
        )
    }
}


module.exports = Show;