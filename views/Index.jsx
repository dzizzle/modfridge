const React = require('react');
const Layout = require('./components/Layout.jsx')

class Index extends React.Component {
    render() {
        const {items} = this.props;
        return(
            <Layout>
                <div className="containermain">
                <div className="jumbotron jumbotron-fluid">
                    <div className="headerinfo">
                        <h1>INVENTORY</h1>
                        <a className="buttonp" id="headerbutton" href={`/items/add`} role="button">Add Groceries</a>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="card-deck justify-content-center">
                            {items.map((item, index) => {
                                return (
                                    <div className="card" style={{minWidth:"20rem", maxWidth:"20rem"}}>
                                        <div className="card-body">
                                            <h3 className="card-title">{item.name}</h3>
                                             <p className="card-text">{item.type}</p>
                                             <p className="card-text">{item.quantity} available</p>
                                            <a href={`/items/${item._id}`} className="buttonz" id="detailbutton" role="button">more details</a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>    
                    </div>
                </div>  
            </div>
            </Layout>
        )
    }
}

module.exports= Index;