import React, { Component } from 'react'
import Header from '../../../Components/Admin/header'
import firebase from '../../../helper'
import './style.css'
import moment from 'moment'
import { Chart } from 'react-charts'
import Card from '../../../Components/Admin/card'

export default class index extends Component {
    state={}

    componentDidMount = () => {
        const self = this

        firebase.database().ref('orders').on('value', function(snapshot) {
            var orders = snapshot.val()
            if(!orders) return []
            var keys = Object.keys(orders)
            var new_orders = keys.reduce((arr,key)=>{
                orders[key].id=key
                arr.push(orders[key])
                return arr
            },[])
            self.setState({allorders:new_orders})
        });
    }
    search=e=>{
        e.preventDefault()
        var orders = this.state.allorders.filter(x=>{
            return (x.id?.toLowerCase()?.includes(this.state.search) || x.info.firstname?.toLowerCase()?.includes(this.state.search) || x.info.lastname?.toLowerCase()?.includes(this.state.search) || x.info.email?.toLowerCase()?.includes(this.state.search))
        })
        this.setState({search_orders:orders})
    }
    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div class="row">
                    <div class="col-md-4">
                        
                    </div>
                    <div class="col-md-4">
                        <form onSubmit={this.search}>
                            <input type="text"  required onChange={t=>this.setState({search:t.target.value})} placeholder="Search..." style={{padding:"5px 10px",width:"100%",margin:"10px auto" }}/>
                        </form>
                    </div>
                </div>
                {
                    this.state.search_orders?.length > 0 && this.state.search_orders.map((x,i)=>
                        <div key={i} style={{margin:20,display:"inline-block"}}>
                            <Card onClick={(id)=>this.props.history.push('/admin/dashboard/orders/'+id)} id = {x.id} placed_at={moment(moment.utc(new Date(x?.info?.placed_at))).local().fromNow()} changeStatus={this.changeStatus} time={x.info.time} status={x.info.status} pic={x.items[0].cartoonized[0]} email={x.info.email} items={x.items} />
                        </div>
                    
                    
                    )}
                    {
                        !this.state.search_orders?.length && <p style={{textAlign:"center",marginTop:20}}>Search to find order</p>
                    }
                <div style={{width:500,height:500}}>
                    {/* <Chart 
                        data={[{label: 'Series 1',data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]},{label: 'Series 2',data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]}]} 
                        axes={[{ primary: true, type: 'linear', position: 'bottom' },{ type: 'linear', position: 'left' }]} 
                        /> */}
                </div>
            </div>
        )
    }
}
