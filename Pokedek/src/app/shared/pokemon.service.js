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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var PokemonService = (function () {
    function PokemonService(_http) {
        this._http = _http;
        this.pokemonUrl = 'api/pokemons';
    }
    PokemonService.prototype.getPokemons = function () {
        return this._http
            .get(this.pokemonUrl)
            .map(function (res) { return res.json().data; })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    PokemonService.prototype.getPokemonDetails = function (id) {
        var url = this.pokemonUrl + "/" + id;
        return this._http
            .get(url)
            .map(function (res) { return res.json().data; })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    PokemonService.prototype.addPokemon = function (pokemon) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(pokemon);
        var url = "" + this.pokemonUrl;
        return this._http
            .post(url, body, options)
            .map(function (response) {
            return response.json();
        })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    PokemonService.prototype.deletePokemon = function (pokemon) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.pokemonUrl + "/" + pokemon.id;
        return this._http
            .delete(url, options)
            .catch(this.handleError);
    };
    PokemonService.prototype.handleError = function (error) {
        var msg = "Error status code " + error.status + " status " + error.statusText + " at " + error.url;
        return Observable_1.Observable.throw(msg);
    };
    return PokemonService;
}());
PokemonService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PokemonService);
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map