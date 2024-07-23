import React, { Component } from "react";
import { MyCoolButton } from "../MyCoolButton";

export class Comment extends Component {
    constructor() {
        super();

        this.state = {
            publisher: "",
            comment: ""
        }
    }

    bichih = e => {
        this.setState({ comment: e.target.value });
    }

    render() {
        return <div>
            <div>{this.state.comment}</div>
            <div>Publisher: {this.props.zohiogch}</div>
            <textarea onChange={this.bichih}></textarea>
            <MyCoolButton
                comment={this.state.comment}
                tovchNer="Commentoo uneneer ni bich"
                text="Hadgal" />
        </div>
    }
}