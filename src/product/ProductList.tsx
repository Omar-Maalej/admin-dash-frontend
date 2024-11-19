import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const ProductList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <NumberField source="price" />
        </Datagrid>
    </List>
);