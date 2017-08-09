import React, { Component } from 'react';
import MetricsGraphics from 'react-metrics-graphics';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './analitics.css';
import {Line} from 'react-chartjs-2';
import { Chart } from 'react-google-charts';
import * as firebase from 'firebase';
import { ref } from './constants.js';
var ban=0;
var ban2=0;

const devicesGraph={
  padding:'0',
  margin:'0',
  fontSize:'50px'

}

function getUltimoDiaMes(mes, ano){
  if( (mes == 1) || (mes == 3) || (mes == 5) || (mes == 7) || (mes == 8) || (mes == 10) || (mes == 12) )
      return 31;
  else if( (mes == 4) || (mes == 6) || (mes == 9) || (mes == 11) )
      return 30;
  else if( mes == 2 )
  {

      if( (ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0) )
          return 29;
      else
          return 28;
  }
}
function datosAnio(viewsMes){
  var views=viewsMes;
  console.log(views);
const dataano = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'Mayo', 'Jun', 'Jul','Ago','Sep','Oct','Nov','Dic'],
  datasets: [
    {
      label: 'Usuarios fisicos',
      fill: false,
      lineTension: 0.2,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 4,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,

      data: views
    }
  ]
};
return dataano;
}
function label(){
    var date1 = new Date();
  var labelsDias=[];
  for(var i=1;i<=getUltimoDiaMes(date1.getMonth()+1);i++){

    labelsDias[i]=i.toString();
  }
  return labelsDias
}
function datosPorDia(dia, array,arrayDias){
  var datos=array;
  var arrayDias=arrayDias;
  var aux;
  var ban=true;
  var datosFinales=[];
  for(var i=0;i<datos.length;i++){
    if(i==0){
      aux=arrayDias[i];
      datosFinales.push(datos[i]);
    }
    else{
      var resta=arrayDias[i]-aux;
      if(resta!=1){
        var valActual=datos[i];
        for(var j=1;j<resta;j++){
          datosFinales.push(0);
        }
      }
      datosFinales.push(datos[i]);
      aux=arrayDias[i];
    }

  }

  for(var i=1;i<arrayDias[0];i++){ //llenamos array con 0 al inicio para equilibrar dias no metricados
      datosFinales.unshift(0);
  }

const datames = {

  labels:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30',''],
  datasets: [
    {
      label: 'Usuarios fisicos',
      fill: false,
      lineTension: 0.2,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,

      data:datosFinales
    }
  ]
};
return datames;
}
const datasemana = {
  labels: ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'],
  datasets: [
    {
      label: 'Usuarios fisicos',
      fill: false,
      lineTension: 0.2,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,

      data: [12, 10, 25, 31, 56, 55,90]
    }
  ]
};

class dist extends Component{
  constructor(){
    super()
    ban=0;
    this.state={
      hombres:0,
      mujeres:0,
      android:0,
      iphone:0,
      ipad:0,
      ipod:0
    }

  }
  componentWillMount(){
    var user = firebase.auth().currentUser;
    var self=this;
      var remplazo=`${user.email}`.split('.').join('-');
      var refDB=ref.child(remplazo+"/usuarios/genero");
      var hombres;
      var mujeres;
      var promise= new Promise(
        function(resolve,reject){
      refDB.on("value", snapshot=>{
            resolve(
              hombres=snapshot.val().hombre,
              mujeres=snapshot.val().mujer
            )


      });
    }
    )
    promise.then(
      function(){
        self.setState({
          hombres:hombres,
          mujeres:mujeres
        });
        self.obtenerDispositivos();
      }
    )
  }

  obtenerDispositivos(){
    var user = firebase.auth().currentUser;
    var remplazo=`${user.email}`.split('.').join('-');
    var refDBUsers=ref.child(remplazo+"/usuarios");
    var android=0;
    var iphone=0;
    var ipod=0;
    var ipad=0;
    var devices=[];
    var self=this;
    var promise = new Promise(
    function(resolve, reject){
      refDBUsers.on('value',function(snapshot){
        snapshot.forEach(function(child){
          resolve( devices.push(child.val().dispositivo))
        })
      })
    })

    promise.then(
      function(){
        for(var i=0;i<devices.length;i++){
          if(devices[i]=="Android"){
            android++;
          }
          else if(devices[i]=="iPhone"){
            iphone++;
          }
          else if(devices[i]=="iPad"){
            ipad++;
          }
          else if(devices[i]=="iPod"){
            ipod++;
          }
        }

        self.setState({
          android:android,
          iphone:iphone,
          ipod:ipod,
          ipad:ipad
        });
      }
    )
  }
    render(){
        return(
          <div id="analitics">
            <div id="grafica">
               <Route exact path="/AppWeb/analitics" component={datames1}/>
               <Route path="/AppWeb/analitics/año" component={dataano1}/>
               <Route path="/AppWeb/analitics/mes" component={datames1}/>
               <Route path="/AppWeb/analitics/semana" component={datasemana1}/>
            </div>
              <h2>Filtrar por: </h2>
               <ul id="analitics-time">
                 <li><Link to="/AppWeb/analitics/año" className="time">Año</Link></li>
                 <li><Link to="/AppWeb/analitics/mes" className="time">Mes</Link></li>
                 <li><Link to="/AppWeb/analitics/semana" className="time">Semana</Link></li>
               </ul>
          <div className={'my-pretty-chart-container'}>
          <Chart
          chartType="PieChart"
          data={[["Task","Hours per Day"],["Hombres",this.state.hombres],["Mujeres",this.state.mujeres]]}
          options={{"title":"Sexo","pieHole":0.4,"is3D":false}}
          graph_id="DonutChart"
          width="100%"

          />
      </div>
      <div className={'my-pretty-chart-container2'}>
        <Chart
        style={devicesGraph}
        chartType="PieChart"
        data={[["Task","Hours per Day"],["Android",this.state.android],["iPhone",this.state.iphone],["iPod",this.state.ipod],["Ipad",this.state.ipad]]}
        options={{"title":"Dispositivos utilizados","pieHole":0.9,"is3D":false}}
        graph_id="DonutChart2"
        width="100%"
        />
      </div>
        </div>

        )
    }
}


