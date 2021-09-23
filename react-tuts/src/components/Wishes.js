import React from "react";
import Wish from "./Wish";

class Wishes extends React.Component {
    render() {
        return(
           <ul>
               {this.props.wishes.map(wish => (
                   
                   <Wish key={wish.id} wish={wish} handelChange={wish.handleChange} />
               ))}
           </ul>
        )
    }
}

export default Wishes;