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
var ng2_bootstrap_1 = require("ng2-bootstrap");
var PokemonModalComponent = (function () {
    function PokemonModalComponent() {
    }
    PokemonModalComponent.prototype.show = function () {
        this.childModal.show();
    };
    PokemonModalComponent.prototype.hide = function () {
        this.childModal.hide();
    };
    return PokemonModalComponent;
}());
__decorate([
    core_1.ViewChild('childModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], PokemonModalComponent.prototype, "childModal", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PokemonModalComponent.prototype, "pokeDetails", void 0);
PokemonModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pk-details',
        templateUrl: 'pokemon-modal.template.html'
    })
], PokemonModalComponent);
exports.PokemonModalComponent = PokemonModalComponent;
// https://plnkr.co/edit/t4JwdewzXXBrnQRV6QMe?p=preview 
//# sourceMappingURL=pokemon-modal.component.js.map