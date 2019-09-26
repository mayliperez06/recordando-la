import { Component, Injectable } from '@angular/core';
//inportamos la libreria de firebase 
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	//definimos la variables con su tipo dato 
	mensaje : string = '';
	listado : any = [];
	recuerdos:any ;
	//agregamos  a nuestro codigo la libreria importada
	constructor(
   		// public afDB: AngularFireDatabase
 	){
		
 	}

 	asustar(){
 		let nombre = prompt("como te llamass");
 		alert("hola"+nombre);
 	}
	

}
