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
var router_1 = require("@angular/router");
var pokemon_service_1 = require("../shared/pokemon.service");
var AddPokemonComponent = (function () {
    function AddPokemonComponent(_pokemonService, router) {
        this._pokemonService = _pokemonService;
        this.router = router;
        this.formPokemon = {};
        this.cardTitle = "Add Pokemon";
    }
    AddPokemonComponent.prototype.savePokemon = function (formValues) {
        var _this = this;
        this._pokemonService.addPokemon(formValues)
            .subscribe(function (res) {
            console.log('Pokemon saved');
            _this.router.navigate(['/']);
        }, function (error) { return console.log('error ', error); });
    };
    return AddPokemonComponent;
}());
AddPokemonComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'add-pokemon.template.html'
    }),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService,
        router_1.Router])
], AddPokemonComponent);
exports.AddPokemonComponent = AddPokemonComponent;
//# sourceMappingURL=add-pokemon.component.js.map