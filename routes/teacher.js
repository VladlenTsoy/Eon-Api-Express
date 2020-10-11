const express = require('express');
const GroupController = require('../app/http/controllers/teacher/group/GroupController');
const StudentController = require('../app/http/controllers/teacher/student/StudentController');
const CoinController = require('../app/http/controllers/teacher/settings/CoinController');
const HomeworkTaskController = require('../app/http/controllers/teacher/homework/TaskController');
const HomeworkController = require('../app/http/controllers/teacher/homework/HomeworkController');
const CategoryController = require('controllers/teacher/settings/CategoryController');
const DisciplineController = require('controllers/teacher/settings/DisciplineController');
const AlgorithmController = require('controllers/teacher/settings/AlgorithmController');
const OlympiadController = require('controllers/teacher/olympiad/OlympiadController');
const TaskController = require('controllers/teacher/tasks/TaskController');

const router = express.Router();

/**
 * Дисциплны
 */

// Вывод всех дисциплин
router.get('/disciplines', DisciplineController.GetAll)

/**
 * Категории
 */

// Категории по дисциплине
router.get('/:disciplineId/categories', CategoryController.GetByDisciplineId)

/**
 * Алгоритмы
 */

// Вывод алгоритмов
router.get('/algorithms', AlgorithmController.GetAll)


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
 * ДОМАШНЕЕ ЗАДАНИЕ ДЛЯ СТУДЕНТОВ
 */
router.get('/student/homework/:sentId/tasks', HomeworkTaskController.GetBySentId)

/**
 * МОНЕТЫ
 */

// Отправка монет ученикам
router.post('/coin/sent', CoinController.Sent)

/**
 * Домашние задания
 */

// Вывод по категории
router.get('/homework/category/:categoryId', HomeworkController.GetByCategory)
//
router.get('/tasks/homework/:homeworkId', HomeworkTaskController.GetByHomeworkId)

/**
 * Олимпиада
 */

// Создание олимпиады
router.post('/olympiad', OlympiadController.CreateValidate, OlympiadController.Create)

/** Задания **/

//
router.get('/:disciplineId/tasks', TaskController.GetByDisciplineId);

module.exports = router;