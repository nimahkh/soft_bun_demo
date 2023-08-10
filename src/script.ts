import { counterComponent } from './counterComponent';
import { largeDataComponent } from './largeDataComponent';

function mount() {
  const { displayStateChange, stateManager } = counterComponent();
  displayStateChange(stateManager.getState());
  const { displayLargeStateChange, largeStateManager } = largeDataComponent();
  displayLargeStateChange(largeStateManager.getState());
}

mount();
