import "./style.css";
import PNG from "../../Assets/PNG.png";
import { Modal } from "react-bootstrap";
import React, { Component } from "react";
import cross from "../../Assets/cross.png";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Arrow from "../../Assets/purpleArrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PayPalButton as PayPal} from "react-paypal-button-v2";
import firebase from '../../helper'
import {v4} from 'uuid'


export default class Cart extends Component {
  state = {
    time: "",
    index: "",
    firstname: "",
    lastname: "",
    email: "",
    promo: "",
    promo_value:0,
    items: [],
    show: false,
    checkout:false
  };

  componentDidMount = () => {
    let fetch = localStorage.getItem("orders");
    let orders = JSON.parse(fetch);
    firebase.analytics().logEvent('view_cart',{
      currency:"USD",
      value: (orders??[]).reduce((prev,cur)=>prev+cur.total , 0),
      items:orders
    }) 
    let self= this
    if (orders && orders.length) this.setState({ items: orders});
    
  };

  open = (index) => this.setState({ index, show: true });

  close = () => this.setState({ show: false });
  closeConfirmationDialogue = () => this.setState({ checkout: false });

  checkPromo = async(code) => {
    // do something with email

    if(!this.state.email){
      this.setState({formError:"Please enter email first"})
      return
    }
    if(code=="128-ABH-OPW-259"){

      var record = await firebase.database()
                          .ref('orders/').orderByChild('info/email').equalTo(this.state.email).once('value')
      var val = record.val()
      var keys = Object.keys(val??[])
      var found = keys.reduce((arr,obj)=>{
        if(val[obj].info.promo_code==code){
          arr.push(obj)
        }
        return arr
      },[])
      if(found.length==0){
        this.setState({promo_value: (0.15*this.totals()).toFixed(2)})
      }else{

        this.setState({formError:"You have already used the coupon"})
      }
    }else{
      this.setState({formError:"Invalid Coupon"})
    }
  

  };

  totals = () => {
    const { items, time } = this.state;
    let total = 0;
    if (time == "fast") total += 20;
    for (let i = 0; i < items.length; i++) total += +items[i].total;
    return total;
  };

  remove = (index) => this.setState({ index, show: true });

