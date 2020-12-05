import "./style.css";
import React, { Component } from "react";
import neclace from "../../../Assets/neclace.png";
import Mailchimp from "react-mailchimp-subscribe"
import {mailchimp_url} from '../../../helper'

export default class Character extends Component {
  state={}
  
  render() {
    const { history } = this.props;
    return (
      <Mailchimp
          url={mailchimp_url}
          render={({ subscribe, status, message }) => (
            <div className="characterBox">
              <img alt="" src={neclace} className="characterNeclace" />
              <h1 className="characterHead">
                Who doesn’t love discounts? – Get 15% off
              </h1>
              <div className="centerCharacterData">
                <p className="characterPara">
                  Enter your email and get 15% discount on your total order, also
                  you’ll be in touch with our latest discounts and news. No worries,
                  we hate spam too.
                </p>
                <form onSubmit={(e)=>{
                  e.preventDefault()
                  if(this.state.email&&(/\S+@\S+\.\S+/.test(this.state.email))){
                    if(this.state.accept_policy){
                      subscribe({EMAIL:this.state.email,NAME:""})
                    }else{
                      this.setState({error:"Please Accept The Privacy Policy"})
                    }
                  }else{
                    this.setState({error:"Invalid Email"})
                  }
                }}>
                  {this.state.error&&
                    <span style={{float:"left",color:"red"}}>{this.state.error}</span>
                  } 
                  {status=="error"&&
                    <span style={{float:"left",color:"red"}}>Already subscribed</span>
                  } 
                  {status=="sending"&&
                    <span style={{float:"left"}}>Sending...</span>
                  } 
                  {status=="success"&&
                    <span style={{float:"left",color:"green"}}>Email sent</span>
                  } 
                  <input className="emailInput" onChange={t=>this.setState({email:t.target.value,error:null})} type="email" placeholder="Add your email...." />

                  <div className="characterRow">
                    <input type="checkbox" checked={this.state.accept_policy} onChange={t=>this.setState({accept_policy:!this.state.accept_policy,error:null})} id="c1" name="cb" />
                    <label for="c1">I accept the privacy policy.</label>
                  </div>
                  <input type="submit"
                    className="nextStepBut"
                    value="Get my discount"
                  />
                </form>
                <p className="helpTxt" onClick={() => history.push("/faqs")}>
                  Need help? Check FAQ.
                </p>
              </div>
            </div>
          )}
        />
    );
  }
}
