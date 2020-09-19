const rand = require('lodash/random')
const {rn} = require('../methods')

module.exports = function () {
    return {
        '1': {
            'b': {
                1: [
                    (step, a) => {
                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = -1;
                                break;
                            case 4:
                                a = rand(-3, -1);
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = 5 - this.amount;
                                break;
                            case 7:
                                a = -1;
                                break;
                            case 8:
                                a = rand(-3, -1);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 3);
                                break;
                            case 2:
                                a = rand(5, 6);
                                break;
                            case 3:
                                a = 5 - this.amount;
                                break;
                            case 4:
                                a = -1;
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = 5 - this.amount;
                                break;
                            case 4:
                                a = -1;
                                break;
                            case 5:
                                a = rand(-3, -1);
                                break;
                            case 6:
                                a = rand(5, 6);
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = -1;
                                break;
                            case 3:
                                a = 5;
                                break;
                            case 4:
                                a = rand(-3, -1);
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = -1;
                                break;
                            case 3:
                                a = rand(-4, -1);
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ],
                2: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 6);
                                break;
                            case 2:
                                a = -2;
                                break;
                            case 3:
                                a = 1 - this.amount;
                                break;
                            case 4:
                                a = rand(6, 8);
                                break;
                            case 5:
                                a = 6 - this.amount;
                                break;
                            case 6:
                                a = -2;
                                break;
                            case 7:
                                a = rand(-3, -2);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = 5 - this.amount;
                                break;
                            case 4:
                                a = -2;
                                break;
                            case 5:
                                a = rand(5, 6);
                                break;
                            case 6:
                                a = rand(-5, -7);
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = -2;
                                break;
                            case 3:
                                a = rand(-2, -1);
                                break;
                            case 4:
                                a = rand(5, 7);
                                break;
                            case 5:
                                a = 5 - this.amount;
                                break;
                            case 6:
                                a = -2;
                                break;
                            case 7:
                                a = rand(5, 6);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(2, 3);
                                break;
                            case 2:
                                a = rand(5, 6);
                                break;
                            case 3:
                                a = 5 - this.amount;
                                break;
                            case 4:
                                a = -2;
                                break;
                            case 5:
                                a = rand(-2, -1);
                                break;
                            case 6:
                                a = rand(1, 2);
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(7, 9);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = -2;
                                break;
                            case 4:
                                a = rand(5, 6);
                                break;
                            case 5:
                                a = -1;
                                break;
                            case 6:
                                a = 5 - this.amount;
                                break;
                            case 7:
                                a = rand(2, 4);
                                break;
                            case 8:
                                a = 6 - this.amount;
                                break;
                            case 9:
                                a = -2;
                                break;
                            case 10:
                                a = 5;
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = -2;
                                break;
                            case 4:
                                a = rand(-2, -1);
                                break;
                            case 5:
                                a = rand(6, 7);
                                break;
                            case 6:
                                a = 5 - this.amount;
                                break;
                            case 7:
                                a = -2;
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ],
                3: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 7);
                                break;
                            case 2:
                                a = -3;
                                break;
                            case 3:
                                a = rand(-2, -1);
                                break;
                            case 4:
                                a = 6;
                                break;
                            case 5:
                                a = 5 - this.amount;
                                break;
                            case 6:
                                a = -3;
                                break;
                            case 7:
                                a = rand(-2, -1);
                                break;
                            case 8:
                                a = 5;
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 2);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = -3;
                                break;
                            case 4:
                                a = rand(-3, -2);
                                break;
                            case 5:
                                a = rand(6, 7);
                                break;
                            case 6:
                                a = 5 - this.amount;
                                break;
                            case 7:
                                a = -3;
                                break;
                            case 8:
                                a = rand(6, 7);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(7, 9);
                                break;
                            case 2:
                                a = 6 - this.amount;
                                break;
                            case 3:
                                a = -1;
                                break;
                            case 4:
                                a = -3;
                                break;
                            case 5:
                                a = rand(1, 2);
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 5 - this.amount;
                                break;
                            case 8:
                                a = -3;
                                break;
                            case 9:
                                a = rand(5, 7);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(3, 4);
                                break;
                            case 2:
                                a = rand(-3, -2);
                                break;
                            case 3:
                                a = 5;
                                break;
                            case 4:
                                a = -3;
                                break;
                            case 5:
                                a = rand(-2, -1);
                                break;
                            case 6:
                                a = 6;
                                break;
                            case 7:
                                a = 5 - this.amount;
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = -3;
                                break;
                            case 3:
                                a = rand(5, 7);
                                break;
                            case 4:
                                a = 5 - this.amount;
                                break;
                            case 5:
                                a = -3;
                                break;
                            case 6:
                                a = rand(1, 2);
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = -3;
                                break;
                            case 4:
                                a = rand(5, 7);
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ],
                4: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 8);
                                break;
                            case 2:
                                a = -4;
                                break;
                            case 3:
                                a = 5;
                                break;
                            case 4:
                                a = 5 - this.amount;
                                break;
                            case 5:
                                a = -4;
                                break;
                            case 6:
                                a = -this.amount;
                                break;
                            case 7:
                                a = rand(6, 9);
                                break;
                            case 8:
                                a = -1;
                                break;
                            case 9:
                                a = -4;
                                break;
                            case 10:
                                a = 5;
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = rand(1, 3);
                                break;
                            case 3:
                                a = -4;
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = rand(-2, -1);
                                break;
                            case 6:
                                a = -4;
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = 5 - this.amount;
                                break;
                            case 9:
                                a = -4;
                                break;
                            case 10:
                                a = rand(6, 9);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = -4;
                                break;
                            case 4:
                                a = rand(1, 8);
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = -1;
                                break;
                            case 4:
                                a = -4;
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = -4;
                                break;
                            case 4:
                                a = rand(1, 4);
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(2, 4);
                                break;
                            case 2:
                                a = 1 - this.amount;
                                break;
                            case 3:
                                a = rand(5, 7);
                                break;
                            case 4:
                                a = -4;
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ],
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rand(-4, -1);
                                break;
                            case 4:
                                a = 9 - this.amount;
                                break;
                            case 5:
                                a = rand(-2, -1);
                                break;
                            case 6:
                                a = -4;
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = rand(-4, -1);
                                break;
                            case 3:
                                a = 9 - this.amount;
                                break;
                            case 4:
                                a = -4;
                                break;
                            case 5:
                                a = rand(-4, -1);
                                break;
                            case 6:
                                a = 9 - this.amount;
                                break;
                            case 7:
                                a = -3;
                                break;
                            case 8:
                                a = rand(-4, -3);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 9 - this.amount;
                                break;
                            case 3:
                                a = -3;
                                break;
                            case 4:
                                a = rand(-4, -2);
                                break;
                            case 5:
                                a = 9 - this.amount;
                                break;
                            case 6:
                                a = -4;
                                break;
                            case 7:
                                a = rand(-4, -1);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rand(-4, -1);
                                break;
                            case 4:
                                a = 5 - this.amount;
                                break;
                            case 5:
                                a = rand(-4, -2);
                                break;
                            case 6:
                                a = 4 - this.amount;
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = rand(-4, -2);
                                break;
                            case 9:
                                a = rand(-4, -3);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = -this.amount;
                                break;
                            case 3:
                                a = 5;
                                break;
                            case 4:
                                a = rand(-4, -1);
                                break;
                            case 5:
                                a = 5 - this.amount;
                                break;
                            case 6:
                                a = rand(-4, -1);
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = 5 - this.amount;
                                break;
                            case 9:
                                a = rand(-4, -1);
                                break;
                            case 10:
                                a = rn(9 - this.amount, 5 - this.amount);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 3);
                                break;
                            case 2:
                                a = rn(4 - this.amount, 5 - this.amount);
                                break;
                            case 3:
                                a = rand(-4, -3);
                                break;
                            case 4:
                                a = 9 - this.amount;
                                break;
                            case 5:
                                a = rand(-4, -3);
                                break;
                            case 6:
                                a = rand(-3, -2);
                                break;
                            case 7:
                                a = 5 - this.amount;
                                break;
                            case 8:
                                a = rand(1, 2);
                                break;
                            case 9:
                                a = rand(-4, -3);
                                break;
                            case 10:
                                a = 5;
                                break;
                            case 11:
                                a = rand(-4, -3);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ]
            },
            'r': {
                1: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -1;
                                break;
                            case 4:
                                a = rand(-2, -4);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = -1;
                                break;
                            case 7:
                                a = rand(-7, -6);
                                break;
                            case 8:
                                a = 8;
                                break;
                            case 9:
                                a = rand(6, 8);
                                break;
                            case 10:
                                a = 10 - this.amount;
                                break;
                            case 11:
                                a = -1;
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 3);
                                break;
                            case 2:
                                a = rand(5, 6);
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = -1;
                                break;
                            case 5:
                                a = rand(7, 9);
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 20 - this.amount;
                                break;
                            case 8:
                                a = -1;
                                break;
                            case 9:
                                a = rand(-3, -2);
                                break;
                            case 10:
                                a = 10 - this.amount;
                                break;
                            case 11:
                                a = -1;
                                break;
                            case 12:
                                a = rand(-7, -6);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(8, 9);
                                break;
                            case 2:
                                a = rand(8, 9);
                                break;
                            case 3:
                                a = 20 - this.amount;
                                break;
                            case 4:
                                a = -1;
                                break;
                            case 5:
                                a = rand(2, 3);
                                break;
                            case 6:
                                a = 30 - this.amount;
                                break;
                            case 7:
                                a = -1;
                                break;
                            case 8:
                                a = rand(-8, -6);
                                break;
                            case 9:
                                a = 20 - this.amount;
                                break;
                            case 10:
                                a = -1;
                                break;
                            case 11:
                                a = rand(-4, -1);
                                break;
                            case 12:
                                a = 10 - this.amount;
                                break;
                            case 13:
                                a = -1;
                                break;
                            case 14:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -1;
                                break;
                            case 4:
                                a = rand(-8, -6);
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -1;
                                break;
                            case 4:
                                a = rand(-8, -1);
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = -1;
                                break;
                            case 4:
                                a = rand(-8, -6);
                                break;
                            case 5:
                                a = rand(5, 6);
                                break;
                            case 6:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = rand(1, 3);
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = -1;
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ],
                2: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 6);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = -2;
                                break;
                            case 4:
                                a = rand(7, 9);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = -2;
                                break;
                            case 7:
                                a = rand(7, 9);
                                break;
                            case 8:
                                a = -5;
                                break;
                            case 9:
                                a = 1;
                                break;
                            case 10:
                                a = 10 - this.amount;
                                break;
                            case 11:
                                a = 1;
                                break;
                            case 12:
                                a = -2;
                                break;
                            case 13:
                                a = rand(6, 5);
                                break;
                            case 14:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -2;
                                break;
                            case 4:
                                a = rand(-6, -5);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = 1;
                                break;
                            case 7:
                                a = -2;
                                break;
                            case 8:
                                a = rand(-4, -1);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(7, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = 1;
                                break;
                            case 4:
                                a = -2;
                                break;
                            case 5:
                                a = rand(-7, -6);
                                break;
                            case 6:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 3);
                                break;
                            case 2:
                                a = rand(5, 6);
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = -2;
                                break;
                            case 5:
                                a = rand(-7, -6);
                                break;
                            case 6:
                                a = rand(5, 7);
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 6);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -2;
                                break;
                            case 4:
                                a = rand(-3, -2);
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    //  function (step, a){
                    //     counter++;
                    //     if (cnt) {
                    //         ost = Math.floor(step / cnt);
                    //         if (ost > 0) {
                    //             step = step - (cnt * ost);
                    //             if (step === 0) step = cnt;
                    //         }
                    //     }
                    //
                    //     switch (step) {
                    //         case 1:
                    //             a = 9;
                    //             break;
                    //         case 2:
                    //             a = 1;
                    //             break;
                    //         case 3:
                    //             a = -2;
                    //             break;
                    //         case 4:
                    //             a = 8;
                    //             break;
                    //         case 5:
                    //             a = rand(7, 9);
                    //             break;
                    //         case 6:
                    //             a = -5;
                    //             break;
                    //         case 7:
                    //             a = -this
                    //
                    //             break;
                    //     }
                    //
                    //     this.amount += a;
                    //     return a;
                    //
                    // },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = -2;
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                ],
                3: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = -3;
                                break;
                            case 5:
                                a = rand(8, 9);
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = -3;
                                break;
                            case 8:
                                a = rand(-2, -1);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -3;
                                break;
                            case 4:
                                a = -1;
                                // a = rand(-2, -1);
                                break;
                            case 5:
                                a = -5;
                                break;
                            case 6:
                                a = 2;
                                break;
                            case 7:
                                a = rand(8, 9);
                                break;
                            case 8:
                                a = -3;
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = rand(1, 2);
                                break;
                            case 4:
                                a = -3;
                                break;
                            case 5:
                                a = rand(-2, -1);
                                break;
                            case 6:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -3;
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = rand(5, 7);
                                break;
                            case 6:
                                a = 9;
                                break;
                            case 7:
                                a = -6;
                                break;
                            case 8:
                                a = -3;
                                break;
                            case 9:
                                a = 10 - this.amount;
                                break;
                            case 10:
                                a = -3;
                                break;
                            case 11:
                                a = rand(1, 2);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(1, 2);
                                break;
                            case 4:
                                a = -3;
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = 5;
                                break;
                            case 4:
                                a = -3;
                                break;
                            case 5:
                                a = rand(-7, -6);
                                break;
                            case 6:
                                a = -3;
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ],
                4: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = -4;
                                break;
                            case 5:
                                a = rand(1, 2);
                                break;
                            case 6:
                                a = 8;
                                break;
                            case 7:
                                a = -5;
                                break;
                            case 8:
                                a = rand(1, 2);
                                break;
                            case 9:
                                a = -4;
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -4;
                                break;
                            case 4:
                                a = rand(1, 2);
                                break;
                            case 5:
                                a = 15 - this.amount;
                                break;
                            case 6:
                                a = rand(1, 3);
                                break;
                            case 7:
                                a = -5;
                                break;
                            case 8:
                                a = -4;
                                break;
                            case 9:
                                a = 1;
                                break;
                            case 10:
                                a = rand(-7, -6);
                                break;
                            case 11:
                                a = rand(5, 6);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(1, 3);
                                break;
                            case 4:
                                a = -4;
                                break;
                            case 5:
                                a = rand(-2, -1);
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = -4;
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -4;
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = rand(1, 3);
                                break;
                            case 6:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = -4;
                                break;
                            case 5:
                                a = rand(2, 3);
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = -4;
                                break;
                            case 4:
                                a = rand(1, 2);
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ],
                5: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(1, 4);
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = 15 - this.amount;
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = rand(3, 4);
                                break;
                            case 8:
                                a = -5;
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(8, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = rand(3, 4);
                                break;
                            case 6:
                                a = rand(-7, -6);
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = rand(3, 4);
                                break;
                            case 5:
                                a = rand(8, 9);
                                break;
                            case 6:
                                a = -6;
                                break;
                            case 7:
                                a = -5;
                                break;
                            case 8:
                                a = 10 - this.amount;
                                break;
                            case 9:
                                a = -5;
                                break;
                            case 10:
                                a = rand(1, 2);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(7, 9);
                                break;
                            case 2:
                                a = 9;
                                break;
                            case 3:
                                a = -6;
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = rand(2, 4);
                                break;
                            case 8:
                                a = -6;
                                break;
                            case 9:
                                a = 4 - this.amount;
                                break;
                            case 10:
                                a = 6;
                                break;
                            case 11:
                                a = -5;
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = rand(1, 4);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(1, 3);
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = rand(1, 4);
                                break;
                            case 7:
                                a = -5;
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ],
                6: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -6;
                                break;
                            case 4:
                                a = rand(-3, -2);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = -6;
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = rand(-7, -6);
                                break;
                            case 9:
                                a = 6;
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 6);
                                break;
                            case 2:
                                a = rand(1, 2);
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = -6;
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = rand(-7, -6);
                                break;
                            case 7:
                                a = 10 - this.amount;
                                break;
                            case 8:
                                a = 5;
                                break;
                            case 9:
                                a = -6;
                                break;
                            case 10:
                                a = 1;
                                break;
                            case 11:
                                a = -6;
                                break;
                            case 12:
                                a = rand(-3, -2);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = 5;
                                break;
                            case 4:
                                a = -6;
                                break;
                            case 5:
                                a = rand(-4, -1);
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = rand(6, 8);
                                break;
                            case 8:
                                a = -5;
                                break;
                            case 9:
                                a = 20 - this.amount;
                                break;
                            case 10:
                                a = -6;
                                break;
                            case 11:
                                a = -4;
                                break;
                            case 12:
                                a = -6;
                                break;
                            case 13:
                                a = rand(-2, -1);
                                break;
                            case 14:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -6;
                                break;
                            case 4:
                                a = rand(-2, -1);
                                break;
                            case 5:
                                a = rand(5, 6);
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = 10 - this.amount;
                                break;
                            case 8:
                                a = -6;
                                break;
                            case 9:
                                a = rand(-3, -2);
                                break;
                            case 10:
                                a = rand(5, 7);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = -6;
                                break;
                            case 4:
                                a = rand(-2, -1);
                                break;
                            case 5:
                                a = 15 - this.amount;
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = -6;
                                break;
                            case 8:
                                a = 5;
                                break;
                            case 9:
                                a = rand(-2, -1);
                                break;
                            case 10:
                                a = 10 - this.amount;
                                break;
                            case 11:
                                a = -6;
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = -6;
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = -6;
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = rand(-8, -6);
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ],
                7: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(5, 6);
                                break;
                            case 4:
                                a = -7;
                                break;
                            case 5:
                                a = 16 - this.amount;
                                break;
                            case 6:
                                a = -7;
                                break;
                            case 7:
                                a = rand(-4, -3);
                                break;
                            case 8:
                                a = rand(1, 3);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -7;
                                break;
                            case 4:
                                a = rand(-2, -1);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = -7;
                                break;
                            case 7:
                                a = rand(5, 6);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = -7;
                                break;
                            case 4:
                                a = rand(-6, -5);
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = -7;
                                break;
                            case 8:
                                a = 5;
                                break;
                            case 9:
                                a = rand(-2, -1);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(7, 8);
                                break;
                            case 2:
                                a = 16 - this.amount;
                                break;
                            case 3:
                                a = -1;
                                break;
                            case 4:
                                a = -7;
                                break;
                            case 5:
                                a = -5;
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = 1;
                                break;
                            case 8:
                                a = -7;
                                break;
                            case 9:
                                a = 5;
                                break;
                            case 10:
                                a = rand(-4, -3);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = -7;
                                break;
                            case 5:
                                a = rand(5, 6);
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = 10 - this.amount;
                                break;
                            case 8:
                                a = -7;
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -7;
                                break;
                            case 4:
                                a = rand(-2, -1);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                if (rand(1, 2) === 1) a = 1; else a = 6;
                                break;
                            case 7:
                                a = -7;
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ],
                8: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -8;
                                break;
                            case 4:
                                a = 1;
                                break;
                            case 5:
                                a = rand(5, 6);
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = rand(1, 2);
                                break;
                            case 8:
                                a = -8;
                                break;
                            case 9:
                                a = rand(-2, -1);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(1, 2);
                                break;
                            case 4:
                                a = -8;
                                break;
                            case 5:
                                a = rand(-3, -2);
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 10 - this.amount;
                                break;
                            case 8:
                                a = rand(1, 2);
                                break;
                            case 9:
                                a = -8;
                                break;
                            case 10:
                                a = 5;
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(8, 9);
                                break;
                            case 2:
                                a = 17 - this.amount;
                                break;
                            case 3:
                                a = -8;
                                break;
                            case 4:
                                a = rand(-3, -1);
                                break;
                            case 5:
                                a = 15 - this.amount;
                                break;
                            case 6:
                                a = -8;
                                break;
                            case 7:
                                a = rand(1, 2);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = -5;
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = -8;
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = -8;
                                break;
                            case 8:
                                a = rand(5, 7);
                                break;
                            case 9:
                                a = 10 - this.amount;
                                break;
                            case 10:
                                a = rand(1, 2);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = -8;
                                break;
                            case 5:
                                a = rand(6, 7);
                                break;
                            case 6:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = rand(1, 2);
                                break;
                            case 4:
                                a = -8;
                                break;
                            case 5:
                                a = rand(-3, -2);
                                break;
                            case 6:
                                a = rand(1, 2);
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = -8;
                                break;
                            case 4:
                                a = rand(1, 2);
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                ],
                9: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(1, 3);
                                break;
                            case 4:
                                a = -9;
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = -9;
                                break;
                            case 8:
                                a = rand(5, 8);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(5, 8);
                                break;
                            case 4:
                                a = -9;
                                break;
                            case 5:
                                a = 15 - this.amount;
                                break;
                            case 6:
                                a = -9;
                                break;
                            case 7:
                                a = rand(1, 3);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = -9;
                                break;
                            case 4:
                                a = rand(1, 3);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = rand(6, 8);
                                break;
                            case 7:
                                a = -9;
                                break;
                            case 8:
                                a = rand(-2, -1);
                                break;
                            case 9:
                                a = 1;
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = -5;
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = -9;
                                break;
                            case 5:
                                a = rand(6, 8);
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = rand(1, 2);
                                break;
                            case 8:
                                a = -9;
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = -9;
                                break;
                            case 5:
                                a = rand(1, 3);
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 10 - this.amount;
                                break;
                            case 8:
                                a = -9;
                                break;
                            case 9:
                                a = rand(1, 3);
                                break;
                            case 10:
                                a = 5;
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -9;
                                break;
                            case 4:
                                a = rand(5, 8);
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ],
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(-9, -1);
                                break;
                            case 4:
                                a = 10 - this.amount;
                                break;
                            case 5:
                                a = rand(-9, -1);
                                break;
                            case 6:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = 5;
                                break;
                            case 4:
                                a = rand(-9, -6);
                                break;
                            case 5:
                                a = 15 - this.amount;
                                break;
                            case 6:
                                a = rand(1, 4);
                                break;
                            case 7:
                                a = 20 - this.amount;
                                break;
                            case 8:
                                a = rand(-4, -1);
                                break;
                            case 9:
                                a = 10 - this.amount;
                                break;
                            case 10:
                                a = rand(-9, -1);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = rand(-9, -6);
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = 2;
                                break;
                            case 7:
                                a = rand(-4, -3);
                                break;
                            case 8:
                                a = 15 - this.amount;
                                break;
                            case 9:
                                a = rand(-9, -6);
                                break;
                            case 10:
                                a = 10 - this.amount;
                                break;
                            case 11:
                                a = rand(-4, -3);
                                break;
                            case 12:
                                a = -5;
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = rand(-9, -1);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = rand(1, 4);
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = 20 - this.amount;
                                break;
                            case 9:
                                a = rand(-9, -1);
                                break;
                            case 10:
                                a = 10 - this.amount;
                                break;
                            case 11:
                                a = rand(-9, -1);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = 15 - this.amount;
                                break;
                            case 4:
                                a = rand(-9, -6);
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = 20 - this.amount;
                                break;
                            case 7:
                                a = rand(-2, -1);
                                break;
                            case 8:
                                a = rand(-7, -6);
                                break;
                            case 9:
                                a = 5;
                                break;
                            case 10:
                                a = 20 - this.amount;
                                break;
                            case 11:
                                a = rand(-9, -1);
                                break;
                            case 12:
                                a = 10 - this.amount;
                                break;
                            case 13:
                                a = rand(-9, -1);
                                break;
                            case 14:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = -5;
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = rand(-2, -1);
                                break;
                            case 5:
                                a = rand(-7, -6);
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = rand(-9, -1);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = rand(-9, -1);
                                break;
                            case 4:
                                a = 10 - this.amount;
                                break;
                            case 5:
                                a = -5;
                                break;
                            case 6:
                                a = rand(1, 4);
                                break;
                            case 7:
                                a = 10 - this.amount;
                                break;
                            case 8:
                                a = rand(-9, -1);
                                break;
                            case 9:
                                a = 10 - this.amount;
                                break;
                            case 10:
                                a = rand(1, 9);
                                break;
                            case 11:
                                a = 10 - this.amount;
                                break;
                            case 12:
                                a = rand(-9, -1);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = rand(-9, -6);
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = rand(-4, -1);
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = rand(1, 4);
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ]
            },
            'rb': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(-4, -1);
                                break;
                            case 4:
                                a = 4 - this.amount;
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = rand(6, 9);
                                break;
                            case 7:
                                a = 14 - this.amount;
                                break;
                            case 8:
                                a = -5;
                                break;
                            case 9:
                                a = rand(-8, -2);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 6);
                                break;
                            case 2:
                                a = rand(-4, -2);
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = rand(-8, -2);
                                break;
                            case 5:
                                a = 1;
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = -5;
                                break;
                            case 8:
                                a = rand(-4, -1);
                                break;
                            case 9:
                                a = 10 - this.amount;
                                break;
                            case 10:
                                a = rand(-9, -1);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = rand(-4, -1);
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = rand(-9, -1);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = rand(-9, -1);
                                break;
                            case 7:
                                a = 10 - this.amount;
                                break;
                            case 8:
                                a = -5;
                                break;
                            case 9:
                                a = rand(-4, -1);
                                break;
                            case 10:
                                a = 5;
                                break;
                            case 11:
                                a = 15 - this.amount;
                                break;
                            case 12:
                                a = rand(-4, -1);
                                break;
                            case 13:
                                a = 10 - this.amount;
                                break;
                            case 14:
                                a = rand(-9, -1);
                                break;
                            case 15:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(-9, -6);
                                break;
                            case 4:
                                a = 4;
                                break;
                            case 5:
                                a = -4;
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = rand(-8, -1);
                                break;
                            case 9:
                                a = -5;
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = rand(-9, -6);
                                break;
                            case 4:
                                a = 5 - this.amount;
                                break;
                            case 5:
                                a = rand(-4, -1);
                                break;
                            case 6:
                                a = 5 - this.amount;
                                break;
                            case 7:
                                a = rand(1, 4);
                                break;
                            case 8:
                                a = 15 - this.amount;
                                break;
                            case 9:
                                a = rand(-9, -6);
                                break;
                            case 10:
                                a = 5 - this.amount;
                                break;
                            case 11:
                                a = rand(-4, -1);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = rand(-4, -2);
                                break;
                            case 4:
                                a = -9;
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ]
            },
            's': {
                6: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 8);
                                break;
                            case 2:
                                a = 6;
                                break;
                            case 3:
                                a = -6;
                                break;
                            case 4:
                                a = -1;
                                break;
                            case 5:
                                a = rand(6, 7);
                                break;
                            case 6:
                                a = -6;
                                break;
                            case 7:
                                a = 9 - this.amount;
                                break;
                            case 8:
                                a = rand(-4, -3);
                                break;
                            case 9:
                                a = rand(6, 8);
                                break;
                            case 10:
                                a = -6;
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = rand(6, 9);
                                break;
                            case 3:
                                a = -6;
                                break;
                            case 4:
                                a = 6;
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = rand(1, 4);
                                break;
                            case 7:
                                a = -6;
                                break;
                            case 8:
                                a = -5;
                                break;
                            case 9:
                                a = rand(5, 6);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 7);
                                break;
                            case 2:
                                a = rand(6, 7);
                                break;
                            case 3:
                                a = -1;
                                break;
                            case 4:
                                a = -6;
                                break;
                            case 5:
                                a = rand(6, 7);
                                break;
                            case 6:
                                a = -6;
                                break;
                            case 7:
                                a = 6;
                                break;
                            case 8:
                                a = 10 - this.amount;
                                break;
                            case 9:
                                a = rand(3, 4);
                                break;
                            case 10:
                                a = -6;
                                break;
                            case 11:
                                a = rand(-2, -1);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rand(7, 9);
                                break;
                            case 4:
                                a = -6;
                                break;
                            case 5:
                                a = -1;
                                break;
                            case 6:
                                a = rand(6, 7);
                                break;
                            case 7:
                                a = 5 - this.amount;
                                break;
                            case 8:
                                a = rand(7, 8);
                                break;
                            case 9:
                                a = -6;
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 2);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = 7;
                                break;
                            case 4:
                                a = -6;
                                break;
                            case 5:
                                a = 1;
                                break;
                            case 6:
                                a = 5 - this.amount;
                                break;
                            case 7:
                                a = rand(8, 9);
                                break;
                            case 8:
                                a = rand(-2, -1);
                                break;
                            case 9:
                                a = -6;
                                break;
                            case 10:
                                a = rand(1, 2);
                                break;
                            case 11:
                                a = 5 - this.amount;
                                break;
                            case 12:
                                a = rand(7, 9);
                                break;
                            case 13:
                                a = -6;
                                break;
                            case 14:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rand(7, 9);
                                break;
                            case 4:
                                a = -6;
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ],
                7: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = rand(7, 9);
                                break;
                            case 3:
                                a = -7;
                                break;
                            case 4:
                                a = rand(1, 2);
                                break;
                            case 5:
                                a = 5 - this.amount;
                                break;
                            case 6:
                                a = rand(6, 7);
                                break;
                            case 7:
                                a = rand(1, 2);
                                break;
                            case 8:
                                a = -7;
                                break;
                            case 9:
                                a = -5;
                                break;
                            case 10:
                                a = rand(5, 7);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rand(7, 9);
                                break;
                            case 4:
                                a = -7;
                                break;
                            case 5:
                                a = rand(6, 7);
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = rand(1, 2);
                                break;
                            case 8:
                                a = rand(1, 2);
                                break;
                            case 9:
                                a = -7;
                                break;
                            case 10:
                                a = -5;
                                break;
                            case 11:
                                a = rand(6, 7);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 2);
                                break;
                            case 2:
                                a = rand(5, 6);
                                break;
                            case 3:
                                a = 6;
                                break;
                            case 4:
                                a = -7;
                                break;
                            case 5:
                                a = rand(1, 2);
                                break;
                            case 6:
                                a = 5 - this.amount;
                                break;
                            case 7:
                                a = rand(6, 8);
                                break;
                            case 8:
                                a = -1;
                                break;
                            case 9:
                                a = 2;
                                break;
                            case 10:
                                a = -7;
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 7);
                                break;
                            case 2:
                                a = rand(6, 7);
                                break;
                            case 3:
                                a = -7;
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = rand(1, 2);
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 5 - this.amount;
                                break;
                            case 8:
                                a = rand(7, 9);
                                break;
                            case 9:
                                a = -7;
                                break;
                            case 10:
                                a = 2;
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = rand(8, 9);
                                break;
                            case 3:
                                a = -7;
                                break;
                            case 4:
                                a = -1;
                                break;
                            case 5:
                                a = rand(7, 8);
                                break;
                            case 6:
                                a = -7;
                                break;
                            case 7:
                                a = 6;
                                break;
                            case 8:
                                a = 10 - this.amount;
                                break;
                            case 9:
                                a = rand(3, 4);
                                break;
                            case 10:
                                a = -7;
                                break;
                            case 11:
                                a = -5;
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 8;
                                break;
                            case 2:
                                a = 6;
                                break;
                            case 3:
                                a = -7;
                                break;
                            case 4:
                                a = rand(1, 2);
                                break;
                            case 5:
                                a = -5;
                                break;
                            case 6:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ],
                8: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = rand(8, 9);
                                break;
                            case 3:
                                a = -8;
                                break;
                            case 4:
                                a = rand(5, 7);
                                break;
                            case 5:
                                a = 6;
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = rand(3, 4);
                                break;
                            case 8:
                                a = -8;
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 7);
                                break;
                            case 2:
                                a = 7;
                                break;
                            case 3:
                                a = -8;
                                break;
                            case 4:
                                a = rand(7, 8);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = rand(3, 4);
                                break;
                            case 7:
                                a = -8;
                                break;
                            case 8:
                                a = rand(2, 3);
                                break;
                            case 9:
                                a = -5;
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 8);
                                break;
                            case 2:
                                a = 14 - this.amount;
                                break;
                            case 3:
                                a = -1;
                                break;
                            case 4:
                                a = -8;
                                break;
                            case 5:
                                a = rand(6, 7);
                                break;
                            case 6:
                                a = 14 - this.amount;
                                break;
                            case 7:
                                a = -8;
                                break;
                            case 8:
                                a = rand(1, 2);
                                break;
                            case 9:
                                a = 13 - this.amount;
                                break;
                            case 10:
                                a = -8;
                                break;
                            case 11:
                                a = rand(1, 4);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 8);
                                break;
                            case 2:
                                a = 14 - this.amount;
                                break;
                            case 3:
                                a = -8;
                                break;
                            case 4:
                                a = rand(1, 3);
                                break;
                            case 5:
                                a = 5 - this.amount;
                                break;
                            case 6:
                                a = rand(6, 7);
                                break;
                            case 7:
                                a = 2;
                                break;
                            case 8:
                                a = -8;
                                break;
                            case 9:
                                a = rand(1, 2);
                                break;
                            case 10:
                                a = -5;
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 7);
                                break;
                            case 2:
                                a = 1;
                                break;
                            case 3:
                                a = 14 - this.amount;
                                break;
                            case 4:
                                a = -8;
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ],
                9: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 8);
                                break;
                            case 2:
                                a = 14 - this.amount;
                                break;
                            case 3:
                                a = -9;
                                break;
                            case 4:
                                a = rand(1, 3);
                                break;
                            case 5:
                                a = 14 - this.amount;
                                break;
                            case 6:
                                a = -9;
                                break;
                            case 7:
                                a = -5;
                                break;
                            case 8:
                                a = rand(1, 3);
                                break;
                            case 9:
                                a = 5;
                                break;
                            case 10:
                                a = 14 - this.amount;
                                break;
                            case 11:
                                a = -9;
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 3);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = 14 - this.amount;
                                break;
                            case 4:
                                a = -9;
                                break;
                            case 5:
                                a = rand(1, 2);
                                break;
                            case 6:
                                a = 14 - this.amount;
                                break;
                            case 7:
                                a = -9;
                                break;
                            case 8:
                                a = rand(1, 2);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = rand(1, 3);
                                break;
                            case 3:
                                a = 14 - this.amount;
                                break;
                            case 4:
                                a = -9;
                                break;
                            case 5:
                                a = rand(3, 4);
                                break;
                            case 6:
                                a = -1;
                                break;
                            case 7:
                                a = 5 - this.amount;
                                break;
                            case 8:
                                a = rand(6, 8);
                                break;
                            case 9:
                                a = 14 - this.amount;
                                break;
                            case 10:
                                a = -9;
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 8);
                                break;
                            case 2:
                                a = 14 - this.amount;
                                break;
                            case 3:
                                a = -9;
                                break;
                            case 4:
                                a = 4;
                                break;
                            case 5:
                                a = rand(-8, -6);
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 14 - this.amount;
                                break;
                            case 8:
                                a = -9;
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 9;
                                break;
                            case 2:
                                a = rand(-4, -1);
                                break;
                            case 3:
                                a = 14 - this.amount;
                                break;
                            case 4:
                                a = -9;
                                break;
                            case 5:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    }
                ],
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 8);
                                break;
                            case 2:
                                a = 14 - this.amount;
                                break;
                            case 3:
                                a = rand(-9, -6);
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = 6;
                                break;
                            case 6:
                                a = 5 - this.amount;
                                break;
                            case 7:
                                a = rand(6, 9);
                                break;
                            case 8:
                                a = 5 - this.amount;
                                break;
                            case 9:
                                a = -5;
                                break;
                            case 10:
                                a = rand(1, 9);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = 14 - this.amount;
                                break;
                            case 4:
                                a = rand(-9, -6);
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = 1;
                                break;
                            case 7:
                                a = 5 - this.amount;
                                break;
                            case 8:
                                a = rand(6, 9);
                                break;
                            case 9:
                                a = 5 - this.amount;
                                break;
                            case 10:
                                a = rand(1, 4);
                                break;
                            case 11:
                                a = -5;
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 9;
                                break;
                            case 2:
                                a = rand(-4, -1);
                                break;
                            case 3:
                                a = 14 - this.amount;
                                break;
                            case 4:
                                a = rand(-9, -6);
                                break;
                            case 5:
                                a = 1;
                                break;
                            case 6:
                                a = 5 - this.amount;
                                break;
                            case 7:
                                a = rand(6, 9);
                                break;
                            case 8:
                                a = 10 - this.amount;
                                break;
                            case 9:
                                a = 4;
                                break;
                            case 10:
                                a = rand(-9, -6);
                                break;
                            case 11:
                                a = 6;
                                break;
                            case 12:
                                a = 5 - this.amount;
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rand(6, 9);
                                break;
                            case 4:
                                a = 5 - this.amount;
                                break;
                            case 5:
                                a = rand(6, 9);
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = rand(3, 4);
                                break;
                            case 8:
                                a = rand(-8, -6);
                                break;
                            case 9:
                                a = 1;
                                break;
                            case 10:
                                a = -5;
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 8);
                                break;
                            case 2:
                                a = 14 - this.amount;
                                break;
                            case 3:
                                a = rand(-9, -7);
                                break;
                            case 4:
                                a = 2;
                                break;
                            case 5:
                                a = 5 - this.amount;
                                break;
                            case 6:
                                a = rand(6, 8);
                                break;
                            case 7:
                                a = 10 - this.amount;
                                break;
                            case 8:
                                a = rand(1, 4);
                                break;
                            case 9:
                                a = 5 - this.amount;
                                break;
                            case 10:
                                a = rand(1, 3);
                                break;
                            case 11:
                                a = 9 - this.amount;
                                break;
                            case 12:
                                a = rand(-4, -1);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 8 - this.amount;
                                break;
                            case 3:
                                a = 6;
                                break;
                            case 4:
                                a = rand(-9, -6);
                                break;
                            case 5:
                                a = 1;
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rand(6, 9);
                                break;
                            case 4:
                                a = 5 - this.amount;
                                break;
                            case 5:
                                a = rand(1, 3);
                                break;
                            case 6:
                                a = 14 - this.amount;
                                break;
                            case 7:
                                a = rand(-9, -7);
                                break;
                            case 8:
                                a = -5;
                                break;
                            case 9:
                                a = 6;
                                break;
                            case 10:
                                a = 9 - this.amount;
                                break;
                            case 11:
                                a = rand(-4, -1);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                ],
            },
            'sb': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 8);
                                break;
                            case 2:
                                a = 14 - this.amount;
                                break;
                            case 3:
                                a = rand(-9, -6);
                                break;
                            case 4:
                                a = 4 - this.amount;
                                break;
                            case 5:
                                a = 1;
                                break;
                            case 6:
                                a = rand(1, 3);
                                break;
                            case 7:
                                a = 14 - this.amount;
                                break;
                            case 8:
                                a = rand(-9, -6);
                                break;
                            case 9:
                                a = 4 - this.amount;
                                break;
                            case 10:
                                a = rand(-3, -1);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = rand(-3, -1);
                                break;
                            case 3:
                                a = 9;
                                break;
                            case 4:
                                a = 5 - this.amount;
                                break;
                            case 5:
                                a = rand(-3, -2);
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 6;
                                break;
                            case 8:
                                a = 5 - this.amount;
                                break;
                            case 9:
                                a = rand(-2, -1);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 7);
                                break;
                            case 2:
                                a = 13 - this.amount;
                                break;
                            case 3:
                                a = rand(-8, -7);
                                break;
                            case 4:
                                a = rand(-4, -3);
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = 14 - this.amount;
                                break;
                            case 7:
                                a = rand(-9, -6);
                                break;
                            case 8:
                                a = 4 - this.amount;
                                break;
                            case 9:
                                a = 5;
                                break;
                            case 10:
                                a = rand(-8, -3);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 6);
                                break;
                            case 2:
                                a = 12 - this.amount;
                                break;
                            case 3:
                                a = rand(-7, -6);
                                break;
                            case 4:
                                a = rand(-4, -3);
                                break;
                            case 5:
                                a = 6;
                                break;
                            case 6:
                                a = -2;
                                break;
                            case 7:
                                a = 13 - this.amount;
                                break;
                            case 8:
                                a = rand(-6, -7);
                                break;
                            case 9:
                                a = rand(-4, -3);
                                break;
                            case 10:
                                a = 5;
                                break;
                            case 11:
                                a = rand(-2, -1);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 8);
                                break;
                            case 2:
                                a = 14 - this.amount;
                                break;
                            case 3:
                                a = rand(-9, -6);
                                break;
                            case 4:
                                a = 4 - this.amount;
                                break;
                            case 5:
                                a = rand(-3, -2);
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 13 - this.amount;
                                break;
                            case 8:
                                a = rand(-8, -6);
                                break;
                            case 9:
                                a = 1;
                                break;
                            case 10:
                                a = 4 - this.amount;
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 9;
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = rand(-9, -6);
                                break;
                            case 4:
                                a = 3 - this.amount;
                                break;
                            case 5:
                                a = 2;
                                break;
                            case 6:
                                a = rand(-4, -1);
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                ]
            },
            'sr': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 8);
                                break;
                            case 2:
                                a = 14 - this.amount;
                                break;
                            case 3:
                                a = rand(-8, -6);
                                break;
                            case 4:
                                a = 15 - this.amount;
                                break;
                            case 5:
                                a = rand(-9, -6);
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = 4;
                                break;
                            case 8:
                                a = rand(-9, -6);
                                break;
                            case 9:
                                a = 10 - this.amount;
                                break;
                            case 10:
                                a = rand(-9, -1);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 7);
                                break;
                            case 2:
                                a = 13 - this.amount;
                                break;
                            case 3:
                                a = rand(-8, -7);
                                break;
                            case 4:
                                a = 10 - this.amount;
                                break;
                            case 5:
                                a = rand(-9, -1);
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = rand(1, 4);
                                break;
                            case 8:
                                a = 5 - this.amount;
                                break;
                            case 9:
                                a = rand(1, 4);
                                break;
                            case 10:
                                a = 5;
                                break;
                            case 11:
                                a = 5 - this.amount;
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(-4, -1);
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = 5 - this.amount;
                                break;
                            case 6:
                                a = rand(6, 9);
                                break;
                            case 7:
                                a = 5 - this.amount;
                                break;
                            case 8:
                                a = 5;
                                break;
                            case 9:
                                a = rand(-9, -1);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(-8, -6);
                                break;
                            case 4:
                                a = 9;
                                break;
                            case 5:
                                a = 5 - this.amount;
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = rand(-9, -5);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = rand(-9, -5);
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = rand(-6, -5);
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = rand(-9, -1);
                                break;
                            case 8:
                                a = 10 - this.amount;
                                break;
                            case 9:
                                a = rand(1, 4);
                                break;
                            case 10:
                                a = rand(-9, -5);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 8);
                                break;
                            case 2:
                                a = rand(5, 6);
                                break;
                            case 3:
                                a = rand(-9, -5);
                                break;
                            case 4:
                                a = 10 - this.amount;
                                break;
                            case 5:
                                a = rand(1, 4);
                                break;
                            case 6:
                                a = rand(-9, -5);
                                break;
                            case 7:
                                a = 10 - this.amount;
                                break;
                            case 8:
                                a = 1;
                                break;
                            case 9:
                                a = rand(2, 3);
                                break;
                            case 10:
                                a = rand(-9, -5);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                ]
            },
            'srb': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = rand(-9, -5);
                                break;
                            case 4:
                                a = 3;
                                break;
                            case 5:
                                a = 4 - this.amount;
                                break;
                            case 6:
                                a = 9;
                                break;
                            case 7:
                                a = rand(-8, -6);
                                break;
                            case 8:
                                a = rand(-4, -1);
                                break;
                            case 9:
                                a = 5;
                                break;
                            case 10:
                                a = rand(-5, -4);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 8);
                                break;
                            case 2:
                                a = 14 - this.amount;
                                break;
                            case 3:
                                a = rand(-9, -5);
                                break;
                            case 4:
                                a = 3;
                                break;
                            case 5:
                                a = 4 - this.amount;
                                break;
                            case 6:
                                a = 9;
                                break;
                            case 7:
                                a = rand(-8, -6);
                                break;
                            case 8:
                                a = rand(-4, -1);
                                break;
                            case 9:
                                a = 5;
                                break;
                            case 10:
                                a = rand(-5, -4);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 9;
                                break;
                            case 3:
                                a = 14 - this.amount;
                                break;
                            case 4:
                                a = rand(-9, -6);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = rand(-4, -1);
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = rand(-9, -5);
                                break;
                            case 9:
                                a = 10 - this.amount;
                                break;
                            case 10:
                                a = rand(-9, -1);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 8);
                                break;
                            case 2:
                                a = 4 - this.amount;
                                break;
                            case 3:
                                a = 9;
                                break;
                            case 4:
                                a = rand(-8, -7);
                                break;
                            case 5:
                                a = 4 - this.amount;
                                break;
                            case 6:
                                a = 6;
                                break;
                            case 7:
                                a = rand(-4, -2);
                                break;
                            case 8:
                                a = 4 - this.amount;
                                break;
                            case 9:
                                a = rand(7, 9);
                                break;
                            case 10:
                                a = rand(-9, -5);
                                break;
                            case 11:
                                a = 10 - this.amount;
                                break;
                            case 12:
                                a = rand(-9, -1);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(-8, -6);
                                break;
                            case 4:
                                a = 9;
                                break;
                            case 5:
                                a = rand(-9, -5);
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = rand(-5, -2);
                                break;
                            case 8:
                                a = 4 - this.amount;
                                break;
                            case 9:
                                a = 9;
                                break;
                            case 10:
                                a = rand(-9, -4);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(7, 9);
                                break;
                            case 2:
                                a = 8;
                                break;
                            case 3:
                                a = 14 - this.amount;
                                break;
                            case 4:
                                a = rand(-9, -6);
                                break;
                            case 5:
                                a = 4 - this.amount;
                                break;
                            case 6:
                                a = 9;
                                break;
                            case 7:
                                a = rand(-8, -6);
                                break;
                            case 8:
                                a = 4 - this.amount;
                                break;
                            case 9:
                                a = rand(-3, -1);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(2, 3);
                                break;
                            case 2:
                                a = 9;
                                break;
                            case 3:
                                a = rand(-6, -5);
                                break;
                            case 4:
                                a = 4 - this.amount;
                                break;
                            case 5:
                                a = 9;
                                break;
                            case 6:
                                a = -3;
                                break;
                            case 7:
                                a = rand(-9, -1);
                                break;
                            case 8:
                                a = 10 - this.amount;
                                break;
                            case 9:
                                a = rand(-9, -1);
                                break;
                            case 10:
                                a = 5;
                                break;
                            case 11:
                                a = -5;
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(-9, -1);
                                break;
                            case 4:
                                a = 10 - this.amount;
                                break;
                            case 5:
                                a = rand(-9, -1);
                                break;
                            case 6:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                ]
            }
        },
        '1**': {
            'b': {
                'o': [
                    (step, a) => {
                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 3:
                                a = rn(6, 7);
                                break;
                            case 4:
                                a = rn(rand(-4, -3), rand(-14, -13), 4 - this.amount);
                                break;
                            case 5:
                                a = rand(1, 9);
                                break;
                            case 6:
                                a = rn(45 - this.amount, 35 - this.amount, 36 - this.amount, 46 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(-4, -2), rand(-24, -22), rand(-14, -12));
                                break;
                            case 8:
                                a = rn(rand(1, 9), rand(21, 29), rand(31, 39));
                                break;
                            case 9:
                                a = rn(85 - this.amount, 95 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(-44, -41), rand(-34, -31));
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(1, 4), rand(6, 9));
                                break;
                            case 2:
                                a = rn(15 - this.amount, 25 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-14, -11), rand(-4, -1));
                                break;
                            case 4:
                                a = rand(1, 9);
                                break;
                            case 5:
                                a = rn(55 - this.amount, 65 - this.amount, 75 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-34, -31), rand(-4, -1));
                                break;
                            case 7:
                                a = rn(15, 25);
                                break;
                            case 8:
                                a = rn(15 - this.amount, 25 - this.amount, 5 - this.amount);
                                break;
                            case 9:
                                a = rand(-4, -1);
                                break;
                            case 10:
                                a = rand(1, 70);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = rand(1, 2);
                                break;
                            case 3:
                                a = rn(rand(-4, -3), 4 - this.amount);
                                break;
                            case 4:
                                a = rn(25 - this.amount, 35 - this.amount, 45 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(-14, -11), rand(-24, -21));
                                break;
                            case 6:
                                a = rand(1, 9);
                                break;
                            case 7:
                                a = rn(55 - this.amount, 65 - this.amount, 75 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(-4, -1), rand(-34, -31));
                                break;
                            case 9:
                                a = rand(1, 9);
                                break;
                            case 10:
                                a = rand(11, 19);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(6, 7);
                                break;
                            case 2:
                                a = rn(-4, -3, 4 - this.amount);
                                break;
                            case 3:
                                a = rn(35 - this.amount, 45 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(1, 3), rand(11, 13));
                                break;
                            case 5:
                                a = rn(-14, -24, -34);
                                break;
                            case 6:
                                a = rn(65 - this.amount, 76 - this.amount, 87 - this.amount);
                                break;
                            case 7:
                                a = rn(54 - this.amount, 63 - this.amount, -4, -3);
                                break;
                            case 8:
                                a = rn(41 - this.amount, 31 - this.amount, 40 - this.amount);
                                break;
                            case 9:
                                a = rand(6, 7);
                                break;
                            case 10:
                                a = rn(-24, 24 - this.amount);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = rand(-4, -1);
                                break;
                            case 3:
                                a = rn(15, 25, 35, 45);
                                break;
                            case 4:
                                a = rn(15 - this.amount, 5 - this.amount);
                                break;
                            case 5:
                                a = rn(-4, -1);
                                break;
                            case 6:
                                a = rn(55 - this.amount, 66 - this.amount, 75 - this.amount);
                                break;
                            case 7:
                                a = rn(-4, -3, 54 - this.amount);
                                break;
                            case 8:
                                a = rn(75 - this.amount, 85 - this.amount, 95 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-14, -11), rand(-34, -31));
                                break;
                            case 10:
                                a = rand(1, 9);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ]
            },
            'r': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 3:
                                a = rand(-9, -1);
                                break;
                            case 4:
                                a = rand(11, 19);
                                break;
                            case 5:
                                a = rn(41 - this.amount, 46 - this.amount, 91 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-29, -27), rand(-19, -17));
                                break;
                            case 7:
                                a = rn(82 - this.amount, 92 - this.amount, 80 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(-19, -18), -9, 8);
                                break;
                            case 9:
                                a = rn(-50, -10);
                                break;
                            case 10:
                                a = rand(1, 9);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = rn(70 - this.amount, 80 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-9, -1), 80 - this.amount);
                                break;
                            case 4:
                                a = rand(1, 9);
                                break;
                            case 5:
                                a = rn(95 - this.amount, 90 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-59, -56), rand(-79, -76));
                                break;
                            case 7:
                                a = rand(1, 9);
                                break;
                            case 8:
                                a = rn(40 - this.amount, 45 - this.amount, 46 - this.amount, 41 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-39, -37), rand(-29, -27));
                                break;
                            case 10:
                                a = rand(1, 9);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(3, 9);
                                break;
                            case 2:
                                a = rn(7, 9);
                                break;
                            case 3:
                                a = rn(20 - this.amount, 25 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-9, -6), rand(-19, -16));
                                break;
                            case 5:
                                a = rn(40 - this.amount, 70 - this.amount, 80 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-19, -11), rand(-9, -1));
                                break;
                            case 7:
                                a = rn(95 - this.amount, 86 - this.amount, 96 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(-29, -27), rand(-69, -67));
                                break;
                            case 9:
                                a = rand(1, 9);
                                break;
                            case 10:
                                a = rand(1, 9);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(4, 9);
                                break;
                            case 2:
                                a = rand(4, 9);
                                break;
                            case 3:
                                a = rn(30 - this.amount, 40 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-19, -11), rand(-29, -21));
                                break;
                            case 5:
                                a = rand(1, 9);
                                break;
                            case 6:
                                a = rn(60 - this.amount, 70 - this.amount, 80 - this.amount);
                                break;
                            case 7:
                                a = rand(-9, -1);
                                break;
                            case 8:
                                a = rn(85 - this.amount, 95 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-59, -56), rand(-69, -66));
                                break;
                            case 10:
                                a = rn(rand(21, 29), rand(31, 39));
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 3:
                                a = rand(-9, -1);
                                break;
                            case 4:
                                a = rn(40 - this.amount, 30 - this.amount, 20 - this.amount);
                                break;
                            case 5:
                                a = rand(-9, -1);
                                break;
                            case 6:
                                a = rn(rand(21, 29), rand(11, 19));
                                break;
                            case 7:
                                a = rn(80 - this.amount, 90 - this.amount, 85 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(-29, -26), rand(-19, -16));
                                break;
                            case 9:
                                a = rand(1, 9);
                                break;
                            case 10:
                                a = rand(1, 9);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ]
            },
            's': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 6);
                                break;
                            case 2:
                                a = rn(rand(26, 28), rand(36, 28));
                                break;
                            case 3:
                                a = rn(25 - this.amount, 15 - this.amount, 5 - this.amount);
                                break;
                            case 4:
                                a = rn(84 - this.amount, 94 - this.amount, 44 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(-9, -6), rand(-19, -16));
                                break;
                            case 6:
                                a = rand(1, 9);
                                break;
                            case 7:
                                a = rn(50 - this.amount, 10 - this.amount, 20 - this.amount);
                                break;
                            case 8:
                                a = rn(14, 24);
                                break;
                            case 9:
                                a = rn(rand(-9, -6), rand(-19, -16));
                                break;
                            case 10:
                                a = rand(1, 20);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 3);
                                break;
                            case 2:
                                a = rn(rand(40, 41), rand(20, 21), rand(30, 31));
                                break;
                            case 3:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 4:
                                a = rn(34 - this.amount, 44 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(-9, -6), rand(-19, -16));
                                break;
                            case 6:
                                a = rn(56, 55);
                                break;
                            case 7:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(26, 29), rand(36, 39));
                                break;
                            case 9:
                                a = rn(30, 40);
                                break;
                            case 10:
                                a = rn(15 - this.amount, 5 - this.amount);
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = rn(34 - this.amount, 44 - this.amount);
                                break;
                            case 3:
                                a = rand(-9, -6);
                                break;
                            case 4:
                                a = rn(16, 26);
                                break;
                            case 5:
                                a = rn(74 - this.amount, 84 - this.amount);
                                break;
                            case 6:
                                a = rand(-9, -6);
                                break;
                            case 7:
                                a = rn(15, 5);
                                break;
                            case 8:
                                a = rn(65 - this.amount, 55 - this.amount, 15 - this.amount);
                                break;
                            case 9:
                                a = rn(94 - this.amount, 84 - this.amount, 74 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(-59, -56), rand(-69, -66));
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(5, 6);
                                break;
                            case 2:
                                a = rn(rand(6, 8), rand(16, 18));
                                break;
                            case 3:
                                a = 5 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(36, 39), rand(76, 79));
                                break;
                            case 5:
                                a = rn(15 - this.amount, 25 - this.amount);
                                break;
                            case 6:
                                a = rn(34 - this.amount, 44 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(-9, -6), rand(-19, -16));
                                break;
                            case 8:
                                a = rn(26, 16, 56);
                                break;
                            case 9:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 10:
                                a = rand(1, 40);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = rn(14 - this.amount, 24 - this.amount);
                                break;
                            case 3:
                                a = rand(-9, -6);
                                break;
                            case 4:
                                a = rn(11, 19);
                                break;
                            case 5:
                                a = rand(44 - this.amount, 94 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-39, 36), rand(-29, -26));
                                break;
                            case 7:
                                a = rand(1, 9);
                                break;
                            case 8:
                                a = rn(-this.amount, 10 - this.amount);
                                break;
                            case 9:
                                a = rn(24, 34);
                                break;
                            case 10:
                                a = rn(rand(-19, -16), rand(-9, -6));
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ]
            },
        },
        '2': {
            'b': {
                1: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(75, 25, 35);
                                break;
                            case 2:
                                a = rn(-11, -21);
                                break;
                            case 3:
                                a = rn(85 - this.amount, 95 - this.amount);
                                break;
                            case 4:
                                a = rn(-31, -21);
                                break;
                            case 5:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 6:
                                a = rn(15, 25);
                                break;
                            case 7:
                                a = rn(-11, -21);
                                break;
                            case 8:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 9:
                                a = rn(75 - this.amount, 65 - this.amount);
                                break;
                            case 10:
                                a = rn(-61, -51);
                                break;
                            case 11:
                                a = rn(15, 25);
                                break;
                            case 12:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(56, 59);
                                break;
                            case 2:
                                a = 45 - this.amount;
                                break;
                            case 3:
                                a = rn(-41, -31, -21);
                                break;
                            case 4:
                                a = rn(69 - this.amount, 79 - this.amount, 89 - this.amount);
                                break;
                            case 5:
                                a = rn(58 - this.amount, 59 - this.amount);
                                break;
                            case 6:
                                a = rn(-12, -13);
                                break;
                            case 7:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 8:
                                a = rn(15, 25);
                                break;
                            case 9:
                                a = rn(-11, -21);
                                break;
                            case 10:
                                a = rn(99 - this.amount, 89 - this.amount, 79 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(-44, -41), rand(-34, -31));
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(46, 49), rand(36, 39), rand(86, 89));
                                break;
                            case 2:
                                a = rn(25 - this.amount, 15 - this.amount);
                                break;
                            case 3:
                                a = -11;
                                break;
                            case 4:
                                a = rn(95 - this.amount, 75 - this.amount, 85 - this.amount);
                                break;
                            case 5:
                                a = rn(-21, -61);
                                break;
                            case 6:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 7:
                                a = rn(59 - this.amount, 58 - this.amount, 57 - this.amount);
                                break;
                            case 8:
                                a = rn(-11, -12);
                                break;
                            case 9:
                                a = rn(35 - this.amount, 25 - this.amount);
                                break;
                            case 10:
                                a = rn(-21, -11);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(61, 64), rand(71, 74));
                                break;
                            case 2:
                                a = rn(85 - this.amount, 95 - this.amount);
                                break;
                            case 3:
                                a = rn(-71, -81);
                                break;
                            case 4:
                                a = rn(35, 25);
                                break;
                            case 5:
                                a = rand(-14, -11);
                                break;
                            case 6:
                                a = rn(69 - this.amount, 79 - this.amount);
                                break;
                            case 7:
                                a = rn(53 - this.amount, 54 - this.amount);
                                break;
                            case 8:
                                a = rn(-13, -12);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ],
                2: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(25, 35, 45);
                                break;
                            case 2:
                                a = rn(-12, -22);
                                break;
                            case 3:
                                a = 45 - this.amount;
                                break;
                            case 4:
                                a = rn(-32, -22);
                                break;
                            case 5:
                                a = rn(76 - this.amount, 86 - this.amount);
                                break;
                            case 6:
                                a = rn(-22, -12);
                                break;
                            case 7:
                                a = rn(95 - this.amount, 85 - this.amount);
                                break;
                            case 8:
                                a = rn(53 - this.amount, 63 - this.amount);
                                break;
                            case 9:
                                a = rand(-23, -20);
                                break;
                            case 10:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(53, 54), rand(63, 64));
                                break;
                            case 2:
                                a = rand(-23, -21);
                                break;
                            case 3:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 4:
                                a = rn(25, 65, 75);
                                break;
                            case 5:
                                a = rn(-32, -22);
                                break;
                            case 6:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 7:
                                a = rn(58 - this.amount, 59 - this.amount, 68 - this.amount, 69 - this.amount);
                                break;
                            case 8:
                                a = rn(-21, -22, -23);
                                break;
                            case 9:
                                a = rn(15 - this.amount, 16 - this.amount);
                                break;
                            case 10:
                                a = -12;
                                break;
                            case 11:
                                a = rn(15, 20, 25);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(46, 49), rand(36, 39));
                                break;
                            case 2:
                                a = rn(25 - this.amount, 15 - this.amount);
                                break;
                            case 3:
                                a = -12;
                                break;
                            case 4:
                                a = rn(95 - this.amount, 85 - this.amount);
                                break;
                            case 5:
                                a = rn(-22, -12);
                                break;
                            case 6:
                                a = rn(52 - this.amount, 51 - this.amount);
                                break;
                            case 7:
                                a = rn(-20, -21);
                                break;
                            case 8:
                                a = rn(16, 17);
                                break;
                            case 9:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 10:
                                a = rand(43, 49);
                                break;
                            case 11:
                                a = rand(-23, -21);
                                break;
                            case 12:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(61, 64), rand(71, 74));
                                break;
                            case 2:
                                a = rn(85 - this.amount, 95 - this.amount);
                                break;
                            case 3:
                                a = rn(-72, -82);
                                break;
                            case 4:
                                a = rn(16, 26);
                                break;
                            case 5:
                                a = rn(79 - this.amount, 89 - this.amount);
                                break;
                            case 6:
                                a = rn(57 - this.amount, 67 - this.amount);
                                break;
                            case 7:
                                a = rn(-20, -21);
                                break;
                            case 8:
                                a = rn(25 - this.amount, 26 - this.amount);
                                break;
                            case 9:
                                a = rn(-22, -12);
                                break;
                            case 10:
                                a = rn(29 - this.amount, 39 - this.amount, 89 - this.amount);
                                break;
                            case 11:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ],
                3: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(26, 27), rand(36, 37));
                                break;
                            case 2:
                                a = rn(-13, -23);
                                break;
                            case 3:
                                a = rn(45 - this.amount, 35 - this.amount);
                                break;
                            case 4:
                                a = rn(-33, -23);
                                break;
                            case 5:
                                a = rn(77 - this.amount, 87 - this.amount);
                                break;
                            case 6:
                                a = rn(-13, -23);
                                break;
                            case 7:
                                a = rn(96 - this.amount, 86 - this.amount);
                                break;
                            case 8:
                                a = rn(53 - this.amount, 63 - this.amount);
                                break;
                            case 9:
                                a = rand(-33, -30);
                                break;
                            case 10:
                                a = rn(10 - this.amount, 45 - this.amount);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(51, 52), rand(61, 62));
                                break;
                            case 2:
                                a = rand(-31, -30);
                                break;
                            case 3:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 4:
                                a = rn(rand(36, 37), rand(76, 77));
                                break;
                            case 5:
                                a = -23;
                                break;
                            case 6:
                                a = 79 - this.amount;
                                break;
                            case 7:
                                a = rn(-33, -32);
                                break;
                            case 8:
                                a = rn(15 - this.amount, 16 - this.amount, 17 - this.amount);
                                break;
                            case 9:
                                a = -13;
                                break;
                            case 10:
                                a = rn(15, 55, 65);
                                break;
                            case 11:
                                a = rn(10 - this.amount, 5 - this.amount);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(46, 49), rand(36, 39));
                                break;
                            case 2:
                                a = rn(26 - this.amount, 16 - this.amount);
                                break;
                            case 3:
                                a = -13;
                                break;
                            case 4:
                                a = rn(96 - this.amount, 86 - this.amount);
                                break;
                            case 5:
                                a = rn(-23, -13);
                                break;
                            case 6:
                                a = rn(53 - this.amount, 52 - this.amount);
                                break;
                            case 7:
                                a = rn(-31, -32);
                                break;
                            case 8:
                                a = rn(rand(26, 27), rand(16, 17));
                                break;
                            case 9:
                                a = rn(15 - this.amount, 25 - this.amount);
                                break;
                            case 10:
                                a = -13;
                                break;
                            case 11:
                                a = rand(11, 12);
                                break;
                            case 12:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(61, 64), rand(71, 74));
                                break;
                            case 2:
                                a = rn(85 - this.amount, 95 - this.amount);
                                break;
                            case 3:
                                a = rn(-83, -73);
                                break;
                            case 4:
                                a = rn(rand(35, 36), rand(25, 26));
                                break;
                            case 5:
                                a = rn(79 - this.amount, 89 - this.amount);
                                break;
                            case 6:
                                a = rand(-23, -22);
                                break;
                            case 7:
                                a = rand(-31, -30);
                                break;
                            case 8:
                                a = rn(-13, -23);
                                break;
                            case 9:
                                a = rn(45 - this.amount, 55 - this.amount);
                                break;
                            case 10:
                                a = rn(-30, -33);
                                break;
                            case 11:
                                a = rn(rand(11, 12), rand(21, 22));
                                break;
                            case 12:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 13:
                                a = rn(25, 35);
                                break;
                            case 14:
                                a = rn(-13, -23);
                                break;
                            case 15:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ],
                4: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(26, 27), rand(36, 37));
                                break;
                            case 2:
                                a = rn(-14, -24);
                                break;
                            case 3:
                                a = rn(48 - this.amount, 38 - this.amount);
                                break;
                            case 4:
                                a = rn(-34, -24);
                                break;
                            case 5:
                                a = rn(77 - this.amount, 87 - this.amount);
                                break;
                            case 6:
                                a = rn(-14, -24);
                                break;
                            case 7:
                                a = rn(-41, -42);
                                break;
                            case 8:
                                a = 15;
                                break;
                            case 9:
                                a = rn(-14, -24);
                                break;
                            case 10:
                                a = rn(44 - this.amount, 99 - this.amount);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(72, 73), rand(62, 63));
                                break;
                            case 2:
                                a = rand(-42, -41);
                                break;
                            case 3:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 4:
                                a = rn(rand(37, 38), rand(77, 78));
                                break;
                            case 5:
                                a = -24;
                                break;
                            case 6:
                                a = 79 - this.amount;
                                break;
                            case 7:
                                a = rn(-43, -42);
                                break;
                            case 8:
                                a = rn(15 - this.amount, 16 - this.amount, 5 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(21, 22), rand(31, 32));
                                break;
                            case 10:
                                a = rn(-14, -24);
                                break;
                            case 11:
                                a = rn(10, 44 - this.amount);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(47, 49), rand(37, 39));
                                break;
                            case 2:
                                a = rn(26 - this.amount, 17 - this.amount);
                                break;
                            case 3:
                                a = -14;
                                break;
                            case 4:
                                a = rn(98 - this.amount, 86 - this.amount);
                                break;
                            case 5:
                                a = -24;
                                break;
                            case 6:
                                a = 15;
                                break;
                            case 7:
                                a = rn(-41, -42);
                                break;
                            case 8:
                                a = rn(15 - this.amount, 16 - this.amount);
                                break;
                            case 9:
                                a = -14;
                                break;
                            case 10:
                                a = rn(rand(21, 24), rand(31, 34));
                                break;
                            case 11:
                                a = rand(10 - this.amount, 11 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(35, 38), rand(26, 28));
                                break;
                            case 13:
                                a = -24;
                                break;
                            case 14:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(61, 63), rand(71, 73));
                                break;
                            case 2:
                                a = rn(88 - this.amount, 98 - this.amount);
                                break;
                            case 3:
                                a = rn(-14, -34, -24);
                                break;
                            case 4:
                                a = rn(-43, -41);
                                break;
                            case 5:
                                a = -this.amount;
                                break;
                            case 6:
                                a = rn(rand(47, 49), rand(36, 39));
                                break;
                            case 7:
                                a = rn(26 - this.amount, 17 - this.amount);
                                break;
                            case 8:
                                a = -14;
                                break;
                            case 9:
                                a = rn(98 - this.amount, 86 - this.amount);
                                break;
                            case 10:
                                a = rn(-34, -24);
                                break;
                            case 11:
                                a = 15;
                                break;
                            case 12:
                                a = rn(-41, -42);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ],
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(11, 13), rand(21, 23));
                                break;
                            case 2:
                                a = rn(25, 15);
                                break;
                            case 3:
                                a = 14 - this.amount;
                                break;
                            case 4:
                                a = rand(-13, -11);
                                break;
                            case 5:
                                a = rn(51, 61, 71, 81);
                                break;
                            case 6:
                                a = rn(42 - this.amount, 41 - this.amount);
                                break;
                            case 7:
                                a = rn(21 - this.amount, 20 - this.amount);
                                break;
                            case 8:
                                a = rn(16, 17, 26, 27);
                                break;
                            case 9:
                                a = rn(24 - this.amount, 14 - this.amount);
                                break;
                            case 10:
                                a = rn(-14, -12);
                                break;
                            case 11:
                                a = rn(16, 17, 56, 57);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(30, 33), rand(40, 43));
                                break;
                            case 2:
                                a = rn(26, 36, 46);
                                break;
                            case 3:
                                a = rn(46 - this.amount, 45 - this.amount);
                                break;
                            case 4:
                                a = rn(22 - this.amount, 12 - this.amount);
                                break;
                            case 5:
                                a = rn(52, 62, 70);
                                break;
                            case 6:
                                a = rn(50 - this.amount, 51 - this.amount);
                                break;
                            case 7:
                                a = rn(16, 17, 26, 27);
                                break;
                            case 8:
                                a = rn(35 - this.amount, 46 - this.amount);
                                break;
                            case 9:
                                a = rn(-10, -20);
                                break;
                            case 10:
                                a = rn(-14, -13, -12);
                                break;
                            case 11:
                                a = rn(19 - this.amount, 29 - this.amount, 39 - this.amount);
                                break;
                            case 12:
                                a = rn(50, 60);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(53, 54), rand(63, 64));
                                break;
                            case 2:
                                a = rn(11 - this.amount, 32 - this.amount, 23 - this.amount);
                                break;
                            case 3:
                                a = rn(15, 16);
                                break;
                            case 4:
                                a = rn(14 - this.amount, 12 - this.amount);
                                break;
                            case 5:
                                a = rn(65, 75, 85);
                                break;
                            case 6:
                                a = 65 - this.amount;
                                break;
                            case 7:
                                a = rn(-14, -11);
                                break;
                            case 8:
                                a = rn(rand(-41, -40), rand(-11, -10), rand(-31, -30));
                                break;
                            case 9:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(-39, -36), rand(-24, -21));
                                break;
                            case 11:
                                a = rn(-40, -30);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(71, 74), rand(81, 84));
                                break;
                            case 2:
                                a = rn(-41, -40);
                                break;
                            case 3:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(56, 59), rand(66, 69));
                                break;
                            case 5:
                                a = rn(45 - this.amount, 35 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-24, -21), rand(-34, -31));
                                break;
                            case 7:
                                a = rn(89 - this.amount, 79 - this.amount);
                                break;
                            case 8:
                                a = rand(-14, -11);
                                break;
                            case 9:
                                a = rn(55 - this.amount, 50 - this.amount);
                                break;
                            case 10:
                                a = rn(-10, -20, -30, -40);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(15, 18), rand(25, 28));
                                break;
                            case 2:
                                a = 4 - this.amount;
                                break;
                            case 3:
                                a = rn(50, 60, 70, 80);
                                break;
                            case 4:
                                a = rn(41 - this.amount, 42 - this.amount, 43 - this.amount);
                                break;
                            case 5:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(16, 18), rand(26, 28));
                                break;
                            case 7:
                                a = rn(14 - this.amount, 4 - this.amount);
                                break;
                            case 8:
                                a = rn(65, 75);
                                break;
                            case 9:
                                a = rand(-14, -11);
                                break;
                            case 10:
                                a = rn(45 - this.amount, 35 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(-24, -21), rand(-14, -11));
                                break;
                            case 12:
                                a = rn(49 - this.amount, 89 - this.amount);
                                break;
                            case 13:
                                a = rn(-19, -16);
                                break;
                            case 14:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(35, 38), rand(45, 48));
                                break;
                            case 2:
                                a = rn(24 - this.amount, 14 - this.amount);
                                break;
                            case 3:
                                a = rand(-14, -11);
                                break;
                            case 4:
                                a = rn(rand(55, 56), rand(65, 66));
                                break;
                            case 5:
                                a = rn(45 - this.amount, 35 - this.amount);
                                break;
                            case 6:
                                a = rand(-14, -11);
                                break;
                            case 7:
                                a = rn(10 - this.amount, 11 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(25, 27), rand(35, 37));
                                break;
                            case 9:
                                a = rn(4 - this.amount, 14 - this.amount);
                                break;
                            case 10:
                                a = rn(29 - this.amount, 39 - this.amount);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(56, 59), rand(66, 69));
                                break;
                            case 2:
                                a = rn(89 - this.amount, 79 - this.amount);
                                break;
                            case 3:
                                a = rand(-44, -41);
                                break;
                            case 4:
                                a = rn(15 - this.amount, 25 - this.amount);
                                break;
                            case 5:
                                a = rand(-14, -11);
                                break;
                            case 6:
                                a = rn(69 - this.amount, 79 - this.amount);
                                break;
                            case 7:
                                a = -34;
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(76, 79), rand(86, 89), rand(96, 99));
                                break;
                            case 2:
                                a = rn(55 - this.amount, 65 - this.amount);
                                break;
                            case 3:
                                a = rn(-40, -30);
                                break;
                            case 4:
                                a = rand(11, 14);
                                break;
                            case 5:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 6:
                                a = rn(65 - this.amount, 75 - this.amount);
                                break;
                            case 7:
                                a = rand(-14, -11);
                                break;
                            case 8:
                                a = rn(20 - this.amount, 30 - this.amount, 40 - this.amount);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ]
            },
            'r': {
                1: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(20, 30, 40);
                                break;
                            case 2:
                                a = -11;
                                break;
                            case 3:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 4:
                                a = rn(70 - this.amount, 30 - this.amount);
                                break;
                            case 5:
                                a = -11;
                                break;
                            case 6:
                                a = -this.amount;
                                break;
                            case 7:
                                a = rn(rand(41, 49), rand(91, 99));
                                break;
                            case 8:
                                a = 30 - this.amount;
                                break;
                            case 9:
                                a = -21;
                                break;
                            case 10:
                                a = rn(80, 90);
                                break;
                            case 11:
                                a = rand(-14, -12);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(41, 49), rand(91, 98));
                                break;
                            case 2:
                                a = 30 - this.amount;
                                break;
                            case 3:
                                a = -21;
                                break;
                            case 4:
                                a = 80;
                                break;
                            case 5:
                                a = rand(-14, -12);
                                break;
                            case 6:
                                a = 90 - this.amount;
                                break;
                            case 7:
                                a = rn(-21, -31);
                                break;
                            case 8:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 9:
                                a = rn(-61, -71);
                                break;
                            case 10:
                                a = rn(39 - this.amount, 49 - this.amount);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(61, 68), rand(71, 78));
                                break;
                            case 2:
                                a = 99 - this.amount;
                                break;
                            case 3:
                                a = rn(80 - this.amount, 40 - this.amount);
                                break;
                            case 4:
                                a = rn(-21, -11);
                                break;
                            case 5:
                                a = -this.amount;
                                break;
                            case 6:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 7:
                                a = 70 - this.amount;
                                break;
                            case 8:
                                a = -11;
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(86, 88), rand(96, 98));
                                break;
                            case 2:
                                a = 70 - this.amount;
                                break;
                            case 3:
                                a = -11;
                                break;
                            case 4:
                                a = rn(40, 30);
                                break;
                            case 5:
                                a = rand(-19, -16);
                                break;
                            case 6:
                                a = 20 - this.amount;
                                break;
                            case 7:
                                a = -11;
                                break;
                            case 8:
                                a = rn(70, 80);
                                break;
                            case 9:
                                a = rand(-12, -13);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(56, 58), rand(66, 68));
                                break;
                            case 2:
                                a = 90 - this.amount;
                                break;
                            case 3:
                                a = rn(-31, -21);
                                break;
                            case 4:
                                a = rn(79 - this.amount, 99 - this.amount);
                                break;
                            case 5:
                                a = 20 - this.amount;
                                break;
                            case 6:
                                a = -11;
                                break;
                            case 7:
                                a = rn(40, 30);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ],
                2: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(30, 40);
                                break;
                            case 2:
                                a = rn(-12, -22);
                                break;
                            case 3:
                                a = 90 - this.amount;
                                break;
                            case 4:
                                a = rn(-22, -12);
                                break;
                            case 5:
                                a = 50 - this.amount;
                                break;
                            case 6:
                                a = rn(rand(16, 19), rand(26, 29));
                                break;
                            case 7:
                                a = 90 - this.amount;
                                break;
                            case 8:
                                a = rn(-32, -22);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(41, 49), rand(91, 98));
                                break;
                            case 2:
                                a = 30 - this.amount;
                                break;
                            case 3:
                                a = rn(-22, -12);
                                break;
                            case 4:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 5:
                                a = rn(-22, -12);
                                break;
                            case 6:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 7:
                                a = rand(-88, -86);
                                break;
                            case 8:
                                a = 40 - this.amount;
                                break;
                            case 9:
                                a = rn(-32, -22, -12);
                                break;
                            case 10:
                                a = rn(51, 61);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(61, 68), rand(71, 78));
                                break;
                            case 2:
                                a = 90 - this.amount;
                                break;
                            case 3:
                                a = rn(-32, -22);
                                break;
                            case 4:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 5:
                                a = rand(-14, -11);
                                break;
                            case 6:
                                a = 20 - this.amount;
                                break;
                            case 7:
                                a = -12;
                                break;
                            case 8:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 9:
                                a = -22;
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(86, 88), rand(96, 98));
                                break;
                            case 2:
                                a = 70 - this.amount;
                                break;
                            case 3:
                                a = -12;
                                break;
                            case 4:
                                a = rn(40, 30);
                                break;
                            case 5:
                                a = rn(-18, -16);
                                break;
                            case 6:
                                a = 99 - this.amount;
                                break;
                            case 7:
                                a = rn(-33, -26);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(56, 58), rand(66, 68));
                                break;
                            case 2:
                                a = 99 - this.amount;
                                break;
                            case 3:
                                a = rand(-39, -36);
                                break;
                            case 4:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 5:
                                a = -62;
                                break;
                            case 6:
                                a = rand(-14, -21);
                                break;
                            case 7:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 8:
                                a = -22;
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ],
                3: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(20, 22), rand(30, 32));
                                break;
                            case 2:
                                a = -13;
                                break;
                            case 3:
                                a = 40 - this.amount;
                                break;
                            case 4:
                                a = -23;
                                break;
                            case 5:
                                a = rand(21, 22);
                                break;
                            case 6:
                                a = rn(20 - this.amount, 90 - this.amount);
                                break;
                            case 7:
                                a = -13;
                                break;
                            case 8:
                                a = rn(20 - this.amount, 99 - this.amount);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(46, 49), rand(36, 39));
                                break;
                            case 2:
                                a = 20 - this.amount;
                                break;
                            case 3:
                                a = rn(20, 70);
                                break;
                            case 4:
                                a = -33;
                                break;
                            case 5:
                                a = rn(31, 32);
                                break;
                            case 6:
                                a = rand(-13, -11);
                                break;
                            case 7:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 8:
                                a = 70 - this.amount;
                                break;
                            case 9:
                                a = rn(-13, -53, -63);
                                break;
                            case 10:
                                a = rn(21, 22);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(56, 59), rand(66, 69));
                                break;
                            case 2:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 3:
                                a = rn(-23, -13, -53);
                                break;
                            case 4:
                                a = 90 - this.amount;
                                break;
                            case 5:
                                a = rn(-33, -63, -83);
                                break;
                            case 6:
                                a = 80 - this.amount;
                                break;
                            case 7:
                                a = rn(-63, -73);
                                break;
                            case 8:
                                a = rand(20, 21);
                                break;
                            case 9:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 10:
                                a = rn(-23, -73, -63);
                                break;
                            case 11:
                                a = rand(10, 12);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(70, 72), rand(80, 82));
                                break;
                            case 2:
                                a = rn(-13, -63);
                                break;
                            case 3:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 4:
                                a = rn(-13, -23);
                                break;
                            case 5:
                                a = -this.amount;
                                break;
                            case 6:
                                a = rn(40, 30);
                                break;
                            case 7:
                                a = -23;
                                break;
                            case 8:
                                a = rn(80, 70);
                                break;
                            case 9:
                                a = rn(-17, -15);
                                break;
                            case 10:
                                a = rn(50 - this.amount, 99 - this.amount);
                                break;
                            case 11:
                                a = rn(70 - this.amount, 80 - this.amount);
                                break;
                            case 12:
                                a = rn(-13, -53, -63);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(86, 89), rand(96, 99));
                                break;
                            case 2:
                                a = rn(70 - this.amount, 20 - this.amount);
                                break;
                            case 3:
                                a = rn(92 - this.amount, 91 - this.amount);
                                break;
                            case 4:
                                a = rn(-73, -63, -83);
                                break;
                            case 5:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 6:
                                a = rn(-33, -23);
                                break;
                            case 7:
                                a = 89 - this.amount;
                                break;
                            case 8:
                                a = rand(-19, -16);
                                break;
                            case 9:
                                a = 90 - this.amount;
                                break;
                            case 10:
                                a = rn(-13, -63);
                                break;
                            case 11:
                                a = rn(6 - this.amount, 5 - this.amount, 7 - this.amount);
                                break;
                            case 12:
                                a = rn(30 - this.amount, 40 - this.amount);
                                break;
                            case 13:
                                a = rn(-23, -13);
                                break;
                            case 14:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ],
                4: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(20, 22), rand(30, 32));
                                break;
                            case 2:
                                a = -14;
                                break;
                            case 3:
                                a = 40 - this.amount;
                                break;
                            case 4:
                                a = -24;
                                break;
                            case 5:
                                a = rand(21, 23);
                                break;
                            case 6:
                                a = rn(20 - this.amount, 90 - this.amount);
                                break;
                            case 7:
                                a = -14;
                                break;
                            case 8:
                                a = rn(30 - this.amount, 99 - this.amount);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(46, 49), rand(36, 39));
                                break;
                            case 2:
                                a = 20 - this.amount;
                                break;
                            case 3:
                                a = rn(20, 70);
                                break;
                            case 4:
                                a = -34;
                                break;
                            case 5:
                                a = rand(31, 32);
                                break;
                            case 6:
                                a = rand(-12, -11);
                                break;
                            case 7:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 8:
                                a = 70 - this.amount;
                                break;
                            case 9:
                                a = rn(-14, -54, -64);
                                break;
                            case 10:
                                a = rn(22, 23);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(56, 59), rand(66, 69));
                                break;
                            case 2:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 3:
                                a = rn(-24, -14, -54);
                                break;
                            case 4:
                                a = 90 - this.amount;
                                break;
                            case 5:
                                a = rn(-34, -64, -84);
                                break;
                            case 6:
                                a = 80 - this.amount;
                                break;
                            case 7:
                                a = rn(-64, -74);
                                break;
                            case 8:
                                a = rn(20, 21);
                                break;
                            case 9:
                                a = 80 - this.amount;
                                break;
                            case 10:
                                a = rn(-24, -74, -64);
                                break;
                            case 11:
                                a = rn(rand(10, 13), rand(20, 23));
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(70, 73), rand(80, 83));
                                break;
                            case 2:
                                a = rn(-14, -64);
                                break;
                            case 3:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 4:
                                a = rn(-14, -24);
                                break;
                            case 5:
                                a = -this.amount;
                                break;
                            case 6:
                                a = rn(40, 30);
                                break;
                            case 7:
                                a = -24;
                                break;
                            case 8:
                                a = rn(80, 70);
                                break;
                            case 9:
                                a = rand(-18, -15);
                                break;
                            case 10:
                                a = rn(50 - this.amount, 99 - this.amount);
                                break;
                            case 11:
                                a = rn(70 - this.amount, 80 - this.amount);
                                break;
                            case 12:
                                a = rn(-14, -54, -64);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(86, 89), rand(96, 99));
                                break;
                            case 2:
                                a = rn(70 - this.amount, 20 - this.amount);
                                break;
                            case 3:
                                a = rn(92 - this.amount, 91 - this.amount);
                                break;
                            case 4:
                                a = rn(-74, -64, -84);
                                break;
                            case 5:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 6:
                                a = rn(-34, -24);
                                break;
                            case 7:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 8:
                                a = rand(-29, -26);
                                break;
                            case 9:
                                a = 90 - this.amount;
                                break;
                            case 10:
                                a = rn(-14, -64);
                                break;
                            case 11:
                                a = rn(6 - this.amount, 1 - this.amount);
                                break;
                            case 12:
                                a = rn(30 - this.amount, 40 - this.amount);
                                break;
                            case 13:
                                a = -14;
                                break;
                            case 14:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ],
                5: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(21, 24), rand(30, 34));
                                break;
                            case 2:
                                a = -15;
                                break;
                            case 3:
                                a = rn(80 - this.amount, 70 - this.amount);
                                break;
                            case 4:
                                a = rand(11, 13);
                                break;
                            case 5:
                                a = rn(-75, -65);
                                break;
                            case 6:
                                a = 40 - this.amount;
                                break;
                            case 7:
                                a = rand(51, 53);
                                break;
                            case 8:
                                a = rn(-35, -25);
                                break;
                            case 9:
                                a = rn(80 - this.amount, 6 - this.amount);
                                break;
                            case 10:
                                a = rand(11, 13);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(46, 49), rand(96, 99));
                                break;
                            case 2:
                                a = 30 - this.amount;
                                break;
                            case 3:
                                a = rn(-25, -15);
                                break;
                            case 4:
                                a = rn(rand(12, 14), rand(22, 24));
                                break;
                            case 5:
                                a = rn(1 - this.amount, 2 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(91, 92), rand(81, 82));
                                break;
                            case 7:
                                a = -15;
                                break;
                            case 8:
                                a = rn(50 - this.amount, 1 - this.amount);
                                break;
                            case 9:
                                a = rand(41, 43);
                                break;
                            case 10:
                                a = rn(-35, -25);
                                break;
                            case 11:
                                a = rn(10, 20);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(77, 79), rand(62, 64));
                                break;
                            case 2:
                                a = rn(52 - this.amount, 51 - this.amount);
                                break;
                            case 3:
                                a = rand(40, 42);
                                break;
                            case 4:
                                a = rn(-25, -15);
                                break;
                            case 5:
                                a = rn(90 - this.amount, 10 - this.amount);
                                break;
                            case 6:
                                a = 30 - this.amount;
                                break;
                            case 7:
                                a = rn(-15, rand(11, 14));
                                break;
                            case 8:
                                a = rn(30 - this.amount, 99 - this.amount);
                                break;
                            case 9:
                                a = rn(-15, -10);
                                break;
                            case 10:
                                a = 30 - this.amount;
                                break;
                            case 11:
                                a = rn(-15, rand(11, 14));
                                break;
                            case 12:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(70, 74), rand(80, 84));
                                break;
                            case 2:
                                a = rn(-55, -65);
                                break;
                            case 3:
                                a = 40 - this.amount;
                                break;
                            case 4:
                                a = rn(-25, -35);
                                break;
                            case 5:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 6:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 7:
                                a = rn(70 - this.amount, 20 - this.amount);
                                break;
                            case 8:
                                a = -15;
                                break;
                            case 9:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 10:
                                a = rn(-65, -75, -55);
                                break;
                            case 11:
                                a = rand(11, 14);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(10, 12);
                                break;
                            case 2:
                                a = rand(80, 82);
                                break;
                            case 3:
                                a = -35;
                                break;
                            case 4:
                                a = rn(79 - this.amount, 99 - this.amount);
                                break;
                            case 5:
                                a = rn(24 - this.amount, 22 - this.amount, 23 - this.amount);
                                break;
                            case 6:
                                a = -15;
                                break;
                            case 7:
                                a = 30 - this.amount;
                                break;
                            case 8:
                                a = rn(-25, -15);
                                break;
                            case 9:
                                a = rn(rand(11, 14), rand(21, 24), rand(51, 54));
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ],
                6: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(30, 40, 50, 60);
                                break;
                            case 2:
                                a = rn(-26, -16);
                                break;
                            case 3:
                                a = rn(15, 25);
                                break;
                            case 4:
                                a = 5 - this.amount;
                                break;
                            case 5:
                                a = rn(20, 25, 30, 35);
                                break;
                            case 6:
                                a = -16;
                                break;
                            case 7:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 8:
                                a = rn(-36, -26);
                                break;
                            case 9:
                                a = rn(25, 35);
                                break;
                            case 10:
                                a = rand(-19, -11);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(46, 49), rand(96, 99));
                                break;
                            case 2:
                                a = rn(35 - this.amount, 25 - this.amount);
                                break;
                            case 3:
                                a = -16;
                                break;
                            case 4:
                                a = rn(40 - this.amount, 30 - this.amount, 80 - this.amount);
                                break;
                            case 5:
                                a = -26;
                                break;
                            case 6:
                                a = rn(25, 35);
                                break;
                            case 7:
                                a = rn(10 - this.amount, 15 - this.amount);
                                break;
                            case 8:
                                a = rn(25, 15);
                                break;
                            case 9:
                                a = -16;
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(77, 79), rand(62, 64));
                                break;
                            case 2:
                                a = 90 - this.amount;
                                break;
                            case 3:
                                a = rn(-36, -76, -86);
                                break;
                            case 4:
                                a = rn(25, 15);
                                break;
                            case 5:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 6:
                                a = rn(75 - this.amount, 25 - this.amount);
                                break;
                            case 7:
                                a = -16;
                                break;
                            case 8:
                                a = rn(30, 20);
                                break;
                            case 9:
                                a = rn(-14, -11);
                                break;
                            case 10:
                                a = rn(5 - this.amount, 89 - this.amount, 99 - this.amount);
                                break;
                            case 11:
                                a = rn(50 - this.amount, 70 - this.amount, 60 - this.amount);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(75, 85, 95);
                                break;
                            case 2:
                                a = rn(-16, -66, -56);
                                break;
                            case 3:
                                a = rn(90 - this.amount, 99 - this.amount);
                                break;
                            case 4:
                                a = rn(-26, -36);
                                break;
                            case 5:
                                a = rn(3 - this.amount, 2 - this.amount);
                                break;
                            case 6:
                                a = rn(40 - this.amount, 30 - this.amount);
                                break;
                            case 7:
                                a = rn(-16, -26);
                                break;
                            case 8:
                                a = rn(20, 70);
                                break;
                            case 9:
                                a = rn(10 - this.amount, 4 - this.amount, 3 - this.amount);
                                break;
                            case 10:
                                a = rn(25, 35, 55);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(10, 14), rand(20, 24));
                                break;
                            case 2:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 3:
                                a = rn(-36, -26);
                                break;
                            case 4:
                                a = 80 - this.amount;
                                break;
                            case 5:
                                a = rn(70 - this.amount, 30 - this.amount);
                                break;
                            case 6:
                                a = -16;
                                break;
                            case 7:
                                a = rn(90 - this.amount, 80 - this.amount);
                                break;
                            case 8:
                                a = -26;
                                break;
                            case 9:
                                a = rn(rand(-53, -52), 3 - this.amount);
                                break;
                            case 10:
                                a = rn(16, 26);
                                break;
                            case 11:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(-39, -31), rand(-29, -21));
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ],
                7: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(30, 31), rand(40, 41), rand(80, 81));
                                break;
                            case 2:
                                a = rn(-27, -17);
                                break;
                            case 3:
                                a = 80 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(10, 11), rand(15, 16));
                                break;
                            case 5:
                                a = rn(-17, -27);
                                break;
                            case 6:
                                a = rn(25, 15);
                                break;
                            case 7:
                                a = rn(10 - this.amount, 11 - this.amount);
                                break;
                            case 8:
                                a = rn(30, 20, 25, 35);
                                break;
                            case 9:
                                a = rn(-27, -17);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(51, 55, 56, 50);
                                break;
                            case 2:
                                a = rn(30, 20, 40);
                                break;
                            case 3:
                                a = rn(-57, -17);
                                break;
                            case 4:
                                a = rn(3 - this.amount, 2 - this.amount);
                                break;
                            case 5:
                                a = rn(26, 20, 21);
                                break;
                            case 6:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 7:
                                a = rn(-77, -27);
                                break;
                            case 8:
                                a = rn(15, 16, 36);
                                break;
                            case 9:
                                a = rn(5 - this.amount, 6 - this.amount, 1 - this.amount);
                                break;
                            case 10:
                                a = rn(30, 40, 70, 80);
                                break;
                            case 11:
                                a = -17;
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(60, 64), rand(70, 74));
                                break;
                            case 2:
                                a = 90 - this.amount;
                                break;
                            case 3:
                                a = rn(-37, -17);
                                break;
                            case 4:
                                a = 90 - this.amount;
                                break;
                            case 5:
                                a = rn(-67, -77);
                                break;
                            case 6:
                                a = 40 - this.amount;
                                break;
                            case 7:
                                a = rn(-27, -17);
                                break;
                            case 8:
                                a = rn(16, 26, 56);
                                break;
                            case 9:
                                a = rn(99 - this.amount, 90 - this.amount);
                                break;
                            case 10:
                                a = rn(-37, -87);
                                break;
                            case 11:
                                a = rn(21, 11, 16);
                                break;
                            case 12:
                                a = rn(3 - this.amount, 2 - this.amount);
                                break;
                            case 13:
                                a = rn(26, 21, 31, 36);
                                break;
                            case 14:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(80, 81), rand(85, 86));
                                break;
                            case 2:
                                a = rn(-17, -27);
                                break;
                            case 3:
                                a = rn(2 - this.amount, 3 - this.amount, 1 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(30, 31), rand(20, 21));
                                break;
                            case 5:
                                a = rn(10 - this.amount, 11 - this.amount);
                                break;
                            case 6:
                                a = rn(80, 85);
                                break;
                            case 7:
                                a = -37;
                                break;
                            case 8:
                                a = rn(70 - this.amount, 80 - this.amount);
                                break;
                            case 9:
                                a = rn(-67, -57);
                                break;
                            case 10:
                                a = rn(21, 25, 26);
                                break;
                            case 11:
                                a = rn(10 - this.amount, 13 - this.amount, 99 - this.amount);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(20, 24), rand(90, 94));
                                break;
                            case 2:
                                a = rn(80 - this.amount, 40 - this.amount);
                                break;
                            case 3:
                                a = rn(-27, -17);
                                break;
                            case 4:
                                a = rn(-this.amount, 1 - this.amount);
                                break;
                            case 5:
                                a = rn(40, 45, 90, 95);
                                break;
                            case 6:
                                a = -37;
                                break;
                            case 7:
                                a = rn(70 - this.amount, 80 - this.amount);
                                break;
                            case 8:
                                a = rn(-17, -57);
                                break;
                            case 9:
                                a = rn(2 - this.amount, 3 - this.amount);
                                break;
                            case 10:
                                a = rn(25, 21, rand(10, 11));
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ],
                8: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(30, 32), rand(40, 42), rand(80, 82));
                                break;
                            case 2:
                                a = rn(-28, -18);
                                break;
                            case 3:
                                a = 80 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(10, 12), rand(15, 17));
                                break;
                            case 5:
                                a = rn(-18, -28);
                                break;
                            case 6:
                                a = rn(1 - this.amount, -this.amount);
                                break;
                            case 7:
                                a = rn(rand(10, 11), rand(20, 21));
                                break;
                            case 8:
                                a = rn(20, 25);
                                break;
                            case 9:
                                a = rn(-28, -18);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(52, 55, 56, 50);
                                break;
                            case 2:
                                a = rn(30, 20, 40);
                                break;
                            case 3:
                                a = rn(-58, -18);
                                break;
                            case 4:
                                a = rn(2 - this.amount, 1 - this.amount);
                                break;
                            case 5:
                                a = rn(25, rand(20, 21));
                                break;
                            case 6:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 7:
                                a = rn(-78, -28);
                                break;
                            case 8:
                                a = rn(16, 36);
                                break;
                            case 9:
                                a = rn(5 - this.amount, 6 - this.amount, 1 - this.amount);
                                break;
                            case 10:
                                a = rn(30, 40, 70, 80);
                                break;
                            case 11:
                                a = -18;
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(60, 64), rand(70, 74));
                                break;
                            case 2:
                                a = 90 - this.amount;
                                break;
                            case 3:
                                a = -38;
                                break;
                            case 4:
                                a = 80 - this.amount;
                                break;
                            case 5:
                                a = rn(-68, -78);
                                break;
                            case 6:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 7:
                                a = rn(-28, -18);
                                break;
                            case 8:
                                a = rn(16, 26);
                                break;
                            case 9:
                                a = rn(10 - this.amount, 15 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(10, 11), rand(20, 21));
                                break;
                            case 11:
                                a = -18;
                                break;
                            case 12:
                                a = rn(90 - this.amount, 99 - this.amount);
                                break;
                            case 13:
                                a = -38;
                                break;
                            case 14:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(80, 81), rand(85, 86));
                                break;
                            case 2:
                                a = rn(-18, -28);
                                break;
                            case 3:
                                a = rn(2 - this.amount, -this.amount, 1 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(30, 32), rand(20, 22));
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = rn(rand(80, 82), rand(85, 87));
                                break;
                            case 7:
                                a = -38;
                                break;
                            case 8:
                                a = rn(70 - this.amount, 80 - this.amount);
                                break;
                            case 9:
                                a = rn(-68, -58);
                                break;
                            case 10:
                                a = rn(rand(25, 27), rand(20, 22));
                                break;
                            case 11:
                                a = rn(99 - this.amount, 10 - this.amount, 11 - this.amount);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(20, 24), rand(90, 94));
                                break;
                            case 2:
                                a = rn(80 - this.amount, 40 - this.amount);
                                break;
                            case 3:
                                a = rn(-28, -18);
                                break;
                            case 4:
                                a = rn(-this.amount, 1 - this.amount);
                                break;
                            case 5:
                                a = rn(40, 45, 90, 95);
                                break;
                            case 6:
                                a = -38;
                                break;
                            case 7:
                                a = rn(70 - this.amount, 80 - this.amount);
                                break;
                            case 8:
                                a = rn(-18, -58);
                                break;
                            case 9:
                                a = rn(1 - this.amount, 2 - this.amount);
                                break;
                            case 10:
                                a = rn(25, 21, rand(10, 14));
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ],
                9: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(30, 33), rand(40, 42), rand(80, 83));
                                break;
                            case 2:
                                a = rn(-29, -19);
                                break;
                            case 3:
                                a = 80 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(10, 13), rand(15, 18));
                                break;
                            case 5:
                                a = rn(-19, -39);
                                break;
                            case 6:
                                a = rn(1 - this.amount, -this.amount);
                                break;
                            case 7:
                                a = rn(rand(10, 11), rand(20, 21));
                                break;
                            case 8:
                                a = rn(30, 20, 25, 35);
                                break;
                            case 9:
                                a = rn(-29, -19);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(50, 53), rand(55, 58));
                                break;
                            case 2:
                                a = rn(30, 20, 40);
                                break;
                            case 3:
                                a = -59;
                                break;
                            case 4:
                                a = rn(1 - this.amount, -this.amount);
                                break;
                            case 5:
                                a = rn(rand(20, 22), rand(25, 27));
                                break;
                            case 6:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 7:
                                a = rn(-79, -29);
                                break;
                            case 8:
                                a = rn(rand(16, 18), rand(36, 38));
                                break;
                            case 9:
                                a = rn(5 - this.amount, 6 - this.amount, 1 - this.amount);
                                break;
                            case 10:
                                a = rn(30, 40, 70, 80);
                                break;
                            case 11:
                                a = -19;
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(60, 64), rand(70, 74));
                                break;
                            case 2:
                                a = 90 - this.amount;
                                break;
                            case 3:
                                a = rn(-39, -29);
                                break;
                            case 4:
                                a = 80 - this.amount;
                                break;
                            case 5:
                                a = rn(-69, -59);
                                break;
                            case 6:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 7:
                                a = rn(-29, -19);
                                break;
                            case 8:
                                a = rn(rand(16, 19), rand(26, 27));
                                break;
                            case 9:
                                a = rn(10 - this.amount, 11 - this.amount, 15 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(10, 12), rand(20, 22));
                                break;
                            case 11:
                                a = -19;
                                break;
                            case 12:
                                a = rn(90 - this.amount, 99 - this.amount);
                                break;
                            case 13:
                                a = -39;
                                break;
                            case 14:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(80, 82), rand(85, 87));
                                break;
                            case 2:
                                a = rn(-19, -29);
                                break;
                            case 3:
                                a = rn(-this.amount, 1 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(30, 33), rand(20, 23));
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = rn(rand(80, 82), rand(85, 87));
                                break;
                            case 7:
                                a = -39;
                                break;
                            case 8:
                                a = rn(70 - this.amount, 80 - this.amount);
                                break;
                            case 9:
                                a = rn(-69, -59);
                                break;
                            case 10:
                                a = rn(rand(25, 27), rand(20, 22));
                                break;
                            case 11:
                                a = rn(99 - this.amount, 10 - this.amount, 11 - this.amount);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(20, 24), rand(90, 94));
                                break;
                            case 2:
                                a = rn(80 - this.amount, 40 - this.amount);
                                break;
                            case 3:
                                a = rn(-29, -19);
                                break;
                            case 4:
                                a = rn(-this.amount, 1 - this.amount);
                                break;
                            case 5:
                                a = rn(40, rand(45, 48), rand(90, 93));
                                break;
                            case 6:
                                a = -39;
                                break;
                            case 7:
                                a = rn(70 - this.amount, 80 - this.amount);
                                break;
                            case 8:
                                a = -19;
                                break;
                            case 9:
                                a = 1 - this.amount;
                                break;
                            case 10:
                                a = rn(25, 21, rand(10, 14));
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ],
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(20, 30, 70, 80);
                                break;
                            case 2:
                                a = rand(-19, -11);
                                break;
                            case 3:
                                a = 90 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(-24, -21), rand(-34, -31));
                                break;
                            case 5:
                                a = rn(5 - this.amount, 6 - this.amount);
                                break;
                            case 6:
                                a = rn(30, 40);
                                break;
                            case 7:
                                a = rand(-29, -27);
                                break;
                            case 8:
                                a = rn(80 - this.amount, 70 - this.amount);
                                break;
                            case 9:
                                a = rand(-19, -11);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 2:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-29, -21), rand(-39, -31));
                                break;
                            case 4:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 5:
                                a = rand(-19, -11);
                                break;
                            case 6:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 7:
                                a = rn(35 - this.amount, 45 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(-29, -26), rand(-19, -16));
                                break;
                            case 9:
                                a = rn(90 - this.amount, 40 - this.amount);
                                break;
                            case 10:
                                a = rand(-39, -36);
                                break;
                            case 11:
                                a = rn(30, 20);
                                break;
                            case 12:
                                a = 9 - this.amount;
                                break;
                            case 13:
                                a = rn(30 - this.amount, 20);
                                break;
                            case 14:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(30, 34), rand(40, 44));
                                break;
                            case 2:
                                a = rn(19 - this.amount, 9 - this.amount);
                                break;
                            case 3:
                                a = rn(89 - this.amount, 49 - this.amount);
                                break;
                            case 4:
                                a = rn(35 - this.amount, 25 - this.amount);
                                break;
                            case 5:
                                a = rand(-19, -16);
                                break;
                            case 6:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 7:
                                a = rand(-39, -36);
                                break;
                            case 8:
                                a = rn(30, 20);
                                break;
                            case 9:
                                a = 9 - this.amount;
                                break;
                            case 10:
                                a = rn(31, 30, 20);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(51, 59);
                                break;
                            case 2:
                                a = rn(90 - this.amount, 80 - this.amount);
                                break;
                            case 3:
                                a = rand(-29, -21);
                                break;
                            case 4:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 5:
                                a = 75 - this.amount;
                                break;
                            case 6:
                                a = rand(-59, -56);
                                break;
                            case 7:
                                a = rn(40 - this.amount, 30 - this.amount);
                                break;
                            case 8:
                                a = rand(-19, -11);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(66, 69), rand(76, 79));
                                break;
                            case 2:
                                a = rn(10, 20);
                                break;
                            case 3:
                                a = 25 - this.amount;
                                break;
                            case 4:
                                a = rand(-19, -16);
                                break;
                            case 5:
                                a = rn(30 - this.amount, 40 - this.amount);
                                break;
                            case 6:
                                a = rand(-29, -26);
                                break;
                            case 7:
                                a = rn(30, 20);
                                break;
                            case 8:
                                a = rn(9 - this.amount, -this.amount);
                                break;
                            case 9:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(-69, -61), rand(-79, -71));
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(86, 89), rand(96, 99));
                                break;
                            case 2:
                                a = 75 - this.amount;
                                break;
                            case 3:
                                a = rand(-69, -66);
                                break;
                            case 4:
                                a = rn(40 - this.amount, 30 - this.amount);
                                break;
                            case 5:
                                a = rand(-29, -21);
                                break;
                            case 6:
                                a = 89 - this.amount;
                                break;
                            case 7:
                                a = rand(-19, -11);
                                break;
                            case 8:
                                a = 90 - this.amount;
                                break;
                            case 9:
                                a = rn(rand(-39, -31), rand(-59, -51));
                                break;
                            case 10:
                                a = rn(1 - this.amount, 89 - this.amount);
                                break;
                            case 11:
                                a = rn(29 - this.amount, 18 - this.amount);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(36, 39), rand(46, 49));
                                break;
                            case 2:
                                a = rn(20 - this.amount, 70 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(20, 24), rand(10, 14));
                                break;
                            case 4:
                                a = rn(19 - this.amount, 9 - this.amount);
                                break;
                            case 5:
                                a = rn(70, 80);
                                break;
                            case 6:
                                a = rand(-19, -15);
                                break;
                            case 7:
                                a = rn(9 - this.amount, 10 - this.amount);
                                break;
                            case 8:
                                a = rn(30, 80);
                                break;
                            case 9:
                                a = rand(-29, -21);
                                break;
                            case 10:
                                a = rn(10, 20);
                                break;
                            case 11:
                                a = 1 - this.amount;
                                break;
                            case 12:
                                a = rn(rand(30, 33), rand(40, 43));
                                break;
                            case 13:
                                a = 19 - this.amount;
                                break;
                            case 14:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(26, 29), rand(36, 39));
                                break;
                            case 2:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 3:
                                a = rand(-19, -15);
                                break;
                            case 4:
                                a = rn(59 - this.amount, 9 - this.amount);
                                break;
                            case 5:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-19, -11), rand(-59, -51));
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ]
            },
            'rb': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(20, 30, 70, 80);
                                break;
                            case 2:
                                a = rand(-19, -11);
                                break;
                            case 3:
                                a = 90 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(-25, -22), rand(-34, -32));
                                break;
                            case 5:
                                a = rn(30, 20);
                                break;
                            case 6:
                                a = 24 - this.amount;
                                break;
                            case 7:
                                a = rand(-14, -11);
                                break;
                            case 8:
                                a = rn(40 - this.amount, 30 - this.amount);
                                break;
                            case 9:
                                a = rand(-19, -11);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 2:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-29, -21), rand(-39, -31));
                                break;
                            case 4:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 5:
                                a = rand(-14, -11);
                                break;
                            case 6:
                                a = rn(54 - this.amount, 64 - this.amount);
                                break;
                            case 7:
                                a = rn(41 - this.amount, 42 - this.amount, 33 - this.amount, 34 - this.amount);
                                break;
                            case 8:
                                a = rn(15 - this.amount, 5 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(21, 23), rand(31, 33));
                                break;
                            case 10:
                                a = rn(14 - this.amount, 4 - this.amount);
                                break;
                            case 11:
                                a = rn(25, 15, 35, 55);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(30, 34), rand(40, 44));
                                break;
                            case 2:
                                a = rn(19 - this.amount, 9 - this.amount);
                                break;
                            case 3:
                                a = rn(75 - this.amount, 85 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-24, -21), rand(-14, -11));
                                break;
                            case 5:
                                a = rn(39 - this.amount, 29 - this.amount);
                                break;
                            case 6:
                                a = rn(50, 60);
                                break;
                            case 7:
                                a = rand(-24, -22);
                                break;
                            case 8:
                                a = rn(44 - this.amount, 34 - this.amount);
                                break;
                            case 9:
                                a = rand(-14, -11);
                                break;
                            case 10:
                                a = rn(9 - this.amount, 4 - this.amount);
                                break;
                            case 11:
                                a = rn(30 - this.amount, 40 - this.amount);
                                break;
                            case 12:
                                a = rand(-19, -11);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(56, 59), rand(66, 69), rand(76, 79), rand(86, 89));
                                break;
                            case 2:
                                a = rn(40 - this.amount, 41 - this.amount, 42 - this.amount, 43 - this.amount);
                                break;
                            case 3:
                                a = rn(29 - this.amount, 19 - this.amount);
                                break;
                            case 4:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 5:
                                a = rand(-19, -17);
                                break;
                            case 6:
                                a = rn(-40, 90 - this.amount);
                                break;
                            case 7:
                                a = rn(1 - this.amount, 4 - this.amount);
                                break;
                            case 8:
                                a = rn(30, 40);
                                break;
                            case 9:
                                a = rn(19 - this.amount, 9 - this.amount);
                                break;
                            case 10:
                                a = rn(29, 19, 18, 16);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(66, 69), rand(76, 79));
                                break;
                            case 2:
                                a = rn(55 - this.amount, 45 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-24, -22), rand(-34, -32));
                                break;
                            case 4:
                                a = rn(60, 10);
                                break;
                            case 5:
                                a = rn(9 - this.amount, 4 - this.amount);
                                break;
                            case 6:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 7:
                                a = rand(-14, -11);
                                break;
                            case 8:
                                a = rn(64 - this.amount, 54 - this.amount);
                                break;
                            case 9:
                                a = rn(24 - this.amount, 23 - this.amount, 32 - this.amount, 31 - this.amount);
                                break;
                            case 10:
                                a = rn(9 - this.amount, -this.amount);
                                break;
                            case 11:
                                a = rand(11, 14);
                                break;
                            case 12:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 13:
                                a = rn(-29, -21);
                                break;
                            case 14:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(86, 88), rand(96, 98));
                                break;
                            case 2:
                                a = rn(74 - this.amount, 64 - this.amount);
                                break;
                            case 3:
                                a = rn(44 - this.amount, 43 - this.amount, 32 - this.amount, 31 - this.amount);
                                break;
                            case 4:
                                a = rn(19 - this.amount, 9 - this.amount);
                                break;
                            case 5:
                                a = rn(75 - this.amount, 85 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-24, -21), rand(-14, -11));
                                break;
                            case 7:
                                a = rn(39 - this.amount, 29 - this.amount);
                                break;
                            case 8:
                                a = rn(10, 60);
                                break;
                            case 9:
                                a = rn(23 - this.amount, 20 - this.amount);
                                break;
                            case 10:
                                a = rn(9 - this.amount, 4 - this.amount);
                                break;
                            case 11:
                                a = rn(30, 20, 10);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(36, 39), rand(46, 49));
                                break;
                            case 2:
                                a = rn(25 - this.amount, 15 - this.amount);
                                break;
                            case 3:
                                a = rand(-14, -12);
                                break;
                            case 4:
                                a = rn(20, 30);
                                break;
                            case 5:
                                a = rn(9 - this.amount, 4 - this.amount);
                                break;
                            case 6:
                                a = rn(90 - this.amount, 80 - this.amount);
                                break;
                            case 7:
                                a = rand(-29, -21);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(25, 28), rand(35, 38));
                                break;
                            case 2:
                                a = rn(14 - this.amount, 4 - this.amount);
                                break;
                            case 3:
                                a = rn(40 - this.amount, 30 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-19, -11), rand(-29, -21));
                                break;
                            case 5:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-29, -21), rand(-69, -61));
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ]
            },
            's': {
                6: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(10, 12), rand(20, 22));
                                break;
                            case 2:
                                a = rn(rand(71, 72), rand(21, 22));
                                break;
                            case 3:
                                a = rn(-16, -26);
                                break;
                            case 4:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 5:
                                a = rand(-18, -16);
                                break;
                            case 6:
                                a = rn(-56, -66);
                                break;
                            case 7:
                                a = rn(44 - this.amount, 94 - this.amount);
                                break;
                            case 8:
                                a = rand(-13, -11);
                                break;
                            case 9:
                                a = rn(-26, -16);
                                break;
                            case 10:
                                a = rn(11, 21, 31);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(31, 34), rand(41, 44));
                                break;
                            case 2:
                                a = rn(-16, -26);
                                break;
                            case 3:
                                a = 94 - this.amount;
                                break;
                            case 4:
                                a = rand(-13, -11);
                                break;
                            case 5:
                                a = rn(-26, -16);
                                break;
                            case 6:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 7:
                                a = rn(-18, -17, -15);
                                break;
                            case 8:
                                a = rn(-66, -56);
                                break;
                            case 9:
                                a = rn(44 - this.amount, 44 - this.amount);
                                break;
                            case 10:
                                a = rand(-13, -11);
                                break;
                            case 11:
                                a = -16;
                                break;
                            case 12:
                                a = rn(11, 10, 21);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(36, 39), rand(46, 49));
                                break;
                            case 2:
                                a = rn(-15, -25);
                                break;
                            case 3:
                                a = rn(10, 60);
                                break;
                            case 4:
                                a = -16;
                                break;
                            case 5:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-28, -21), rand(-38, -31));
                                break;
                            case 7:
                                a = rn(-this.amount, 1 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(31, 33), rand(41, 43));
                                break;
                            case 9:
                                a = rn(-16, -26);
                                break;
                            case 10:
                                a = rn(94 - this.amount, 99 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(-34, -31), rand(-24, -21));
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(61, 64), rand(71, 74));
                                break;
                            case 2:
                                a = rn(10, 20);
                                break;
                            case 3:
                                a = rn(-66, -56);
                                break;
                            case 4:
                                a = rn(49 - this.amount, 99 - this.amount);
                                break;
                            case 5:
                                a = rn(-13, -23);
                                break;
                            case 6:
                                a = rn(15 - this.amount, 5 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(21, 23), rand(31, 33));
                                break;
                            case 8:
                                a = rn(-16, -26);
                                break;
                            case 9:
                                a = rn(61, 11);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(77, 78), rand(87, 88));
                                break;
                            case 2:
                                a = rn(-15, -16);
                                break;
                            case 3:
                                a = rn(10, 11);
                                break;
                            case 4:
                                a = rn(-16, -56, -66);
                                break;
                            case 5:
                                a = 79 - this.amount;
                                break;
                            case 6:
                                a = rn(rand(-28, -27), rand(-18, -17));
                                break;
                            case 7:
                                a = rand(30, 32);
                                break;
                            case 8:
                                a = rn(-26, -56);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ],
                7: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(12, 13), rand(22, 23));
                                break;
                            case 2:
                                a = rn(rand(70, 71), rand(20, 21));
                                break;
                            case 3:
                                a = rn(-17, -27);
                                break;
                            case 4:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 5:
                                a = rand(-16, -15);
                                break;
                            case 6:
                                a = rn(-57, -67);
                                break;
                            case 7:
                                a = rn(44 - this.amount, 94 - this.amount);
                                break;
                            case 8:
                                a = rand(-12, -11);
                                break;
                            case 9:
                                a = rn(-27, -17);
                                break;
                            case 10:
                                a = rn(rand(11, 13), rand(21, 23));
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(32, 34), rand(42, 44));
                                break;
                            case 2:
                                a = rn(-17, -27);
                                break;
                            case 3:
                                a = 94 - this.amount;
                                break;
                            case 4:
                                a = rand(-12, -11);
                                break;
                            case 5:
                                a = rn(-27, -17);
                                break;
                            case 6:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 7:
                                a = rand(-16, -15);
                                break;
                            case 8:
                                a = rn(-67, -57);
                                break;
                            case 9:
                                a = 44 - this.amount;
                                break;
                            case 10:
                                a = rand(-12, -11);
                                break;
                            case 11:
                                a = -17;
                                break;
                            case 12:
                                a = rn(rand(10, 12), rand(20, 22));
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(37, 39), rand(47, 49));
                                break;
                            case 2:
                                a = rn(-15, -25);
                                break;
                            case 3:
                                a = rn(10, 60);
                                break;
                            case 4:
                                a = -17;
                                break;
                            case 5:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-28, -21), rand(-38, -31));
                                break;
                            case 7:
                                a = rn(-this.amount, 1 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(32, 33), rand(42, 43));
                                break;
                            case 9:
                                a = rn(-17, -27);
                                break;
                            case 10:
                                a = rn(94 - this.amount, 99 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(-34, -31), rand(-24, -21));
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(62, 64), rand(72, 74));
                                break;
                            case 2:
                                a = rn(10, 20);
                                break;
                            case 3:
                                a = rn(-67, -57);
                                break;
                            case 4:
                                a = rn(49 - this.amount, 94 - this.amount);
                                break;
                            case 5:
                                a = rn(-12, -22);
                                break;
                            case 6:
                                a = rn(15 - this.amount, 5 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(22, 23), rand(32, 33));
                                break;
                            case 8:
                                a = rn(-17, -27);
                                break;
                            case 9:
                                a = rn(61, 11);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(77, 78), rand(87, 88));
                                break;
                            case 2:
                                a = rn(-15, -16);
                                break;
                            case 3:
                                a = rn(21, 11);
                                break;
                            case 4:
                                a = rn(-17, -57, -67);
                                break;
                            case 5:
                                a = 79 - this.amount;
                                break;
                            case 6:
                                a = rn(rand(-28, -27), rand(-18, -17));
                                break;
                            case 7:
                                a = rand(31, 32);
                                break;
                            case 8:
                                a = rn(-27, -57);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ],
                8: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(12, 13), rand(22, 23));
                                break;
                            case 2:
                                a = rn(71, 21);
                                break;
                            case 3:
                                a = rn(-18, -28);
                                break;
                            case 4:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 5:
                                a = rand(-16, -15);
                                break;
                            case 6:
                                a = rn(-58, -68);
                                break;
                            case 7:
                                a = rn(44 - this.amount, 94 - this.amount);
                                break;
                            case 8:
                                a = rand(-11, -10);
                                break;
                            case 9:
                                a = rn(-28, -18);
                                break;
                            case 10:
                                a = rn(rand(11, 13), rand(21, 23));
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(33, 34), rand(43, 44));
                                break;
                            case 2:
                                a = rn(-18, -28);
                                break;
                            case 3:
                                a = 94 - this.amount;
                                break;
                            case 4:
                                a = rand(-11, -10);
                                break;
                            case 5:
                                a = rn(-28, -18);
                                break;
                            case 6:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 7:
                                a = rn(-16, -15);
                                break;
                            case 8:
                                a = rn(-68, -58);
                                break;
                            case 9:
                                a = 44 - this.amount;
                                break;
                            case 10:
                                a = rand(-11, -10);
                                break;
                            case 11:
                                a = -18;
                                break;
                            case 12:
                                a = rn(rand(10, 12), rand(20, 22));
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(38, 39), rand(47, 49));
                                break;
                            case 2:
                                a = rn(-15, -25);
                                break;
                            case 3:
                                a = rn(10, 60);
                                break;
                            case 4:
                                a = -18;
                                break;
                            case 5:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-28, -21), rand(-38, -31));
                                break;
                            case 7:
                                a = rn(-this.amount, 1 - this.amount);
                                break;
                            case 8:
                                a = rn(33, 43);
                                break;
                            case 9:
                                a = rn(-18, -28);
                                break;
                            case 10:
                                a = rn(94 - this.amount, 99 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(-34, -31), rand(-24, -21));
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(63, 64), rand(73, 74));
                                break;
                            case 2:
                                a = rn(10, 20);
                                break;
                            case 3:
                                a = rn(-68, -58);
                                break;
                            case 4:
                                a = rn(49 - this.amount, 94 - this.amount);
                                break;
                            case 5:
                                a = rn(-11, -21);
                                break;
                            case 6:
                                a = rn(15 - this.amount, 5 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(23, 24), rand(33, 34));
                                break;
                            case 8:
                                a = rn(-18, -28);
                                break;
                            case 9:
                                a = rn(62, 12);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(78, 79), rand(88, 89));
                                break;
                            case 2:
                                a = rn(-15, -16);
                                break;
                            case 3:
                                a = rn(21, 11);
                                break;
                            case 4:
                                a = rn(-58, -68);
                                break;
                            case 5:
                                a = 79 - this.amount;
                                break;
                            case 6:
                                a = rn(rand(-28, -27), rand(-18, -17));
                                break;
                            case 7:
                                a = rn(32, 22);
                                break;
                            case 8:
                                a = rn(-18, -68);
                                break;
                            case 9:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ],
                9: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(11, 13), rand(21, 23));
                                break;
                            case 2:
                                a = rn(84 - this.amount, 94 - this.amount);
                                break;
                            case 3:
                                a = rn(-19, -29);
                                break;
                            case 4:
                                a = rn(99 - this.amount, 97 - this.amount, 88 - this.amount, 86 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(-36, -35), rand(-26, -25));
                                break;
                            case 6:
                                a = 84 - this.amount;
                                break;
                            case 7:
                                a = rn(-59, -69);
                                break;
                            case 8:
                                a = rand(23, 24);
                                break;
                            case 9:
                                a = rn(-17, -16);
                                break;
                            case 10:
                                a = 44 - this.amount;
                                break;
                            case 11:
                                a = rn(-19, -29);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(34, 44);
                                break;
                            case 2:
                                a = rn(-19, -29);
                                break;
                            case 3:
                                a = rn(94 - this.amount, 84 - this.amount);
                                break;
                            case 4:
                                a = rn(-59, -69);
                                break;
                            case 5:
                                a = rn(12, 14);
                                break;
                            case 6:
                                a = rand(-26, -27);
                                break;
                            case 7:
                                a = rn(44 - this.amount, 34 - this.amount);
                                break;
                            case 8:
                                a = rn(-19, -29);
                                break;
                            case 9:
                                a = rand(21, 24);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(39, 49);
                                break;
                            case 2:
                                a = rn(-15, -25);
                                break;
                            case 3:
                                a = rn(10, 60);
                                break;
                            case 4:
                                a = -19;
                                break;
                            case 5:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 6:
                                a = -15;
                                break;
                            case 7:
                                a = rn(-59, -19);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(64, 74);
                                break;
                            case 2:
                                a = rn(10, 20);
                                break;
                            case 3:
                                a = rn(-69, -59);
                                break;
                            case 4:
                                a = rand(12, 14);
                                break;
                            case 5:
                                a = rand(-16, -15);
                                break;
                            case 6:
                                a = rn(44 - this.amount, 94 - this.amount);
                                break;
                            case 7:
                                a = rn(-29, -39);
                                break;
                            case 8:
                                a = rand(21, 24);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(78, 79), rand(88, 89));
                                break;
                            case 2:
                                a = rn(-15, -16);
                                break;
                            case 3:
                                a = 94 - this.amount;
                                break;
                            case 4:
                                a = rn(-19, -59, -69);
                                break;
                            case 5:
                                a = 89 - this.amount;
                                break;
                            case 6:
                                a = rn(-28, -21);
                                break;
                            case 7:
                                a = rn(84 - this.amount, 84 - this.amount);
                                break;
                            case 8:
                                a = rn(-19, -59, -69);
                                break;
                            case 9:
                                a = rand(21, 24);
                                break;
                            case 10:
                                a = rand(-16, -15);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ],
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(11, 12), rand(21, 22), rand(61, 62));
                                break;
                            case 2:
                                a = rand(20, 22);
                                break;
                            case 3:
                                a = rn(15 - this.amount, 5 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(26, 29), rand(66, 69));
                                break;
                            case 5:
                                a = 94 - this.amount;
                                break;
                            case 6:
                                a = rn(rand(-79, -76), rand(-89, -86));
                                break;
                            case 7:
                                a = rn(39 - this.amount, 49 - this.amount);
                                break;
                            case 8:
                                a = -15;
                                break;
                            case 9:
                                a = rand(-19, -16);
                                break;
                            case 10:
                                a = rand(10, 11);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(26, 29), rand(76, 79));
                                break;
                            case 2:
                                a = rn(-15, -25);
                                break;
                            case 3:
                                a = rand(30, 31);
                                break;
                            case 4:
                                a = rn(15 - this.amount, 5 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(21, 22), rand(31, 32));
                                break;
                            case 6:
                                a = rn(-15, -16);
                                break;
                            case 7:
                                a = rand(11, 13);
                                break;
                            case 8:
                                a = 5 - this.amount;
                                break;
                            case 9:
                                a = rn(rand(76, 79), rand(86, 89));
                                break;
                            case 10:
                                a = rn(55 - this.amount, 65 - this.amount);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(21, 24), rand(31, 34), rand(41, 44), rand(71, 74));
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rn(rand(86, 89), rand(76, 79));
                                break;
                            case 4:
                                a = rn(65 - this.amount, 55 - this.amount);
                                break;
                            case 5:
                                a = rn(29, 19);
                                break;
                            case 6:
                                a = rn(rand(-69, -66), rand(-59, -56));
                                break;
                            case 7:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 8:
                                a = rand(-18, -15);
                                break;
                            case 9:
                                a = rn(55 - this.amount, 15 - this.amount, 5 - this.amount);
                                break;
                            case 10:
                                a = rand(26, 28);
                                break;
                            case 11:
                                a = rn(15 - this.amount, 16 - this.amount, 21 - this.amount);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(37, 39), rand(47, 49), rand(87, 89));
                                break;
                            case 2:
                                a = rn(-15, -16);
                                break;
                            case 3:
                                a = 5 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(36, 39), rand(86, 89));
                                break;
                            case 5:
                                a = rn(25 - this.amount, 15 - this.amount);
                                break;
                            case 6:
                                a = rand(21, 24);
                                break;
                            case 7:
                                a = -15;
                                break;
                            case 8:
                                a = 44 - this.amount;
                                break;
                            case 9:
                                a = rn(rand(-19, -16), rand(-29, -26), rand(-39, -36));
                                break;
                            case 10:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 11:
                                a = rand(-18, -15);
                                break;
                            case 12:
                                a = rn(55 - this.amount, 15 - this.amount);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(31, 34), rand(41, 44), rand(71, 74));
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = rand(26, 29);
                                break;
                            case 4:
                                a = rn(25 - this.amount, 5 - this.amount);
                                break;
                            case 5:
                                a = rand(12, 14);
                                break;
                            case 6:
                                a = rand(-17, -16);
                                break;
                            case 7:
                                a = rn(44 - this.amount, 34 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(-19, -16), rand(-29, -26));
                                break;
                            case 9:
                                a = rn(49 - this.amount, 39 - this.amount);
                                break;
                            case 10:
                                a = rand(-29, -11);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(51, 52), rand(11, 12));
                                break;
                            case 2:
                                a = rand(30, 32);
                                break;
                            case 3:
                                a = 25 - this.amount;
                                break;
                            case 4:
                                a = rn(14, 24);
                                break;
                            case 5:
                                a = -16;
                                break;
                            case 6:
                                a = rand(-18, -16);
                                break;
                            case 7:
                                a = rn(rand(26, 27), rand(56, 57));
                                break;
                            case 8:
                                a = 94 - this.amount;
                                break;
                            case 9:
                                a = rn(rand(-39, -36), rand(-79, -76));
                                break;
                            case 10:
                                a = rn(79 - this.amount, 69 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(-19, -11), rand(-59, -51));
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(81, 84), rand(91, 94), rand(71, 74));
                                break;
                            case 2:
                                a = 55 - this.amount;
                                break;
                            case 3:
                                a = rn(rand(36, 39), rand(26, 29));
                                break;
                            case 4:
                                a = rn(-10, -60);
                                break;
                            case 5:
                                a = 5 - this.amount;
                                break;
                            case 6:
                                a = rn(34, 44);
                                break;
                            case 7:
                                a = rn(-16, -15);
                                break;
                            case 8:
                                a = rand(-18, -16);
                                break;
                            case 9:
                                a = rn(21, 11, 61, 71);
                                break;
                            case 10:
                                a = 99 - this.amount;
                                break;
                            case 11:
                                a = rand(-71, -21);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(86, 88), rand(76, 78), rand(96, 98));
                                break;
                            case 2:
                                a = rn(rand(-16, -15), rand(-55, -56));
                                break;
                            case 3:
                                a = rand(10, 11);
                                break;
                            case 4:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 5:
                                a = rand(26, 29);
                                break;
                            case 6:
                                a = 94 - this.amount;
                                break;
                            case 7:
                                a = rn(rand(-39, -36), rand(-29, -26));
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ]
            },
            'sb': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(11, 12), rand(21, 22), rand(61, 62));
                                break;
                            case 2:
                                a = rand(20, 22);
                                break;
                            case 3:
                                a = 15 - this.amount;
                                break;
                            case 4:
                                a = rand(-14, -11);
                                break;
                            case 5:
                                a = rn(84 - this.amount, 94 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-19, -16), rand(-29, -26));
                                break;
                            case 7:
                                a = 45 - this.amount;
                                break;
                            case 8:
                                a = rand(-14, -11);
                                break;
                            case 9:
                                a = rn(15 - this.amount, 15);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(25, 28), rand(75, 78));
                                break;
                            case 2:
                                a = 4 - this.amount;
                                break;
                            case 3:
                                a = rn(70, 80, 90);
                                break;
                            case 4:
                                a = rand(-19, -16);
                                break;
                            case 5:
                                a = 35 - this.amount;
                                break;
                            case 6:
                                a = rand(-14, -11);
                                break;
                            case 7:
                                a = 5 - this.amount;
                                break;
                            case 8:
                                a = rn(rand(30, 33), rand(80, 83));
                                break;
                            case 9:
                                a = rand(24 - this.amount, -14);
                                break;
                            case 10:
                                a = rn(15, 84 - this.amount, 25);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(31, 34), rand(41, 44));
                                break;
                            case 2:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(70, 73), rand(80, 83));
                                break;
                            case 4:
                                a = rn(54 - this.amount, 64 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(-39, -36), rand(-29, -26), rand(-49, -46));
                                break;
                            case 6:
                                a = rn(11, 49 - this.amount, 89 - this.amount);
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(45, 48), rand(85, 88));
                                break;
                            case 2:
                                a = rn(24 - this.amount, 34 - this.amount);
                                break;
                            case 3:
                                a = rand(-19, -16);
                                break;
                            case 4:
                                a = rn(81, 91);
                                break;
                            case 5:
                                a = rn(74 - this.amount, 64 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-49, -46), rand(-39, -36));
                                break;
                            case 7:
                                a = rn(-14, 4 - this.amount);
                                break;
                            case 8:
                                a = rn(20, 70);
                                break;
                            case 9:
                                a = rn(5 - this.amount, -16);
                                break;
                            case 10:
                                a = rn(99 - this.amount, 11);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(55, 45, 85, 95);
                                break;
                            case 2:
                                a = rand(-14, -11);
                                break;
                            case 3:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(20, 23), rand(30, 33));
                                break;
                            case 5:
                                a = rn(14 - this.amount, 4 - this.amount);
                                break;
                            case 6:
                                a = rn(50, 60);
                                break;
                            case 7:
                                a = rn(rand(-39, -36), rand(-49, -46));
                                break;
                            case 8:
                                a = rn(49 - this.amount, 99 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-14, -11), rand(-24, -21));
                                break;
                            case 10:
                                a = rn(14 - this.amount, 4 - this.amount, -15);
                                break;
                            case 11:
                                a = rn(79 - this.amount, 89 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(-48, -41), rand(-38, -31));
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(51, 54), rand(61, 64));
                                break;
                            case 2:
                                a = rn(35 - this.amount, 25 - this.amount);
                                break;
                            case 3:
                                a = rand(-14, -11);
                                break;
                            case 4:
                                a = rn(10, 20);
                                break;
                            case 5:
                                a = 5 - this.amount;
                                break;
                            case 6:
                                a = rn(rand(21, 23), rand(31, 33));
                                break;
                            case 7:
                                a = rn(14 - this.amount, 4 - this.amount);
                                break;
                            case 8:
                                a = rn(30, 80);
                                break;
                            case 9:
                                a = rn(rand(-29, -26), rand(-19, -16));
                                break;
                            case 10:
                                a = rn(89 - this.amount, 21);
                                break;
                            case 11:
                                a = rn(14 - this.amount, 4 - this.amount);
                                break;
                            case 12:
                                a = rn(20, 30);
                                break;
                            case 13:
                                a = rand(-19, -16);
                                break;
                            case 14:
                                a = rn(11, 39 - this.amount);
                                break;
                            case 15:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(81, 84), rand(91, 94), rand(71, 74));
                                break;
                            case 2:
                                a = 55 - this.amount;
                                break;
                            case 3:
                                a = rn(rand(-24, -21), rand(-14, -11));
                                break;
                            case 4:
                                a = rn(15 - this.amount, 5 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(31, 33), rand(21, 23));
                                break;
                            case 6:
                                a = rn(14 - this.amount, 4 - this.amount);
                                break;
                            case 7:
                                a = rn(20, 30);
                                break;
                            case 8:
                                a = rand(-19, -16);
                                break;
                            case 9:
                                a = rn(49 - this.amount, 89 - this.amount);
                                break;
                            case 10:
                                a = rn(-14, -24);
                                break;
                            case 11:
                                a = rand(-14, -11);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(86, 88), rand(96, 98), rand(76, 78));
                                break;
                            case 2:
                                a = rn(65 - this.amount, 55 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-24, -21), rand(-14, -11));
                                break;
                            case 4:
                                a = rn(15 - this.amount, 5 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(31, 33), rand(21, 23));
                                break;
                            case 6:
                                a = rn(14 - this.amount, 14 - this.amount);
                                break;
                            case 7:
                                a = rn(15, 25, 55);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ]
            },
            'sr': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(11, 12), rand(21, 22), rand(61, 62));
                                break;
                            case 2:
                                a = rand(20, 22);
                                break;
                            case 3:
                                a = rn(15 - this.amount, 5 - this.amount);
                                break;
                            case 4:
                                a = rn(30, 80);
                                break;
                            case 5:
                                a = rand(-19, -16);
                                break;
                            case 6:
                                a = 90 - this.amount;
                                break;
                            case 7:
                                a = rn(rand(-19, -11), rand(-29, -21));
                                break;
                            case 8:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 9:
                                a = rn(rand(31, 34), rand(21, 24));
                                break;
                            case 10:
                                a = rn(5 - this.amount, 9 - this.amount);
                                break;
                            case 11:
                                a = rn(20, 30, 50);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(21, 24), rand(71, 74));
                                break;
                            case 2:
                                a = rn(5 - this.amount, 9 - this.amount);
                                break;
                            case 3:
                                a = rn(44 - this.amount, 40 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-19, -16), rand(-29, -26));
                                break;
                            case 5:
                                a = rn(1 - this.amount, -this.amount);
                                break;
                            case 6:
                                a = rn(rand(60, 68), rand(51, 58));
                                break;
                            case 7:
                                a = rn(84 - this.amount, 80 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(-19, -16), rand(-29, -26));
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(30, 34), rand(40, 44));
                                break;
                            case 2:
                                a = rn(19 - this.amount, 9 - this.amount);
                                break;
                            case 3:
                                a = rand(72, 75);
                                break;
                            case 4:
                                a = 65 - this.amount;
                                break;
                            case 5:
                                a = rand(-59, -56);
                                break;
                            case 6:
                                a = rn(35, 25);
                                break;
                            case 7:
                                a = rn(15 - this.amount, 5 - this.amount);
                                break;
                            case 8:
                                a = rn(20, 30);
                                break;
                            case 9:
                                a = rand(-19, -16);
                                break;
                            case 10:
                                a = rn(40 - this.amount, 39 - this.amount, 49 - this.amount);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(80, 90);
                                break;
                            case 2:
                                a = rand(-19, -11);
                                break;
                            case 3:
                                a = 94 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(-29, -26), rand(-19, -16));
                                break;
                            case 5:
                                a = 90 - this.amount;
                                break;
                            case 6:
                                a = rn(rand(-69, -61), rand(-79, -71));
                                break;
                            case 7:
                                a = 44 - this.amount;
                                break;
                            case 8:
                                a = rn(rand(-39, -36), rand(-29, -26));
                                break;
                            case 9:
                                a = rn(rand(20, 21), rand(10, 11));
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(61, 69), rand(51, 59));
                                break;
                            case 2:
                                a = rn(84 - this.amount, 94 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-79, -76), rand(-69, -64));
                                break;
                            case 4:
                                a = rn(90 - this.amount, 80 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(-69, -61), rand(-79, -71));
                                break;
                            case 6:
                                a = rn(40 - this.amount, 90 - this.amount, 44 - this.amount);
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(81, 84), rand(91, 94));
                                break;
                            case 2:
                                a = rn(65 - this.amount, 69 - this.amount);
                                break;
                            case 3:
                                a = rn(84 - this.amount, 80 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-69, -66), rand(-79, -76));
                                break;
                            case 5:
                                a = rn(40 - this.amount, 30 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-19, -11), rand(-29, -21));
                                break;
                            case 7:
                                a = 94 - this.amount;
                                break;
                            case 8:
                                a = rand(-39, -36);
                                break;
                            case 9:
                                a = rn(5 - this.amount, -this.amount);
                                break;
                            case 10:
                                a = rn(30, 40, 50);
                                break;
                            case 11:
                                a = rand(-19, -16);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(34, 44, 84, 94);
                                break;
                            case 2:
                                a = rn(rand(-29, -26), rand(-19, -16));
                                break;
                            case 3:
                                a = 90 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(-89, -81), rand(-79, -71));
                                break;
                            case 5:
                                a = rn(40 - this.amount, 30 - this.amount);
                                break;
                            case 6:
                                a = rand(-19, -11);
                                break;
                            case 7:
                                a = rn(44 - this.amount, 44 - this.amount);
                                break;
                            case 8:
                                a = rand(-29, -26);
                                break;
                            case 9:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 10:
                                a = rand(-39, -31);
                                break;
                            case 11:
                                a = rn(80 - this.amount, 70 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(19, 11), rand(-19, -11));
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(30, 40, 70);
                                break;
                            case 2:
                                a = rand(-19, -11);
                                break;
                            case 3:
                                a = rn(84 - this.amount, 94 - this.amount);
                                break;
                            case 4:
                                a = rand(-29, -26);
                                break;
                            case 5:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-59, -51), rand(-69, -61));
                                break;
                            case 7:
                                a = rn(1 - this.amount, -this.amount);
                                break;
                            case 8:
                                a = rn(rand(30, 34), rand(40, 44));
                                break;
                            case 9:
                                a = rn(19 - this.amount, 9 - this.amount);
                                break;
                            case 10:
                                a = rand(72, 75);
                                break;
                            case 11:
                                a = 65 - this.amount;
                                break;
                            case 12:
                                a = rand(-59, -56);
                                break;
                            case 13:
                                a = rn(35, 25);
                                break;
                            case 14:
                                a = rn(15 - this.amount, 5 - this.amount);
                                break;
                            case 15:
                                a = rn(rand(21, 24), rand(11, 14));
                                break;
                            case 16:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ]
            },
        },
        '2*': {
            'b': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(45, 35, 55, 65);
                                break;
                            case 2:
                                a = rn(rand(-24, -21), rand(-34, -31));
                                break;
                            case 3:
                                a = rn(65 - this.amount, 75 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-44, -41), rand(-34, -31));
                                break;
                            case 5:
                                a = rn(rand(34, 35), 65 - this.amount);
                                break;
                            case 6:
                                a = rand(-44, -43);
                                break;
                            case 7:
                                a = rn(100 - this.amount, -this.amount, 90 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(55, 58), rand(65, 68));
                                break;
                            case 9:
                                a = rn(-44, -34, -24);
                                break;
                            case 10:
                                a = rn(rand(11, 19), rand(21, 29));
                                break;
                            case 11:
                                a = rn(100 - this.amount, 110 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(-34, -31), rand(-44, -41));
                                break;
                            case 13:
                                a = rn(75, 99);
                                break;
                            case 14:
                                a = rn(266 - this.amount, 257 - this.amount, 276 - this.amount);
                                break;
                            case 15:
                                a = rn(rand(71, 79), rand(81, 89));
                                break;
                            case 16:
                                a = rn(234 - this.amount, 249 - this.amount, rand(-34, -33));
                                break;
                            case 17:
                                a = rn(rand(71, 79), rand(81, 89));
                                break;
                            case 18:
                                a = rn(355 - this.amount, 365 - this.amount, 375 - this.amount);
                                break;
                            case 19:
                                a = rn(rand(-34, -31), rand(-44, -41));
                                break;
                            case 20:
                                a = rand(11, 99);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(65, 75, 55);
                                break;
                            case 2:
                                a = rn(rand(-34, -31), rand(-44, -41));
                                break;
                            case 3:
                                a = rand(75, 99);
                                break;
                            case 4:
                                a = rn(166 - this.amount, 157 - this.amount, 176 - this.amount);
                                break;
                            case 5:
                                a = rn(134 - this.amount, 143 - this.amount, rand(-34, -33));
                                break;
                            case 6:
                                a = rn(rand(71, 79), rand(81, 89));
                                break;
                            case 7:
                                a = rn(255 - this.amount, 265 - this.amount, 257 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(-34, -31), rand(-44, -41));
                                break;
                            case 9:
                                a = rand(71, 99);
                                break;
                            case 10:
                                a = rn(355 - this.amount, 365 - this.amount, 375 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(-24, -21), rand(-34, -31), rand(-44, -41));
                                break;
                            case 12:
                                a = rn(400 - this.amount, 410 - this.amount);
                                break;
                            case 13:
                                a = rn(25, 15, 35);
                                break;
                            case 14:
                                a = rand(-14, -11);
                                break;
                            case 15:
                                a = rn(55 - this.amount, 44);
                                break;
                            case 16:
                                a = rn(434 - this.amount, 444 - this.amount, 443 - this.amount);
                                break;
                            case 17:
                                a = rn(rand(72, 74), rand(82, 84), rand(62, 64));
                                break;
                            case 18:
                                a = rn(565 - this.amount, 575 - this.amount, 555 - this.amount);
                                break;
                            case 19:
                                a = rn(rand(-44, -41), rand(-34, -31));
                                break;
                            case 20:
                                a = rn(rand(91, 99), rand(81, 89));
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(40, 80);
                                break;
                            case 2:
                                a = rn(115 - this.amount, 125 - this.amount, 135 - this.amount);
                                break;
                            case 3:
                                a = rand(-14, -11);
                                break;
                            case 4:
                                a = rn(155 - this.amount, 165 - this.amount, 175 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(-34, -31), rand(-44, -41));
                                break;
                            case 6:
                                a = rn(200 - this.amount, 195 - this.amount, 185 - this.amount);
                                break;
                            case 7:
                                a = rn(256 - this.amount, 267 - this.amount, 276 - this.amount);
                                break;
                            case 8:
                                a = rn(244 - this.amount, 234 - this.amount, 243 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(82, 83), rand(92, 93), 325 - this.amount);
                                break;
                            case 10:
                                a = rn(304 - this.amount, rand(-14, -13));
                                break;
                            case 11:
                                a = rn(355 - this.amount, 366 - this.amount, 379 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(-24, -22), rand(-34, -32));
                                break;
                            case 13:
                                a = rn(rand(81, 89), rand(71, 79));
                                break;
                            case 14:
                                a = rn(445 - this.amount, 465 - this.amount, 475 - this.amount);
                                break;
                            case 15:
                                a = rn(rand(-34, -34), rand(-44, -41));
                                break;
                            case 16:
                                a = rn(rand(61, 69), rand(71, 79));
                                break;
                            case 17:
                                a = rn(555 - this.amount, 565 - this.amount);
                                break;
                            case 18:
                                a = rn(rand(-24, -21), rand(-34, -31));
                                break;
                            case 19:
                                a = rand(11, 99);
                                break;
                            case 20:
                                a = rand(11, 99);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(35, 45, 25);
                                break;
                            case 2:
                                a = rand(-14, -11);
                                break;
                            case 3:
                                a = rn(55 - this.amount, 44);
                                break;
                            case 4:
                                a = rn(34 - this.amount, 44 - this.amount, 43 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(72, 74), rand(82, 84), rand(62, 64));
                                break;
                            case 6:
                                a = rn(165 - this.amount, 175 - this.amount, 155 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(-44, -41), rand(-34, -31));
                                break;
                            case 8:
                                a = rn(rand(91, 99), rand(81, 89), rand(71, 79));
                                break;
                            case 9:
                                a = rn(255 - this.amount, 265 - this.amount, 257 - this.amount, 268 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(-34, -31), rand(-44, -41));
                                break;
                            case 11:
                                a = rn(rand(71, 79), rand(81, 89));
                                break;
                            case 12:
                                a = rn(356 - this.amount, 365 - this.amount, 377 - this.amount);
                                break;
                            case 13:
                                a = rn(rand(-34, -33), rand(-44, -43));
                                break;
                            case 14:
                                a = rn(400 - this.amount, 410 - this.amount);
                                break;
                            case 15:
                                a = rn(rand(71, 79), rand(81, 89));
                                break;
                            case 16:
                                a = rn(557 - this.amount, 566 - this.amount);
                                break;
                            case 17:
                                a = rn(rand(-44, -43), rand(-34, -33));
                                break;
                            case 18:
                                a = rand(11, 44);
                                break;
                            case 19:
                                a = rand(55, 91);
                                break;
                            case 20:
                                a = rand(11, 99);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(55, 58), rand(65, 68), rand(75, 78));
                                break;
                            case 2:
                                a = rn(33 - this.amount, 44 - this.amount, 34 - this.amount, 43 - this.amount);
                                break;
                            case 3:
                                a = rn(115 - this.amount, 125 - this.amount, 95 - this.amount);
                                break;
                            case 4:
                                a = rand(-14, -11);
                                break;
                            case 5:
                                a = rn(135 - this.amount, 155 - this.amount, 165 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(21, 23), rand(11, 13));
                                break;
                            case 7:
                                a = rn(134 - this.amount, 124 - this.amount, 114 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(41, 43), rand(51, 53));
                                break;
                            case 9:
                                a = rn(143 - this.amount, 133 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(72, 74), rand(82, 84));
                                break;
                            case 11:
                                a = rn(255 - this.amount, 266 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(-24, -22), rand(-34, -32));
                                break;
                            case 13:
                                a = rand(61, 89);
                                /*69 or 89*/
                                break;
                            case 14:
                                a = rn(355 - this.amount, 366 - this.amount, 379 - this.amount);
                                break;
                            case 15:
                                a = rn(344 - this.amount, 334 - this.amount);
                                break;
                            case 16:
                                a = rand(11, 44);
                                break;
                            case 17:
                                a = rn(400 - this.amount, 410 - this.amount);
                                break;
                            case 18:
                                a = rn(rand(55, 58), rand(65, 68));
                                break;
                            case 19:
                                a = rn(444 - this.amount, 434 - this.amount);
                                break;
                            case 20:
                                a = rand(11, 99);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ]
            },
            's': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(91, 99), rand(86, 89));
                                break;
                            case 2:
                                a = rn(191 - this.amount, 184 - this.amount, 173 - this.amount, 182 - this.amount);
                                break;
                            case 3:
                                a = rn(105 - this.amount, 115 - this.amount, -56, -66);
                                break;
                            case 4:
                                a = rn(174 - this.amount, 184 - this.amount, 194 - this.amount);
                                break;
                            case 5:
                                a = rand(-19, -16);
                                break;
                            case 6:
                                a = rand(41, 49);
                                break;
                            case 7:
                                a = rn(244 - this.amount, 242 - this.amount, 233 - this.amount, 231 - this.amount);
                                break;
                            case 8:
                                a = rn(165 - this.amount, 155 - this.amount, -66, -76);
                                break;
                            case 9:
                                a = rand(81, 89);
                                break;
                            case 10:
                                a = rn(323 - this.amount, 334 - this.amount, 314 - this.amount, 341 - this.amount);
                                /*341 или  314*/
                                break;
                            case 11:
                                a = rn(251 - this.amount, 260 - this.amount, -66);
                                break;
                            case 12:
                                a = rand(61, 69);
                                break;
                            case 13:
                                a = rn(394 - this.amount, 984 - this.amount);
                                break;
                            case 14:
                                a = rand(-59, -56);
                                break;
                            case 15:
                                a = rand(71, 79);
                                break;
                            case 16:
                                a = rn(474 - this.amount, 464 - this.amount);
                                break;
                            case 17:
                                a = rn(rand(-19, -16), rand(-59, 56));
                                break;
                            case 18:
                                a = rand(11, 99);
                                break;
                            case 19:
                                a = rand(11, 99);
                                break;
                            case 20:
                                a = rand(11, 99);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(94, 84, 44);
                                break;
                            case 2:
                                a = rn(rand(-19, -16), rand(-29, -26), 16 - this.amount, 17 - this.amount);
                                break;
                            case 3:
                                a = rand(41, 49);
                                break;
                            case 4:
                                a = rn(138 - this.amount, 149 - this.amount, 146 - this.amount);
                                break;
                            case 5:
                                a = rn(60 - this.amount, 50 - this.amount, 61 - this.amount, 55 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(31, 39), rand(49, 49));
                                break;
                            case 7:
                                a = rn(174 - this.amount, 164 - this.amount, 124 - this.amount);
                                break;
                            case 8:
                                a = rand(-19, -16);
                                break;
                            case 9:
                                a = rn(rand(81, 89), rand(71, 79));
                                break;
                            case 10:
                                a = rn(274 - this.amount, 262 - this.amount, 273 - this.amount);
                                /*341 или  314*/
                                break;
                            case 11:
                                a = rn(205 - this.amount, -56, -57);
                                break;
                            case 12:
                                a = rn(242 - this.amount, 231 - this.amount, 244 - this.amount);
                                break;
                            case 13:
                                a = rn(165 - this.amount, 55 - this.amount, -66, -26);
                                break;
                            case 14:
                                a = rn(rand(81, 99), rand(91, 99));
                                break;
                            case 15:
                                a = rn(334 - this.amount, 324 - this.amount, 314 - this.amount);
                                break;
                            case 16:
                                a = rn(264 - this.amount, 256 - this.amount, 267 - this.amount);
                                break;
                            case 17:
                                a = rn(rand(14, 49), rand(31, 39));
                                break;
                            case 18:
                                a = rn(344 - this.amount, 383 - this.amount, 384 - this.amount);
                                break;
                            case 19:
                                a = rn(rand(-28, -26), rand(-18, -16));
                                break;
                            case 20:
                                a = rn(rand(91, 99), rand(81, 89));
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(61, 62), rand(51, 59), rand(81, 89));
                                break;
                            case 2:
                                a = rn(142 - this.amount, 131 - this.amount, 144 - this.amount, 133 - this.amount);
                                break;
                            case 3:
                                a = rn(65 - this.amount, 55 - this.amount, -66, -76);
                                break;
                            case 4:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 5:
                                a = rn(234 - this.amount, 224 - this.amount, 214 - this.amount);
                                break;
                            case 6:
                                a = rn(165 - this.amount, 156 - this.amount, 167 - this.amount, 158 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(41, 49), rand(31, 39));
                                break;
                            case 8:
                                a = rn(244 - this.amount, 283 - this.amount, 284 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-28, -26), rand(-18, -16));
                                break;
                            case 10:
                                a = rn(rand(91, 99), rand(81, 89));
                                /*341 или  314*/
                                break;
                            case 11:
                                a = rn(384 - this.amount, 394 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(-69, -66), rand(-79, -76));
                                break;
                            case 13:
                                a = rn(rand(41, 49), rand(51, 59));
                                break;
                            case 14:
                                a = rn(434 - this.amount, 444 - this.amount, 424 - this.amount);
                                break;
                            case 15:
                                a = rand(-19, -16);
                                break;
                            case 16:
                                a = rn(491 - this.amount, 482 - this.amount, 483 - this.amount, 494 - this.amount);
                                break;
                            case 17:
                                a = rn(455 - this.amount, 465 - this.amount, 425 - this.amount);
                                break;
                            case 18:
                                a = rn(rand(41, 49), rand(61, 69));
                                break;
                            case 19:
                                a = rn(594 - this.amount, 584 - this.amount);
                                break;
                            case 20:
                                a = rn(rand(-79, -76), rand(-69, -66));
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(41, 44), rand(91, 94));
                                break;
                            case 2:
                                a = rn(15 - this.amount, 25 - this.amount, -16, -26);
                                break;
                            case 3:
                                a = rn(84 - this.amount, 94 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-69, -66), rand(-79, -76));
                                break;
                            case 5:
                                a = rn(rand(41, 49), rand(51, 59));
                                break;
                            case 6:
                                a = rn(134 - this.amount, 144 - this.amount, 124 - this.amount);
                                break;
                            case 7:
                                a = rand(-19, -16);
                                break;
                            case 8:
                                a = rn(191 - this.amount, 182 - this.amount, 183 - this.amount, 194 - this.amount);
                                break;
                            case 9:
                                a = rn(155 - this.amount, 165 - this.amount, 125 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(31, 39), rand(21, 29));
                                break;
                            case 11:
                                a = rn(324 - this.amount, 344 - this.amount, 334 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(-19, -16), rand(-29, -26), rand(-69, -66));
                                break;
                            case 13:
                                a = rn(441 - this.amount, 442 - this.amount, 443 - this.amount, 444 - this.amount);
                                break;
                            case 14:
                                a = rn(425 - this.amount, 415 - this.amount, 405 - this.amount);
                                break;
                            case 15:
                                a = rand(11, 14);
                                break;
                            case 16:
                                a = rn(355 - this.amount, 356 - this.amount, -66, -65);
                                break;
                            case 17:
                                a = rn(434 - this.amount, 444 - this.amount, 424 - this.amount);
                                break;
                            case 18:
                                a = rand(-19, -16);
                                break;
                            case 19:
                                a = rn(rand(41, 49), rand(51, 59), rand(61, 69));
                                break;
                            case 20:
                                a = rand(11, 99);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(81, 89), rand(71, 79), rand(91, 99));
                                break;
                            case 2:
                                a = rn(134 - this.amount, 144 - this.amount, 124 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-19, -16), rand(-29, -26), rand(-69, -66));
                                break;
                            case 4:
                                a = rn(141 - this.amount, 142 - this.amount, 143 - this.amount, 144 - this.amount);
                                break;
                            case 5:
                                a = rn(125 - this.amount, 115 - this.amount, 105 - this.amount);
                                break;
                            case 6:
                                a = rand(11, 14);
                                break;
                            case 7:
                                a = rn(55 - this.amount, 56 - this.amount, -66, -65);
                                break;
                            case 8:
                                a = rn(134 - this.amount, 144 - this.amount, 124 - this.amount);
                                break;
                            case 9:
                                a = rand(-19, -16);
                                break;
                            case 10:
                                a = rn(rand(41, 49), rand(51, 59), rand(61, 69));
                                break;
                            case 11:
                                a = rn(241 - this.amount, 234 - this.amount, 243 - this.amount, 234 - this.amount);
                                break;
                            case 12:
                                a = rn(165 - this.amount, 155 - this.amount, -66, -76);
                                break;
                            case 13:
                                a = rn(194 - this.amount, 184 - this.amount);
                                break;
                            case 14:
                                a = rn(rand(-19, -16), rand(-29, -26), 116 - this.amount, 117 - this.amount);
                                break;
                            case 15:
                                a = rand(41, 49);
                                break;
                            case 16:
                                a = rn(298 - this.amount, 249 - this.amount, 246 - this.amount, 237 - this.amount);
                                break;
                            case 17:
                                a = rn(160 - this.amount, 150 - this.amount, 61 - this.amount, 55 - this.amount);
                                break;
                            case 18:
                                a = rn(rand(31, 39), rand(41, 49));
                                break;
                            case 19:
                                a = rn(274 - this.amount, 264 - this.amount, 224 - this.amount);
                                break;
                            case 20:
                                a = rand(-19, -16);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ]
            },
            'r': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(21, 29), rand(41, 49));
                                break;
                            case 2:
                                a = rn(80 - this.amount, 90 - this.amount, 70 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-19, -11), rand(-59, -51));
                                break;
                            case 4:
                                a = rn(100 - this.amount, 110 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(-89, -81), rand(-79, -71));
                                break;
                            case 6:
                                a = rn(rand(99, 91), rand(89, 81));
                                break;
                            case 7:
                                a = rn(170 - this.amount, 180 - this.amount, 190 - this.amount);
                                break;
                            case 8:
                                a = rand(-19, -11);
                                break;
                            case 9:
                                a = rn(210 - this.amount, 220 - this.amount, 230 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(-29, -21), rand(-39, -37));
                                break;
                            case 11:
                                a = rn(260 - this.amount, 270 - this.amount);
                                break;
                            case 12:
                                a = rand(-59, -52);
                                break;
                            case 13:
                                a = rn(30, 70, 20, 80);
                                break;
                            case 14:
                                a = rn(199 - this.amount, 209 - this.amount);
                                break;
                            case 15:
                                a = rn(270 - this.amount, 220 - this.amount);
                                break;
                            case 16:
                                a = rn(rand(-88, -81), rand(-49, -41));
                                break;
                            case 17:
                                a = rn(200 - this.amount, 210 - this.amount);
                                break;
                            case 18:
                                a = rn(rand(-29, -21), rand(-59, -51));
                                break;
                            case 19:
                                a = rand(10, 99);
                                break;
                            case 20:
                                a = rand(10, 99);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(40, 48), rand(30, 98), rand(90, 98));
                                break;
                            case 2:
                                a = rn(19 - this.amount, 9 - this.amount);
                                break;
                            case 3:
                                a = rn(40 - this.amount, 30 - this.amount, 80 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-19, -11), rand(-29, -21));
                                break;
                            case 5:
                                a = rn(100 - this.amount, 90 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-69, -61), rand(-79, -71), rand(-89, -81));
                                break;
                            case 7:
                                a = rn(rand(41, 49), rand(51, 59));
                                break;
                            case 8:
                                a = rn(130 - this.amount, 120 - this.amount, 140 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-19, -11), rand(-59, -51));
                                break;
                            case 10:
                                a = rn(rand(61, 69), rand(71, 79));
                                break;
                            case 11:
                                a = rn(220 - this.amount, 210 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(-59, -51), rand(-79, -71));
                                break;
                            case 13:
                                a = rn(rand(81, 89), rand(71, 79));
                                break;
                            case 14:
                                a = rn(260 - this.amount, 270 - this.amount);
                                break;
                            case 15:
                                a = rand(-59, -52);
                                break;
                            case 16:
                                a = rn(30, 70, 20, 80);
                                break;
                            case 17:
                                a = rn(199 - this.amount, 209);
                                break;
                            case 18:
                                a = rand(10, 89);
                                break;
                            case 19:
                                a = rand(10, 99);
                                break;
                            case 20:
                                a = rand(17, 99);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(31, 39), rand(21, 29));
                                break;
                            case 2:
                                a = rn(100 - this.amount, 110 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-59, -51), rand(-79, -71));
                                break;
                            case 4:
                                a = rn(rand(81, 89), rand(71, 79));
                                break;
                            case 5:
                                a = rn(160 - this.amount, 170 - this.amount);
                                break;
                            case 6:
                                a = rand(-59, -51);
                                break;
                            case 7:
                                a = rn(30, 70, 20, 80);
                                break;
                            case 8:
                                a = rn(99 - this.amount, 109 - this.amount);
                                break;
                            case 9:
                                a = rn(120 - this.amount, 130 - this.amount);
                                break;
                            case 10:
                                a = rand(-59, -51);
                                break;
                            case 11:
                                a = rn(100 - this.amount, 110 - this.amount);
                                break;
                            case 12:
                                a = rand(71, 98);
                                break;
                            case 13:
                                a = rn(220 - this.amount, 230 - this.amount, 240 - this.amount);
                                break;
                            case 14:
                                a = rand(-19, -11);
                                break;
                            case 15:
                                a = rand(71, 89);
                                break;
                            case 16:
                                a = rn(340 - this.amount, 330 - this.amount);
                                break;
                            case 17:
                                a = rand(-29, -21);
                                break;
                            case 18:
                                a = rand(11, 99);
                                break;
                            case 19:
                                a = rand(11, 99);
                                break;
                            case 20:
                                a = rand(11, 99);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(40, 42), rand(90, 92), rand(80, 82));
                                break;
                            case 2:
                                a = rn(rand(-19, -18), rand(-25, -23));
                                break;
                            case 3:
                                a = rn(100 - this.amount, 110 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-79, -71), rand(-89, -81), rand(-99, -91));
                                break;
                            case 5:
                                a = rn(rand(61, 69), rand(51, 59));
                                break;
                            case 6:
                                a = rn(142 - this.amount, 131 - this.amount, 121 - this.amount);
                                break;
                            case 7:
                                a = rn(-15, rand(-19, -17), rand(-59, -57));
                                break;
                            case 8:
                                a = rn(rand(41, 49), rand(31, 39));
                                break;
                            case 9:
                                a = rn(190 - this.amount, 180 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(-69, -62), rand(-59, -52));
                                break;
                            case 11:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 12:
                                a = rn(40 - this.amount, 40 - this.amount);
                                break;
                            case 13:
                                a = rn(rand(-19, -11), rand(-29, -21));
                                break;
                            case 14:
                                a = rn(100 - this.amount, 90 - this.amount);
                                break;
                            case 15:
                                a = rn(rand(-69, -61), rand(-79, -71));
                                break;
                            case 16:
                                a = rn(rand(41, 49), rand(51, 59));
                                break;
                            case 17:
                                a = rn(130 - this.amount, 120 - this.amount, 140 - this.amount);
                                break;
                            case 18:
                                a = rn(rand(-19, -11), rand(-59, -51));
                                break;
                            case 19:
                                a = rn(rand(61, 69), rand(71, 79));
                                break;
                            case 20:
                                a = rand(11, 99);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(51, 69), rand(71, 89));
                                break;
                            case 2:
                                a = rn(130 - this.amount, 140 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-19, -17), rand(-29, -27));
                                break;
                            case 4:
                                a = rn(rand(-35, -34), rand(-45, -44), rand(-25, -24));
                                break;
                            case 5:
                                a = rn(rand(41, 49), rand(34, 39));
                                break;
                            case 6:
                                a = rn(170 - this.amount, 180 - this.amount, 190 - this.amount);
                                break;
                            case 7:
                                a = rn(-16, -56, -66);
                                break;
                            case 8:
                                a = rn(200 - this.amount, 190 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-29, -21), rand(-69, -61));
                                break;
                            case 10:
                                a = rn(rand(71, 79), rand(81, 89));
                                break;
                            case 11:
                                a = rn(280 - this.amount, 290 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(-21, -29), rand(-59, -51));
                                break;
                            case 13:
                                a = rn(300 - this.amount, 310 - this.amount);
                                /*69 or 89*/
                                break;
                            case 14:
                                a = rn(rand(-79, -71), rand(-69, -61));
                                break;
                            case 15:
                                a = rn(270 - this.amount, 280 - this.amount);
                                break;
                            case 16:
                                a = rand(-69, -61);
                                break;
                            case 17:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 18:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 19:
                                a = rand(-19, -11);
                                break;
                            case 20:
                                a = rand(50, 99);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ]
            },
            'rb': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(28, 91), rand(42, 49), rand(60, 69));
                                break;
                            case 2:
                                a = rn(117 - this.amount, 127 - this.amount, 106 - this.amount, 105 - this.amount);
                                break;
                            case 3:
                                a = rn(94 - this.amount, 84 - this.amount, 83 - this.amount, 93 - this.amount);
                                break;
                            case 4:
                                a = rn(69 - this.amount, rand(11, 19));
                                break;
                            case 5:
                                a = rn(rand(51, 59), rand(61, 69));
                                break;
                            case 6:
                                a = rn(215 - this.amount, 207 - this.amount, 216 - this.amount, 206 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(-34, -33), rand(-44, -43));
                                break;
                            case 8:
                                a = rn(-45, 139 - this.amount, 149 - this.amount);
                                break;
                            case 9:
                                a = rn(182 - this.amount, 190 - this.amount, 181 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(-89, -88), rand(-99, -98));
                                break;
                            case 11:
                                a = rn(180 - this.amount, 170 - this.amount, 176 - this.amount, 181 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(-44, -43), rand(-34, -33));
                                break;
                            case 13:
                                a = rn(109 - this.amount, 199 - this.amount, 89 - this.amount);
                                break;
                            case 14:
                                a = rand(11, 39);
                                break;
                            case 15:
                                a = rn(182 - this.amount, 171 - this.amount, 163 - this.amount);
                                break;
                            case 16:
                                a = rn(rand(-49, -45), rand(-39, -35));
                                break;
                            case 17:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 18:
                                a = rn(282 - this.amount, 272 - this.amount, 261 - this.amount);
                                break;
                            case 19:
                                a = rn(rand(-44, -43), rand(-34, -33));
                                break;
                            case 20:
                                a = rand(11, 99);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(60, 68), rand(70, 78), rand(80, 88));
                                break;
                            case 2:
                                a = rn(49 - this.amount, 39 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(86, 89), rand(96, 99));
                                break;
                            case 4:
                                a = rn(109 - this.amount, 114 - this.amount, 104 - this.amount, 99 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(61, 69), rand(71, 79));
                                break;
                            case 6:
                                a = rn(256 - this.amount, 238 - this.amount, 247 - this.amount, 255 - this.amount);
                                break;
                            case 7:
                                a = rn(194 - this.amount, 199 - this.amount, 224 - this.amount, 279 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(81, 89), rand(71, 79));
                                break;
                            case 9:
                                a = rn(350 - this.amount, 360 - this.amount, 243 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(-49, -42), rand(-39, -32));
                                break;
                            case 11:
                                a = rn(288 - this.amount, 279 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 13:
                                a = rn(349 - this.amount, 339 - this.amount);
                                break;
                            case 14:
                                a = rn(rand(86, 89), rand(96, 99));
                                break;
                            case 15:
                                a = rn(409 - this.amount, 414 - this.amount, 404 - this.amount, 399 - this.amount);
                                break;
                            case 16:
                                a = rn(rand(61, 69), rand(71, 79));
                                break;
                            case 17:
                                a = rn(556 - this.amount, 538 - this.amount, 547 - this.amount, 555 - this.amount);
                                break;
                            case 18:
                                a = rn(494 - this.amount, 499 - this.amount, 424 - this.amount, 419 - this.amount);
                                break;
                            case 19:
                                a = rand(41, 79);
                                break;
                            case 20:
                                a = rand(11, 40);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(11, 39), rand(91, 99));
                                break;
                            case 2:
                                a = rn(80 - this.amount, 60 - this.amount, 70 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-49, -41), 49 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(61, 69), rand(71, 79));
                                break;
                            case 5:
                                a = rn(158 - this.amount, 157 - this.amount, 146 - this.amount, 135 - this.amount);
                                break;
                            case 6:
                                a = rn(94 - this.amount, 124 - this.amount, 119 - this.amount, 199 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 8:
                                a = rn(250 - this.amount, 260 - this.amount, 170 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-49, -41), rand(-39, -31));
                                break;
                            case 10:
                                a = rn(rand(51, 59), rand(61, 69));
                                break;
                            case 11:
                                a = rn(rand(41, 49), rand(31, 39));
                                break;
                            case 12:
                                a = rn(394 - this.amount, 384 - this.amount, 339 - this.amount, 383 - this.amount);
                                break;
                            case 13:
                                a = rn(369 - this.amount, rand(11, 99));
                                break;
                            case 14:
                                a = rn(rand(51, 59), rand(61, 69));
                                break;
                            case 15:
                                a = rn(315 - this.amount, 307 - this.amount, 316 - this.amount);
                                break;
                            case 16:
                                a = rn(rand(-34, -33), rand(-44, -43));
                                break;
                            case 17:
                                a = rn(-45, 239 - this.amount, 249 - this.amount);
                                break;
                            case 18:
                                a = rn(290 - this.amount, 281 - this.amount, 280 - this.amount);
                                break;
                            case 19:
                                a = rn(rand(-34, -33), rand(-44, -43));
                                break;
                            case 20:
                                a = rand(11, 99);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(81, 89), rand(71, 79), rand(91, 99));
                                break;
                            case 2:
                                a = rn(134 - this.amount, 144 - this.amount, 124 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-19, -16), rand(-29, -26), rand(-69, -66));
                                break;
                            case 4:
                                a = rn(141 - this.amount, 142 - this.amount, 143 - this.amount, 144 - this.amount);
                                break;
                            case 5:
                                a = rn(125 - this.amount, 115 - this.amount, 105 - this.amount);
                                break;
                            case 6:
                                a = rand(11, 14);
                                break;
                            case 7:
                                a = rn(55 - this.amount, 56 - this.amount, -66, -65);
                                break;
                            case 8:
                                a = rn(134 - this.amount, 144 - this.amount, 124 - this.amount);
                                break;
                            case 9:
                                a = rand(-19, -16);
                                break;
                            case 10:
                                a = rn(rand(41, 49), rand(51, 59), rand(61, 69));
                                break;
                            case 11:
                                a = rn(241 - this.amount, 234 - this.amount, 243 - this.amount, 234 - this.amount);
                                break;
                            case 12:
                                a = rn(165 - this.amount, 155 - this.amount, -66, -76);
                                break;
                            case 13:
                                a = rn(194 - this.amount, 184 - this.amount);
                                break;
                            case 14:
                                a = rn(rand(-19, -16), rand(-29, -26), 116 - this.amount, 117 - this.amount);
                                break;
                            case 15:
                                a = rand(41, 49);
                                break;
                            case 16:
                                a = rn(298 - this.amount, 249 - this.amount, 246 - this.amount, 237 - this.amount);
                                break;
                            case 17:
                                a = rn(160 - this.amount, 150 - this.amount, 61 - this.amount, 55 - this.amount);
                                break;
                            case 18:
                                a = rn(rand(31, 39), rand(41, 49));
                                break;
                            case 19:
                                a = rn(274 - this.amount, 15264 - this.amount, 224 - this.amount);
                                break;
                            case 20:
                                a = rand(-19, -16);
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },

                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(70, 79), rand(80, 89), rand(41, 49));
                                break;
                            case 2:
                                a = rn(rand(60, 69), rand(70, 79));
                                /*Тут совсем не понятно */
                                break;
                            case 3:
                                a = rn(180 - this.amount, 170 - this.amount, 176 - this.amount, 181 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-44, -43), rand(-34, -33));
                                break;
                            case 5:
                                a = rn(109 - this.amount, 99 - this.amount, 89 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(11, 19), rand(31, 39), rand(21, 29));
                                break;
                            case 7:
                                a = rn(182 - this.amount, 171 - this.amount, 163 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(-49, -45), rand(-39, -35));
                                break;
                            case 9:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 10:
                                a = rn(282 - this.amount, 272 - this.amount, 261 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(-44, -43), rand(-34, -33));
                                break;
                            case 12:
                                a = rn(300 - this.amount, 310 - this.amount);
                                break;
                            case 13:
                                a = rn(rand(-29, -22), rand(-39, -32));
                                break;
                            case 14:
                                a = rn(249 - this.amount, 239 - this.amount);
                                break;
                            case 15:
                                a = rn(rand(86, 89), rand(96, 99));
                                break;
                            case 16:
                                a = rn(309 - this.amount, 314 - this.amount, 304 - this.amount, 299 - this.amount);
                                break;
                            case 17:
                                a = rn(rand(61, 69), rand(71, 79));
                                break;
                            case 18:
                                a = rn(456 - this.amount, 438 - this.amount, 447 - this.amount);
                                break;
                            case 19:
                                a = rn(394 - this.amount, 399 - this.amount, 324 - this.amount);
                                break;
                            case 20:
                                a = rn(rand(91, 99), rand(61, 69));
                                break;
                            case 21:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ]
            }
        },
        '3': {
            'b': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(785, 788), rand(695, 698), rand(795, 798), rand(685, 688));
                                break;
                            case 2:
                                a = rn(574 - this.amount, 564 - this.amount, 584 - this.amount, 554 - this.amount);
                                break;
                            case 3:
                                a = rn(442 - this.amount, 341 - this.amount, 243 - this.amount, 144 - this.amount);
                                break;
                            case 4:
                                a = rn(996 - this.amount, 987 - this.amount, 998 - this.amount);
                                break;
                            case 5:
                                a = rn(884 - this.amount, 874 - this.amount, 864 - this.amount, 854 - this.amount);
                                break;
                            case 6:
                                a = rn(543 - this.amount, 542 - this.amount);
                                break;
                            case 7:
                                a = rn(-121, -230, -312, -421);
                                break;
                            case 8:
                                a = rn(645 - this.amount, 745 - this.amount, 845 - this.amount);
                                break;
                            case 9:
                                a = rand(110, 113);
                                break;
                            case 10:
                                a = rn(654 - this.amount, 554 - this.amount);
                                break;
                            case 11:
                                a = rn(451 - this.amount, 353 - this.amount, 252 - this.amount);
                                break;
                            case 12:
                                a = rn(-111, -131, -121, -140);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(257, 259), rand(357, 359), rand(457, 459));
                                break;
                            case 2:
                                a = rn(rand(-112, -111), rand(-122, -121), rand(-232, -231), rand(-242, -241));
                                break;
                            case 3:
                                a = rn(559 - this.amount, 569 - this.amount, 579 - this.amount);
                                break;
                            case 4:
                                a = rn(-144, -334, -434, -244);
                                break;
                            case 5:
                                a = rand(-104, -101);
                                break;
                            case 6:
                                a = rn(784 - this.amount, 674 - this.amount, 764 - this.amount, 654 - this.amount);
                                break;
                            case 7:
                                a = rn(544 - this.amount, 542 - this.amount, 543 - this.amount);
                                break;
                            case 8:
                                a = rn(-121, -211, -342, -432);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(435, 438), rand(445, 448), rand(345, 348));
                                break;
                            case 2:
                                a = rn(224 - this.amount, 214 - this.amount, 134 - this.amount, 124 - this.amount);
                                break;
                            case 3:
                                a = rn(550, 650, 560, 660);
                                break;
                            case 4:
                                a = rn(432 - this.amount, 341 - this.amount, 441 - this.amount, 243 - this.amount);
                                break;
                            case 5:
                                a = rn(100 - this.amount, -this.amount, 110 - this.amount, 10 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(256, 258), rand(366, 368), rand(276, 278));
                                break;
                            case 7:
                                a = rn(144 - this.amount, 134 - this.amount, 124 - this.amount);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(362, 364), rand(382, 384), rand(372, 374), rand(352, 354));
                                break;
                            case 2:
                                a = rn(241 - this.amount, 142 - this.amount, 242 - this.amount, 141 - this.amount);
                                break;
                            case 3:
                                a = rn(895 - this.amount, 995 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-124, -121), rand(-214, -211), rand(-334, -331));
                                break;
                            case 5:
                                a = rn(450 - this.amount, 460 - this.amount, 461 - this.amount);
                                break;
                            case 6:
                                a = rn(-140, -230, -320);
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(865, 868), rand(965, 968), rand(885, 888));
                                break;
                            case 2:
                                a = 754 - this.amount;
                                break;
                            case 3:
                                a = rn(rand(-214, -211), rand(-224, -221), rand(-134, -131), rand(-144, -141));
                                break;
                            case 4:
                                a = rn(-100, -210, -300, -410);
                                break;
                            case 5:
                                a = rn(775 - this.amount, 875 - this.amount, 765 - this.amount);
                                break;
                            case 6:
                                a = rn(645 - this.amount, 635 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(-124, -121), rand(-114, -111), rand(-134, -131));
                                break;
                            case 8:
                                a = rn(100 - this.amount, 200 - this.amount, 301 - this.amount, 401 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(126, 128), rand(216, 218), rand(352, 354));
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(110, 113), rand(210, 213), rand(101, 103));
                                break;
                            case 2:
                                a = rn(155, 165, 176, 156);
                                break;
                            case 3:
                                a = 145 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(-134, -131), rand(-124, -121), rand(-114, -111));
                                break;
                            case 5:
                                a = rn(584 - this.amount, 564 - this.amount, 574 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-113, -112), rand(-203, -202), rand(-303, -302), rand(-413, -412));
                                break;
                            case 7:
                                a = rn(40 - this.amount, 41 - this.amount);
                                break;
                            case 8:
                                a = rn(351 - this.amount, 353 - this.amount);
                                break;
                            case 9:
                                a = rn(250 - this.amount, 150 - this.amount);
                                break;
                            case 10:
                                a = rn(-140, -130, -120, -110);
                                break;
                            case 11:
                                a = rn(rand(201, 209), rand(251, 259));
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ]
            },
            'r': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(430, 340, 490, 380);
                                break;
                            case 2:
                                a = rn(rand(-219, -211), rand(-229, -221), rand(-319, -311));
                                break;
                            case 3:
                                a = rn(890 - this.amount, 890 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-115, -111), rand(-125, -121));
                                break;
                            case 5:
                                a = rn(265 - this.amount, 275 - this.amount);
                                break;
                            case 6:
                                a = rand(-109, -106);
                                break;
                            case 7:
                                a = rn(220, 330);
                                break;
                            case 8:
                                a = rn(259 - this.amount, 269 - this.amount, 159 - this.amount, 169 - this.amount);
                                break;
                            case 9:
                                a = rand(-159, -151);
                                break;
                            case 10:
                                a = rn(400 - this.amount, 900 - this.amount, 800 - this.amount);
                                break;
                            case 11:
                                a = rn(-290, -284, -176, -137);
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(111, 114), rand(211, 214), rand(156, 159), rand(276, 279));
                                break;
                            case 2:
                                a = rn(400 - this.amount, 900 - this.amount);
                                break;
                            case 3:
                                a = rn(-179, -186, -178, -169);
                                break;
                            case 4:
                                a = rn(109 - this.amount, 9 - this.amount);
                                break;
                            case 5:
                                a = rn(340 - this.amount, 330 - this.amount, 840 - this.amount, 830 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-229, -221), rand(-219, -211), rand(-129, -121), rand(-119, -111));
                                break;
                            case 7:
                                a = rn(900 - this.amount, 940 - this.amount, 990 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(-339, -331), rand(-239, -231), rand(-639, -631), rand(-729, -721));
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(840, 844), rand(830, 834), rand(740, 744), rand(730, 734));
                                break;
                            case 2:
                                a = rn(619 - this.amount, 209 - this.amount, 219 - this.amount, 609 - this.amount);
                                break;
                            case 3:
                                a = rn(900 - this.amount, 800 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-179, -171), rand(-189, -181), rand(-169, -161), rand(-199, -191));
                                break;
                            case 5:
                                a = rn(500 - this.amount, -this.amount);
                                break;
                            case 6:
                                a = rn(440, 340, 480, 390);
                                break;
                            case 7:
                                a = rn(rand(-219, -211), rand(-229, -221), rand(-319, -311));
                                break;
                            case 8:
                                a = rn(890 - this.amount, 890 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-115, -111), rand(-125, -121));
                                break;
                            case 10:
                                a = rn(265 - this.amount, 275 - this.amount);
                                break;
                            case 11:
                                a = rand(-109, -106);
                                break;
                            case 12:
                                a = rn(220, 330);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(630, 634), rand(730, 734), rand(640, 644), rand(740, 744));
                                break;
                            case 2:
                                a = rn(119 - this.amount, 109 - this.amount, 19 - this.amount, 9 - this.amount);
                                break;
                            case 3:
                                a = rn(300 - this.amount, 400 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-119, -116), rand(-129, -126), rand(-139, -136));
                                break;
                            case 5:
                                a = rn(59 - this.amount, 9 - this.amount);
                                break;
                            case 6:
                                a = rn(130, 220, 110, 230);
                                break;
                            case 7:
                                a = rn(800 - this.amount, 990 - this.amount, 890 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(-169, -166), rand(-179, -176), rand(-159, -156));
                                break;
                            case 9:
                                a = rn(509 - this.amount, 519 - this.amount, 109 - this.amount, 119 - this.amount);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(381, 389), rand(480, 489), rand(880, 889), rand(980, 989));
                                break;
                            case 2:
                                a = rn(270 - this.amount, 280 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-119, -111), rand(-159, -151), rand(-169, -161), rand(-109, -101));
                                break;
                            case 4:
                                a = rn(900 - this.amount, 800 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(-519, -511), rand(-529, -521), rand(-539, -531));
                                break;
                            case 6:
                                a = rn(490 - this.amount, 990 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(-219, -211), rand(-229, -221), rand(-369, -361), rand(-379, -371));
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(285, 495, 385, 895);
                                break;
                            case 2:
                                a = rn(129 - this.amount, 119 - this.amount, 109 - this.amount);
                                break;
                            case 3:
                                a = rn(300 - this.amount, 800 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-269, -261), rand(-279, -271), rand(-189, -181));
                                break;
                            case 5:
                                a = rn(150, 250, 160, 260);
                                break;
                            case 6:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ]
            },
            'rb': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(685, 688), rand(785, 788), rand(694, 698), rand(795, 798));
                                break;
                            case 2:
                                a = rn(574 - this.amount, 564 - this.amount, 584 - this.amount, 554 - this.amount);
                                break;
                            case 3:
                                a = rn(390 - this.amount, 380 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-119, -116), rand(-129, -126), rand(-139, -136));
                                break;
                            case 5:
                                a = rn(39 - this.amount, 49 - this.amount);
                                break;
                            case 6:
                                a = rn(900 - this.amount, 800 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(-289, -281), rand(-179, -171), rand(-169, -161));
                                break;
                            case 8:
                                a = rn(390 - this.amount, 290 - this.amount, 490 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-119, -111), rand(-129, -121), rand(-139, -132), rand(-109, -101));
                                break;
                            case 10:
                                a = rn(40 - this.amount, 30 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(151, 159), rand(551, 559), rand(351, 359));
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(380, 490, 880, 390);
                                break;
                            case 2:
                                a = rn(rand(-119, -111), rand(-129, -121));
                                break;
                            case 3:
                                a = rn(140 - this.amount, 141 - this.amount, 144 - this.amount);
                                break;
                            case 4:
                                a = rn(400 - this.amount, 900 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(-129, -126), rand(-139, -136), rand(-119, -116));
                                break;
                            case 6:
                                a = rn(139 - this.amount, 129 - this.amount);
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(865, 868), rand(965, 968), rand(885, 888));
                                break;
                            case 2:
                                a = 754 - this.amount;
                                break;
                            case 3:
                                a = rn(900 - this.amount, 990 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-129, -126), rand(-239, -236), rand(-329, -326));
                                break;
                            case 5:
                                a = rn(439 - this.amount, 429 - this.amount);
                                break;
                            case 6:
                                a = rn(325 - this.amount, 315 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(-214, -211), rand(-104, -101), rand(-204, -201));
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(630, 634), rand(730, 734), rand(640, 644), rand(740, 744));
                                break;
                            case 2:
                                a = rn(519 - this.amount, 509 - this.amount, 529 - this.amount);
                                break;
                            case 3:
                                a = rn(405 - this.amount, 305 - this.amount, 205 - this.amount, 105 - this.amount);
                                break;
                            case 4:
                                a = rand(-104, -101);
                                break;
                            case 5:
                                a = rn(490 - this.amount, 480 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-219, -211), rand(-209, -201), rand(-229, -221));
                                break;
                            case 7:
                                a = rn(140 - this.amount, 141 - this.amount, 144 - this.amount);
                                break;
                            case 8:
                                a = rn(900 - this.amount, 800 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-289, -281), rand(-179, -171), rand(-269, -261));
                                break;
                            case 10:
                                a = rn(400 - this.amount, 300 - this.amount);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(257, 259), rand(357, 359), rand(457, 459));
                                break;
                            case 2:
                                a = rn(rand(-112, -111), rand(-122, -121), rand(-139, -136));
                                break;
                            case 3:
                                a = rn(990 - this.amount, 890 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-219, -216), rand(-229, -226), rand(-139, -136));
                                break;
                            case 5:
                                a = rn(439 - this.amount, 339 - this.amount);
                                break;
                            case 6:
                                a = rn(225 - this.amount, 215 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(-114, -111), rand(-104, -101));
                                break;
                            case 8:
                                a = rn(400 - this.amount, 300 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-189, -181), rand(-179, -171), rand(-169, -161));
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(285, 495, 385, 895);
                                break;
                            case 2:
                                a = rn(129 - this.amount, 119 - this.amount, 109 - this.amount);
                                break;
                            case 3:
                                a = rn(561, 661, 751, 651);
                                break;
                            case 4:
                                a = rn(430 - this.amount, 340 - this.amount);
                                break;
                            case 5:
                                a = -this.amount;
                                break;
                            case 6:
                                a = rn(rand(685, 688), rand(785, 788), rand(694, 698));
                                break;
                            case 7:
                                a = rn(574 - this.amount, 564 - this.amount, 584 - this.amount, 554 - this.amount);
                                break;
                            case 8:
                                a = rn(390 - this.amount, 380 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-119, -116), rand(-129, -126), rand(-139, -136));
                                break;
                            case 10:
                                a = rn(39 - this.amount, 49 - this.amount);
                                break;
                            case 11:
                                a = rn(900 - this.amount, 800 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(-288, -281), rand(-179, -171));
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(362, 364), rand(382, 384), rand(372, 374), rand(352, 354));
                                break;
                            case 2:
                                a = rn(241 - this.amount, 142 - this.amount, 242 - this.amount, 141 - this.amount);
                                break;
                            case 3:
                                a = rn(400 - this.amount, 900 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-119, -116), rand(-129, -126), rand(-139, -136));
                                break;
                            case 5:
                                a = rn(139 - this.amount, 149 - this.amount);
                                break;
                            case 6:
                                a = rn(216, 226);
                                break;
                            case 7:
                                a = rn(241 - this.amount, 242 - this.amount, 243 - this.amount, 244 - this.amount);
                                break;
                            case 8:
                                a = rn(129 - this.amount, 119 - this.amount, 139 - this.amount);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ]
            },
            's': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(944, 844, 444, 344);
                                break;
                            case 2:
                                a = rn(rand(-219, -216), rand(-129, -126));
                                break;
                            case 3:
                                a = rn(121, 111, 101);
                                break;
                            case 4:
                                a = rn(550 - this.amount, 150 - this.amount, 50 - this.amount);
                                break;
                            case 5:
                                a = rn(234, 244, 324);
                                break;
                            case 6:
                                a = rn(rand(-119, -116), rand(-109, -106));
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(341, 344), rand(441, 444), rand(841, 844), rand(941, 944));
                                break;
                            case 2:
                                a = rn(125 - this.amount, 225 - this.amount, 235 - this.amount, 135 - this.amount);
                                break;
                            case 3:
                                a = rn(449 - this.amount, 349 - this.amount, 949 - this.amount, 849 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-198, -195), rand(-188, -185), rand(-178, -175), rand(-168, -165));
                                break;
                            case 5:
                                a = rn(894 - this.amount, 994 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-269, -266), rand(-279, -276), rand(-259, -256));
                                break;
                            case 7:
                                a = rn(500 - this.amount, -this.amount);
                                break;
                            case 8:
                                a = rn(rand(346, 349), rand(446, 449));
                                break;
                            case 9:
                                a = rn(-115, -125, -105);
                                break;
                            case 10:
                                a = rn(15 - this.amount, 5 - this.amount, 115 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(331, 334), rand(211, 214), rand(511, 514));
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(846, 849), rand(346, 349), rand(446, 449));
                                break;
                            case 2:
                                a = rn(-115, -125, -105);
                                break;
                            case 3:
                                a = rn(15 - this.amount, 5 - this.amount, 115 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(331, 334), rand(321, 324), rand(211, 214), rand(231, 234));
                                break;
                            case 5:
                                a = rn(50 - this.amount, 51 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(731, 733), rand(831, 833), rand(841, 843), rand(741, 743));
                                break;
                            case 7:
                                a = rn(515 - this.amount, 615 - this.amount, 525 - this.amount, 625 - this.amount);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(261, 264), rand(561, 562), rand(661, 662), rand(161, 162));
                                break;
                            case 2:
                                a = rn(894 - this.amount, 874 - this.amount, 984 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-159, -156), rand(-169, -166));
                                break;
                            case 4:
                                a = rn(944 - this.amount, 949 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(-162, -161), rand(-173, -172), rand(-183, -182));
                                break;
                            case 6:
                                a = rn(-550, -551);
                                break;
                            case 7:
                                a = rn(50 - this.amount, rand(101, 102));
                                break;
                            case 8:
                                a = rn(510, 110, 610);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(346, 349), rand(446, 449), rand(846, 849), rand(946, 949));
                                break;
                            case 2:
                                a = rn(-195, -186, -265, -276);
                                break;
                            case 3:
                                a = rn(894 - this.amount, 884 - this.amount, 994 - this.amount, 984 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-169, -166), rand(-159, -156));
                                break;
                            case 5:
                                a = rn(550 - this.amount, 150 - this.amount, 50 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(331, 334), rand(241, 244), rand(341, 344), rand(231, 234));
                                break;
                            case 7:
                                a = rn(115 - this.amount, 105 - this.amount, 125 - this.amount);
                                break;
                            case 8:
                                a = rn(448 - this.amount, 349 - this.amount, 948 - this.amount, 849 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-197, -195), rand(-188, -185), rand(-178, -175), rand(-168, -165));
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(211, 214), rand(131, 134), rand(761, 764), rand(681, 684));
                                break;
                            case 2:
                                a = rn(894 - this.amount, 884 - this.amount, 994 - this.amount, 984 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-579, -576), rand(-559, -556), rand(-569, -566));
                                break;
                            case 4:
                                a = 150 - this.amount;
                                break;
                            case 5:
                                a = rn(rand(221, 222), rand(321, 322));
                                break;
                            case 6:
                                a = rn(510, 520, 511, 522);
                                break;
                            case 7:
                                a = rn(565 - this.amount, 665 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(312, 314), rand(322, 324), rand(202, 204), rand(232, 234));
                                break;
                            case 9:
                                a = rn(-150, -550, -151, -551);
                                break;
                            case 10:
                                a = rn(105 - this.amount, 5 - this.amount, 50 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(211, 214), rand(141, 144));
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ]
            },
            'sb': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(854, 954, 454);
                                break;
                            case 2:
                                a = rn(rand(-249, -246), rand(-139, -136), rand(-229, -226), rand(-119, -116));
                                break;
                            case 3:
                                a = rn(104 - this.amount, 4 - this.amount);
                                break;
                            case 4:
                                a = rn(760, 370, 350, 860);
                                break;
                            case 5:
                                a = rn(rand(-149, -146), rand(-249, -246));
                                break;
                            case 6:
                                a = -this.amount;
                                break;
                            case 7:
                                a = rn(rand(341, 344), rand(441, 444), rand(841, 844), rand(941, 944));
                                break;
                            case 8:
                                a = rn(125 - this.amount, 215 - this.amount, 235 - this.amount, 135 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-104, -101), rand(-114, -111));
                                break;
                            case 10:
                                a = rn(349 - this.amount, 449 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(-164, -161), rand(-174, -171), rand(-184, -181), rand(-194, -191));
                                break;
                            case 12:
                                a = rn(44 - this.amount, 40 - this.amount, 4 - this.amount);
                                break;
                            case 13:
                                a = rn(764 - this.amount, 864 - this.amount);
                                break;
                            case 14:
                                a = rn(rand(-149, -146), rand(-139, -136), rand(-129, -126));
                                break;
                            case 15:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(486, 488), rand(476, 478), rand(966, 968));
                                break;
                            case 2:
                                a = rn(344 - this.amount, 244 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-129, -126), rand(-219, -216));
                                break;
                            case 4:
                                a = rn(710, 720, 220, 210);
                                break;
                            case 5:
                                a = rn(114 - this.amount, 124 - this.amount);
                                break;
                            case 6:
                                a = rn(360, 550, 350, 560);
                                break;
                            case 7:
                                a = rn(rand(-249, -246), rand(-349, -346));
                                break;
                            case 8:
                                a = rn(14 - this.amount, 24 - this.amount);
                                break;
                            case 9:
                                a = rn(320, 350, 220, 250);
                                break;
                            case 10:
                                a = rn(rand(-119, -116), rand(-129, -126));
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(341, 344), rand(441, 444), rand(841, 844), rand(941, 944));
                                break;
                            case 2:
                                a = rn(125 - this.amount, 215 - this.amount, 235 - this.amount, 135 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-104, -101), rand(-114, -111));
                                break;
                            case 4:
                                a = rn(349 - this.amount, 449 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(-164, -161), rand(-174, -173), rand(-184, -181), rand(-194, -191));
                                break;
                            case 6:
                                a = rn(44 - this.amount, 40 - this.amount, 4 - this.amount);
                                break;
                            case 7:
                                a = rn(764 - this.amount, 864 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(-149, -146), rand(-139, -136), rand(-129, -126));
                                break;
                            case 9:
                                a = 314 - this.amount;
                                break;
                            case 10:
                                a = rn(rand(-109, -106), rand(-209, -206));
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(375, 385);
                                break;
                            case 2:
                                a = rand(-114, -111);
                                break;
                            case 3:
                                a = rn(135 - this.amount, 145 - this.amount);
                                break;
                            case 4:
                                a = rand(-124, -121);
                                break;
                            case 5:
                                a = rn(344 - this.amount, 444 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-164, -161), rand(-174, -171), rand(-184, -181), rand(-194, -191));
                                break;
                            case 7:
                                a = rn(35 - this.amount, 45 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(751, 753), rand(851, 853));
                                break;
                            case 9:
                                a = rn(444 - this.amount, 644 - this.amount);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(211, 214), rand(131, 134), rand(761, 764), rand(651, 654));
                                break;
                            case 2:
                                a = rn(964 - this.amount, 864 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-249, -246), rand(-329, -326), rand(-139, -136));
                                break;
                            case 4:
                                a = rn(424 - this.amount, 324 - this.amount, 224 - this.amount);
                                break;
                            case 5:
                                a = rn(56 - this.amount, 57 - this.amount, 55 - this.amount, 58 - this.amount);
                                break;
                            case 6:
                                a = rn(300, 230, 420, 210);
                                break;
                            case 7:
                                a = rn(144 - this.amount, 154 - this.amount, 145 - this.amount);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(366, 368), rand(276, 278), rand(286, 288));
                                break;
                            case 2:
                                a = 144 - this.amount;
                                break;
                            case 3:
                                a = rn(rand(-119, -116), rand(-129, -126));
                                break;
                            case 4:
                                a = rn(820, 810, 800);
                                break;
                            case 5:
                                a = rn(554 - this.amount, 654 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-229, -226), rand(-319, -316));
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ]
            },
            'sr': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(901, 904), rand(801, 804));
                                break;
                            case 2:
                                a = rn(-590, -580, -520, -560);
                                break;
                            case 3:
                                a = 55 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(231, 234), rand(141, 144));
                                break;
                            case 5:
                                a = -this.amount;
                                break;
                            case 6:
                                a = rn(rand(341, 344), rand(441, 444), rand(841, 844), rand(941, 944));
                                break;
                            case 7:
                                a = rn(125 - this.amount, 215 - this.amount, 225 - this.amount, 115 - this.amount);
                                break;
                            case 8:
                                a = rn(440 - this.amount, 430 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-129, -121), rand(-219, -211), rand(-229, -221));
                                break;
                            case 10:
                                a = rn(100 - this.amount, -this.amount);
                                break;
                            case 11:
                                a = rn(rand(346, 349), rand(446, 449));
                                break;
                            case 12:
                                a = rn(150 - this.amount, 160 - this.amount, 170 - this.amount, 180 - this.amount);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(346, 349), rand(446, 449), rand(846, 849), rand(946, 949));
                                break;
                            case 2:
                                a = rn(-195, -186, -265, -276);
                                break;
                            case 3:
                                a = rn(990 - this.amount, 890 - this.amount, 980 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-119, -116), rand(-129, -126));
                                break;
                            case 5:
                                a = rn(615 - this.amount, 115 - this.amount, 515 - this.amount);
                                break;
                            case 6:
                                a = rn(800 - this.amount, 900 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(-129, -126), rand(-139, -136));
                                break;
                            case 8:
                                a = rn(555 - this.amount, 105 - this.amount);
                                break;
                            case 9:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(901, 904), rand(801, 804));
                                break;
                            case 2:
                                a = rn(-110, -120, -130, -140);
                                break;
                            case 3:
                                a = rn(505 - this.amount, 555 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(311, 314), rand(421, 424), rand(341, 344), rand(431, 434));
                                break;
                            case 5:
                                a = rn(250 - this.amount, 150 - this.amount);
                                break;
                            case 6:
                                a = rn(140, 130, 120);
                                break;
                            case 7:
                                a = rn(rand(-159, -156), rand(-169, -166));
                                break;
                            case 8:
                                a = rn(400 - this.amount, 900 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-169, -166), rand(-179, -176), rand(-189, -186));
                                break;
                            case 10:
                                a = 105 - this.amount;
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(311, 314), rand(321, 324), rand(431, 434));
                                break;
                            case 2:
                                a = rn(155 - this.amount, 55 - this.amount);
                                break;
                            case 3:
                                a = rn(400 - this.amount, 900 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-169, -166), rand(-179, -176), rand(-189, -186));
                                break;
                            case 5:
                                a = rn(55 - this.amount, 5 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(121, 124), rand(211, 214));
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(674, 684, 794, 774);
                                break;
                            case 2:
                                a = rn(rand(-519, -516), rand(-559, -556));
                                break;
                            case 3:
                                a = -this.amount;
                                break;
                            case 4:
                                a = rn(430, 340, 490, 380);
                                break;
                            case 5:
                                a = rn(rand(-219, -211), rand(-229, -221));
                                break;
                            case 6:
                                a = rn(390 - this.amount, 890 - this.amount);
                                break;
                            case 7:
                                a = rn(994 - this.amount, 104);
                                break;
                            case 8:
                                a = rn(rand(-159, -156), rand(-169, -166), rand(-179, -176));
                                break;
                            case 9:
                                a = rn(150 - this.amount, 155 - this.amount);
                                break;
                            case 10:
                                a = rn(400 - this.amount, 900 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(-199, -191), rand(-189, -181));
                                break;
                            case 12:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(430, 340, 490, 380);
                                break;
                            case 2:
                                a = rn(rand(-219, -211), rand(-229, -221), rand(-319, -311));
                                break;
                            case 3:
                                a = rn(390 - this.amount, 890 - this.amount);
                                break;
                            case 4:
                                a = rn(994 - this.amount, 104);
                                break;
                            case 5:
                                a = rn(rand(-159, -156), rand(-169, -166), rand(-179, -176));
                                break;
                            case 6:
                                a = rn(150 - this.amount, 155 - this.amount);
                                break;
                            case 7:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(341, 344), rand(441, 444), rand(841, 844), rand(941, 944));
                                break;
                            case 2:
                                a = rn(125 - this.amount, 215 - this.amount, 225 - this.amount, 115 - this.amount);
                                break;
                            case 3:
                                a = rn(440 - this.amount, 430 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-129, -121), rand(-219, -211), rand(-229, -221));
                                break;
                            case 5:
                                a = rn(100 - this.amount, -this.amount);
                                break;
                            case 6:
                                a = rn(rand(346, 349), rand(446, 449));
                                break;
                            case 7:
                                a = rn(150 - this.amount, 160 - this.amount, 170 - this.amount, 180 - this.amount);
                                break;
                            case 8:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    }
                ]
            }
        }
    }
}