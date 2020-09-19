const {multiply} = require('../methods')

module.exports = () => ({
    1: {
        1: function () {
            return multiply(2, 9, 2, 9);
        },
        2: function () {
            return multiply(2, 9, 10, 99);
        },
        3: function () {
            return multiply(2, 9, 100, 999);
        },
        4: function () {
            return multiply(2, 9, 1000, 9999);
        },
        5: function () {
            return multiply(2, 9, 10000, 99999);
        },
        'o': function (theme) {
            return multiply(2, 9, theme, theme);
        },
    },
    2: {
        1: function () {
            return multiply(10, 99, 2, 9);
        },
        2: function () {
            return multiply(10, 99, 10, 99);
        },
        3: function () {
            return multiply(10, 99, 100, 999);
        },
        4: function () {
            return multiply(10, 99, 1000, 9999);
        },
        5: function () {
            return multiply(10, 99, 10000, 99999);
        },
        'o': function (theme) {
            return multiply(10, 99, theme, theme);
        },
    },
    3: {
        1: function () {
            return multiply(100, 999, 2, 9);
        },
        2: function () {
            return multiply(100, 999, 10, 99);
        },
        3: function () {
            return multiply(100, 999, 100, 999);
        },
        4: function () {
            return multiply(100, 999, 1000, 9999);
        },
        5: function () {
            return multiply(100, 999, 10000, 99999);
        },
        'o': function (theme) {
            return multiply(100, 999, theme, theme);
        },
    },
    4: {
        1: function () {
            return multiply(1000, 9999, 2, 9);
        },
        2: function () {
            return multiply(1000, 9999, 10, 99);
        },
        3: function () {
            return multiply(1000, 9999, 100, 999);
        },
        4: function () {
            return multiply(1000, 9999, 1000, 9999);
        },
        5: function () {
            return multiply(1000, 9999, 10000, 99999);
        },
        'o': function (theme) {
            return multiply(1000, 9999, theme, theme);
        },
    },
    5: {
        1: function () {
            return multiply(10000, 99999, 2, 9);
        },
        2: function () {
            return multiply(10000, 99999, 10, 99);
        },
        3: function () {
            return multiply(10000, 99999, 100, 999);
        },
        4: function () {
            return multiply(10000, 99999, 1000, 9999);
        },
        5: function () {
            return multiply(10000, 99999, 10000, 99999);
        },
        'o': function (theme) {
            return multiply(10000, 99999, theme, theme);
        },
    },
    6: {
        1: function () {
            return multiply(100000, 999999, 2, 9);
        },
        2: function () {
            return multiply(100000, 999999, 10, 99);
        },
        3: function () {
            return multiply(100000, 999999, 100, 999);
        },
        4: function () {
            return multiply(100000, 999999, 1000, 9999);
        },
        5: function () {
            return multiply(100000, 999999, 10000, 99999);
        },
        'o': function (theme) {
            return multiply(100000, 999999, theme, theme);
        },
    },
})