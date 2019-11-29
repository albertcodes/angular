import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../shared/pokemon';
import { PokemonService } from '../shared/pokemon.service';

@Component({
  moduleId: module.id,
  templateUrl: 'add-pokemon.template.html'
})

export class AddPokemonComponent {
  formPokemon: any = {};
  cardTitle: string = "Add Pokemon";
  errorMessage: string;

  constructor(private _pokemonService: PokemonService,
                     private router: Router) { }

  savePokemon(formValues: any) {
    this._pokemonService.addPokemon(formValues)
          .subscribe(
            res => {
              console.log('Pokemon saved');
              this.router.navigate(['/']);
            },
            error => console.log('error ', error)
            );
  }

}