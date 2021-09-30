import React, { Component } from "react";

class InputWish extends Component {
    state = {
        wish: "",
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {≤u
        e.preventDefault();
        if(this.state.wish.trim()){
            this.setState({
                wish: "",
                cost: 0
            }) 
        } else {
            alert("Don't you want to be all powerful?!?")
        }
        console.log(mmnn)
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" addWishProps={this.addWish} onChange={this.onChange} placeholder="Ask a wish" name="wish" value={this.state.wish}/>
                <input 
                    type="number"
                    onChange={this.onChange}
                    placeholder="What is the cost"
                    name="cost"
                    value={this.state.cost}
                    />
                <button>Submit</button>
            </form>
        )
    }
}

export default InputWish;