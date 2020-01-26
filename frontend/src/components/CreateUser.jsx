import React, { Component } from 'react'
import "../../../backend/node_modules/react-datepicker/dist/react-datepicker.css"
import axios from "axios"


export default class CreateUser extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            username:"",
        }
    }

    changeUsername = (e) => this.setState({username:e.target.value})

    onSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            username:this.state.username,
        }

        console.log(newUser)
        axios.post("/users", newUser)
        .then(res=>console.log(res.data))
    }


    render() {
        return (
            <div>
                <h3>Create New User</h3>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input type="text" className="form-control" onChange={this.changeUsername} value={this.state.username} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create New User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
