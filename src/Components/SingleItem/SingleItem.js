import React, { Component} from 'react';
import styles from './singleitem.module.css'

//render single feedback or project
class SingleItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            visibility : true,
        }
    }
    
    deleteItem = () => {
        console.log(this.props.item.id)
        if(window.confirm("You sure you want to delete?")){
            //Actually delete
            var url = 'http://localhost:3002/'+ this.props.type + '/' + this.props.item.id
            fetch(url, {method:'delete'})
            .then(res => {
                res.json()
                this.setState({visibility : false})
            })
            .catch(error => {
                console.log("Error with delete : " + error)
            })
            
            
        }
    }
    

    render(){
            return(
                <tr className = {styles.item} style={this.state.visibility === false ? {textDecoration:"line-through"} : null}>
                    <td>{this.props.item.title || this.props.item.name}</td>
                    <td>{this.props.type==="feedback" && this.props.item.message}</td>
                    <td>
                        <button className={styles.btn} onClick={this.deleteItem.bind(this)}>Delete </button>
                    </td>
                </tr>
            )
    }
}


export default SingleItem;