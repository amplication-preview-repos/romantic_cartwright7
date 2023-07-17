import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AssetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Asset Type" source="assetType" />
      </SimpleForm>
    </Create>
  );
};
