import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {
  tiposCronograma: any[] = [];
  idTipoCronograma = 1;
  InternacionalizacaoLabel: any;
  constructor() { }

  ngOnInit() {
  }

  parametros_tipoCronograma(event) {
      this.idTipoCronograma = event;
  }

}
