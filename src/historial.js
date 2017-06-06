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
        <TableRowColumn>{this.props.nombre}</TableRowColumn>
        <TableRowColumn>{this.props.fecha}</TableRowColumn>
        <TableRowColumn>{this.props.obs}</TableRowColumn>

      </TableRow>
    );
  }
}

class HistorialPromos extends Component{
  constructor(){
    super()
    this.state = {
      selected: [1],
      arregloHistorial:["hola"],

    };
  }
    componentWillMount(){
      var user = firebase.auth().currentUser;
      var remplazo=`${user.email}`.split('.').join('-');
      var refHistorial=ref.child(remplazo+"/Historial");
      refHistorial.on('child_added',data =>  {
        let dato=data.val();
        let listaHitorial={ nombre: dato.nombreSlide, fecha: dato.fecha, notas:dato.notas};
    this.setState({
        arregloHistorial:[listaHitorial].concat(this.state.arregloHistorial)
    });

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
               <TableHeaderColumn>Notas</TableHeaderColumn>
             </TableRow>
           </TableHeader>
           <TableBody>
           {this.state.arregloHistorial.map(lista=>{
             return (<TablaElemento nombre={lista.nombre} fecha={lista.fecha} obs={lista.notas}/>);})
           }
           </TableBody>
         </Table>
         </MuiThemeProvider>

    );
  }
}
export default HistorialPromos;
