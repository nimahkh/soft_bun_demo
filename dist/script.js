"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var counterComponent_1 = require("./counterComponent");
var largeDataComponent_1 = require("./largeDataComponent");
function mount() {
    var _a = (0, counterComponent_1.counterComponent)(), displayStateChange = _a.displayStateChange, stateManager = _a.stateManager;
    displayStateChange(stateManager.getState());
    var _b = (0, largeDataComponent_1.largeDataComponent)(), displayLargeStateChange = _b.displayLargeStateChange, largeStateManager = _b.largeStateManager;
    displayLargeStateChange(largeStateManager.getState());
}
mount();
