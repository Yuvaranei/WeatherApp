import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/main.scss'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {FormControl,FormGroup,InputGroup,Glyphicon,Button} from 'react-bootstrap'
import CollectWeatherData from './view/collectweather_data'
import TableData from './view/tableData'


class Main extends React.Component{
    
    handleChange(){
        alert("handleChange is called")
    }

    render(){
        return(
            <div>
                <div className="searchText">                
                    <InputGroup>
                        <FormControl type="text" value={"Sample text"} placeholder="Enter text" onChange={this.handleChange.bind(this)}/>
                        <InputGroup.Button>
                            <Button><Glyphicon glyph="search" /></Button>
                        </InputGroup.Button>
                    </InputGroup>                                                                      
                </div>
                <div>
                    <div className="chartContent col-sm-5 col-md-5 col-lg-5">
                        <CollectWeatherData/>
                    </div>
                    <div className="col-sm-5 col-md-5 col-lg-5">
                        <TableData/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Main/>,document.getElementById('container'))
//ReactDOM.render(<Main/>,document.querySelectorAll('test'))