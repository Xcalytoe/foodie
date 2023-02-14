import { compareErrorHandlers, compareHandlers } from './compare-food';

export const apiHandlers = [...compareHandlers, ...compareErrorHandlers];
