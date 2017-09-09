import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './promoActiva.css';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import { ref } from './constants.js'
import * as firebase from 'firebase'
import GoogleLogin from 'react-google-login';
import FacebookProvider, { Login } from 'react-facebook';
import { Button } from 'react-bootstrap';
import GoArrowRight from 'react-icons/lib/go/arrow-right';
import GoArrowLeft from 'react-icons/lib/go/arrow-left';
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import Facebook from 'react-icons/lib/fa/facebook-official'
import Google from 'react-icons/lib/fa/google'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import ReactDOM from 'react-dom'


import './View.css'

import Scroll from 'react-scroll'

let scroll = Scroll.animateScroll;

class View extends Component {

    render() {
      return(
        <Router>
      <div>
        <Route path="/View/:id" component={Child}/>
      </div>
    </Router>
      )
    }
}

class Especial extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <div>
        <img id='promo-especial' src={this.props.imgEspecial}/>
        </div>
        <div></div>
      </div>
    )
  }
}

var arreglo=[];

const styleImg = {
  width: '100%',
  height: '100%',
  maxHeight: '100%',
  margin: '0',
  padding: '0',
  border: '0',
}

const arrows = {
  height: '100%',
  fontSize: '2em'
};

const socialIcon ={
  fontSize:'1.8em',
  paddingBottom:'0%',
}

const socialButtonFacebook = {
  borderRadius:'0px',
  width:'95%',
  backgroundColor:'#337ab7',
  color: 'white',
  marginBottom:'2%',
  paddingTop: '2%',
  paddingBottom: '2%',
  marginRight: '5%'
}

const socialButtonGoogle = {
  borderRadius:'0px',
  width:'95%',
  backgroundColor:'rgb(209, 72, 54)',
  marginBottom: '2%',
  color:'white',
  fontWeight:'none',
  border:'none'
}

const styleCarousel = {
  height:'100%',
  backgroundColor: 'none'
}

const googleLoginComponent = {
  backgroundColor:'rgb(209, 72, 54)',
  marginBottom: '1.9%',
  fontWeight:'none',
  border:'none',
  fontSize: '130%',
  marginLeft: '0%',
  marginTop: '1.9%',
  color:'white'
 }

 const styleArrowDown = {
  color:'white',
  marginRight: '7%',
 }

class Child extends Component {

