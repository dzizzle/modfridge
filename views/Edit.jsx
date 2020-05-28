const React = require('react');
const Layout = require('./components/Layout.jsx')

class Edit extends React.Component {
    render() {
        const {item} = this.props;
        return(
            <Layout>
                <div className="editbackground">
                <div className="link"><a href={'/items'} id="backbutton" role="button">Inventory</a></div>
                    <div className="editstats">
                        <h1>Edit:<br></br> {item.name}</h1>
                        <form action={`/items/edit/${item._id}?_method=PUT`} method="POST">
                            Name: <input type="text" name="name" value={item.name}/><br/>
                            Quantity: <input type="text" name="quantity" value={item.quantity}/><br/>
                            Type: <input type="text" name="type" value={item.type}/><br/>
                            Other: <input type="text" name="other" value={item.other}/><br/>
                            <input className="editbutton" type="submit" name="" value="Done"/>
                        </form>
                    </div>
                </div>
            </Layout>
        )
    }
}


module.exports = Edit;