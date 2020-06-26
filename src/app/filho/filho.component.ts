import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { IMembro } from './../../dados/Interface/Membro';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {

  @Input() familiaRecebida
  @Output() nascimentoBoaz: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

  }

  boazNasceu(): void {
    const Boaz: IMembro = { nome: 'Boaz', sobrenome: 'Pajeú Silva', idade: 0.9 }
    this.nascimentoBoaz.emit(Boaz)
  }

}
