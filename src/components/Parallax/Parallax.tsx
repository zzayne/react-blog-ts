import * as React from "react"
import classNames from "classnames"

import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import parallaxStyle from 'JSS/parallaxStyle'


interface IState{
    transform:string,
}

interface IProp  extends WithStyles<typeof parallaxStyle>{
    filter:boolean,
    small:boolean,
    className:string,
    style:object,
    image:string,
    children:any
}


class Parallax extends React.Component<IProp,IState>{
    constructor(props) {
        super(props);
        const windowScrollTop = window.pageYOffset / 3;
        this.state = {
          transform: "translate3d(0," + windowScrollTop + "px,0)"
        };
    }

    public componentDidMount(){
        const windowScrollTop = window.pageYOffset / 3;
        this.setState({
            transform: "translate3d(0," + windowScrollTop + "px,0)"
        });
        window.addEventListener("scroll", this.resetTransform);
    }
    public componentWillUnmount() {
        window.removeEventListener("scroll", this.resetTransform);
    }

    public resetTransform=()=>{
        const windowScrollTop = window.pageYOffset / 3;
        this.setState({
            transform: "translate3d(0," + windowScrollTop + "px,0)"
        });
    }

    public render(){
        const{
            classes,
            className,
            filter,
            small,
            style,
            image,
            children
        }=this.props

        const parallaxClasses = classNames({
            [classes.parallax]: true,
            [classes.filter]: filter,
            [classes.small]: small,
            [className]: className !== undefined
          });
        
        return(
            <div
            className={parallaxClasses}
            style={{
              ...style,
              backgroundImage: "url(" + image + ")",
              ...this.state
            }}
          >
            {children}
          </div>
        )

    }
}

export default withStyles(parallaxStyle)(Parallax)