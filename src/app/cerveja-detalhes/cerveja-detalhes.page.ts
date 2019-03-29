import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cerveja-detalhes',
  templateUrl: './cerveja-detalhes.page.html',
  styleUrls: ['./cerveja-detalhes.page.scss'],
})
export class CervejaDetalhesPage implements OnInit {
  
  nome;
  detalhes;

  constructor(private route:ActivatedRoute) {
    console.log("EXECUTOU O CONSTRUTOR")
   }

  ngOnInit() {
    let idcerveja = this.route.snapshot.params.id;
    if(idcerveja === '50') {
      this.nome ='Proibida'
      this.detalhes ='Tão gostosa que é Proibida, A melhor cerveja do ceará'
    } else if (idcerveja === '70'){
      this.nome ='Skol'
      this.detalhes ='A Puro Malte que desce rendondo'
    }
  }



}
