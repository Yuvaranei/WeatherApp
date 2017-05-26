import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/main.scss'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {FormControl,FormGroup,InputGroup,Glyphicon,Button} from 'react-bootstrap'
import CollectWeatherData from './view/collectweather_data'
//import TableData from './view/tableData'


class Main extends React.Component{
    
    handleChange(){
        alert("handleChange is called")
    }

    render(){
        return(
            <div>
                <div>
                    <div className="chartContent">
                        <CollectWeatherData/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Main/>,document.getElementById('container'))
//ReactDOM.render(<Main/>,document.querySelectorAll('test'))