import "./style.css";
import { Modal } from "react-bootstrap";
import React, { Component } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import people from '../../Assets/pricing/people.png'
import headerimg from '../../Assets/pricing/headerim-g.png'
import america_express from '../../Assets/pricing/america-express.jpg'
import pet from '../../Assets/pricing/pet.png'
import discover from '../../Assets/pricing/discover.jpg'
import master from '../../Assets/pricing/master.jpg'
import visa from '../../Assets/pricing/visa.jpg'
import payoneer from '../../Assets/pricing/payoneer.jpg'
import paypal from '../../Assets/pricing/paypal.jpg'
export default class Pricing extends Component {


    render(){
        
        return(
        <div className="gallaryContainer" >
            <Header History={this.props.history} />
            <header className="text-center" style={{paddingTop: 150}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            
                        </div>
                        <div className="col-md-8">
                            <h2 className="heading">Pricing</h2>
                            <hr className="line" />
                            <p className="description">No more boring and impersonal gifts, who is happy about getting socks and boxer shorts? Make yourself and your loved ones happy and give away the coolest and most individual gift. </p>
                            <img src={headerimg} alt="" width="90%" />
                        </div>
                        <div className="col-md-2">
                            
                        </div>
                    </div>
                </div> 
            </header>

            <section className="people">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img src={people} alt="" width="90%" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="heading">People</h2>
                            <hr className="line" style={{display: "inline-block"}} />
                            <p className="description">More people more fun! Our artists draw you and your whole crew. Please contact us if you are more than 10 people. </p>
                            <table>
                                <tr>
                                    <th>First</th>
                                    <td>22.5 USD</td>
                                </tr>
                                <tr>
                                    <th>Second</th>
                                    <td>+22.5 USD</td>
                                </tr>
                                <tr>
                                    <th>Third</th>
                                    <td>+22 USD</td>
                                </tr>
                                <tr>
                                    <th>Fourth</th>
                                    <td>+22 USD</td>
                                </tr>
                                <tr>
                                    <th>Fifth - Tenth</th>
                                    <td>+17.5 USD <br className="mobile" />For each extra person</td>
                                </tr>
                            </table>
                            <div style={{padding: 20}}></div>
                            <div class="col-md-12 text-center-mobile">
                                <span className="cta" onClick={() => (window.location.href = "/orderstep1")} >ORDER NOW</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pet">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="heading">Animal</h2>
                            <hr className="line" style={{display: "inline-block"}} />
                            <p className="description">Of course, we can draw your loved ones. Doesn't matter if it's a dog, horse, bird, snake or a dinosaur. There is nothing we haven't seen before, trust us. </p>
                            <table>
                                <tr>
                                    <th>Each</th>
                                    <td>13.5 USD</td>
                                </tr>
                                
                            </table>
                            
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="mobile" style={{padding: "15px 0px"}}></div>
                            <img src={pet} alt="" width="90%"/>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-dt">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="box text-center">
                                <div className="inner">
                                    <h2>Background</h2>
                                    <hr className="line" />
                                    <p>Choose one of our over 50 predesigned best-selling backgrounds for free or go crazy and get an individual custom background to make your artwork even more personal</p>
                                    <table>
                                        <tr>
                                            <th>Predesigned</th>
                                            <td>for free</td>
                                        </tr>
                                        <tr>
                                            <th>Custom</th>
                                            <td>+20 USD</td>
                                        </tr>
                                    </table>
                                    {/* <!-- <div style="padding: 28px;"></div> --> */}
                                </div>
                            </div>
                            <div className="mobile" style={{padding: "30px 0px"}}></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box text-center">
                                <div className="inner">
                                    <h2>Delivery Time</h2>
                                    <hr className="line" />
                                    <p>Are you late again? No problem with us, you can get the perfect gift even at last minute. Choose "Standard Delivery" OR speed it up and go for "Extra Fast Delivery"</p>
                                    <table>
                                        <tr>
                                            <th>Standard Delivery <br className="mobile" /> (4-7 days)</th>
                                            <td>for free</td>
                                        </tr>
                                        <tr>
                                            <th>Extra Fast Delivery <br className="mobile" />(less than 48h)</th>
                                            <td>+20 USD</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <div style={{padding: "20px 0px"}}></div>
                            <span className="cta" onClick={() => (window.location.href = "/orderstep1")} >ORDER NOW</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="payment">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="heading">Payment Options</h2>
                            <hr className="line" />
                            <p className="description">Safety first! We accept all common payment methods.</p>
                            <br />
                            <img src={america_express} alt=""/>
                            <img src={discover} alt=""/>
                            <img src={master} alt=""/>
                            <img src={visa} alt=""/>
                            <img src={payoneer} alt=""/>
                            <img src={paypal} alt=""/>

                        </div>

                        {/* <!-- <div className="col-md-2">
                            <img src="images/america-express.jpg" alt="">
                            <div className="mobile" style="padding: 10px 0px;"></div>
                        </div>
                        <div className="col-md-2">
                            <img src="images/discover.jpg" alt="">
                            <div className="mobile" style="padding: 10px 0px;"></div>
                        </div>
                        <div className="col-md-2">
                            <img src="images/master.jpg" alt="">
                            <div className="mobile" style="padding: 10px 0px;"></div>
                        </div>
                        <div className="col-md-2">
                            <img src="images/visa.jpg" alt="">
                            <div className="mobile" style="padding: 10px 0px;"></div>
                        </div>
                        <div className="col-md-2">
                            <img src="images/payoneer.jpg" alt="">
                            <div className="mobile" style="padding: 10px 0px;"></div>
                        </div>
                        <div className="col-md-2">
                            <img src="images/paypal.jpg" alt="">
                            <div className="mobile" style="padding: 10px 0px;"></div>
                        </div> --> */}
                    </div>
                </div>
            </section>
            <div className="footer-container">
                <Footer History={this.props.history} />
            </div>

        </div>
        )
    }
}