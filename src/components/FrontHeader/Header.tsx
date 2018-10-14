import * as React from "react";
import classNames from "classnames";

import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";


import Menu from "@material-ui/icons/Menu";

import headerStyle from 'JSS/frontHeaderStyle'
import { Button } from '@material-ui/core';


interface IState{
    mobileOpen:boolean
}
interface IProp extends WithStyles<typeof headerStyle>{
    brand:string,
    fixed:boolean,
    color:string,
    absolute:boolean,
    rightLinks:any,
    changeColorOnScroll:any
}

class Header extends React.Component<IProp,IState> {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
  }

  public  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }

  public headerColorChange=()=>{
    const { classes, color, changeColorOnScroll } = this.props;
    const windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  }

  public  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.headerColorChange);
    }
  }

  public handleDrawerToggle=()=>{
    console.log('dfdf')
  }

  public render() {
    const { 
      classes,
      color,
      brand,
      rightLinks,
      fixed,
      absolute
    }=this.props

    const appBarClasses=classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    })

   

    const brandComponent=<Button className={classes.title}>{brand}</Button>

    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          {
              brandComponent
          }
          <Hidden smDown implementation="css">
            {rightLinks}
          </Hidden>
           <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
             
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(headerStyle)(Header);
