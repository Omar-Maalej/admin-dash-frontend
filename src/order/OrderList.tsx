import { ArrayField, ChipField, Datagrid,  List, NumberField, SingleFieldList, TextField } from 'react-admin';

export const OrderList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <NumberField source="total" />
            <NumberField source="user.id" />
            <ArrayField source="products">
                <SingleFieldList >
                  <ChipField onClick={(e)=>e.preventDefault()} source="name" />
                </SingleFieldList>
            </ArrayField>
        </Datagrid>
    </List>
);