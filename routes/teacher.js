const express = require('express');
const GroupController = require('../app/http/controllers/teacher/Group/GroupController');

const router = express.Router();

// Вывод групп по категории
router.get('/groups/:categoryId', GroupController.GetByCategoryId)
// Создать группу
router.post('/group', GroupController.CreateValidate, GroupController.Create)
// Обновление группы
router.patch('/group/:id', GroupController.UpdateValidate, GroupController.Update)
// Удаление группы
router.delete('/group/:id', GroupController.Delete)

module.exports = router;