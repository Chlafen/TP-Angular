import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<any> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.canDeactivate) {
    return component.canDeactivate();
  }
  return true;
};