  delete = () => {
    const { items, index } = this.state;
    let array = [...items];
    array.splice(index, 1);
    this.setState({ items: array, show: false });
    localStorage.setItem("orders", JSON.stringify(array));

  };
  onPaid = (details,data)=>{
    const orderNumber = v4().split('-')[0];
    if(details.status=="COMPLETED"){

      firebase.database()
        .ref('orders/'+orderNumber)
        .set({
          info: {
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            promo:this.state.promo_value,
            price_paid:this.totals()-this.state.promo_value,
            time:this.state.time,
            promo_code:this.state.promo,
            status:"pending",
            placed_at : new Date().toString()
          },
          items: this.state.items,
          payment_details:details,
          payment_data:data
        })
      firebase.analytics().logEvent('purchase',{
        coupon:this.state.promo,
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        email:this.state.email,
        currency:"USD",
        value:this.totals()-this.state.promo_value,
        time:this.state.time,
        status:"pending",
        placed_at : new Date().toString(),
        items: this.state.items,
        payment_details:details,
        payment_data:data
      }) 
        
      let fetch = localStorage.removeItem("orders");
      this.setState({items:[],checkout:true,orderNumber:orderNumber,firstname:"",lastname:"",email:"",promo:"",promo_value:0})
    }
  }
  onPaymentError = (obj)=>{

  }
  validateFormAndReturnPrice=()=>{
    const {firstname, lastname, email, promo_value} = this.state
    if(firstname=="" || lastname=="" || email=="" || !(/\S+@\S+\.\S+/.test(email))){
      return 0
    }
    return this.totals()-promo_value
  }
  render() {
    const { history } = this.props;
    const { items, show, checkout, promo_value, firstname, lastname, email, promo } = this.state;
    return (
      <div className="contactContainer">
        <Header History={history} />
        <div className="cartBoxRow">
          <div className="cartBox">
            <div className="cartBoxData">
              <div className="cartBoxDataRow">
                <p className="cartTitle">Shopping Cart</p>
                <p className="cartTitle">{items.length} items</p>
              </div>

              <hr className="cartHr" />

              {!!items.length ? (
                <tr className="cartHeader">
                  <th className="cartTab1">Product Detail</th>
                  <th className="cartTab2">Style</th>
                  <th className="cartTab3">Price Division</th>
                  <th className="cartTab5">Body Type</th>
                  <th className="cartTab4">Background</th>
                  <th className="cartTab6">Total</th>
                </tr>
              ) : (
                <div className="cartEmptyBox">
                  <h1>Shopping Cart is empty</h1>
                </div>
              )}

              <table className="cartTableA">
                {!!items.length &&
                  items.map((e, i) => {
                    return (
                      <tr className="cartBody">
                        <td className="tabBox1">
                          <div className="cartPngbox">
                            <img alt="" src={PNG} className="cartPng" />
                          </div>
                          <div className="personlizedBox">
                            <p className="personlizedOptions">
                              Number of peoples: {e.peoples}
                            </p>
                            <p className="personlizedOptions">
                              Number of pets: {e.pets}
                            </p>
                            <p className="personlizedOptions">
                              Images: {e.cartoonized?.length}
                            </p>
                            <div className="personRow">
                              <img alt="" src={cross} className="crossIco" />
                              <span
                                className="cartRemoveTxt"
                                onClick={() => this.remove(i)}
                              >
                                Remove
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="tabBox2">
                          {e.cartoon == "familyguy" && "Turn me Family"}
                          {e.cartoon == "futurama" && "Turn me Future"}
                          {e.cartoon == "simpsons" && "Turn me Yellow"}
                          {e.cartoon == "park" && "Turn me Cartman"}
                          {e.cartoon == "dragon" && "Turn me Goku"}
                          {e.cartoon == "rick" && "Turn me Ricky"}
                        </td>
                        <td className="tabBox3">
                          {e.peoples == "1" && (
                            <p className="tabBox3Txt">First person - 22,5$</p>
                          )}
                          {e.peoples == "2" && (
                            <>
                              <p className="tabBox3Txt">First person - 22,5$</p>
                              <p className="tabBox3Txt">
                                Second person - 22,5$
                              </p>
                            </>
                          )}
                          {e.peoples == "3" && (
                            <>
                              <p className="tabBox3Txt">First person - 22,5$</p>
                              <p className="tabBox3Txt">
                                Second person - 22,5$
                              </p>
                              <p className="tabBox3Txt">Third Person - 20$</p>
                            </>
                          )}
                          {e.peoples == "4" && (
                            <>
                              <p className="tabBox3Txt">First person - 22,5$</p>
                              <p className="tabBox3Txt">
                                Second person - 22,5$
                              </p>
                              <p className="tabBox3Txt">Third Person - 20$</p>
                              <p className="tabBox3Txt">Fourth - 20$</p>
                            </>
                          )}
                          {e.peoples >= "5" && (
                            <>
                              <p className="tabBox3Txt">First person - 22,5$</p>
                              <p className="tabBox3Txt">
                                Second person - 22,5$
                              </p>
                              <p className="tabBox3Txt">Third Person - 20$</p>
                              <p className="tabBox3Txt">Fourth - 20$</p>
                              <p className="tabBox3Txt">
                                Fifth - tenth person - +17,5$
                              </p>
                              <p
                                className="tabBox3Txt"
                                style={{ color: "gray" }}
                              >
                                x 3
                              </p>
                            </>
                          )}
                          {e.pets > "0" && (
                            <>
                              <p className="tabBox3Txt">Pet - 13,5 $</p>
                              <p
                                className="tabBox3Txt"
                                style={{ color: "gray" }}
                              >
                                x 3
                              </p>
                            </>
                          )}
                        </td>
                        <td className="tabBox5">
                          {e.body === "fullBody" ? "Full Body" : "Hip upwards"}
                        </td>
                        <td className="tabBox4"><img src={e.background} width="100"/></td>
                        <td className="tabBox6">{e.total}$</td>
                      </tr>
                    );
                  })}
              </table>

              <div
                className="backViewRow"
                onClick={() => history.push("/orderstep1")}
              >
                <img alt="" src={Arrow} className="cartPurpleArrow" />
                <p className="cartFootTxt">Continue Shopping</p>
              </div>
            </div>
          </div>
          <div className="cartDonutBox">
            <div className="cartRightBox">
              <h1 className="orderSummary">Order Summary</h1>
              <hr className="orderLine" />
              <div className="cartOrderRow">
                <span className="orderTitle">{items.length} ITEMS</span>
                <span className="orderTitle">{this.totals()}$</span>
              </div>
              <div className="inputsBox">
                <p className="cartLable">First Name</p>
                <input
                  value={firstname}
                  className="cartInput"
                  placeholder="Enter First Name"
                  onChange={(e) => this.setState({ firstname: e.target.value })}
                />
              </div>
              <div className="inputsBox">
                <p className="cartLable">Last Name</p>
                <input
                  value={lastname}
                  className="cartInput"
                  placeholder="Enter Your Last Name"
                  onChange={(e) => this.setState({ lastname: e.target.value })}
                />
              </div>
              <div className="inputsBox">
                <p className="cartLable">Email</p>
                <input
                  value={email}
                  type="email"
                  className="cartInput"
                  placeholder="Enter Your Email"
                  onChange={(e) => this.setState({ email: e.target.value,promo:"",promo_value:0 })}
                />
              </div>

              <div className="inputsBox">
                <p className="cartLable">Delivery Time</p>
                <select
                  className="cartInput"
                  onChange={(e) => this.setState({ time: e.target.value })}
                >
                  <option value="standard">
                    Standard Delivery = 4 to 7 days
                  </option>
                  <option value="fast">
                    Extra Fast Delivery = less 48h (+20$)
                  </option>
                </select>
              </div>
              <div className="inputsBox">
                <p className="cartLable">Promo Code</p>
                <input
                  value={promo}
                  className="cartInput"
                  placeholder="Enter promo code"
                  onChange={(e) => this.setState({ promo: e.target.value })}
                />
                <FontAwesomeIcon
                  icon="paper-plane"
                  className="sendPromo"
                  onClick={()=>this.checkPromo(this.state.promo)}
                />
              </div>
              <hr className="orderLine" />
              <div className="cartOrderRow">
                <span className="orderTitle">Total Cost</span>
                <span className="orderTitle">{this.totals() -promo_value}$</span>
              </div>
              <div style={{padding:20,marginBottom:50,borderRadius:5,backgroundColor:"#eee"}}>
                <PayPal
                  amount={this.validateFormAndReturnPrice()}
                  onError={()=>this.setState({formError:this.state.items.length>0?"Please enter your personal details": "There are no items in the cart"})}
                  onSuccess={this.onPaid}
                  options={{
                    clientId: "ASaTxO95Pv-_ND4zgJxiowOzfs_eehLL-LGC2y4kzKeXoxbY2V0SloquZlS8UqaiLeSH2AdsFaLLEkgY"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={this.close} className="ModelContainer">
          <Modal.Body className="CancelModelBody">
            <h1>Are you sure?</h1>
            <p>
              Are you sure you want to permanently delete the product?
              <br />
              If you’d wish to add again the product, you need to go throught
              <br />
              the customization process again.
            </p>
            <hr />
            <div className="modelFott">
              <button className="modelBut" onClick={this.close}>
                KEEP
              </button>
              <button className="modelBut2" onClick={this.delete}>
                YES, DELETE
              </button>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={checkout} onHide={this.closeConfirmationDialogue} className="ModelContainer">
          <Modal.Body className="CancelModelBody">
            <h1>Order Confirmation</h1>
            <p>
              Your order has been recieved we will contact you shortly<br/>
              Your order number is {this.state.orderNumber} 
            </p>
            <hr />
            <div className="modelFott">
              <button className="modelBut" onClick={this.closeConfirmationDialogue}>
                CLOSE
              </button>
            
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.formError} onHide={()=>this.setState({formError:false})} className="ModelContainer">
          <Modal.Body className="CancelModelBody">
            <h1>Error</h1>
            <p>
              {this.state.formError}
            </p>
            <hr />
            <div className="modelFott">
              <button className="modelBut" onClick={()=>this.setState({formError:false})}>
                CLOSE
              </button>
            
            </div>
          </Modal.Body>
        </Modal>
        <Footer History={history} />
      </div>
    );
  }
}