  constructor({match}){
    super()
    this.state={
      arrayActual:["https://firebasestorage.googleapis.com/v0/b/bebat-d9540.appspot.com/o/imagenes-administrador%2FIMG_3405.jpg?alt=media&token=0c6b6585-96d6-4c56-a6c8-628483678623"],
      user:`${match.params.id}`,
      count:0,
      diaCount:0,
      mesCount:0,
      anoCount:0,
      logoWeb:' ',
      tituloS:"",
      loggedIn:false,
      especial:"",
      slide:"",
      horaEntrada:"",
      fechaEntrada:"",
      keyProgramado:"",
      estadoffset:null,
    }
    let self=this;
                 var refDB=ref.child("Clientes/");
                 var Keys = [];
                 var promise=new Promise(
                   function(resolve,reject){
                 refDB.on('value', snapshot=> {
                   if(snapshot.exists()){
                   snapshot.forEach(function(child){
                   resolve(
                    Keys = Keys.concat(child.key),
                   )
                 })
               }
               else{
               console.log('hello');
               resolve();
               }
               });

               })//end promise
               promise.then(
                 function(){
                   self.CheckUser(self,Keys);
                 }//fuction de promise.them
               )//promise/them nombre de clientes
  }
  CheckUser(self,Keys){
  for (var i = 0; i < Keys.length; i++) {

if(self.state.user==Keys[i]){
   this.logo();
    var offsetRef = firebase.database().ref(".info/serverTimeOffset");
    var self=this;
    var offset;
    var promise = new Promise(
      function(resolve,reject){
        offsetRef.on("value", snapshot =>{
            resolve(
              offset = snapshot.val(),
            )
        });
      }
    )
    promise.then(
      function(offset){
        self.setState({
          estadoffset:offset,
        })

        self.SlidesProgramados();
        self.ViewsGenerales()

      }
    )//promise.then tiempo
   }//lave de if
   else{

   }

  } // llave del for
}
  SlidesProgramados(){
            let self=this;
            var refDB=ref.child("Clientes/"+`${this.state.user}`+"/Programadas");// +"/Programadas"
            var FechaInicialPromise=[];
            var FechaFinalPromise=[];
            var HoraInicialPromise=[];
            var HoraFinalPromise=[];
            var Keys=[];

            var promise=new Promise(
              function(resolve,reject){
            refDB.on('value', snapshot=> {
              if(snapshot.exists()){
              snapshot.forEach(function(child){
                alert(child.key);
              resolve(
               Keys = Keys.concat(child.key),
               FechaInicialPromise= FechaInicialPromise.concat(child.val().fechaInicialDB),
               FechaFinalPromise= FechaFinalPromise.concat(child.val().fechaFinalDB),
               HoraInicialPromise=HoraInicialPromise.concat(child.val().horaInicialDB),
               HoraFinalPromise=HoraFinalPromise.concat(child.val().horaFinalDB),
              )
            })
          }
          else{
          console.log('hello');
          resolve();
          }
          });

          })//end promise
          promise.then(
            function(){
              self.CheckIfs(Keys,FechaInicialPromise,FechaFinalPromise,HoraInicialPromise,HoraFinalPromise);

            }
          )
  }
  algoritmProga(){
    if(this.state.keyProgramado!=""){
    var recibirArray;
    var titulo;
    var fecha;
    var notas;
    let promoEspecial;
    let self =this;
    var p1=new Promise (
      function(resolve, reject){
    var refDB=ref.child("Clientes/"+`${self.state.user}`+"/Programadas/"+`${self.state.keyProgramado}`);
    refDB.on('value', snapshot=> {
      console.log(snapshot.val());
        resolve(promoEspecial = snapshot.val().especial,
                recibirArray=snapshot.val().historial,
                titulo=snapshot.val().nombreSlide,
                fecha =snapshot.val().fecha,
                notas = snapshot.val().notas,
                )
      });
    });
    p1.then(
      function(){

        document.title=titulo;
      var StringN="";
      var ArrayFg=[];
      for (var i = 0; i < recibirArray.length; i++) {
              if(recibirArray[i] =='~'){
                for (var j = i+1; j < recibirArray.length; j++) {
                  if(recibirArray[j]!='~'){
                    StringN += recibirArray.substring(j,j+1);
                  }
                  else if (recibirArray[j]=='~'&&j!=0||j+1==recibirArray.length) {
                    ArrayFg = ArrayFg.concat({original:StringN});

                    StringN="";
                  }
                }
                if(j==recibirArray.length){
                  ArrayFg = ArrayFg.concat({original:StringN});
                  break;
                }
              }
            }
            self.setState({
              especial: promoEspecial,
              arrayActual:ArrayFg,
            });
      },
    );



  }
  else{

  var recibirArray;
  var titulo;
  let promoEspecial;
  let self =this;

      var refDB=ref.child("Clientes/"+this.state.user+"/SlideActual");
      refDB.on('value', snapshot=> {
        recibirArray=snapshot.val().slideActual;
        titulo=snapshot.val().nombreSlide;
        promoEspecial = snapshot.val().especial;
        this.setState({
          especial: promoEspecial,
          slide: titulo,
        })
        document.title=titulo;
        var StringN="";
        var ArrayFg=[];
        for (var i = 0; i < recibirArray.length; i++) {
          if(recibirArray[i] =='~'){
            for (var j = i+1; j < recibirArray.length; j++) {
              if(recibirArray[j]!='~'){
                StringN += recibirArray.substring(j,j+1);
              }
              else if (recibirArray[j]=='~'&&j!=0||j+1==recibirArray.length) {
                ArrayFg = ArrayFg.concat({original:StringN});
                StringN="";
              }
            }
            if(j==recibirArray.length){
              ArrayFg = ArrayFg.concat({original:StringN});
              break;
            }
          }
        }

        this.setState({
          arrayActual:ArrayFg,
        })
      });
}



  }

  checarHora(key2,HoraA,HoraI,HoraF,MinutoA,MinutoI,MinutoF){
    if(HoraA>HoraI &&HoraA<HoraF ){
      this.setState({
      keyProgramado:key2,
      keyActiva:true,

      });
      this.algoritmProga();
    }
    else if (HoraA==HoraI&&HoraA==HoraF) {
      if(MinutoA>MinutoI&&MinutoA<MinutoF){
        this.setState({
        keyProgramado:key2,
        keyActiva:true,

        });
        this.algoritmProga();
      }
    }
    else if(HoraA==HoraI){
      if(MinutoA>=MinutoI&&HoraA<HoraF){
        this.setState({
        keyProgramado:key2,
        keyActiva:true,

        });
        this.algoritmProga();
      }
    }
    else if (HoraA==HoraF) {
      if(MinutoA<=MinutoF){
        this.setState({
        keyProgramado:key2,
        keyActiva:true,

        });
        this.algoritmProga();
      }

    }


  }


