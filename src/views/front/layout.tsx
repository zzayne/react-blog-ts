import * as React from 'react'
import withRoot from 'SRC/withRoot';
import Header from 'CMP/FrontHeader/Header'
import HeaderLinks from 'CMP/FrontHeader/headerLinks'

import FrontRouter from 'ROUTER/front'

interface IProp{
    match:string
}

class Layout extends React.Component<IProp,{}>{
    

    public render(){
        const {match}=this.props
        return(
        <div >
            <Header 
                 brand={'zayne blog'}
                 fixed
                 color="transparent"
                 rightLinks={<HeaderLinks/>}
                 changeColorOnScroll={{
                   height: 400,
                   color: "white"
                 }}
             />
             <div>
                <FrontRouter match={match}/>
             </div>
         </div>
        )
    }
   
}
export default withRoot(Layout)