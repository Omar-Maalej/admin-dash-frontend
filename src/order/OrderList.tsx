import { ArrayField, ChipField, Datagrid, FunctionField, Link, List, NumberField, SingleFieldList, TextField } from 'react-admin';

export const OrderList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <NumberField source="total" />
            <NumberField source="user.id" />
            <ArrayField source="products">
                <SingleFieldList >
            <FunctionField
            render={(record) => (
              <Link to={`/product/${record.id}/show`} >
                {record.name}
              </Link>
            )}
          />
                </SingleFieldList></ArrayField>
        </Datagrid>
    </List>
);