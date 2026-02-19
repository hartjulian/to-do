const formidable = require("formidable");
const { get, create, remove } = require('../model/todo');

exports.create = async (req, res) => {
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, async (err, fields) => {
        const { description } = fields;
        // check to see if the description field has been submitted in the form
        if (!fields.description) {
            return res.status(400).json({
                error: 'Description is required'
            });
        }
        try {
            const newTask = await create(description);
            return res.status(201).send({ data: newTask.rows[0] });
        } catch (error) {
            return res.status(400).json(error);
        };
    });
};

exports.get = async (req, res) => {
    try {
        const task = await get();
        return res.json({ data: task.rows });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    };
};

exports.removeTodo = (req, res) => {
    const taskId = req.params.id;
    try {
        remove(taskId);
        return res.status(200).send({ data: taskId});
    } catch (error) {
        return res.status(400).json({
            error
        });
    };
};