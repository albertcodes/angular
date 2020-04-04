import { Component, Input, ViewChild } from '@angular/core';
import { Pokemon } from '../shared/pokemon';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'pk-details',
  templateUrl: 'pokemon-modal.template.html'
})

export class PokemonModalComponent {
  @ViewChild('childModal') public childModal:ModalDirective;
  @Input() pokeDetails: Pokemon;

  show() {
    this.childModal.show();
  }

  hide() {
    this.childModal.hide();
  }

}

// https://plnkr.co/edit/t4JwdewzXXBrnQRV6QMe?p=preview