    CheckIfs(key,fechaInicialDB,fechaFinalDB,horaInicialDB,horaFinalDB){
      var estimatedServerTimeMs = new Date().getTime() + this.state.estadoffset;
      var date = new Date(estimatedServerTimeMs);
      let yearSystem = date.getFullYear();
      let monthSystem = date.getMonth()+1;
      let daySystem = date.getDate();
      let hourSystem = date.getHours();
      let key2;

      let minuteSystem =date.getMinutes();
      for (var i = 0; i < key.length; i++) {

        let anoInicialDB = fechaInicialDB[i].split("-")[2];
        let mesInicialDB = fechaInicialDB[i].split("-")[1];
        let diaInicialDB = fechaInicialDB[i].split("-")[0];
        let horaIniciaDB = horaInicialDB[i].split(":")[0];
        let minutosInicialDB = horaInicialDB[i].split(":")[1];
        let anoFinalDB = fechaFinalDB[i].split("-")[2];
        let mesFinalDB = fechaFinalDB[i].split("-")[1];
        let diaFinalDB = fechaFinalDB[i].split("-")[0];
        let horaFinaDB = horaFinalDB[i].split(":")[0];
        let minutoFinalDB = horaFinalDB[i].split(":")[1];


        if(yearSystem>anoInicialDB&&yearSystem<anoFinalDB){
          key2=key[i];
          this.setState({
          keyProgramado:key2,
          keyActiva:true,

          });
          this.algoritmProga();
        }
       else if (yearSystem==anoInicialDB&&yearSystem==anoFinalDB) {

                 if(monthSystem>mesInicialDB&& monthSystem < mesFinalDB){
                   key2=key[i];
                   this.setState({
                   keyProgramado:key2,
                   keyActiva:true,

                   });
                   this.algoritmProga();
                 }

                 else if(monthSystem==mesInicialDB && monthSystem==mesFinalDB){

                     if(daySystem>diaInicialDB&&daySystem<diaFinalDB){
                       key2=key[i];
                       this.setState({
                       keyProgramado:key2,
                       keyActiva:true,

                       });
                       this.algoritmProga();

                     }
                     else if(daySystem==diaInicialDB&&daySystem==diaFinalDB) {
                       this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

                     }
                     else if (daySystem==diaInicialDB) {
                       this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

                     }
                     else if (daySystem==diaFinalDB) {
                       this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

                     }

                 }


               else if (monthSystem==mesInicialDB) {

                   if(daySystem>diaInicialDB&&monthSystem<mesFinalDB){
                     key2=key[i];
                     this.setState({
                     keyProgramado:key2,
                     keyActiva:true,

                     });
                     this.algoritmProga();

                   }
                   else if(daySystem==diaInicialDB&&daySystem==diaFinalDB) {
                     this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

                   }
                   else if (daySystem==diaInicialDB) {
                     this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

                   }
                   else if (daySystem==diaFinalDB) {
                     this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

                   }

                 }

                   else if (monthSystem==mesFinalDB) {


                       if(daySystem>diaInicialDB&&daySystem<diaFinalDB){
                         key2=key[i];
                         this.setState({
                         keyProgramado:key2,
                         keyActiva:true,

                         });
                         this.algoritmProga();
                       }
                       else if(daySystem==diaInicialDB&&daySystem==diaFinalDB) {
                         this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

                       }
                       else if (daySystem==diaInicialDB) {
                         this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

                       }
                       else if (daySystem==diaFinalDB) {
                         this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

                       }
                 }

       }
       else if (yearSystem==anoInicialDB) {
         if(monthSystem>mesInicialDB&&yearSystem<anoFinalDB){
           key2=key[i];
           this.setState({
           keyProgramado:key2,
           keyActiva:true,

           });
           this.algoritmProga();

         }
         else if(monthSystem==mesInicialDB && monthSystem==mesFinalDB){

             if(daySystem>diaInicialDB&&daySystem<diaFinalDB){
               key2=key[i];
               this.setState({
               keyProgramado:key2,
               keyActiva:true,

               });
               this.algoritmProga();

             }
             else if(daySystem==diaInicialDB&&daySystem==diaFinalDB) {
               this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

             }
             else if (daySystem==diaInicialDB) {
               this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

             }
             else if (daySystem==diaFinalDB) {
               this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

             }

         }


       else if (monthSystem==mesInicialDB) {

           if(daySystem>diaInicialDB&&monthSystem<mesFinalDB){
             key2=key[i];
             this.setState({
             keyProgramado:key2,
             keyActiva:true,

             });
             this.algoritmProga();

           }
           else if(daySystem==diaInicialDB&&daySystem==diaFinalDB) {
             this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

           }
           else if (daySystem==diaInicialDB) {
             this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

           }
           else if (daySystem==diaFinalDB) {
             this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

           }

         }

           else if (monthSystem==mesFinalDB) {


               if(daySystem>diaInicialDB&&daySystem<diaFinalDB){
                 key2=key[i];
                 this.setState({
                 keyProgramado:key2,
                 keyActiva:true,

                 });
                 this.algoritmProga();
               }
               else if(daySystem==diaInicialDB&&daySystem==diaFinalDB) {
                 this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

               }
               else if (daySystem==diaInicialDB) {
                 this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

               }
               else if (daySystem==diaFinalDB) {
                 this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

               }
         }

       }
       else if (yearSystem==anoInicialDB) {
         if(monthSystem>mesInicialDB&& monthSystem < mesFinalDB){
           key2=key[i];
           this.setState({
           keyProgramado:key2,
           keyActiva:true,

           });
           this.algoritmProga();
         }

         else if(monthSystem==mesInicialDB && monthSystem==mesFinalDB){

             if(daySystem>diaInicialDB&&daySystem<diaFinalDB){
               key2=key[i];
               this.setState({
               keyProgramado:key2,
               keyActiva:true,

               });
               this.algoritmProga();

             }
             else if(daySystem==diaInicialDB&&daySystem==diaFinalDB) {
               this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

             }
             else if (daySystem==diaInicialDB) {
               this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

             }
             else if (daySystem==diaFinalDB) {
               this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

             }

         }


       else if (monthSystem==mesInicialDB) {

           if(daySystem>diaInicialDB&&monthSystem<mesFinalDB){
             key2=key[i];
             this.setState({
             keyProgramado:key2,
             keyActiva:true,

             });
             this.algoritmProga();

           }
           else if(daySystem==diaInicialDB&&daySystem==diaFinalDB) {
             this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

           }
           else if (daySystem==diaInicialDB) {
             this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

           }
           else if (daySystem==diaFinalDB) {
             this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

           }

         }

           else if (monthSystem==mesFinalDB) {


               if(daySystem>diaInicialDB&&daySystem<diaFinalDB){
                 key2=key[i];
                 this.setState({
                 keyProgramado:key2,
                 keyActiva:true,

                 });
                 this.algoritmProga();
               }
               else if(daySystem==diaInicialDB&&daySystem==diaFinalDB) {
                 this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

               }
               else if (daySystem==diaInicialDB) {
                 this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

               }
               else if (daySystem==diaFinalDB) {
                 this.checarHora(key[i],hourSystem,horaIniciaDB,horaFinaDB,minuteSystem,minutosInicialDB,minutoFinalDB);

               }
         }

       }



     }
     this.algoritmProga();
   }

