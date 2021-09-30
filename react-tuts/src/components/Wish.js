import React from "react";

class Wish extends React.Component {
    render() {
        return(
            <li className="singleWish">
                <input type="checkbox"
                checked={this.props.wish.granted}
                onChange={() => this.props.handleChangeProps(this.props.wish.id)}
                 />
                 <button onClick={() => this.props.deleteWishProps(this.props.wish.id)}>Delete</button>
                <p>{this.props.wish.wish} - ${this.props.wish.cost}</p>
            </li>
        )
    }
}

export default Wish;