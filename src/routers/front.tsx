import  * as React from 'react'
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable'
import loader from 'CMP/common/loader'

const HomePage =Loadable({
    loader:()=>import("VIEW/front/home"),
    loading:loader
})


const FrontRouter=(match)=>(
    <Switch>
        <Route path="/" component={HomePage} />
    </Switch>
)

export default FrontRouter