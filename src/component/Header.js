import React, {Component} from 'react';
import './Header.css';


class Header extends Component {
    constructor(){
            super()
            this.state = {
                title : "My React App",
                keyword : "user Input Here"
            }      
    }

    inputChange (e) {
        console.log(e.target.value)
        this.setState({keyword : e.target.value})
        this.props.newsSearch(e.target.value)
    }
    render() {
        return(
           <header>
               <div className='logo'>{this.state.title}</div>
                <center>
                  <input type="text" onChange={this.inputChange.bind(this)}/> 
                  <p>{this.state.keyword}</p>                  
                </center>
                
                <hr/>
           </header>             
      
        )
    }
}

export default Header;

// const Header = () => {
//     return (
        
//             <>
//                 <center><h1>Hello Header</h1></center>
//                 <hr/>
//             </>
//     )
// }
