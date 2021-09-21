const router = require('express').Router()
const postController = require('../controller/post.controller')
const auth = require('../middleware/auth')
const upload = require('../middleware/fileUpload')

router.post('/add',auth, postController.addTask)

router.get('/myTasks', auth, postController.assignTask)
router.post('/addPImg', auth, upload.single('img'), postController.addPImg)
module.exports=router