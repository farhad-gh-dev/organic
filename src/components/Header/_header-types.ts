import { FunctionComponent, SVGProps } from "react";

interface _GraphicItem_ {
  src: React.FunctionComponent;
  color?: string;
}

export interface _HeaderData_ {
  mainGraphic?: FunctionComponent<SVGProps<SVGSVGElement>>;
  donutGraphic?: _GraphicItem_;
  title?: string;
  description?: string;
  videoSrc?: string;
}
