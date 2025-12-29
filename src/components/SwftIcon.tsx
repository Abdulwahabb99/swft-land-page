import { createIcon } from "../utils/CreateIcon";
import React from "react";

/**
 * SwftIcon - The swft logo icon component
 * Created using Chakra UI's createIcon utility
 * 
 * Usage:
 * ```tsx
 * import { SwftIcon } from '@/src/components/SwftIcon';
 * 
 * <SwftIcon boxSize={8} />
 * ```
 */
export const SwftIcon = createIcon({
  displayName: "SwftIcon",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "none",
  },
  path: (
    <>
      {/* Rounded rectangle background with purple fill */}
      <rect width="32" height="32" rx="6" fill="#7E47FF" />
      {/* W letter - path representation of a bold W */}
      <path
        d="M16 8 L12 22 L13.5 22 L14.5 16.5 L15.5 16.5 L16.5 22 L18 22 L16 8 Z"
        fill="white"
      />
    </>
  ),
});

