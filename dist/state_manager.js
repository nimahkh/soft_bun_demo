"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var soft_bun_1 = require("soft_bun");
var StateManager = /** @class */ (function () {
    function StateManager(initialState) {
        this.state = new soft_bun_1.default(initialState);
        this.subscribers = [];
    }
    StateManager.prototype.getState = function () {
        return this.state.state;
    };
    StateManager.prototype.setState = function (partialState) {
        Object.assign(this.state.state, partialState);
        this.triggerSubscribers();
    };
    StateManager.prototype.subscribe = function (callback) {
        this.subscribers.push(callback);
    };
    StateManager.prototype.triggerSubscribers = function () {
        var currentState = this.getState();
        this.subscribers.forEach(function (subscriber) { return subscriber(currentState); });
    };
    StateManager.prototype.reactive = function (key, expression) {
        this.state.reactive(key, "".concat(expression));
    };
    return StateManager;
}());
exports.default = StateManager;
