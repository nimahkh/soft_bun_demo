'use strict';

import StateManager from "./state_manager";
export const counterComponent = () => {
    const initialState = {
        count: 0,
        b: 0,
    };

    // Create a StateManager instance
    const stateManager = new StateManager(initialState);

    // Add a reactive dependency
    stateManager.reactive('b', '$count*2');

    // Function to display state changes
    function displayStateChange(newState) {
        const stateChangesElement = document.getElementById('stateChanges');
        stateChangesElement.innerHTML = JSON.stringify(newState);
    }

    // Attach subscriber to state updates
    stateManager.subscribe(displayStateChange);

    // Get the button element
    const changeStateButton = document.getElementById('changeStateButton');

    // Add event listener to the button
    changeStateButton?.addEventListener('click', () => {
        const currentState = stateManager.getState();
        stateManager.setState({ count: currentState.count + 1 });
    });

    return {
        displayStateChange,
        stateManager
    }
}
