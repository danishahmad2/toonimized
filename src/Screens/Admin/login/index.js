import "./style.css";
import React, { Component } from 'react'
import firebase from '../../../helper'
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

export default class App extends Component {
    state={}
    componentDidMount = async()=> {
        const self = this
        firebase.auth().onAuthStateChanged(function(user) {
            if(user){
                self.props.history.push("/admin/dashboard/pending");
            }
        })
    }
    login= async(e)=>{
        const {email,password}=this.state
        const self = this
        self.setState({loading:true})
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            var msg = "Please try again"
            if (error.code == "auth/user-not-found"){
                msg= "User does not exist"
            }
            else if(error.code == "auth/wrong-password"){
                msg= "Email and password did not match"
            }
            self.setState({error:msg,loading:false})
        });          
        self.setState({loading:false})

    }   
    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.login}>
                    <h2 className="text-center">Log in</h2>       
                    <div className="form-group">
                        <input type="email" onChange={t=>this.setState({email:t.target.value})} className="form-control" placeholder="Email" required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="password" onChange={t=>this.setState({password:t.target.value})} className="form-control" placeholder="Password" required="required"/>
                    </div>
                    <div className="form-group">
                        {this.state.error&& <span style={{color:"red"}}>{this.state.error}</span>}
                        <button type="submit" className="btn btn-primary btn-block">{this.state.loading?"Loading...":"Log in"}</button>
                    </div>
                          
                </form>
            </div>
        )
    }
}