class dataano1 extends Component{
  constructor(){
    super()
    this.state={
      valores:[]
    }

  }
  componentWillMount(){
    var date = new Date();
    var h = this.addZero(date.getHours());
    var m = this.addZero(date.getMinutes());
    var s = this.addZero(date.getSeconds());
    var hora = h + ":" + m + ":" + s;

    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yy = date.getFullYear();

    if(dd<10) {
      dd = '0'+dd
    }

    if(mm<10) {
      mm = '0'+mm
    }

    let self=this;
    var user = firebase.auth().currentUser;
    var remplazo=`${user.email}`.split('.').join('-');
    var refDB;
    var arrayMeses=[];
    var sumaViews=0;
    var mes;
    var bandera=true;
    var arrayViewMes=[];
    var promise= new Promise(
      function(resolve,reject){

          refDB =ref.child(remplazo+"/historialViews"+"/"+yy);
          refDB.on('value', snapshot=>{
            snapshot.forEach(function(snapChild){
            //  sumaViews=0;
              snapChild.forEach(function(snapBaby){
                if(bandera){
                  mes=snapBaby.val().mes;
                  bandera=false;
                }
                sumaViews=sumaViews+snapBaby.val().visitasDia;

              })
                resolve(arrayMeses.push(sumaViews));
              })
            })

      }
    )
    promise.then(
      function(){
        for(var i=1;i<mes;i++){ //llenamos array con 0 al inicio para equilibrar dias no metricados
            arrayMeses.unshift(0);
        }
          self.setState({
          valores:arrayMeses
        })
      }
    )

  }

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
 render() {
   return (
     <div>
       <h2>Visitas</h2>
       <Line data={datosAnio(this.state.valores)} width={500}
 height={300} />
</div>
   );
 }
}
class datames1 extends Component{
  constructor(){
    super()

    this.state={
      dias:[],
      valores:[]
    }
    ban=0;

  }

componentWillMount(){
  var date = new Date();
  var h = this.addZero(date.getHours());
  var m = this.addZero(date.getMinutes());
  var s = this.addZero(date.getSeconds());
  var hora = h + ":" + m + ":" + s;

  var dd = date.getDate();
  var mm = date.getMonth()+1;
  var yy = date.getFullYear();

  if(dd<10) {
    dd = '0'+dd
  }

  if(mm<10) {
    mm = '0'+mm
  }

  let self=this;
  var user = firebase.auth().currentUser;
  var inicio=0;
  var bandera=false;
  var remplazo=`${user.email}`.split('.').join('-');
  var refDB=ref.child(remplazo+"/historialViews"+"/"+yy+"/"+mm);
  var refDBTiempoReal=ref.child(remplazo+"/viewsDiaEnCurso");
  var arrayValores=[];
  var arrayDias=[];
  var diaInicial;
  var promise=new Promise(
    function(resolve,reject){
  refDB.on('value', snapshot=> {
    snapshot.forEach(function(child){
    if(!bandera){
      inicio=child.val().dia;
      bandera=true;
    }
    arrayValores=arrayValores.concat(child.val().visitasDia);
    arrayDias=arrayDias.concat(child.val().dia);
  })
  });
  refDBTiempoReal.on('value',datos=>{
    var valu=datos.val().visitas;
    var valDia=datos.val().dia;

    resolve(
      arrayValores=arrayValores.concat(valu),
      arrayDias=arrayDias.concat(valDia),
      diaInicial=inicio
  );
  });
})//end promise
promise.then(
  function(){
    self.setState({
      valores:arrayValores,
      dias:arrayDias,
      diaInicio:diaInicial
    })
  }
)
}

addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
 render() {
   return (
     <div>
       <h2>Visitas</h2>
       <Line data={datosPorDia(this.state.diaInicio,this.state.valores, this.state.dias)} width={500}
 height={300} />
</div>
   );
 }
}
class datasemana1 extends Component{

 render() {
   return (
     <div>
       <h2>Visitas</h2>
       <Line data={datasemana} width={500}
 height={300} />
</div>
   );
 }
}
export default dist;
