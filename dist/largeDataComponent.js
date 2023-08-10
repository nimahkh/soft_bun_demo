"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.largeDataComponent = void 0;
var state_manager_1 = require("./state_manager");
var largeDataComponent = function () {
    var initialState = {
        count: 0,
        b: 0,
        c: 0,
        z: 0,
        total: 0
    };
    // Create a StateManager instance
    var largeStateManager = new state_manager_1.default(initialState);
    // Add a reactive dependency
    largeStateManager.reactive('b', '$count * 2');
    largeStateManager.reactive('c', '$count * 50');
    largeStateManager.reactive('z', '$count * 100');
    largeStateManager.reactive('total', "$c+$b+$z");
    // Function to display state changes
    function displayLargeStateChange(newState) {
        var stateChangesElement = document.getElementById('largeDataStateChanges');
        stateChangesElement.innerHTML = JSON.stringify(newState);
    }
    // Attach subscriber to state updates
    largeStateManager.subscribe(displayLargeStateChange);
    // Get the button element
    var changeStateButton = document.getElementById('changeLargeStateButton');
    // Add event listener to the button
    changeStateButton === null || changeStateButton === void 0 ? void 0 : changeStateButton.addEventListener('click', function () {
        // Simulate changes with large data
        var iterations = 1000; // Change this to the desired number of iterations
        for (var i = 0; i < iterations; i++) {
            var currentState = largeStateManager.getState();
            largeStateManager.setState({ count: currentState.count + 1 });
        }
    });
    return {
        displayLargeStateChange: displayLargeStateChange,
        largeStateManager: largeStateManager
    };
};
exports.largeDataComponent = largeDataComponent;
