import * as R from "ramda";

const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join("_");

export const buildSelectOptions = values =>
  values.map(value => ({
    label: value,
    value: toSnakeCase(value),
  }));

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);
