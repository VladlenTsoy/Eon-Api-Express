const express = require('express');
const GroupController = require('../app/http/controllers/teacher/group/GroupController');
const StudentController = require('../app/http/controllers/teacher/student/StudentController');
const CoinController = require('../app/http/controllers/teacher/settings/CoinController');

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
// Обновление данных ученика
router.post('/student/:id', StudentController.UpdateValidate, StudentController.Update)

/**
 * Монеты
 */

// Отправка монет ученикам
router.post('/coin/sent', CoinController.Sent)


module.exports = router;