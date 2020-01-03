import validator from 'validator';

export const email = (value?: string) => (value && validator.isEmail(value) ? undefined : 'form.errors.email');
export const required = (value?: string) => (value ? undefined : 'form.errors.required');
