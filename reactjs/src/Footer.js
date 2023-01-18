import React,{ Component } from "react";
import './AppFooter.css';
 export default function AppFooter({year, company, website}){
    
        return <div>
            
                <div className="app-footer">
                    
                    <p>&copy; 2022- All rights reserved {company}</p>
                    <a href={website}>contact us </a>
                </div>
            
        </div>;
    
}


