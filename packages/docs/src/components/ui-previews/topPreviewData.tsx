import { ReactNode } from "react";
import { componentsData } from "./componentsData";

type PreviewData = {
  label: string;
  component: ReactNode;
};

const getPreviewComponent = (name: string, variantIndex: number = 0) => {
  const data = componentsData.find((data) => data.name === name);
  return data?.variants[variantIndex].component ?? <></>;
};

export const topPreviewData: PreviewData[] = [
  { label: "button", component: getPreviewComponent("button", 1) },
  { label: "swap", component: getPreviewComponent("swap", 1) },
  { label: "dropdown", component: getPreviewComponent("dropdown") },
  { label: "modal", component: getPreviewComponent("modal") },
  {
    label: "accordion",
    component: (
      <div className="scale-50">{getPreviewComponent("accordion")}</div>
    ),
  },
  { label: "list", component: getPreviewComponent("list") },
  { label: "tabs", component: getPreviewComponent("tabs") },
  { label: "checkbox", component: getPreviewComponent("checkbox") },
  { label: "radio", component: getPreviewComponent("radio") },
  { label: "input field", component: getPreviewComponent("input-field") },
  { label: "alert", component: getPreviewComponent("alert") },
  { label: "toggle", component: getPreviewComponent("toggle") },
  { label: "drawer", component: getPreviewComponent("drawer") },
  { label: "progress", component: getPreviewComponent("progress") },
];
