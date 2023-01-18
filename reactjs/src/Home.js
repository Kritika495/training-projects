import React,{ Component } from "react";
import AppHeader from './Header';
import AppFooter from './Footer';
import { AppContent } from "./AppContent";
import Movies from "./movies";
import App from "./App";

export class AppHome extends Component{
    render(){
        const footerProps = {
            website: "https://abc.co",
            company: 'RNishad Inc'
        };
        return <div className="app-home">
            <AppHeader title="Address book App " subheading="Created by Kritika"/>

            <AppContent/>
            {/* <AppFooter website={footerProps.website} company={footerProps.company} year=""/> */}
            <AppFooter {...footerProps}/>
        </div>
    }
}