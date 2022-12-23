const {
  createUser,
  getUser,
  deleteUser,
  listUser,
  editUser,
  listCategory,
  getCategory,
  createCategory, 
  editCategory,
  deleteCategory,
  listProduct,
  getProduct,
  editProduct,
  createProduct,
  deleteProduct
} = require("../controllers/auth.js");
const express = require("express");

const router = express.Router();

//@Enpoint    http://localhost:8000/api/listUser

//API User//
router.get("/listUser", listUser);

router.get("/getUser/:id", getUser);

router.post("/createUser", createUser);

router.put("/editUser/:id", editUser);

router.delete("/deleteUser/:id", deleteUser);

//API Category//
router.get("/listCategory", listCategory);

router.get("/getCategory/:id", getCategory);

router.post("/createCategory", createCategory);

router.put("/editCategory/:id", editCategory);

router.delete("/deleteCategory/:id", deleteCategory);


//API Product//
router.get("/listProduct", listProduct);

router.get("/getProduct/:id", getProduct);

router.post("/createProduct", createProduct);

router.put("/editProduct/:id", editProduct);

router.delete("/deleteProduct/:id", deleteProduct);





module.exports = router;  
