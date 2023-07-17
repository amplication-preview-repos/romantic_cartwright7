import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AssetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Asset Type" source="assetType" />
      </SimpleForm>
    </Edit>
  );
};
