import React from 'react'
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'

import Auth from './pages/Auth'
import Login from './pages/Login'
import Forgot from './pages/Forgot'
import Logout from './pages/Logout'
import Dashboard from './pages/Dashboard'
import Product from './pages/Product'
import ProductShow from './pages/ProductShow'
import Quotation from './pages/Quotation'
import QuotationShow from './pages/QuotationShow'
import Construction from './pages/Construction'
import ConstructionShow from './pages/ConstructionShow'
import Account from './pages/Account'
import AccountForm from './pages/AccountForm'
import AccountEdit from './pages/AccountEdit'
import AccountConfirm from './pages/AccountConfirm'
import AccountThanks from './pages/AccountThanks'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/privacy" component={Privacy}/>
                    <Route exact path="/terms" component={Terms}/>

                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/forgot" component={Forgot}/>
                    <Route exact path="/logout" component={Logout}/>
                    <Auth>
                        <Switch>
                            <Route exact path="/dashboard" component={Dashboard}/>
                            <Route path="/quotation/show/:id" component={QuotationShow} />
                            <Route path="/quotation" component={Quotation} />
                            {/*<Route path="/quotation/:id" component={QuotationEdit} />*/}
                            {/*<Route path="/quotation/:id/delete" component={PostDelete} />*/}

                            <Route path="/product/show/:id" component={ProductShow}/>
                            <Route path="/product" component={Product}/>

                            <Route path="/construction/show/:id" component={ConstructionShow}/>
                            <Route path="/construction" component={Construction}/>

                            <Route exact path="/account" component={Account}/>
                            <Route exact path="/account/edit" component={AccountForm}/>
                            {/*<Route exact path="/account/confirm" component={AccountConfirm}/>*/}
                            <Route exact path="/account/thanks" component={AccountThanks}/>
                        </Switch>
                    </Auth>
                </Switch>
            </Router>
        )}
}

export default App