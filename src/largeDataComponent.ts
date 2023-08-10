import StateManager from "./state_manager";

export const largeDataComponent = () => {
    const initialState = {
        count: 0,
        b: 0,
        c: 0,
        z: 0,
        total: 0
    };

    // Create a StateManager instance
    const largeStateManager = new StateManager(initialState);

    // Add a reactive dependency
    largeStateManager.reactive('b', '$count * 2');
    largeStateManager.reactive('c', '$count * 50');
    largeStateManager.reactive('z', '$count * 100');
    largeStateManager.reactive('total', `$c+$b+$z`);

    // Function to display state changes
    function displayLargeStateChange(newState) {
        const stateChangesElement = document.getElementById('largeDataStateChanges');
        stateChangesElement.innerHTML = JSON.stringify(newState);
    }

    // Attach subscriber to state updates
    largeStateManager.subscribe(displayLargeStateChange);

    // Get the button element
    const changeStateButton = document.getElementById('changeLargeStateButton');

    // Add event listener to the button
    changeStateButton?.addEventListener('click', () => {

        // Simulate changes with large data
        const iterations = 1000; // Change this to the desired number of iterations
        for (let i = 0; i < iterations; i++) {
            const currentState = largeStateManager.getState();
            largeStateManager.setState({ count: currentState.count + 1 });
        }
    });

    return {
        displayLargeStateChange,
        largeStateManager
    }
}
