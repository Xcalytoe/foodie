import { contactErrorHandlers, contactHandlers } from './contact-me';

export const apiHandlers = [...contactHandlers, ...contactErrorHandlers];
