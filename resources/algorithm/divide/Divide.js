const {divide} = require('../methods')

module.exports = () => ({
    2: {
        1: function () {
            return divide(2, 2, 9);
        },
        2: function () {
            return divide(2, 11, 99);
        },
        'o': function (theme) {
            return divide(2, theme, theme);
        },
    },
    3: {
        1: function () {
            return divide(3, 2, 9);
        },
        2: function () {
            return divide(3, 11, 99);
        },
        3: function () {
            return divide(3, 101, 999);
        },
        'o': function (theme) {
            return divide(3, theme, theme);
        },
    },
    4: {
        1: function () {
            return divide(4, 2, 9);
        },
        2: function () {
            return divide(4, 11, 99);
        },
        3: function () {
            return divide(4, 111, 999);
        },
        4: function () {
            return divide(4, 1111, 9999);
        },
        'o': function (theme) {
            return divide(4, theme, theme);
        },
    },
    5: {
        1: function () {
            return divide(5, 2, 9);
        },
        2: function () {
            return divide(5, 11, 99);
        },
        3: function () {
            return divide(5, 111, 999);
        },
        4: function () {
            return divide(5, 1111, 9999);
        },
        5: function () {
            return divide(5, 11111, 99999);
        },
        'o': function (theme) {
            return divide(5, theme, theme);
        },
    },
    6: {
        1: function () {
            return divide(6, 2, 9);
        },
        2: function () {
            return divide(6, 11, 99);
        },
        3: function () {
            return divide(6, 111, 999);
        },
        4: function () {
            return divide(6, 1111, 9999);
        },
        5: function () {
            return divide(6, 11111, 99999);
        },
        6: function () {
            return divide(6, 111111, 999999);
        },
        'o': function (theme) {
            return divide(6, theme, theme);
        },
    },
})