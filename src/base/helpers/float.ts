import classNames from "classnames";
import PropTypes from "prop-types";

import {
  makePropTypesFactory,
  makeValidatingTransformFactory,
  TransformFunction,
} from "./factory";
import { Variables } from "./variables";

export type FloatHelpersProps = Partial<{
  /** Fixes an element's floating children */
  clearfix: boolean;
  /** Moves an element to the left or right */
  pull: Variables["floatPulledAlignments"];
}>;

// Factories
export const makePropTypes = makePropTypesFactory(vars => ({
  clearfix: PropTypes.bool,
  pull: PropTypes.oneOf(vars.floatPulledAlignments),
}));

export const transform: TransformFunction<FloatHelpersProps> = props => {
  const { clearfix, pull, ...rest } = props;

  // Can remove "no-any" and "no-unsafe-any" with TypeScript 3.3
  // https://github.com/Microsoft/TypeScript/pull/29121
  // tslint:disable:no-any
  // tslint:disable:no-unsafe-any
  (rest as any).className = classNames(
    {
      "is-clearfix": clearfix,
      [`is-pulled-${pull}`]: pull,
    },
    (rest as any).className,
  );

  return rest;
};

export const makeValidatingTransform = makeValidatingTransformFactory(
  makePropTypes,
  transform,
);
