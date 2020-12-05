import './style.css'
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import CircularProgress  from '@material-ui/core/CircularProgress'
export default class card extends Component {
    state={loading:false}
    render() {
        return (
            <Card className="root" >
                <CardActionArea>
                    <CardMedia
                        className="media"
                        image={this.props.pic}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.items.length} Item{this.props.items.length>1&&"s"}  {this.props.time.length>0&&(" - "+this.props.time)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        email:  {this.props.email}<br/>
                        ordered at:  {this.props.placed_at}
                    </Typography>
                    </CardContent> 
                </CardActionArea>
                <CardActions>
                    
                    <Button onClick={()=>this.props.onClick(this.props.id)} size="small" color="primary">View</Button>
                    {this.state.loading&&<div style={{width:108}}><CircularProgress style={{float:"right"}}/></div>}
                    {!this.state.loading&&
                        <FormControl>

                        <Select
                                native
                                value={this.props.status}
                                onChange={e=>{
                                    this.setState({loading:true})
                                    this.props.changeStatus({id:this.props.id, val: e.target.value})
                                    this.setState({loading:false})
                                }}
                                
                            >
                                <option value={"pending"}>New</option>
                                <option value={"in_progress"}>In Progress</option>
                                <option value={"complete"}>Complete</option>
                                <option value={"revision"}>Revision</option>
                            </Select>
                            <FormHelperText style={{fontSize:10}}>Change Status</FormHelperText>
                        </FormControl>
                    }
                </CardActions>
            </Card>
        )
    }
}
