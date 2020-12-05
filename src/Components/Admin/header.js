import React, { Component } from 'react'
import firebase from '../../helper'
import {Link} from "react-router-dom"
export default class header extends Component {
    componentDidMount = async()=> {
        const self = this
        firebase.auth().onAuthStateChanged(function(user) {
            if(!user){
                self.props.history.push("/admin");
            }
        })
    }
    logout= async(e)=>{
        const self = this
        e.preventDefault()
        firebase.auth().signOut().catch(function(error) {
            alert(error.message)
        });          
    } 
    render() {
        console.log(this.props.location)
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Dashboard</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={"nav-item "+(this.props.location.pathname.includes("overview")&&"active")}>
                            <Link to='/admin/dashboard/overview' className="nav-link" href="#">Overview </Link>
                        </li>
                        <li className={"nav-item "+(this.props.match.params.active=="pending"&&"active")}>
                            <Link to='/admin/dashboard/pending' className="nav-link" href="#">New Orders </Link>
                        </li>
                        <li className={"nav-item "+(this.props.match.params.active=="in_progress"&&"active")}>
                            <Link to='/admin/dashboard/in_progress' className="nav-link" href="#">In Progress</Link>
                        </li>
                        <li className={"nav-item "+(this.props.match.params.active=="complete"&&"active")}>
                            <Link to='/admin/dashboard/complete' className="nav-link" href="#">Complete</Link>
                        </li>
                        <li className={"nav-item "+(this.props.match.params.active=="revision"&&"active")}>
                            <Link to='/admin/dashboard/revision' className="nav-link" href="#">Revision</Link>
                        </li>
                    </ul>
                    <a href="#" onClick={this.logout} class="navbar-text">
                        Logout
                    </a>
                </div>
            </nav>
        )
    }
}
