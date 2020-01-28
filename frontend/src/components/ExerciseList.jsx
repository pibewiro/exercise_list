import React, { Component } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"


const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
            <Link to={`/edit/${props.exercise._id}`}>Edit</Link> | <a href="#" onClick={()=>props.deleteExercise(props.exercise._id)}>Delete</a>
        </td>
    </tr>
)

export default class ExerciseList extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            exercises:[]
        }
    }

    componentDidMount()
    {
        axios.get("/exercises")
        .then(res=>this.setState({exercises:res.data}))
        .catch(err=>console.log(err))
    }



    exerciseList(){
        return this.state.exercises.map(ex=>{
            return <Exercise exercise={ex} deleteExercise={this.deleteExercise.bind(this, ex._id)} key={ex._id} />
        })
    }

    deleteExercise(id)
    {
        axios.delete(`/exercises/${id}`)
        .then(res=>console.log(res.data));

        this.setState({
            exercises:this.state.exercises.filter(el => el._id !== id)
        })
    }

    render() {
        return (
            <div>
                <h3>Exercise List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
