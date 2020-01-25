import React from "react";
import { Router , Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import createHistory from "history/createBrowserHistory";
import ExpenseDashbordPage from "../components/ExpenseDashbordPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";

export const history = createHistory();

const AppRouter = ()=>(
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/"  component={LoginPage} exact={true}/>
                <Route path="/dashbord" component={ExpenseDashbordPage} />
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>  
        </div>
    </Router>
)


export default AppRouter;