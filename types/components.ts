import { NavigationProp } from "@react-navigation/core";
import { ReactNode } from "react";

interface IRoute {
  key: string,
  name: string,
  params: {currency: string},
  path: undefined | string,
}

export interface PropsInterface {  
  children?: ReactNode,
  route?: IRoute
 }