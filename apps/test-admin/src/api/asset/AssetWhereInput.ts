import { StringFilter } from "../../util/StringFilter";

export type AssetWhereInput = {
  assetType?: StringFilter;
  id?: StringFilter;
};
