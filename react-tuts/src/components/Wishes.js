import React from "react";
import Wish from "./Wish";

class Wishes extends React.Component {
    render() {
        return(
           <ul>
               {this.props.wishes.map(wish => (
                   
                   <Wish 
                    key={wish.id}
                    wish={wish}
                    cost={wish.cost}
                    handleChangeProps={this.props.handleChangeProps}
                    deleteWishProps={this.props.deleteWishProps}
                    />
               ))}
           </ul>
        )
    }
}

export default Wishes;