import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  assetType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
