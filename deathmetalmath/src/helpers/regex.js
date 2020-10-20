// check if a math operator
export const isMathOperator = /[+/*-]$/;

// take last number in an equation
export const lastNumber = /-*[0-9]*\.*[0-9]+$/;

// starts with zero
export const startsWithZero = /^[0]\.?[0-9]*$/;

// ends with a decimal
export const endsWithDot = /[.]{1}$/;

// has a dot already
export const hasDot = /[0-9]*\.{1}[0-9]+$/;

// ends with an operation
export const endsWithOp = /[+/*-]$/;

// need to change name
export const startsWithOp = /[0-9]*\.*[0-9][+/*-]+[0-9]+\.{0}/;
