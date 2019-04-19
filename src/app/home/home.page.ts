import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  cervejas;

  ngOnInit(){
    
  }
  ionViewDidEnter (){
    this.cervejas = [];

    const chavesDisponiveis =  sessionStorage.getItem('chaves');
    console.log (chavesDisponiveis)

    const chavesSeparadas = chavesDisponiveis.split(';');

    console.log(chavesSeparadas)

    for (var i=0; i< chavesSeparadas.length; i++){
      const cerveja = sessionStorage.getItem (chavesSeparadas[i]);
      const cervejaObj = JSON.parse(cerveja);
      this.cervejas.push(cervejaObj)
    }

  }
}
