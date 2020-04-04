"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var app_routing_1 = require("./app.routing");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var ng2_bootstrap_2 = require("ng2-bootstrap");
var pokemon_data_1 = require("./shared/pokemon-data");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var nav_component_1 = require("./nav/nav.component");
var add_pokemon_component_1 = require("./poke-add/add-pokemon.component");
var list_pokemons_component_1 = require("./poke-list/list-pokemons.component");
var pokemon_modal_component_1 = require("./poke-list/pokemon-modal.component");
var pokemon_service_1 = require("./shared/pokemon.service");
require("./shared/rxjs-extensions");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(pokemon_data_1.PokemonData),
            ng2_bootstrap_1.ModalModule.forRoot(),
            ng2_bootstrap_2.TooltipModule.forRoot(),
            app_routing_1.AppRoutingModule
        ],
        declarations: [app_component_1.AppComponent,
            home_component_1.HomeComponent,
            nav_component_1.NavbarComponent,
            add_pokemon_component_1.AddPokemonComponent,
            list_pokemons_component_1.ListPokemonsComponent,
            pokemon_modal_component_1.PokemonModalComponent
        ],
        providers: [pokemon_service_1.PokemonService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map