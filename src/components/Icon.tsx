/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Lucide from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className = "", size }: IconProps) {
  // Safe mapping of string names to Lucide icons
  const LucideIcon = (Lucide as any)[name];
  
  if (!LucideIcon) {
    // Return a default icon (e.g. HelpCircle) if the icon name is not found
    return <Lucide.HelpCircle className={className} size={size} />;
  }

  return <LucideIcon className={className} size={size} />;
}
