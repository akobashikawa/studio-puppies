const puppiesService = require('../services/puppiesService');

controller = {};

controller.getAll = async (req, res) => {
    try {
        const result = await puppiesService.getAll();
        res.json(result);
    } catch (error) {
        res.send(error);
    }
}

controller.getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await puppiesService.getOne(id);
        res.json(result);
    } catch (error) {
        res.send(error);
    }
}

controller.create = async (req, res) => {
    try {
        const data = req.body;
        const result = await puppiesService.create(data);
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

controller.update = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await puppiesService.update(id, data);
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

controller.remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await puppiesService.remove(id);
        res.json(result);
    } catch (error) {
        res.send(error);
    }
}

module.exports = controller;