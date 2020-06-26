import { Familia } from './../../dados/familia';
import { IMembro } from './../../dados/Interface/Membro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

  familia = Familia

  constructor() { }

  ngOnInit(): void {
    console.log('Familia inicial: ', this.familia);

  }

  partoBoaz(Boaz: IMembro): void {
    this.familia.push(Boaz)
    console.log('O Boaz nasceu!!!!! ', this.familia);
  }



}
