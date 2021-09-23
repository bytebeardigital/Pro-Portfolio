import React from "react";
import Wishes from "./Wishes";
import Heading from "./Header";


class GenieLamp extends React.Component {
    state = {
        wishes: [
            {
                id: 1,
                wish: "Emergency Fund",
                granted: true
            },
            {
                id: 2,
                wish: "Samoyed",
                granted: false
            },
            {
                id: 3,
                wish: "Debt Free",
                granted: false
            }
        ]
    }
    handleChange = (id) => {
        console.log("clicked", id)
    }
    render() {
        return (
            <div>
                        <Heading/>
                <Wishes wishes={this.state.wishes} handleChange={this.handleChange} />
            </div>
        )
    }
}

export default GenieLamp;