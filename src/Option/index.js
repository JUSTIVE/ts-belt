export * from "./Option.bs.js";

export const Some = (value) => value;
export const None = undefined;

export const isNone = (x) => x === undefined || x === null;
export const isSome = (x) => !(x === undefined || x === null);
