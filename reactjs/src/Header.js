import React, { Component, Fragment } from "react";
 class AppFooter extends Component{
    render(){
        return (<div>
           <Fragment>
            <h1>{this.props.title}</h1>
            <p>{this.props.subheading}</p>
            <hr/>
           </Fragment>
        </div>
    );
}
}
export default AppFooter;