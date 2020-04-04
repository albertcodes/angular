"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var pokemon_service_1 = require("../shared/pokemon.service");
var pokemon_modal_component_1 = require("./pokemon-modal.component");
var ListPokemonsComponent = (function () {
    function ListPokemonsComponent(_pokemonService, viewContainerRef) {
        this._pokemonService = _pokemonService;
        this.viewContainerRef = viewContainerRef;
    }
    ListPokemonsComponent.prototype.ngOnInit = function () {
        // get all Pokemons
        this.getPokemons();
    };
    ListPokemonsComponent.prototype.getPokemons = function () {
        var _this = this;
        this._pokemonService.getPokemons()
            .subscribe(function (pokemon) {
            console.log(pokemon);
            _this.pokemon = pokemon;
        }, function (error) { return _this.errorMessage = error; });
    };
    ListPokemonsComponent.prototype.deletePokemon = function (pokemon) {
        var _this = this;
        this._pokemonService.deletePokemon(pokemon)
            .subscribe(function () { return _this.deletePokemonFromList(pokemon); }, function (error) { return _this.errorMessage = error; });
    };
    ListPokemonsComponent.prototype.viewSinglePokemon = function (id) {
        var _this = this;
        this._pokemonService.getPokemonDetails(id)
            .subscribe(function (pokemon) {
            _this.pokeDetails = pokemon;
            _this.childModal.show();
        }, function (error) { return _this.errorMessage = error; });
    };
    ListPokemonsComponent.prototype.deletePokemonFromList = function (pokemon) {
        var index = this.pokemon.indexOf(pokemon, 0);
        if (index > -1) {
            this.pokemon.splice(index, 1);
        }
    };
    return ListPokemonsComponent;
}());
__decorate([
    core_1.ViewChild('childModal'),
    __metadata("design:type", pokemon_modal_component_1.PokemonModalComponent)
], ListPokemonsComponent.prototype, "childModal", void 0);
ListPokemonsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pk-list',
        templateUrl: 'list-pokemons.template.html',
        styles: ["\n          :host >>> .tooltip-inner {\n          background-color: #FF7768;\n          color: #fff;\n          }\n          :host >>> .tooltip .tooltip-arrow {\n          border-bottom-color: #FF7768;\n          }\n  "]
    }),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService,
        core_1.ViewContainerRef])
], ListPokemonsComponent);
exports.ListPokemonsComponent = ListPokemonsComponent;
//# sourceMappingURL=list-pokemons.component.js.map