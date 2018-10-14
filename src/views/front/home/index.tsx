import * as React from 'react'
import Parallax from 'CMP/Parallax/Parallax'


class HomePage extends React.Component<{},{}>{
    

    public render(){
        
        return(
            <Parallax image={require("IMG/home-bg.jpg")}>
                <div>Hello </div>
            </Parallax>
        )
    }
}

export default HomePage
