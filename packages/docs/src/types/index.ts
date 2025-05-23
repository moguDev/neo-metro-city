import { ReactNode } from "react";

export type ComponentPreviewData = {
  name: string;
  description: string;
  variants: ComponentVariant[];
};

export type ComponentVariant = {
  title: string;
  description?: string;
  component: ReactNode;
  htmlStr: string;
  jsxStr: string;
};
