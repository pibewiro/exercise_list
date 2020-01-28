import React, { Component } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios";


export default class EditExercise extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            username:"",
            description:"",
            date:new Date(),
            duration:0,
            users:[]
        }
    }

    componentDidMount()
    {
        axios.get("/users")
        .then(res=>this.setState({users:res.data}))

        axios.get(`/exercises/${this.props.match.params.id}`)
        .then(res=>{
            this.setState({
                username:res.data.username,
                duration:res.data.duration,
                description:res.data.description,
                date:Date.parse(res.data.date)
            })
        })
    }

    changeUsername = (e) => this.setState({username:e.target.value})
    changeDescription = (e) => this.setState({description:e.target.value})
    changeDuration = (e) => this.setState({duration:e.target.value})
    changeDate = (date) => this.setState({date})
    changeUsers = (e) => this.setState({username:e.target.value})

    onSubmit = (e) => {
        e.preventDefault()
        const newExercise = {
            username:this.state.username,
            description:this.state.description,
            date:this.state.date,
            duration:this.state.duration,
        }

        console.log(newExercise)

        axios.post(`/exercises/update/${this.props.match.params.id}`, newExercise)
        .then(res=>console.log(res.data))
    }


    render() {
        return (
            <div>
                <h3>Edittttt Exercise Log</h3>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <select className="form-control" value={this.state.username} onChange={this.changeUsername}>
                            {
                                this.state.users.map(user=>(
                                    <option key={user.username} value={user.username}>{user.username}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <input type="text" className="form-control" onChange={this.changeDescription} value={this.state.description} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Duration</label>
                        <input type="text" className="form-control" onChange={this.changeDuration} value={this.state.duration} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Date</label>
                        <br />
                        <DatePicker selected={this.state.date} onChange={this.changeDate} className="form-control"/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
