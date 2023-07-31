import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type ParamList = {
  HomeScreen: undefined;
  AwardsAndOutputsScreen: undefined;
  AwardDetail: AwardDetailRouteParams;
  OutputDetail: OutputDetailRouteParams;
};

export type AwardDetailRouteParams = {
  id: number;
  title: string;
};

export type OutputDetailRouteParams = {
  id: number;
  title: string;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  ParamList,
  "HomeScreen"
>;
export type AwardsAndOutputsScreenNavigationProp = StackNavigationProp<
  ParamList,
  "AwardsAndOutputsScreen"
>;
export type AwardDetailScreenRouteProp = RouteProp<ParamList, "AwardDetail">;
export type OutputDetailScreenRouteProp = RouteProp<ParamList, "OutputDetail">;
