import React from "react";
import Wishes from "./Wishes";
import Heading from "./Header";
import InputWish from "./InputWish";
import {v4 as uuidv4 } from "uuid";
import '../App.css';

class GenieLamp extends React.Component {
    //Mange state
    state = {
        wishes: [
            {
                id: uuidv4(),
                wish: "Emergency Fund",
                granted: true,
                cost: 2200.00
            },
            {
                id: uuidv4(),
                wish: "Samoyed",
                granted: false,
                cost: 4000.00
            },
            {
                id: uuidv4(),
                wish: "Debt Free",
                granted: false,
                cost: 3200.00
            }
        ]
    }

    //onChange Handler
    handleChanges = id => {
        this.setState(prevState => ({
            wishes: prevState.wishes.map(wish => {
                if(wish.id === id) {
                    return {
                        ...wish,
                        granted: !wish.granted,
                    }
                }
                return wish;
            }),
        }))
    }

    //delete a wish
    delWish = id => {
        this.setState({
            wishes: [
                ...this.state.wishes.filter(wish => {
                    return wish.id !== id;
                })
            ]
        })
    }

    //add a wish
    addWish = wish => {
        const newWish = {
            id: 4,
            wish: wish,
            granted: false
        };
        this.setState({
            wishes: [...this.state.wishes, newWish]
        });
    };
    //render UI
    render() {
        return (
            <div>
                        <Heading/>
                        <InputWish addWishProps={this.addWish}/>
                <Wishes wishes={this.state.wishes} handleChangeProps={this.handleChanges} deleteWishProps={this.delWish}/>
            </div>
        )
    }
}

export default GenieLamp;