import { displayStateChange, stateManager } from './counterComponent';

function mount() {
  displayStateChange(stateManager.getState());
}

mount();
