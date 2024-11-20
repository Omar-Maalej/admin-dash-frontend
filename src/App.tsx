import {
  Admin,
  Resource,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { UserList } from "./user/UserList";
import { UserShow } from "./user/UserShow";
import { UserEdit } from "./user/UserEdit";
import { UserCreate } from "./user/UserCreate";
import authProvider from "./auth/AuthProvider";
import LoginPage from "./auth/LoginPage";
import { ProductList } from "./product/ProductList";
import { ProductShow } from "./product/ProductShow";
import { ProductEdit } from "./product/ProductEdit";
import { ProductCreate } from "./product/ProductCreate";
import { OrderList } from "./order/OrderList";
import { OrderShow } from "./order/OrderShow";
import { OrderEdit } from "./order/OrderEdit";
import { OrderCreate } from "./order/OrderCreate";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} authProvider={authProvider} loginPage={LoginPage}>
    <Resource name="user" list={UserList} edit={UserEdit} show={UserShow} create={UserCreate} />
    <Resource name="product" list={ProductList} edit={ProductEdit} show={ProductShow} create = {ProductCreate}/>
    <Resource name="order" list={OrderList} edit={OrderEdit} show={OrderShow} create = {OrderCreate} />
  </Admin>
);