  ViewsGenerales(){
    var estimatedServerTimeMs = new Date().getTime() + this.state.estadoffset;
    var date=new Date(estimatedServerTimeMs);
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

    let today = mm + '/' + dd + '/' + yy;

    this.setState({
      fechaEntrada:today,
      horaEntrada:hora
    })
    var refViewDiaActual=ref.child("Clientes/"+`${this.state.user}`+"/viewsDiaEnCurso");
    var refContadorHorasActual=ref.child("Clientes/"+`${this.state.user}`+"/viewsDiaEnCurso/horasDeEntrada");
    var refViewHistorial=ref.child("Clientes/"+`${this.state.user}`+"/historialViews"+"/"+yy+"/"+mm);
    //var HistorialCountDiaHoras =ref.child(`${this.state.user}`+"/historialViews/"+yy+"/"+mm);

    var valor=0;
    var dia=0;
    var mes=0;
    var ano=0;

    var snap;
///////se toman valores de la BD o se asignan iniciales en caso de estar vacia
    var promise=new Promise(
    function(resolve,reject){
      refViewDiaActual.on('value',snapshot=>{
      resolve (
        snap=snapshot.val(),
          valor=snap!=null?snapshot.val().visitas:-1,
          dia=(snap!=null? snapshot.val().dia:-1),
          mes=(snap!=null? snapshot.val().mes:-1),
          ano=(snap!=null? snapshot.val().ano:-1)

      );
        });
      })
      promise.then(
        function(){
          var valorNumerico=parseInt(valor+1);
          if(valor==-1){
            refViewDiaActual.set({
              visitas:1,
              dia:date.getDate(),
              mes:date.getMonth()+1,
              ano:date.getFullYear()
            });
          }

      if(dia!=date.getDate()|| (dia!= date.getDate()&& mes!=date.getMonth()+1)){// comprobamos si la fecha de la DB es diferente a la actual? si lo es significa que tiene que hacer push y guardar lo que tiene view
        var HistorialCountDia=refViewHistorial.push();
        HistorialCountDia.set({
          visitasDia:valor,
          dia:dia,
          mes:mes,
          ano:ano
        });
      /*  var refHistorialCountDiaHoras=HistorialCountDiaHoras.push();
        refHistorialCountDiaHoras.set({
          horaEntrada:this.state.horaEntrada
        })*/

        refViewDiaActual.set({//inicializamos view con nuevos valores, vistas en 0 y fecha del nuevo dia
          visitas:1,
          dia:date.getDate(),
          mes:date.getMonth()+1,
          ano:date.getFullYear()
        });

        refContadorHorasActual.push({
          horaEntrada: hora,
        })
      }

      else{ //en caso de que no sea 0 se hace un set normal, con el valor de los states
        refViewDiaActual.update({
          visitas:valorNumerico,//este set es el de las visitas de cada dia
          dia:dia,
          mes:mes,
          ano:ano
        });
        refContadorHorasActual.push({
          horaEntrada: hora
        })
      }



    });

    /////////////////////
  }

isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i))
    );
}


  logo(){
    var userDB = this.state.user;
    var self = this;
    var imageDB;
    var p1 = new Promise (
      function(resolve, reject){
        var refDB=ref.child("Clientes/"+userDB+"/logo");
        refDB.on('value', snapshot=>{
          resolve(imageDB=snapshot.val().logoWeb);
        });
      });
    p1.then(
      function(val){
        self.setState({
          logoWeb:val
        });
      document.head || (document.head = document.getElementsByTagName('head')[0]);
      var link = document.createElement('link'),
      oldLink = document.getElementById('dynamic-favicon');
      link.id = 'dynamic-favicon';
      link.rel = 'shortcut icon';
      link.href = self.state.logoWeb;
        if (oldLink){
          document.head.removeChild(oldLink);
        }
           document.head.appendChild(link);
      }
    );
  }

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  usuariosLogeados(){
    var estimatedServerTimeMs = new Date().getTime() + this.state.estadoffset;
    var date=new Date(estimatedServerTimeMs);
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yy = date.getFullYear();

    if(dd<10) {
      dd = '0'+dd
    }

    if(mm<10) {
      mm = '0'+mm
    }
    var snap;
    var valor;
    var dia;
    var mes;
    var ano;
    var refUsersRegistrados=ref.child("Clientes/"+`${this.state.user}`+"/RegistradosViewsHistorial"+"/"+yy+"/"+mm);
    var refUsersRegistradosDiaActual=ref.child("Clientes/"+`${this.state.user}`+"/RegistradosViewsActual");
    var promise=new Promise(
    function(resolve,reject){
      refUsersRegistradosDiaActual.on('value',snapshot=>{
      resolve (
        snap=snapshot.val(),
          valor=snap!=null?snapshot.val().visitas:-1,
          dia=(snap!=null? snapshot.val().dia:-1),
          mes=(snap!=null? snapshot.val().mes:-1),
          ano=(snap!=null? snapshot.val().ano:-1)

      );
        });
      })
      promise.then(
        function(){
          var valorNumerico=parseInt(valor+1);
          if(valor==-1){
            refUsersRegistradosDiaActual.set({
              visitas:1,
              dia:date.getDate(),
              mes:date.getMonth()+1,
              ano:date.getFullYear()
            });
          }

      if(dia!=date.getDate()|| (dia!= date.getDate()&& mes!=date.getMonth()+1)){// comprobamos si la fecha de la DB es diferente a la actual? si lo es significa que tiene que hacer push y guardar lo que tiene view
        var HistorialCountDia=refUsersRegistrados.push();
        HistorialCountDia.set({
          visitasDia:valor,
          dia:dia,
          mes:mes,
          ano:ano
        });

        refUsersRegistradosDiaActual.set({//inicializamos view con nuevos valores, vistas en 0 y fecha del nuevo dia
          visitas:1,
          dia:date.getDate(),
          mes:date.getMonth()+1,
          ano:date.getFullYear()
        });

      }

      else{ //en caso de que no sea 0 se hace un set normal, con el valor de los states
        refUsersRegistradosDiaActual.update({
          visitas:valorNumerico,//este set es el de las visitas de cada dia
          dia:dia,
          mes:mes,
          ano:ano
        });
      }



    });

    }


  onSuccess(response) {
    this.setState({
      loggedIn: true,
    });
    var sistema=this.isMobile();
    var device=sistema[0];
    var refUsuarios=ref.child("Clientes/"+`${this.state.user}`+"/usuarios");
    var users=refUsuarios.push();
    users.set({

      nombre:response.profileObj.name,
      id:response.profileObj.googleId,
      email:response.profileObj.email,
      promocion:this.state.slide,
      horaEntrada: this.state.horaEntrada,
      fechaEntrada: this.state.fechaEntrada,
      dispositivo:device
    });
    scroll.scrollToBottom();
    this.usuariosLogeados();
  }

  onSelect = (active,direction)=>{
    console.log(`active=${active} && direction=${direction}`);
  }

  handleResponse = (data) => {
    var self=this;
    var sistema=self.isMobile();
    var device=sistema[0];
    console.log(data);
    var h,m;
    var refGenero=ref.child("Clientes/"+`${this.state.user}`+"/usuarios/genero");
    var promise= new Promise(
      function(resolve,reject){
        refGenero.on('value',snapshot=>{
          resolve(
            h=snapshot.exists() ? snapshot.val().hombre:0,
            m=snapshot.exists()? snapshot.val().mujer:0
          )
        });
      }
    )

    promise.then(
      function(){

        var refUsuarios=ref.child("Clientes/"+`${self.state.user}`+"/usuarios");
        var users=refUsuarios.push();
        users.set({
          nombre:data.profile.name,
          genero: data.profile.gender,
          id:data.profile.id,
          email:data.profile.email,
          promocion: self.state.slide,
          horaEntrada: self.state.horaEntrada,
          fechaEntrada: self.state.fechaEntrada,
          dispositivo: device
        });

        if(data.profile.gender=='male'){
          h+=1;
        }
        if(data.profile.gender=='female'){
          m+=1;
        }
        refGenero.set({
          hombre:h,
          mujer:m
        })

        self.setState({
          loggedIn: true,
        })

        scroll.scrollToBottom();
        self.usuariosLogeados();
      }
    )
  }

  handleError = (error) => {
    this.setState({ error });
  }

  render() {
    return(
      <div id='view'>
        <ImageGallery
          style={styleCarousel}
          items={this.state.arrayActual}
          slideInterval={5000}
          showThumbnails={false}
          showBullets={true}
          autoPlay={true}
          showPlayButton={false}
          showFullscreenButton={false}
          onImageLoad={this.handleImageLoad}/>
        <div id='view-buttons'>
          <h2 id='view-title'>
            ¡OBTÉN TU
            <span id='view-title-exclusiva'> CUPÓN</span>
            
            !
          </h2>
          <FaAngleDown size={35} style={styleArrowDown}/>
          <br/>
          <div id='facebok-button'>
            <FacebookProvider appId="253083618527049">
              <Login
                scope="email"
                onResponse={this.handleResponse}
                onError={this.handleError}
              >
                <Button style={socialButtonFacebook} bsStyle='none' bsSize="large" >
                  <p className='social-button-text'><Facebook size={23} style={socialIcon}/> Ingresa con Facebook </p>
                </Button>
              </Login>
            </FacebookProvider>
          </div>
          <div id='google-button' style={socialButtonGoogle}>
            <Google style={socialIcon}/>
            <GoogleLogin
              clientId="96640824865-fo9njpobpb72qq0qjpul344p8mdb82gf.apps.googleusercontent.com"
              buttonText={"Ingresa con Google"}
              onSuccess={this.onSuccess.bind(this)}
              onFailure={this.onSuccess}
              style={googleLoginComponent}
            />
          </div>
        </div>
        <div>
          {this.state.loggedIn ? (
            <Especial imgEspecial={this.state.especial}/>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    )
  }
}


//"auth != null"
export default View;
