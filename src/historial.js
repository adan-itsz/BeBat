import React, { Component } from 'react';
import "./App.css"
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase'
import { ref } from './constants.js'


 class TablaElemento extends Component {


  render() {

    return (
      <TableRow >
        <TableRowColumn>{this.props.fecha}</TableRowColumn>
        <TableRowColumn>{this.props.fecha}</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
    );
  }
}

class HistorialPromos extends Component{
  constructor(){
    super()
    this.state = {
      selected: [1],
      arregloHistorial:[],
      fecha:''
    };
  }
    componentWillMount(){
      var user = firebase.auth().currentUser;
      var remplazo=`${user.email}`.split('.').join('-');
      var refHistorial=ref.child(remplazo+"/Historial");
      refHistorial.on('value',data =>  {

        this.setState({
        fecha:data.val().fecha
        })
      });
    }


  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };
  render(){

    return(
      <MuiThemeProvider>
            <Table onRowSelection={this.handleRowSelection}>
           <TableHeader>
             <TableRow>
               <TableHeaderColumn>Nombre </TableHeaderColumn>
               <TableHeaderColumn>Fecha</TableHeaderColumn>
               <TableHeaderColumn>Status</TableHeaderColumn>
             </TableRow>
           </TableHeader>
           <TableBody>
           {this.state.arregloHistorial.map(lista=>{
             return (<TablaElemento nombre={lista.fecha} fecha={lista.fecha}/>);})
           }
           </TableBody>
         </Table>
         </MuiThemeProvider>

    );
  }
}
export default HistorialPromos;
