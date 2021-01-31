import React ,{Component} from 'react';

class AddCountry extends Component{
    state={
        name:null,
        age:null,
        belt:null
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addCountry(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' onChange={this.handleChange}/>
                    <label htmlFor='Age'>Age:</label>
                    <input type='text' id='Age' onChange={this.handleChange}/>
                    <label htmlFor='belt'>belt:</label>
                    <input type='text' id='belt' onChange={this.handleChange}/>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default AddCountry;