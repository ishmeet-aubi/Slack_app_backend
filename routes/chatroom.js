  
const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const chatroomController = require("../controllers/chatRoomController");

const auth = require("../middleware/auth");

router.get("/", auth, catchErrors(chatroomController.getAllChat_rooms));
router.post("/", auth, catchErrors(chatroomController.createChatroom));

module.exports = router;