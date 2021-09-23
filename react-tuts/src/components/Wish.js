import React from "react";

class Wish extends React.Component {
    render() {
        return(
            <li>
                <input type="checkbox"
                checked={this.props.wish.completed}
                onChange={() => this.props.handleChange(this.props.wish.id)}
                 />
                {this.props.wish.wish}
            </li>
        )
    }
}

export default Wish;