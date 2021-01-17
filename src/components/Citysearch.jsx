import React from 'react';
import Zipcode from './Zipcode';
import axios from 'axios';

class Citysearch extends React.Component {
    constructor (props) {
        super(props); 
        this.state  = { cityname: '', isClick: false,
            data: []
         }
         this.baseState=this.state.cityname;
         this.handleChange =this.handleChange.bind(this); 
         this.search=this.search.bind(this);
    
    }    

    handleChange(e) {
        e.preventDefault();
        this.setState({
            cityname: e.target.value });     
    }

    search() {
        this.setState({
            isClick: true })
    }

    fetchZipcode() {

        const query =this.state.cityname.toString().toUpperCase();
        let s= 'http://ctp-zip-api.herokuapp.com/city/'+query;
        axios.get(s)    
        .then(results => {
            console.log(results);
            this.setState({
            data: results.data
            });
        })  
        .catch(err => {
            console.log(err);
        });
    }

    componentDidMount () {
    
    }

    componentDidUpdate() {
        if (this.state.isClick) {
            this.fetchZipcode();
            this.setState({isClick: false});
            this.setState({cityname: this.baseState});
        }    
    }

    render () {
        return (
            <div>
                <h5> Enter a City Name </h5>
                    <div>
                        <input type ='text' required 
                            name ="cityname" 
                            onChange ={this.handleChange} 
                            value = {this.state.cityname} 
                            placeholder= "City Name"/> 
                            <br />

                         <p><button onClick= {this.search}>Search </button> <br /> </p>
                         <p> Zipcodes: </p> 

                    </div>
  
                    <div>              
                        {this.state.data.map((item, index)=> (
                           <Zipcode 
                            key ={index}
                            city ={item}
                            /> 
                        ))}
                    </div>    
            </div>        
    )}                                             
};
export default Citysearch;