const express = require('express')
const router = express.Router()
const Controller = require('../controllers/blogsController')

router.get('/', Controller.getAllBlogs)
router.get('/:id', Controller.getBlogById)
router.post('/', Controller.createBlog)
router.put('/:id', Controller.updateBlog)
router.delete('/:id', Controller.deleteBlog)

module.exports = router