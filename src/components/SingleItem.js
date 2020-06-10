import React, { Component} from 'react';

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
        if(this.state.visibility){
            return(
                <tr className = "item">
                    <td>{(this.state.visibility && this.props.item.title) || (this.state.visibility && this.props.item.name)}</td>
                    <td>{this.props.type==="feedback" && this.props.item.message}</td>
                    <td>
                        <button onClick={this.deleteItem.bind(this)}>Delete </button>
                    </td>
                </tr>
            )
        }else{
            return(
                //Do something - either a line through?
                <tr>
                    <td>Done</td>
                </tr>
            )
        }
    }
}


export default SingleItem;