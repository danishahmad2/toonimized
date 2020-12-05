import "./style.css";
import React, { Component } from 'react'
import firebase from '../../../helper'
import Header from '../../../Components/Admin/header'
import Card from '../../../Components/Admin/card'
import moment from 'moment'
export default class App extends Component {
    state={active:this.props.match.params.active,allorders:{}}
    componentDidMount = async()=> {
        const self = this

        firebase.database().ref('orders').on('value', function(snapshot) {
            self.setState({allorders:snapshot.val()})
        });
    }
    componentWillReceiveProps=(props)=>{
        this.setState({active: props.match.params.active})
    }
    getOrderArr=(str)=>{
        var orders = this.state.allorders
        if(!orders) return []
        var keys = Object.keys(orders)
        var new_orders = keys.reduce((arr,key)=>{
            if(orders[key]?.info?.status==str){
                orders[key].id=key
                arr.push(orders[key])
            }
            return arr
        },[])
        return new_orders
    } 
    changeStatus = async(obj)=>{
        var result = await firebase.database().ref('orders/'+obj.id+'/info/status').set(obj.val);
    }
    render() {
        var orders = this.getOrderArr(this.state.active)
        return (
            <>
                <Header {...this.props}/> 
                {
                    orders.length > 0 && orders.map((x,i)=>
                        <div key={i} style={{margin:20,display:"inline-block"}}>
                            <Card onClick={(id)=>this.props.history.push('/admin/dashboard/orders/'+id)} id = {x.id} placed_at={moment(moment.utc(new Date(x?.info?.placed_at))).local().fromNow()} changeStatus={this.changeStatus} time={x.info.time} status={x.info.status} pic={x.items[0].cartoonized[0]} email={x.info.email} items={x.items} />
                        </div>

                )}
            </>
        )
    }
}