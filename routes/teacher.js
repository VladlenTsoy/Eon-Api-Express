const express = require('express');
const GroupController = require('../app/http/controllers/teacher/Group/GroupController');
const StudentController = require('../app/http/controllers/teacher/Student/StudentController');

const router = express.Router();

/**
 * ГРУППЫ
 */

// Вывод групп по категории
router.get('/groups/:categoryId', GroupController.GetByCategoryId)
// Вывод групп по категории
router.get('/group/:id', GroupController.GetById)
// Создать группу
router.post('/group', GroupController.CreateValidate, GroupController.Create)
// Обновление группы
router.patch('/group/:id', GroupController.UpdateValidate, GroupController.Update)
// Удаление группы
router.delete('/group/:id', GroupController.Delete)

/**
 * СТУДЕНТЫ
 */

// Вывод учеников по Group Id
router.get('/students/:groupId', StudentController.GetByGroupId)
//
router.post('/students/:groupId/homework/dates', StudentController.GetHomeworkDatesByGroupId)



module.exports = router;