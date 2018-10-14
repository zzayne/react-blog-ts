import * as React from "react"

import { Link } from "react-router-dom";

import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import headerLinksStyle from 'JSS/frontHeaderLinkStyle'

interface IProp  extends WithStyles<typeof headerLinksStyle>{
}


class HeaderLinks extends React.Component<IProp,{}>{
    
    public render(){
        const {classes}=this.props
        return(
            <div>
                <Link to="/" className={classes.navLink}>
                   Home
                </Link>
            </div>
        )
    }
}

export default withStyles(headerLinksStyle)(HeaderLinks)