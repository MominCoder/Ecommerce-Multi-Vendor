import authReducer from "./reducers/authReducer";
import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";
import sellerReducer from "./reducers/sellerReducer";
import chatReducer from "./reducers/chatReducer";
import orderReducer from "./reducers/orderReducer";
import paymentReducer from "./reducers/paymentReducer";
import dashboardIndexReducer from "./reducers/dashboardIndexReducer";

const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  seller: sellerReducer,
  chat: chatReducer,
  order: orderReducer,
  payment: paymentReducer,
  dashboardIndex: dashboardIndexReducer,
};

export default rootReducer;
