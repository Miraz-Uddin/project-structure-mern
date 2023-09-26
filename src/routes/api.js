const express = require("express");
const router = express.Router();

const {
  create: createAdmin,
  read: readAdmin,
  delete: deleteAdmin,
  update: updateAdmin,
} = require("../controllers/AdminController");
const {
  create: createCart,
  read: readCart,
  delete: deleteCart,
  update: updateCart,
} = require("../controllers/CartController");
const {
  create: createCategory,
  read: readCategory,
  delete: deleteCategory,
  update: updateCategory,
} = require("../controllers/CategoryController");
const {
  create: createCustomer,
  read: readCustomer,
  delete: deleteCustomer,
  update: updateCustomer,
} = require("../controllers/CustomerController");
const {
  create: createOrder,
  read: readOrder,
  delete: deleteOrder,
  update: updateOrder,
} = require("../controllers/OrderController");
const {
  create: createOrderItem,
  read: readOrderItem,
  delete: deleteOrderItem,
  update: updateOrderItem,
} = require("../controllers/OrderItemController");
const {
  create: createPayment,
  read: readPayment,
  delete: deletePayment,
  update: updatePayment,
} = require("../controllers/PaymentController");
const {
  create: createPost,
  read: readPost,
  delete: deletePost,
  update: updatePost,
} = require("../controllers/PostController");
const {
  create: createProduct,
  read: readProduct,
  delete: deleteProduct,
  update: updateProduct,
} = require("../controllers/ProductController");
const {
  create: createShipment,
  read: readShipment,
  delete: deleteShipment,
  update: updateShipment,
} = require("../controllers/ShipmentController");
const {
  create: createSubAdmin,
  read: readSubAdmin,
  delete: deleteSubAdmin,
  update: updateSubAdmin,
} = require("../controllers/SubAdminController");
const {
  create: createUser,
  read: readUser,
  delete: deleteUser,
  update: updateUser,
} = require("../controllers/UserController");
const {
  create: createWishlist,
  read: readWishlist,
  delete: deleteWishlist,
  update: updateWishlist,
} = require("../controllers/WishlistController");

router.get("/createAdmin", createAdmin);
router.get("/readAdmin", readAdmin);
router.get("/deleteAdmin", deleteAdmin);
router.get("/updateAdmin", updateAdmin);

router.get("/createCart", createCart);
router.get("/readCart", readCart);
router.get("/deleteCart", deleteCart);
router.get("/updateCart", updateCart);

router.get("/createCategory", createCategory);
router.get("/readCategory", readCategory);
router.get("/deleteCategory", deleteCategory);
router.get("/updateCategory", updateCategory);

router.get("/createCustomer", createCustomer);
router.get("/updateCustomer", updateCustomer);
router.get("/readCustomer", readCustomer);
router.get("/deleteCustomer", deleteCustomer);

router.get("/createOrder", createOrder);
router.get("/readOrder", readOrder);
router.get("/deleteOrder", deleteOrder);
router.get("/updateOrder", updateOrder);

router.get("/createOrderItem", createOrderItem);
router.get("/readOrderItem", readOrderItem);
router.get("/deleteOrderItem", deleteOrderItem);
router.get("/updateOrderItem", updateOrderItem);

router.get("/createPayment", createPayment);
router.get("/readPayment", readPayment);
router.get("/deletePayment", deletePayment);
router.get("/updatePayment", updatePayment);

router.get("/createPost", createPost);
router.get("/readPost", readPost);
router.get("/deletePost", deletePost);
router.get("/updatePost", updatePost);

router.get("/createProduct", createProduct);
router.get("/readProduct", readProduct);
router.get("/deleteProduct", deleteProduct);
router.get("/updateProduct", updateProduct);

router.get("/createShipment", createShipment);
router.get("/readShipment", readShipment);
router.get("/deleteShipment", deleteShipment);
router.get("/updateShipment", updateShipment);

router.get("/createSubAdmin", createSubAdmin);
router.get("/readSubAdmin", readSubAdmin);
router.get("/deleteSubAdmin", deleteSubAdmin);
router.get("/updateSubAdmin", updateSubAdmin);

router.get("/createUser", createUser);
router.get("/readUser", readUser);
router.get("/deleteUser", deleteUser);
router.get("/updateUser", updateUser);

router.get("/createWishlist", createWishlist);
router.get("/readWishlist", readWishlist);
router.get("/deleteWishlist", deleteWishlist);
router.get("/updateWishlist", updateWishlist);

module.exports = router;
