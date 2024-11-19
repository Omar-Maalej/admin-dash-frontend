import { ArrayField, Datagrid, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const OrderShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <NumberField source="total" />
            <ReferenceField source="user.id" reference="user" label="User Details">
              <SimpleShowLayout>
              <TextField source="id" label="ID" />
      <TextField source="firstName" label="First Name" />
      <TextField source="lastName" label="Last Name" />
      <TextField source="email" label="Email" />
              </SimpleShowLayout>
            </ReferenceField>
            <ArrayField source="products" >
              <Datagrid rowClick={(id) => `/product/${id}/show`}>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="description" />
                <NumberField source="price" />
              </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);