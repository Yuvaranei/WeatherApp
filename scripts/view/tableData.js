import React from 'react'
import {BootstrapTable,TableHeaderColumn} from'react-bootstrap-table'

export default class TableData extends React.Component{
    render(){

        let products = [
            {id : 1, name : 'Item name 1',price : 2300},
            {id : 2, name : 'Item name 2',price : 1500},
        ]
        return(
             <BootstrapTable data={products} >
                <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}