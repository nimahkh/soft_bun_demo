'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.counterComponent = void 0;
var state_manager_1 = require("./state_manager");
var counterComponent = function () {
    var initialState = {
        count: 0,
        b: 0,
    };
    // Create a StateManager instance
    var stateManager = new state_manager_1.default(initialState);
    // Add a reactive dependency
    stateManager.reactive('b', '$count*2');
    // Function to display state changes
    function displayStateChange(newState) {
        var stateChangesElement = document.getElementById('stateChanges');
        stateChangesElement.innerHTML = JSON.stringify(newState);
    }
    // Attach subscriber to state updates
    stateManager.subscribe(displayStateChange);
    // Get the button element
    var changeStateButton = document.getElementById('changeStateButton');
    // Add event listener to the button
    changeStateButton === null || changeStateButton === void 0 ? void 0 : changeStateButton.addEventListener('click', function () {
        var currentState = stateManager.getState();
        stateManager.setState({ count: currentState.count + 1 });
    });
    return {
        displayStateChange: displayStateChange,
        stateManager: stateManager
    };
};
exports.counterComponent = counterComponent;
