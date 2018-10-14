import  * as React from 'react'
import { Switch, Route } from 'react-router-dom';
import FrontLayout from 'VIEW/front/layout'

const Router=()=>(
    <Switch>
        <Route path="/" component={FrontLayout} />
    </Switch>
)

export default Router