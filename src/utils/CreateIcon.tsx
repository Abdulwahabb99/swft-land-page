// /* Taken from https://github.com/chakra-ui/chakra-ui/blob/2332a2ae2bb43ba91737f075e57926651bb5b037/packages/icon/src/create-icon.tsx#L1
//  *  Changed internal icon used by `createIcon` with our own implementation of `Icon`
//  */

import React, { Children, forwardRef } from "react";
import { Icon, type IconProps } from "@chakra-ui/react";

interface CreateIconOptions {
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string;
  /**
   * The `svg` path or group element
   * @type React.ReactElement | React.ReactElement[]
   */
  path?: React.ReactElement | React.ReactElement[];
  /**
   * If the `svg` has a single path, simply copy the path's `d` attribute
   */
  d?: string;
  /**
   * The display name useful in the dev tools
   */
  displayName?: string;
  /**
   * Default props automatically passed to the component; overwritable
   */
  defaultProps?: IconProps;
  fill?: string;
}

export function createIcon(options: CreateIconOptions) {
  const {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    displayName,
    defaultProps = {},
  } = options;

  const path = Children.toArray(options.path);

  const Comp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <Icon
      ref={ref}
      viewBox={viewBox}
      {...defaultProps}
      {...props}
      {...(options.fill && { fill: options.fill })}
    >
      {path.length ? path : <path fill="none" d={pathDefinition} />}
    </Icon>
  ));

  Comp.displayName = displayName;

  return Comp;
}
