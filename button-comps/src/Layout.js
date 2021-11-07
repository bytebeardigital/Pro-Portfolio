import React from 'react';
import SideNav from './components/side-nav';

const Layout = ({children}) => {
    return(
           <div className="container" style={{border: "1px solid red"}}>
            <SideNav/>
            <main style={{ marginLeft: "210px", padding: "0px 10px" }}> {children} </main>
            <footer>footer</footer>
           </div>
    )
}

export default Layout;