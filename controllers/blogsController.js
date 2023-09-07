const { Blog } = require("../models");

class Controller {
  static async createBlog(req, res) {
    try {
      const { title, content } = req.body;
      const data = await Blog.create({ title, content });
      res
        .status(200)
        .json({ message: `Blog with id ${data.id} created.`, data });
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllBlogs(req, res) {
    try {
      const data = await Blog.findAll();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  static async getBlogById(req, res) {
    try {
      const data = await Blog.findByPk(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateBlog(req, res) {
    try {
      const { id } = req.params;
      const result = await Blog.findByPk(id);
      if (!result) {
        res.status(404).json({ message: "Blog not found" });
      }
      const { title, content } = req.body;
      Blog.update({ title, content }, { where: { id } });
      res.status(200).json({ message: `Blog with id ${id} updated.` });
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteBlog(req, res) {
    try {
      const { id } = req.params;
      const result = await Blog.findByPk(id);
      if (!result) {
        res.status(404).json({ message: "Blog not found" });
      }
      Blog.destroy({ where: { id } });
      res.status(200).json({ message: `Blog with id ${id} deleted.` });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
