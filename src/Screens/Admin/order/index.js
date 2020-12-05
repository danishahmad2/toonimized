import React, { Component } from 'react'
import Header from '../../../Components/Admin/header'
import firebase from '../../../helper'
import './style.css'
import moment from 'moment'
import jsPDF from 'jspdf/dist/jspdf.es';

export default class index extends Component {
    state={}

    componentDidMount = () => {
        const self = this
        firebase.database().ref('orders/'+this.props.match.params.id).on('value', function(snapshot) {
            self.setState({order:snapshot.val()})
        });

    }
    pdf=()=>{
        
        var imgs = document.getElementsByTagName("img")
        for(var i =0;i<imgs.length;i++){
            imgs[i].src = this.getBase64Image(imgs[i])
        }
        var pdf= new jsPDF("p", "pt", [1110,1600])
        pdf.html(window.document.getElementById('order_pdf'), {
            callback:doc=>{
                doc.save(this.props.match.params.id+".pdf")
            }
        })
    }
    getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        var ctx = canvas.getContext("2d");
    
        ctx.drawImage(img, 0, 0);
    
        var dataURL = canvas.toDataURL("image/jpeg");
        return dataURL;
    
    }
    render() {
        return (
            <div>
                <Header {...this.props}/>
                {!this.state.order&&<p style={{textAlign:"center",marginTop:20}}>No Order found with order number {this.props.match.params.id}</p>}
                {this.state.order&&
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 style={{textAlign: "center"}}>Order information <a href="#" style={{fontSize:14}} onClick={this.pdf}>Download</a></h2>
                                <div class="row">
                                    <div class="col-3"></div>
                                    <div class="col-6" style={{textAlign: "right"}}>
                                        <div class="row" >
                                            <div class="col-12">
                                                <div class="row" > 
                                                    <div class="col-4">
                                                        <strong>First Name:</strong>
                                                    </div>
                                                    <div class="col-6">
                                                        {this.state.order.info.firstname}
                                                    </div>
                                                </div>
                                                <div class="row" > 
                                                    <div class="col-4">
                                                        <strong>Last Name:</strong>
                                                    </div>
                                                    <div class="col-6">
                                                        {this.state.order.info.lastname}
                                                    </div>
                                                </div>
                                                <div class="row" > 
                                                    <div class="col-4">
                                                        <strong>Email:</strong>
                                                    </div>
                                                    <div class="col-6">
                                                        {this.state.order.info.email}
                                                    </div>
                                                </div>
                                                <div class="row" > 
                                                    <div class="col-4">
                                                        <strong>Delivery Time:</strong>
                                                    </div>
                                                    <div class="col-6">
                                                        {this.state.order.info.time||"Regular"}
                                                    </div>
                                                </div>
                                                <div class="row" > 
                                                    <div class="col-4">
                                                        <strong>Ordered at:</strong>
                                                    </div>
                                                    <div class="col-6">
                                                        {moment(moment.utc(new Date(this.state.order.info.placed_at))).local().format("DD MMM YY, LT")} ({moment(moment.utc(new Date(this.state.order.info.placed_at))).local().fromNow()})
                                                    </div>
                                                </div>
                                                <div class="row" > 
                                                    <div class="col-4">
                                                        <strong>Discounted:</strong>
                                                    </div>
                                                    <div class="col-6">
                                                        {this.state.order.info.promo||0}$
                                                    </div>
                                                </div>
                                                <div class="row" > 
                                                    <div class="col-4">
                                                        <strong>Total Paid:</strong>
                                                    </div>
                                                    <div class="col-6">
                                                        <strong>
                                                            {this.state.order.info.price_paid||0}$
                                                        </strong>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div id="order_pdf" className="container-fluid" >
                            {this.state.order.items.map(x=>
                            <div className="row" className="order-item">
                                <div className="col-12">
                                    <h2 style={{textAlign: "center"}}>Item information</h2>
                                    <h3 style={{textAlign: "center",fontFamily:"roboto"}}>Order no: {this.props.match.params.id}</h3>
                                    <div class="row">
                                        <div class="col-4"></div>
                                        <div class="col-4" style={{textAlign: "right",fontSize:14,padding:10}}>
                                            <div class="row" >
                                                <div class="col-12">
                                                    <div class="row" > 
                                                        <div class="col-4">
                                                            <strong>Body:</strong>
                                                        </div>
                                                        <div class="col-6">
                                                            {x.body}
                                                        </div>
                                                    </div>
                                                    <div class="row" > 
                                                        <div class="col-4">
                                                            <strong>Cartoon:</strong>
                                                        </div>
                                                        <div class="col-6">
                                                            {x.cartoon}
                                                        </div>
                                                    </div>
                                                    <div class="row" > 
                                                        <div class="col-4">
                                                            <strong>#People:</strong>
                                                        </div>
                                                        <div class="col-6">
                                                            {x.peoples}
                                                        </div>
                                                    </div>
                                                    <div class="row" > 
                                                        <div class="col-4">
                                                            <strong>#Pets:</strong>
                                                        </div>
                                                        <div class="col-6">
                                                            {x.pets}
                                                        </div>
                                                    </div>
                                                    <div class="row" > 
                                                        <div class="col-4">
                                                            <strong>Type:</strong>
                                                        </div>
                                                        <div class="col-6">
                                                            {JSON.stringify(x.select)}
                                                        </div>
                                                    </div>
                                                    <div class="row" > 
                                                        <div class="col-4">
                                                            <strong>Notes:</strong>
                                                        </div>
                                                        <div class="col-6">
                                                            {x.notes}
                                                        </div>
                                                    </div>
                                                    

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{textAlign: "center"}}>

                                        <h2 >Background</h2>
                                        <a href={x.background} style={{fontFamily:"roboto",fontSize:10}}>{x.background}</a><br/>
                                        <img id="img" crossOrigin="" src={x.background} width="500px" />
                                    </div>
                                    <div style={{textAlign: "center"}}>

                                        <h2 >Pictures</h2>
                                        {x.cartoonized.map(pic=>
                                            <div>
                                                <a href={pic} style={{fontFamily:"roboto",fontSize:10}}>{pic}</a><br/>
                                                <img id="img" crossOrigin="" src={pic} width="500px"/ >
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>

                    </div>
                }
            </div>
        )
    }
}
