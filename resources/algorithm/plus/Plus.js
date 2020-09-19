const rand = require('lodash/random')
const {rn} = require('../methods')

module.exports = function () {
    return {
        '1': {
            'p': {
                '1-4': [
                    () => {
                        let a;
                        do {
                            a = rand(-4, 4);
                        } while (this.amount + a > 4 || 0 > this.amount + a || a === 0);

                        this.amount += a;
                        return a;
                    }
                ],
                '1-5': [
                    () => {
                        let a;
                        let s = this.amount;

                        do {
                            a = rand(-5, 5);
                        } while (
                            this.amount + a > 9 ||
                            0 > this.amount + a ||
                            a === 0 ||

                            (s >= 5 && (a > s - 5 || a > 9 - s || a !== -5)) ||
                            (s <= 4 && (a > 4 - s && a !== 5))
                            );

                        this.amount += a;
                        return a;
                    }
                ],
                'o': [
                    (step, a) => {
                        switch (step) {
                            case 1:
                                a = rand(8, 9);
                                break;
                            case 2:
                                a = rand(-6, -5);
                                break;
                            case 3:
                                a = rn(1 - this.amount, -this.amount);
                                break;
                            case 4:
                                a = rn(2, 3, 6, 7);
                                break;
                            case 5:
                                a = rn(1 - this.amount, 9 - this.amount);
                                break;
                            case 6:
                                a = rn(2 - this.amount, 3 - this.amount);
                                break;
                            case 7:
                                a = rn(8 - this.amount, 4 - this.amount, 9 - this.amount);
                                break;
                            case 8:
                                a = rn(1 - this.amount, 2 - this.amount, 3 - this.amount);
                                break;
                            case 9:
                                a = rn(4 - this.amount, 1);
                                break;
                            case 10:
                                a = rn(5, -2, -1, -this.amount);
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
                                a = rn(1, 2);
                                break;
                            case 2:
                                a = rn(6, 7);
                                break;
                            case 3:
                                a = rn(5 - this.amount, 1 - this.amount);
                                break;
                            case 4:
                                a = rn(2, 3);
                                break;
                            case 5:
                                a = rn(2 - this.amount, -2, -1);
                                break;
                            case 6:
                                a = rn(9 - this.amount, 8 - this.amount, 1 - this.amount);
                                break;
                            case 7:
                                a = rn(2 - this.amount, 3 - this.amount);
                                break;
                            case 8:
                                a = rn(8 - this.amount, 4 - this.amount);
                                break;
                            case 9:
                                a = rn(-3, -1);
                                break;
                            case 10:
                                a = rn(9 - this.amount, 1, -1);
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
                                a = rn(1 - this.amount, 5 - this.amount);
                                break;
                            case 3:
                                a = rn(1, 2, -this.amount);
                                break;
                            case 4:
                                a = rn(9 - this.amount, 8 - this.amount);
                                break;
                            case 5:
                                a = rn(-7, -6);
                                break;
                            case 6:
                                a = rn(4 - this.amount, 8 - this.amount);
                                break;
                            case 7:
                                a = rn(-3, -1);
                                break;
                            case 8:
                                a = rn(9 - this.amount, 1);
                                break;
                            case 9:
                                a = rn(1 - this.amount, -this.amount);
                                break;
                            case 10:
                                a = rn(rand(1, 3), rand(6, 8));
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
                                a = rn(3, 4, 8, 9);
                                break;
                            case 2:
                                a = rn(2 - this.amount, 1 - this.amount);
                                break;
                            case 3:
                                a = rn(7 - this.amount, 8 - this.amount);
                                break;
                            case 4:
                                a = rn(-2, -1);
                                break;
                            case 5:
                                a = rn(-this.amount, 8 - this.amount);
                                break;
                            case 6:
                                a = rn(9 - this.amount, 7 - this.amount, 6 - this.amount);
                                break;
                            case 7:
                                a = rn(1 - this.amount, 5 - this.amount);
                                break;
                            case 8:
                                a = rn(1, 2);
                                break;
                            case 9:
                                a = rn(1 - this.amount, 8 - this.amount, 9 - this.amount);
                                break;
                            case 10:
                                a = rn(2 - this.amount, 3 - this.amount);
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
                                a = rn(5, 6);
                                break;
                            case 2:
                                a = rn(2, 3);
                                break;
                            case 3:
                                a = rn(2 - this.amount, 1 - this.amount);
                                break;
                            case 4:
                                a = rn(6, 7);
                                break;
                            case 5:
                                a = rn(5 - this.amount, 6 - this.amount);
                                break;
                            case 6:
                                a = rn(2, 3);
                                break;
                            case 7:
                                a = rn(2 - this.amount, -6);
                                break;
                            case 8:
                                a = rn(1, 5);
                                break;
                            case 9:
                                a = rn(1 - this.amount, -1);
                                break;
                            case 10:
                                a = rn(8 - this.amount, 9 - this.amount, -this.amount);
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
                                a = rn(6, 8);
                                break;
                            case 2:
                                a = rn(1 - this.amount, 1);
                                break;
                            case 3:
                                a = rn(2 - this.amount, -1);
                                break;
                            case 4:
                                a = rn(9 - this.amount, 1 - this.amount);
                                break;
                            case 5:
                                a = rn(3 - this.amount, 4 - this.amount);
                                break;
                            case 6:
                                a = rn(-2, -1);
                                break;
                            case 7:
                                a = rn(5, 6, 4 - this.amount);
                                break;
                            case 8:
                                a = rn(1 - this.amount, -this.amount);
                                break;
                            case 9:
                                a = rn(2, 7);
                                break;
                            case 10:
                                a = rn(1 - this.amount, 1, 9 - this.amount);
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
            'b': {
                1: [
                    (step, a) => {
                        switch (step) {
                            case 1:
                                a = rand(1, 3);
                                break;
                            case 2:
                                a = 4 - this.amount;
                                break;
                            case 3:
                                a = 1;
                                break;
                            case 4:
                                a = rand(1, 3);
                                break;
                            case 5:
                                a = -5;
                                break;
                            case 6:
                                a = 4 - this.amount;
                                break;
                            case 7:
                                a = 1;
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
                                a = 4;
                                break;
                            case 2:
                                a = 1;
                                break;
                            case 3:
                                a = rand(1, 3);
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = 4 - this.amount;
                                break;
                            case 6:
                                a = 1;
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
                                a = rand(6, 8);
                                break;
                            case 2:
                                a = -5;
                                break;
                            case 3:
                                a = 4 - this.amount;
                                break;
                            case 4:
                                a = 1;
                                break;
                            case 5:
                                a = rand(2, 3);
                                break;
                            case 6:
                                a = 9 - this.amount;
                                break;
                            case 7:
                                a = -5;
                                break;
                            case 8:
                                a = 1;
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
                                a = rn(rand(5, 7), rand(1, 3));
                                break;
                            case 2:
                                a = 9 - this.amount;
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = 1;
                                break;
                            case 5:
                                a = rand(2, 4);
                                break;
                            case 6:
                                a = rn(1 - this.amount, 2 - this.amount);
                                break;
                            case 7:
                                a = 4 - this.amount;
                                break;
                            case 8:
                                a = 1;
                                break;
                            case 9:
                                a = rand(2, 4);
                                break;
                            case 10:
                                a = rn(1 - this.amount, -this.amount, 2 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(1, 2), rand(5, 7));
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
                2: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(3, 4);
                                break;
                            case 2:
                                a = 2;
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = rand(2, 3);
                                break;
                            case 5:
                                a = 2;
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
                                a = rand(3, 4);
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = 2;
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
                                a = rand(8, 9);
                                break;
                            case 2:
                                a = -5;
                                break;
                            case 3:
                                a = 2;
                                break;
                            case 4:
                                a = -this.amount;
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
                                a = rn(9 - this.amount, 8 - this.amount);
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = 2;
                                break;
                            case 5:
                                a = rand(2, 3);
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = 2;
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
                                a = rand(1, 2);
                                break;
                            case 2:
                                a = rn(3 - this.amount, 4 - this.amount);
                                break;
                            case 3:
                                a = 2;
                                break;
                            case 4:
                                a = rn(8 - this.amount, 9 - this.amount);
                                break;
                            case 5:
                                a = rn(3 - this.amount, -5);
                                break;
                            case 6:
                                a = 2;
                                break;
                            case 7:
                                a = -5;
                                break;
                            case 8:
                                a = rn(4 - this.amount, 3 - this.amount);
                                break;
                            case 9:
                                a = 2;
                                break;
                            case 10:
                                a = rand(1, 3);
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
                3: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(3, 4);
                                break;
                            case 2:
                                a = 3;
                                break;
                            case 3:
                                a = -6;
                                break;
                            case 4:
                                a = rand(1, 3);
                                break;
                            case 5:
                                a = 3;
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
                                a = rand(2, 4);
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = 3;
                                break;
                            case 5:
                                a = 1;
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = 1;
                                break;
                            case 8:
                                a = 3;
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
                                a = -5;
                                break;
                            case 3:
                                a = 3;
                                break;
                            case 4:
                                a = 2;
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
                                a = rn(rand(1, 2), 6);
                                break;
                            case 2:
                                a = rn(9 - this.amount, 8 - this.amount);
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = 3;
                                break;
                            case 5:
                                a = rn(1, -5);
                                break;
                            case 6:
                                a = 9 - this.amount;
                                break;
                            case 7:
                                a = rand(-7, -5);
                                break;
                            case 8:
                                a = 3;
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
                                a = 2;
                                break;
                            case 2:
                                a = 3;
                                break;
                            case 3:
                                a = rand(3, 4);
                                break;
                            case 4:
                                a = rand(-6, -5);
                                break;
                            case 5:
                                a = 3;
                                break;
                            case 6:
                                a = rand(1, 2);
                                break;
                            case 7:
                                a = rn(1 - this.amount, -this.amount);
                                break;
                            case 8:
                                a = rand(2, 3);
                                break;
                            case 9:
                                a = 3;
                                break;
                            case 10:
                                a = rn(1, 2, 9 - this.amount, 8 - this.amount);
                                break;
                            case 11:
                                a = rn(-6, -5);
                                break;
                            case 12:
                                a = 3;
                                break;
                            case 13:
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
                                a = rand(2, 4);
                                break;
                            case 2:
                                a = 4;
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = 4;
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
                                a = 4;
                                break;
                            case 3:
                                a = -this.amount;
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
                                a = 4;
                                break;
                            case 4:
                                a = rn(1, 9 - this.amount);
                                break;
                            case 5:
                                a = -5;
                                break;
                            case 6:
                                a = 4;
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
                                a = rn(1, 2);
                                break;
                            case 2:
                                a = rn(1, 2);
                                break;
                            case 3:
                                a = 4;
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = 4;
                                break;
                            case 6:
                                a = rn(9 - this.amount, -5);
                                break;
                            case 7:
                                a = rn(4 - this.amount, 3 - this.amount);
                                break;
                            case 8:
                                a = 4;
                                break;
                            case 9:
                                a = rn(-6, -5, 1 - this.amount);
                                break;
                            case 10:
                                a = 4;
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
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rn(rand(1, 3), -5);
                                break;
                            case 4:
                                a = 9 - this.amount;
                                break;
                            case 5:
                                a = -5;
                                break;
                            case 6:
                                a = rand(1, 4);
                                break;
                            case 7:
                                a = -5;
                                break;
                            case 8:
                                a = 4 - this.amount;
                                break;
                            case 9:
                                a = rand(1, 4);
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
                                a = -5;
                                break;
                            case 3:
                                a = 4 - this.amount;
                                break;
                            case 4:
                                a = rand(1, 4);
                                break;
                            case 5:
                                a = 9 - this.amount;
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = rand(1, 4);
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
                                a = 4;
                                break;
                            case 2:
                                a = rand(1, 4);
                                break;
                            case 3:
                                a = 9 - this.amount;
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = rand(1, 4);
                                break;
                            case 6:
                                a = rn(1, -5);
                                break;
                            case 7:
                                a = 5 - this.amount;
                                break;
                            case 8:
                                a = rand(1, 3);
                                break;
                            case 9:
                                a = 9 - this.amount;
                                break;
                            case 10:
                                a = rand(-4, -1);
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
                                a = rand(1, 8);
                                break;
                            case 2:
                                a = 9 - this.amount;
                                break;
                            case 3:
                                a = rand(-7, -6);
                                break;
                            case 4:
                                a = rand(3, 4);
                                break;
                            case 5:
                                a = -5;
                                break;
                            case 6:
                                a = 4 - this.amount;
                                break;
                            case 7:
                                a = rand(1, 2);
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
                                a = -this.amount;
                                break;
                            case 3:
                                a = rand(2, 4);
                                break;
                            case 4:
                                a = rand(3, 4);
                                break;
                            case 5:
                                a = 9 - this.amount;
                                break;
                            case 6:
                                a = rand(-2, -1);
                                break;
                            case 7:
                                a = -5;
                                break;
                            case 8:
                                a = rand(3, 4);
                                break;
                            case 9:
                                a = rand(1, 2);
                                break;
                            case 10:
                                a = -5;
                                break;
                            case 11:
                                a = 4 - this.amount;
                                break;
                            case 12:
                                a = rand(1, 4);
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
                                a = rand(1, 3);
                                break;
                            case 2:
                                a = 4 - this.amount;
                                break;
                            case 3:
                                a = rand(1, 4);
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = 4 - this.amount;
                                break;
                            case 6:
                                a = rand(1, 4);
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
            'r': {
                1: [
                    (step, a) => {

                        switch (step) {
                            case 1:
                                a = rand(5, 8);
                                break;
                            case 2:
                                a = 9 - this.amount;
                                break;
                            case 3:
                                a = 1;
                                break;
                            case 4:
                                a = rand(1, 4);
                                break;
                            case 5:
                                a = 19 - this.amount;
                                break;
                            case 6:
                                a = 1;
                                break;
                            case 7:
                                a = rand(6, 8);
                                break;
                            case 8:
                                a = 29 - this.amount;
                                break;
                            case 9:
                                a = 1;
                                break;
                            case 10:
                                a = rand(1, 4);
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
                                a = 9 - this.amount;
                                break;
                            case 3:
                                a = 1;
                                break;
                            case 4:
                                a = rand(5, 7);
                                break;
                            case 5:
                                a = 1;
                                break;
                            case 6:
                                a = 19 - this.amount;
                                break;
                            case 7:
                                a = 1;
                                break;
                            case 8:
                                a = rand(5, 8);
                                break;
                            case 9:
                                a = 29 - this.amount;
                                break;
                            case 10:
                                a = rand(-8, -5);
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
                                a = 1;
                                break;
                            case 3:
                                a = 9;
                                break;
                            case 4:
                                a = 1;
                                break;
                            case 5:
                                a = rand(1, 4);
                                break;
                            case 6:
                                a = 29 - this.amount;
                                break;
                            case 7:
                                a = 1;
                                break;
                            case 8:
                                a = rand(7, 9);
                                break;
                            case 9:
                                a = rand(-2, -1);
                                break;
                            case 10:
                                a = rn(1, 39 - this.amount);
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
                2: [
                    (step, a) => {

                        switch (step) {
                            case 1:
                                a = rand(5, 8);
                                break;
                            case 2:
                                a = 9 - this.amount;
                                break;
                            case 3:
                                a = 2;
                                break;
                            case 4:
                                a = rand(5, 7);
                                break;
                            case 5:
                                a = 19 - this.amount;
                                break;
                            case 6:
                                a = 2;
                                break;
                            case 7:
                                a = rand(5, 7);
                                break;
                            case 8:
                                a = 29 - this.amount;
                                break;
                            case 9:
                                a = 2;
                                break;
                            case 10:
                                a = rand(1, 2);
                                break;
                            case 11:
                                a = 6;
                                break;
                            case 12:
                                a = 2;
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
                                a = rand(2, 4);
                                break;
                            case 2:
                                a = 9 - this.amount;
                                break;
                            case 3:
                                a = 2;
                                break;
                            case 4:
                                a = rand(2, 3);
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = 2;
                                break;
                            case 7:
                                a = rand(1, 2) === 1 ? 29 - this.amount : 28 - this.amount;
                                break;
                            case 8:
                                a = 2;
                                break;
                            case 9:
                                a = rand(1, 2) === 1 ? rand(1, 3) : 6;
                                break;
                            case 10:
                                a = rand(1, 2) === 1 ? -this.amount : 2;
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
                                a = 8 - this.amount;
                                break;
                            case 3:
                                a = 2;
                                break;
                            case 4:
                                a = rand(8, 9);
                                break;
                            case 5:
                                a = 2;
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = rand(2, 3);
                                break;
                            case 8:
                                a = rand(-2, -1);
                                break;
                            case 9:
                                a = 29 - this.amount;
                                break;
                            case 10:
                                a = rand(-4, -1);
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
                3: [
                    (step, a) => {

                        switch (step) {
                            case 1:
                                a = rand(7, 9);
                                break;
                            case 2:
                                a = 3;
                                break;
                            case 3:
                                a = 7;
                                break;
                            case 4:
                                a = 3;
                                break;
                            case 5:
                                a = 29 - this.amount;
                                break;
                            case 6:
                                a = 3;
                                break;
                            case 7:
                                a = rand(5, 7);
                                break;
                            case 8:
                                a = 3;
                                break;
                            case 9:
                                a = rand(1, 2);
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
                                a = rand(2, 3);
                                break;
                            case 2:
                                a = rand(5, 6);
                                break;
                            case 3:
                                a = 3;
                                break;
                            case 4:
                                a = 7;
                                break;
                            case 5:
                                a = 3;
                                break;
                            case 6:
                                a = rand(1, 2);
                                break;
                            case 7:
                                a = 29 - this.amount;
                                break;
                            case 8:
                                a = 3;
                                break;
                            case 9:
                                a = rand(-2, -1);
                                break;
                            case 10:
                                a = rn(3, 5);
                                break;
                            case 11:
                                a = 3;
                                break;
                            case 12:
                                a = rand(5, 7);
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
                                a = rand(4, 5);
                                break;
                            case 2:
                                a = 9 - this.amount;
                                break;
                            case 3:
                                a = rand(-2, -1);
                                break;
                            case 4:
                                a = 3;
                                break;
                            case 5:
                                a = rand(2, 3);
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 3;
                                break;
                            case 8:
                                a = rand(5, 7);
                                break;
                            case 9:
                                a = rand(-2, -1);
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
                4: [
                    (step, a) => {

                        switch (step) {
                            case 1:
                                a = rand(7, 9);
                                break;
                            case 2:
                                a = 4;
                                break;
                            case 3:
                                a = rand(5, 6);
                                break;
                            case 4:
                                a = 4;
                                break;
                            case 5:
                                a = 6;
                                break;
                            case 6:
                                a = 4;
                                break;
                            case 7:
                                a = 39 - this.amount;
                                break;
                            case 8:
                                a = 4;
                                break;
                            case 9:
                                a = rn(40 - this.amount, rand(1, 2));
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
                                a = rand(1, 3);
                                break;
                            case 2:
                                a = rand(5, 6);
                                break;
                            case 3:
                                a = 4;
                                break;
                            case 4:
                                a = 6;
                                break;
                            case 5:
                                a = 4;
                                break;
                            case 6:
                                a = 24 - this.amount;
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = rand(-3, -1);
                                break;
                            case 9:
                                a = rn(4, -6);
                                break;
                            case 10:
                                a = rn(rand(1, 2), rand(6, 7));
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
                                a = 6;
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(8, 9);
                                break;
                            case 4:
                                a = rand(-2, -1);
                                break;
                            case 5:
                                a = 4;
                                break;
                            case 6:
                                a = rand(1, 2);
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = 4;
                                break;
                            case 9:
                                a = rn(34 - this.amount, 39 - this.amount);
                                break;
                            case 10:
                                a = rn(32 - this.amount, 33 - this.amount, 31 - this.amount);
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
                5: [
                    (step, a) => {

                        switch (step) {
                            case 1:
                                a = rand(5, 6);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = rand(7, 8);
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = rand(-2, -1);
                                break;
                            case 6:
                                a = rand(5, 6);
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = 39 - this.amount;
                                break;
                            case 9:
                                a = rn(5, rand(-4, -1));
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
                                a = rand(1, 2);
                                break;
                            case 2:
                                a = rand(6, 7);
                                break;
                            case 3:
                                a = 5;
                                break;
                            case 4:
                                a = rand(-2, -1);
                                break;
                            case 5:
                                a = rand(5, 6);
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 29 - this.amount;
                                break;
                            case 8:
                                a = 5;
                                break;
                            case 9:
                                a = rn(rand(-4, -3), 5);
                                break;
                            case 10:
                                a = rand(34 - this.amount, 5);
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
                                a = 5;
                                break;
                            case 3:
                                a = rand(-3, -2);
                                break;
                            case 4:
                                a = rand(6, 7);
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = -1;
                                break;
                            case 7:
                                a = rand(5, 6);
                                break;
                            case 8:
                                a = rand(1, 2);
                                break;
                            case 9:
                                a = rn(5, -1);
                                break;
                            case 10:
                                a = 1;
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
                6: [
                    (step, a) => {

                        switch (step) {
                            case 1:
                                a = rn(rand(1, 3), 5, 6);
                                break;
                            case 2:
                                a = 9 - this.amount;
                                break;
                            case 3:
                                a = 6;
                                break;
                            case 4:
                                a = rand(1, 3);
                                break;
                            case 5:
                                a = 19 - this.amount;
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = 6;
                                break;
                            case 8:
                                a = 4;
                                break;
                            case 9:
                                a = rn(6, rand(-3, -1));
                                break;
                            case 10:
                                a = rn(5, 1, 6);
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
                                a = 4;
                                break;
                            case 2:
                                a = 6;
                                break;
                            case 3:
                                a = rand(2, 3);
                                break;
                            case 4:
                                a = rand(-2, -1);
                                break;
                            case 5:
                                a = 14 - this.amount;
                                break;
                            case 6:
                                a = 6;
                                break;
                            case 7:
                                a = rand(7, 8);
                                break;
                            case 8:
                                a = rand(-2, -1);
                                break;
                            case 9:
                                a = 29 - this.amount;
                                break;
                            case 10:
                                a = rn(6, rand(-4, -1));
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
                                a = 6;
                                break;
                            case 3:
                                a = rand(2, 4);
                                break;
                            case 4:
                                a = rand(-2, -1);
                                break;
                            case 5:
                                a = 19 - this.amount;
                                break;
                            case 6:
                                a = 6;
                                break;
                            case 7:
                                a = rand(1, 3);
                                break;
                            case 8:
                                a = 29 - this.amount;
                                break;
                            case 9:
                                a = 6;
                                break;
                            case 10:
                                a = rand(1, 4);
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
                7: [
                    (step, a) => {

                        switch (step) {
                            case 1:
                                a = rand(3, 4);
                                break;
                            case 2:
                                a = 7;
                                break;
                            case 3:
                                a = rand(6, 7);
                                break;
                            case 4:
                                a = 1;
                                break;
                            case 5:
                                a = rand(-7, -6);
                                break;
                            case 6:
                                a = 14 - this.amount;
                                break;
                            case 7:
                                a = 7;
                                break;
                            case 8:
                                a = rand(2, 3);
                                break;
                            case 9:
                                a = 7;
                                break;
                            case 10:
                                a = rn(rand(1, 3), rand(6, 8));
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
                                a = 7;
                                break;
                            case 3:
                                a = 3;
                                break;
                            case 4:
                                a = rand(-3, -1);
                                break;
                            case 5:
                                a = 19 - this.amount;
                                break;
                            case 6:
                                a = 7;
                                break;
                            case 7:
                                a = rand(2, 3);
                                break;
                            case 8:
                                a = 7;
                                break;
                            case 9:
                                a = rand(1, 3);
                                break;
                            case 10:
                                a = rn(30 - this.amount, 35 - this.amount);
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
                                a = 4;
                                break;
                            case 2:
                                a = 7;
                                break;
                            case 3:
                                a = rand(2, 3);
                                break;
                            case 4:
                                a = rand(-2, -1);
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = 19 - this.amount;
                                break;
                            case 7:
                                a = 7;
                                break;
                            case 8:
                                a = rn(-6, 1);
                                break;
                            case 9:
                                a = rn(25 - this.amount, 28 - this.amount);
                                break;
                            case 10:
                                a = rn(-5, 29 - this.amount, 20 - this.amount);
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
                                a = rand(2, 4);
                                break;
                            case 2:
                                a = 8;
                                break;
                            case 3:
                                a = 14 - this.amount;
                                break;
                            case 4:
                                a = 8;
                                break;
                            case 5:
                                a = rn(1, rand(6, 7));
                                break;
                            case 6:
                                a = rn(20 - this.amount, 21 - this.amount);
                                break;
                            case 7:
                                a = rn(23 - this.amount, 24 - this.amount);
                                break;
                            case 8:
                                a = rn(8, rand(-2, -1));
                                break;
                            case 9:
                                a = rand(1, 2);
                                break;
                            case 10:
                                a = rn(8, 5, rand(-2, -1));
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
                                a = rand(7, 8);
                                break;
                            case 2:
                                a = 8;
                                break;
                            case 3:
                                a = rand(2, 3);
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = 8;
                                break;
                            case 6:
                                a = 24 - this.amount;
                                break;
                            case 7:
                                a = 8;
                                break;
                            case 8:
                                a = rand(1, 2);
                                break;
                            case 9:
                                a = rn(8, -3);
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
                                a = 2;
                                break;
                            case 2:
                                a = 8;
                                break;
                            case 3:
                                a = rand(7, 8);
                                break;
                            case 4:
                                a = rand(-2, -1);
                                break;
                            case 5:
                                a = 2;
                                break;
                            case 6:
                                a = 8;
                                break;
                            case 7:
                                a = 29 - this.amount;
                                break;
                            case 8:
                                a = 8;
                                break;
                            case 9:
                                a = rn(rand(1, 2), -5);
                                break;
                            case 10:
                                a = rn(8, rand(-2, -1), 31 - this.amount);
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
                                a = 8;
                                break;
                            case 3:
                                a = 8;
                                break;
                            case 4:
                                a = rand(2, 4);
                                break;
                            case 5:
                                a = 8;
                                break;
                            case 6:
                                a = rand(1, 2);
                                break;
                            case 7:
                                a = rand(-6, -5);
                                break;
                            case 8:
                                a = 39 - this.amount;
                                break;
                            case 9:
                                a = rn(rand(-2, -1), 8);
                                break;
                            case 10:
                                a = rn(1, rand(-7, -6));
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
                                a = rand(2, 3);
                                break;
                            case 2:
                                a = 9;
                                break;
                            case 3:
                                a = rand(5, 7);
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = 9;
                                break;
                            case 6:
                                a = 1;
                                break;
                            case 7:
                                a = 9;
                                break;
                            case 8:
                                a = 5;
                                break;
                            case 9:
                                a = rn(39 - this.amount, 30 - this.amount);
                                break;
                            case 10:
                                a = 35 - this.amount;
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
                                a = rand(1, 2);
                                break;
                            case 3:
                                a = 9;
                                break;
                            case 4:
                                a = 9;
                                break;
                            case 5:
                                a = rand(1, 2);
                                break;
                            case 6:
                                a = 9;
                                break;
                            case 7:
                                a = 30 - this.amount;
                                break;
                            case 8:
                                a = rand(2, 4);
                                break;
                            case 9:
                                a = 9;
                                break;
                            case 10:
                                a = rn(rand(5, 6), 40 - this.amount);
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
                                a = 9;
                                break;
                            case 3:
                                a = -6;
                                break;
                            case 4:
                                a = 9;
                                break;
                            case 5:
                                a = rand(1, 3);
                                break;
                            case 6:
                                a = rand(5, 6);
                                break;
                            case 7:
                                a = 9;
                                break;
                            case 8:
                                a = 30 - this.amount;
                                break;
                            case 9:
                                a = rand(1, 3);
                                break;
                            case 10:
                                a = rn(39 - this.amount, 34 - this.amount, 9);
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
                                a = 1;
                                break;
                            case 2:
                                a = 9;
                                break;
                            case 3:
                                a = rand(1, 2);
                                break;
                            case 4:
                                a = rand(6, 7);
                                break;
                            case 5:
                                a = 9;
                                break;
                            case 6:
                                a = rn(20 - this.amount, 25 - this.amount);
                                break;
                            case 7:
                                a = rand(2, 4);
                                break;
                            case 8:
                                a = rn(9, -1);
                                break;
                            case 9:
                                a = rn(-1, 9);
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
                'o': [
                    (step, a) => {

                        switch (step) {
                            case 1:
                                a = rand(8, 9);
                                break;
                            case 2:
                                a = rand(7, 9);
                                break;
                            case 3:
                                a = 1;
                                break;
                            case 4:
                                a = 9;
                                break;
                            case 5:
                                a = 29 - this.amount;
                                break;
                            case 6:
                                a = rand(1, 4);
                                break;
                            case 7:
                                a = 39 - this.amount;
                                break;
                            case 8:
                                a = rand(-4, -1);
                                break;
                            case 9:
                                a = rn(40 - this.amount, 30 - this.amount);
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
                                a = rand(1, 2);
                                break;
                            case 2:
                                a = rand(6, 7);
                                break;
                            case 3:
                                a = 8;
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = 2;
                                break;
                            case 6:
                                a = 9;
                                break;
                            case 7:
                                a = 34 - this.amount;
                                break;
                            case 8:
                                a = rand(6, 9);
                                break;
                            case 9:
                                a = rn(49 - this.amount, 44 - this.amount);
                                break;
                            case 10:
                                a = rand(-4, -1);
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
                                a = rand(3, 4);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = 2;
                                break;
                            case 4:
                                a = rand(7, 8);
                                break;
                            case 5:
                                a = 8;
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = rand(2, 3);
                                break;
                            case 8:
                                a = 5;
                                break;
                            case 9:
                                a = 3;
                                break;
                            case 10:
                                a = rand(1, 3);
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
                                a = 5;
                                break;
                            case 3:
                                a = rand(7, 8);
                                break;
                            case 4:
                                a = 4;
                                break;
                            case 5:
                                a = 29 - this.amount;
                                break;
                            case 6:
                                a = 1;
                                break;
                            case 7:
                                a = rand(8, 9);
                                break;
                            case 8:
                                a = 2;
                                break;
                            case 9:
                                a = rn(48 - this.amount, 43 - this.amount);
                                break;
                            case 10:
                                a = rn(40 - this.amount, 42 - this.amount);

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
                                a = 7;
                                break;
                            case 2:
                                a = 3;
                                break;
                            case 3:
                                a = rand(6, 9);
                                break;
                            case 4:
                                a = 4;
                                break;
                            case 5:
                                a = 24 - this.amount;
                                break;
                            case 6:
                                a = 6;
                                break;
                            case 7:
                                a = rand(1, 4);
                                break;
                            case 8:
                                a = 39 - this.amount;
                                break;
                            case 9:
                                a = 1;
                                break;
                            case 10:
                                a = rand(2, 3);
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
                                a = 3;
                                break;
                            case 2:
                                a = 7;
                                break;
                            case 3:
                                a = 4;
                                break;
                            case 4:
                                a = 6;
                                break;
                            case 5:
                                a = rand(7, 9);
                                break;
                            case 6:
                                a = 3;
                                break;
                            case 7:
                                a = 34 - this.amount;
                                break;
                            case 8:
                                a = 7;
                                break;
                            case 9:
                                a = rand(6, 8);
                                break;
                            case 10:
                                a = rn(-2, -1, -5);
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
            },
            'rb': {
                'o': [
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
                                a = rand(2, 3);
                                break;
                            case 5:
                                a = 25 - this.amount;
                                break;
                            case 6:
                                a = rand(3, 4);
                                break;
                            case 7:
                                a = 30 - this.amount;
                                break;
                            case 8:
                                a = 7;
                                break;
                            case 9:
                                a = 4;
                                break;
                            case 10:
                                a = rand(3, 4);
                                break;
                            case 11:
                                a = 3;
                                break;
                            case 12:
                                a = 4;
                                break;
                            case 13:
                                a = 5;
                                break;
                            case 14:
                                a = rand(6, 8);
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
                                a = 6;
                                break;
                            case 2:
                                a = 4;
                                break;
                            case 3:
                                a = 4;
                                break;
                            case 4:
                                a = 1;
                                break;
                            case 5:
                                a = rand(2, 3);
                                break;
                            case 6:
                                a = 3;
                                break;
                            case 7:
                                a = rand(2, 3);
                                break;
                            case 8:
                                a = rand(3, 4);
                                break;
                            case 9:
                                a = 5;
                                break;
                            case 10:
                                a = 1;
                                break;
                            case 11:
                                a = 4;
                                break;
                            case 12:
                                a = -5;
                                break;
                            case 13:
                                a = 30 - this.amount;
                                break;
                            case 14:
                                a = rand(2, 3);
                                break;
                            case 15:
                                a = rand(2, 3);
                                break;
                            case 16:
                                a = -this.amount;
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
                                a = 3;
                                break;
                            case 3:
                                a = rand(1, 2);
                                break;
                            case 4:
                                a = 4;
                                break;
                            case 5:
                                a = rand(6, 7);
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 20 - this.amount;
                                break;
                            case 8:
                                a = rand(3, 4);
                                break;
                            case 9:
                                a = 2;
                                break;
                            case 10:
                                a = 5;
                                break;
                            case 11:
                                a = rand(6, 8);
                                break;
                            case 12:
                                a = 4;
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
                                a = rand(2, 3);
                                break;
                            case 3:
                                a = rand(1, 2);
                                break;
                            case 4:
                                a = 4;
                                break;
                            case 5:
                                a = 19 - this.amount;
                                break;
                            case 6:
                                a = 1;
                                break;
                            case 7:
                                a = rand(3, 4);
                                break;
                            case 8:
                                a = 5;
                                break;
                            case 9:
                                a = rand(-8, -7);
                                break;
                            case 10:
                                a = rand(2, 3);
                                break;
                            case 11:
                                a = 3;
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
                                a = 1;
                                break;
                            case 3:
                                a = 4;
                                break;
                            case 4:
                                a = 1;
                                break;
                            case 5:
                                a = rand(1, 3);
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 6;
                                break;
                            case 8:
                                a = 30 - this.amount;
                                break;
                            case 9:
                                a = rand(8, 9);
                                break;
                            case 10:
                                a = rand(2, 3);
                                break;
                            case 11:
                                a = 1;
                                break;
                            case 12:
                                a = 4;
                                break;
                            case 13:
                                a = 5;
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
                                a = rand(3, 4);
                                break;
                            case 2:
                                a = 2;
                                break;
                            case 3:
                                a = 5;
                                break;
                            case 4:
                                a = 8;
                                break;
                            case 5:
                                a = rand(3, 4);
                                break;
                            case 6:
                                a = 4;
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = 39 - this.amount;
                                break;
                            case 9:
                                a = 1;
                                break;
                            case 10:
                                a = rand(7, 9);
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
                                a = 5;
                                break;
                            case 3:
                                a = 4;
                                break;
                            case 4:
                                a = 1;
                                break;
                            case 5:
                                a = 4;
                                break;
                            case 6:
                                a = 24 - this.amount;
                                break;
                            case 7:
                                a = rand(1, 4);
                                break;
                            case 8:
                                a = 1;
                                break;
                            case 9:
                                a = 4;
                                break;
                            case 10:
                                a = 6;
                                break;
                            case 11:
                                a = 5;
                                break;
                            case 12:
                                a = 40 - this.amount;
                                break;
                            case 13:
                                a = rand(7, 9);
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
                                a = rand(7, 9);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = rand(5, 6);
                                break;
                            case 4:
                                a = 10 - this.amount;
                                break;
                            case 5:
                                a = 4;
                                break;
                            case 6:
                                a = 1;
                                break;
                            case 7:
                                a = rand(1, 4);
                                break;
                            case 8:
                                a = rand(-6, -5);
                                break;
                            case 9:
                                a = 5;
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
                    }
                ]
            },
            's': {
                6: [
                    (step, a) => {

                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = 6;
                                break;
                            case 3:
                                a = rand(5, 7);
                                break;
                            case 4:
                                a = 6;
                                break;
                            case 5:
                                a = 29 - this.amount;
                                break;
                            case 6:
                                a = rand(-3, -1);
                                break;
                            case 7:
                                a = 6;
                                break;
                            case 8:
                                a = rn(31 - this.amount, 30 - this.amount);
                                break;
                            case 9:
                                a = rn(5, 7);
                                break;
                            case 10:
                                a = 6;
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
                                a = 6;
                                break;
                            case 3:
                                a = rand(-2, -1);
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = 6;
                                break;
                            case 6:
                                a = 20 - this.amount;
                                break;
                            case 7:
                                a = rand(7, 8);
                                break;
                            case 8:
                                a = 6;
                                break;
                            case 9:
                                a = rand(-4, -3);
                                break;
                            case 10:
                                a = rn(39 - this.amount, 37 - this.amount);
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
                                a = rand(1, 2);
                                break;
                            case 2:
                                a = rand(5, 6);
                                break;
                            case 3:
                                a = 6;
                                break;
                            case 4:
                                a = rand(-2, -1);
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = 6;
                                break;
                            case 7:
                                a = 29 - this.amount;
                                break;
                            case 8:
                                a = rand(-3, -2);
                                break;
                            case 9:
                                a = 6;
                                break;
                            case 10:
                                a = rn(30 - this.amount, 34 - this.amount);
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
                                a = rand(3, 4);
                                break;
                            case 2:
                                a = rand(-3, -1);
                                break;
                            case 3:
                                a = 5;
                                break;
                            case 4:
                                a = 6;
                                break;
                            case 5:
                                a = -1;
                                break;
                            case 6:
                                a = 6;
                                break;
                            case 7:
                                a = -1;
                                break;
                            case 8:
                                a = 6;
                                break;
                            case 9:
                                a = 20 - this.amount;
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
                                a = rand(5, 6);
                                break;
                            case 2:
                                a = 6;
                                break;
                            case 3:
                                a = rand(1, 2);
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = rand(-2, -1);
                                break;
                            case 6:
                                a = 6;
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = -1;
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
                    }
                ],
                7: [
                    (step, a) => {

                        switch (step) {
                            case 1:
                                a = rand(5, 7);
                                break;
                            case 2:
                                a = 7;
                                break;
                            case 3:
                                a = -1;
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = -1;
                                break;
                            case 6:
                                a = 7;
                                break;
                            case 7:
                                a = -2;
                                break;
                            case 8:
                                a = 5;
                                break;
                            case 9:
                                a = 7;
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
                                a = rand(-3, -2);
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = 7;
                                break;
                            case 7:
                                a = -2;
                                break;
                            case 8:
                                a = 27 - this.amount;
                                break;
                            case 9:
                                a = 7;
                                break;
                            case 10:
                                a = rand(-4, -1);
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
                                a = rand(-3, -2);
                                break;
                            case 3:
                                a = 7;
                                break;
                            case 4:
                                a = -2;
                                break;
                            case 5:
                                a = rand(6, 7);
                                break;
                            case 6:
                                a = -2;
                                break;
                            case 7:
                                a = 7;
                                break;
                            case 8:
                                a = -2;
                                break;
                            case 9:
                                a = 5;
                                break;
                            case 10:
                                a = 7;
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
                                a = 7;
                                break;
                            case 3:
                                a = rand(6, 7);
                                break;
                            case 4:
                                a = rand(-3, -2);
                                break;
                            case 5:
                                a = 7;
                                break;
                            case 6:
                                a = -2;
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = 7;
                                break;
                            case 9:
                                a = 30 - this.amount;
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
                                a = rand(3, 4);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = rand(-3, -2);
                                break;
                            case 4:
                                a = 7;
                                break;
                            case 5:
                                a = -2;
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 7;
                                break;
                            case 8:
                                a = 20 - this.amount;
                                break;
                            case 9:
                                a = rand(5, 6);
                                break;
                            case 10:
                                a = 7;
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
                                a = 5;
                                break;
                            case 2:
                                a = 8;
                                break;
                            case 3:
                                a = -3;
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = 8;
                                break;
                            case 6:
                                a = rand(-3, -2);
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = 8;
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
                                a = 9;
                                break;
                            case 2:
                                a = -4;
                                break;
                            case 3:
                                a = 8;
                                break;
                            case 4:
                                a = -3;
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = 8;
                                break;
                            case 7:
                                a = rand(5, 7);
                                break;
                            case 8:
                                a = rn(25 - this.amount, 26 - this.amount);
                                break;
                            case 9:
                                a = 8;
                                break;
                            case 10:
                                a = rn(30 - this.amount, rand(-2, -1));
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
                                a = 7;
                                break;
                            case 2:
                                a = -2;
                                break;
                            case 3:
                                a = 8;
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = -3;
                                break;
                            case 6:
                                a = 8;
                                break;
                            case 7:
                                a = rand(-3, -2);
                                break;
                            case 8:
                                a = 5;
                                break;
                            case 9:
                                a = 8;
                                break;
                            case 10:
                                a = -3;
                                break;
                            case 11:
                                a = 5;
                                break;
                            case 12:
                                a = 8;
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
                                a = rand(2, 3);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = -2;
                                break;
                            case 4:
                                a = 8;
                                break;
                            case 5:
                                a = rand(-3, -2);
                                break;
                            case 6:
                                a = rn(19 - this.amount, 18 - this.amount);
                                break;
                            case 7:
                                a = rn(15 - this.amount, 16 - this.amount);
                                break;
                            case 8:
                                a = 8;
                                break;
                            case 9:
                                a = rn(20 - this.amount, 29 - this.amount);
                                break;
                            case 10:
                                a = rn(24 - this.amount, 23 - this.amount);
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
                                a = 8;
                                break;
                            case 2:
                                a = -3;
                                break;
                            case 3:
                                a = 8;
                                break;
                            case 4:
                                a = rand(5, 6);
                                break;
                            case 5:
                                a = 15 - this.amount;
                                break;
                            case 6:
                                a = 1;
                                break;
                            case 7:
                                a = 8;
                                break;
                            case 8:
                                a = rand(-3, -1);
                                break;
                            case 9:
                                a = 20 - this.amount;
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
                    }
                ],
                9: [
                    (step, a) => {

                        switch (step) {
                            case 1:
                                a = 5;
                                break;
                            case 2:
                                a = 9;
                                break;
                            case 3:
                                a = rand(-4, -1);
                                break;
                            case 4:
                                a = rand(5, 6);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 9;
                                break;
                            case 8:
                                a = rand(-3, -2);
                                break;
                            case 9:
                                a = rand(6, 7);
                                break;
                            case 10:
                                a = rn(25 - this.amount, 26 - this.amount);
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
                                a = 9;
                                break;
                            case 4:
                                a = -4;
                                break;
                            case 5:
                                a = rand(6, 9);
                                break;
                            case 6:
                                a = 15 - this.amount;
                                break;
                            case 7:
                                a = 9;
                                break;
                            case 8:
                                a = rand(-4, -1);
                                break;
                            case 9:
                                a = rn(29 - this.amount, 28 - this.amount, 24 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(-3, -1), 20 - this.amount);
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
                                a = 5 - this.amount;
                                break;
                            case 4:
                                a = 9;
                                break;
                            case 5:
                                a = rand(-3, -1);
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = 9;
                                break;
                            case 9:
                                a = rand(-3, -1);
                                break;
                            case 10:
                                a = 20 - this.amount;
                                break;
                            case 11:
                                a = 9;
                                break;
                            case 12:
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
                                a = 5;
                                break;
                            case 2:
                                a = 9;
                                break;
                            case 3:
                                a = rand(-4, -3);
                                break;
                            case 4:
                                a = rand(6, 7);
                                break;
                            case 5:
                                a = 6;
                                break;
                            case 6:
                                a = 20 - this.amount;
                                break;
                            case 7:
                                a = rand(1, 2);
                                break;
                            case 8:
                                a = 5;
                                break;
                            case 9:
                                a = 7;
                                break;
                            case 10:
                                a = -3;
                                break;
                            case 11:
                                a = 5;
                                break;
                            case 12:
                                a = 8;
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
                                a = rand(6, 7);
                                break;
                            case 2:
                                a = 7;
                                break;
                            case 3:
                                a = 5;
                                break;
                            case 4:
                                a = 15 - this.amount;
                                break;
                            case 5:
                                a = 9;
                                break;
                            case 6:
                                a = rand(-4, -3);
                                break;
                            case 7:
                                a = 6;
                                break;
                            case 8:
                                a = 6;
                                break;
                            case 9:
                                a = 5;
                                break;
                            case 10:
                                a = -2;
                                break;
                            case 11:
                                a = 8;
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
                                a = rand(8, 9);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = 8;
                                break;
                            case 4:
                                a = rand(-2, -1);
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = 7;
                                break;
                            case 7:
                                a = rand(-3, -2);
                                break;
                            case 8:
                                a = rand(5, 6);
                                break;
                            case 9:
                                a = 6;
                                break;
                            case 10:
                                a = 30 - this.amount;
                                break;
                            case 11:
                                a = 5;
                                break;
                            case 12:
                                a = 9;
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
                                a = 6;
                                break;
                            case 3:
                                a = 7;
                                break;
                            case 4:
                                a = 6;
                                break;
                            case 5:
                                a = rand(-4, -3);
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 8;
                                break;
                            case 8:
                                a = 30 - this.amount;
                                break;
                            case 9:
                                a = rand(5, 6);
                                break;
                            case 10:
                                a = 7;
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
                                a = 6;
                                break;
                            case 2:
                                a = 8;
                                break;
                            case 3:
                                a = -2;
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = 7;
                                break;
                            case 6:
                                a = rand(-3, -1);
                                break;
                            case 7:
                                a = rand(6, 7);
                                break;
                            case 8:
                                a = 25 - this.amount;
                                break;
                            case 9:
                                a = 9;
                                break;
                            case 10:
                                a = rand(-4, -2);
                                break;
                            case 11:
                                a = 5;
                                break;
                            case 12:
                                a = 6;
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
                                a = rand(1, 3);
                                break;
                            case 2:
                                a = rand(5, 6);
                                break;
                            case 3:
                                a = 5 - this.amount;
                                break;
                            case 4:
                                a = 9;
                                break;
                            case 5:
                                a = -4;
                                break;
                            case 6:
                                a = 6;
                                break;
                            case 7:
                                a = 8;
                                break;
                            case 8:
                                a = 5;
                                break;
                            case 9:
                                a = rand(-4, -1);
                                break;
                            case 10:
                                a = 6;
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
                                a = 7;
                                break;
                            case 3:
                                a = -2;
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = 9;
                                break;
                            case 6:
                                a = rand(-4, -2);
                                break;
                            case 7:
                                a = 29 - this.amount;
                                break;
                            case 8:
                                a = -4;
                                break;
                            case 9:
                                a = rand(6, 9);
                                break;
                            case 10:
                                a = rn(30 - this.amount, 5);
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
                                a = 5 - this.amount;
                                break;
                            case 4:
                                a = 8;
                                break;
                            case 5:
                                a = -3;
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 7;
                                break;
                            case 8:
                                a = rand(6, 7);
                                break;
                            case 9:
                                a = 25 - this.amount;
                                break;
                            case 10:
                                a = rn(6, 7, 8);
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
            },
            'sr': {
                'o': [
                    (step, a) => {

                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = rand(6, 8);
                                break;
                            case 4:
                                a = rand(5, 6);
                                break;
                            case 5:
                                a = 35 - this.amount;
                                break;
                            case 6:
                                a = rand(6, 9);
                                break;
                            case 7:
                                a = 40 - this.amount;
                                break;
                            case 8:
                                a = rand(6, 7);
                                break;
                            case 9:
                                a = rand(1, 2);
                                break;
                            case 10:
                                a = rand(-7, -6);
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
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = 5;
                                break;
                            case 4:
                                a = rand(6, 9);
                                break;
                            case 5:
                                a = 30 - this.amount;
                                break;
                            case 6:
                                a = rand(6, 9);
                                break;
                            case 7:
                                a = 44 - this.amount;
                                break;
                            case 8:
                                a = rand(-4, -1);
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
                                a = rand(1, 4);
                                break;
                            case 2:
                                a = 10 - this.amount;
                                break;
                            case 3:
                                a = 5;
                                break;
                            case 4:
                                a = rand(6, 9);
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = 30 - this.amount;
                                break;
                            case 7:
                                a = 9;
                                break;
                            case 8:
                                a = 1;
                                break;
                            case 9:
                                a = rand(1, 4);
                                break;
                            case 10:
                                a = 50 - this.amount;
                                break;
                            case 11:
                                a = rand(6, 7);
                                break;
                            case 12:
                                a = rand(6, 7);
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
                                a = 9 - this.amount;
                                break;
                            case 3:
                                a = rand(6, 9);
                                break;
                            case 4:
                                a = 6;
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = 30 - this.amount;
                                break;
                            case 8:
                                a = rand(1, 3);
                                break;
                            case 9:
                                a = 6;
                                break;
                            case 10:
                                a = 6;
                                break;
                            case 11:
                                a = 50 - this.amount;
                                break;
                            case 12:
                                a = rand(7, 9);
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
                                a = 9;
                                break;
                            case 2:
                                a = rand(1, 4);
                                break;
                            case 3:
                                a = 19 - this.amount;
                                break;
                            case 4:
                                a = rand(-4, -1);
                                break;
                            case 5:
                                a = 6;
                                break;
                            case 6:
                                a = 20 - this.amount;
                                break;
                            case 7:
                                a = rand(8, 9);
                                break;
                            case 8:
                                a = rand(2, 3);
                                break;
                            case 9:
                                a = 5;
                                break;
                            case 10:
                                a = rand(7, 8);
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
                                a = 8;
                                break;
                            case 2:
                                a = rand(2, 4);
                                break;
                            case 3:
                                a = rand(6, 7);
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = 20 - this.amount;
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = rand(6, 9);
                                break;
                            case 8:
                                a = 30 - this.amount;
                                break;
                            case 9:
                                a = rand(7, 8);
                                break;
                            case 10:
                                a = rand(-2, -1);
                                break;
                            case 11:
                                a = 7;
                                break;
                            case 12:
                                a = 40 - this.amount;
                                break;
                            case 13:
                                a = rand(7, 9);
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
                                a = 5;
                                break;
                            case 2:
                                a = rand(6, 9);
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = rand(1, 4);
                                break;
                            case 5:
                                a = 20 - this.amount;
                                break;
                            case 6:
                                a = rand(6, 8);
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = 6;
                                break;
                            case 9:
                                a = -2;
                                break;
                            case 10:
                                a = 6;
                                break;
                            case 11:
                                a = 5;
                                break;
                            case 12:
                                a = 5;
                                break;
                            case 13:
                                a = 50 - this.amount;
                                break;
                            case 14:
                                a = rand(7, 9);
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
                                a = rand(7, 9);
                                break;
                            case 2:
                                a = 5;
                                break;
                            case 3:
                                a = 19 - this.amount;
                                break;
                            case 4:
                                a = rand(1, 2);
                                break;
                            case 5:
                                a = 3;
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = rand(6, 7);
                                break;
                            case 9:
                                a = 6;
                                break;
                            case 10:
                                a = 40 - this.amount;
                                break;
                            case 11:
                                a = 4;
                                break;
                            case 12:
                                a = 6;
                                break;
                            case 13:
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
                                a = rand(6, 8);
                                break;
                            case 2:
                                a = 6;
                                break;
                            case 3:
                                a = 3;
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = 1;
                                break;
                            case 6:
                                a = 4;
                                break;
                            case 7:
                                a = 6;
                                break;
                            case 8:
                                a = 1;
                                break;
                            case 9:
                                a = 3;
                                break;
                            case 10:
                                a = 6;
                                break;
                            case 11:
                                a = 5;
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
                                a = rand(6, 7);
                                break;
                            case 2:
                                a = 7;
                                break;
                            case 3:
                                a = 4;
                                break;
                            case 4:
                                a = -5;
                                break;
                            case 5:
                                a = 3;
                                break;
                            case 6:
                                a = 7;
                                break;
                            case 7:
                                a = -1;
                                break;
                            case 8:
                                a = 4;
                                break;
                            case 9:
                                a = 7;
                                break;
                            case 10:
                                a = rand(-2, -1);
                                break;
                            case 11:
                                a = rand(6, 7);
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
                                a = rand(5, 6);
                                break;
                            case 2:
                                a = 8;
                                break;
                            case 3:
                                a = 2;
                                break;
                            case 4:
                                a = 19 - this.amount;
                                break;
                            case 5:
                                a = rand(-3, -2);
                                break;
                            case 6:
                                a = 6;
                                break;
                            case 7:
                                a = 3;
                                break;
                            case 8:
                                a = 8;
                                break;
                            case 9:
                                a = 5;
                                break;
                            case 10:
                                a = -1;
                                break;
                            case 11:
                                a = 6;
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
                                a = 5;
                                break;
                            case 2:
                                a = 9;
                                break;
                            case 3:
                                a = 1;
                                break;
                            case 4:
                                a = rand(1, 4);
                                break;
                            case 5:
                                a = -1;
                                break;
                            case 6:
                                a = 6;
                                break;
                            case 7:
                                a = 4;
                                break;
                            case 8:
                                a = -5;
                                break;
                            case 9:
                                a = 1;
                                break;
                            case 10:
                                a = 20 - this.amount;
                                break;
                            case 11:
                                a = 5;
                                break;
                            case 12:
                                a = 9;
                                break;
                            case 13:
                                a = rand(-4, -1);
                                break;
                            case 14:
                                a = 5;
                                break;
                            case 15:
                                a = 14 - this.amount;
                                break;
                            case 16:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }
                        this.amount += a;
                        return a;
                    },
                    (step, a) => {

                        switch (step) {
                            case 1:
                                a = 7;
                                break;
                            case 2:
                                a = -2;
                                break;
                            case 3:
                                a = 9;
                                break;
                            case 4:
                                a = 2;
                                break;
                            case 5:
                                a = 7;
                                break;
                            case 6:
                                a = 1;
                                break;
                            case 7:
                                a = 1;
                                break;
                            case 8:
                                a = 8;
                                break;
                            case 9:
                                a = 4;
                                break;
                            case 10:
                                a = -7;
                                break;
                            case 11:
                                a = rand(1, 9);
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
                                a = 4;
                                break;
                            case 2:
                                a = 1;
                                break;
                            case 3:
                                a = rand(7, 8);
                                break;
                            case 4:
                                a = 3;
                                break;
                            case 5:
                                a = rand(6, 7);
                                break;
                            case 6:
                                a = 4;
                                break;
                            case 7:
                                a = -5;
                                break;
                            case 8:
                                a = rand(1, 2);
                                break;
                            case 9:
                                a = 4;
                                break;
                            case 10:
                                a = 6;
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
                                a = rand(3, 4);
                                break;
                            case 2:
                                a = 2;
                                break;
                            case 3:
                                a = 6;
                                break;
                            case 4:
                                a = -1;
                                break;
                            case 5:
                                a = 14 - this.amount;
                                break;
                            case 6:
                                a = 1;
                                break;
                            case 7:
                                a = rand(6, 9);
                                break;
                            case 8:
                                a = 20 - this.amount;
                                break;
                            case 9:
                                a = rand(2, 3);
                                break;
                            case 10:
                                a = 3;
                                break;
                            case 11:
                                a = rand(7, 8);
                                break;
                            case 12:
                                a = 5;
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
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rand(6, 9);
                                break;
                            case 4:
                                a = 15 - this.amount;
                                break;
                            case 5:
                                a = rand(6, 9);
                                break;
                            case 6:
                                a = 20 - this.amount;
                                break;
                            case 7:
                                a = rand(6, 9);
                                break;
                            case 8:
                                a = -5;
                                break;
                            case 9:
                                a = 25 - this.amount;
                                break;
                            case 10:
                                a = rand(6, 9);
                                break;
                            case 11:
                                a = rand(2, 4);
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
                                a = -1;
                                break;
                            case 4:
                                a = 6;
                                break;
                            case 5:
                                a = 15 - this.amount;
                                break;
                            case 6:
                                a = rand(6, 9);
                                break;
                            case 7:
                                a = 25 - this.amount;
                                break;
                            case 8:
                                a = -5;
                                break;
                            case 9:
                                a = rand(1, 9);
                                break;
                            case 10:
                                a = 20 - this.amount;
                                break;
                            case 11:
                                a = rand(1, 4);
                                break;
                            case 12:
                                a = 25 - this.amount;
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
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rand(6, 9);
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = -1;
                                break;
                            case 6:
                                a = 19 - this.amount;
                                break;
                            case 7:
                                a = rand(-8, -7);
                                break;
                            case 8:
                                a = 15 - this.amount;
                                break;
                            case 9:
                                a = rand(6, 9);
                                break;
                            case 10:
                                a = 25 - this.amount;
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
                    }
                ]
            },
            'srb': {
                'o': [
                    (step, a) => {

                        switch (step) {
                            case 1:
                                a = 9;
                                break;
                            case 2:
                                a = 1;
                                break;
                            case 3:
                                a = 4;
                                break;
                            case 4:
                                a = 1;
                                break;
                            case 5:
                                a = rand(6, 7);
                                break;
                            case 6:
                                a = 25 - this.amount;
                                break;
                            case 7:
                                a = rand(6, 7);
                                break;
                            case 8:
                                a = -1;
                                break;
                            case 9:
                                a = 39 - this.amount;
                                break;
                            case 10:
                                a = 1;
                                break;
                            case 11:
                                a = rand(3, 4);
                                break;
                            case 12:
                                a = 7;
                                break;
                            case 13:
                                a = 3;
                                break;
                            case 14:
                                a = 2;
                                break;
                            case 15:
                                a = 8;
                                break;
                            case 16:
                                a = 60 - this.amount;
                                break;
                            case 17:
                                a = rand(6, 9);
                                break;
                            case 18:
                                a = 5;
                                break;
                            case 19:
                                a = 75 - this.amount;
                                break;
                            case 20:
                                a = -5;
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
                                a = rand(2, 3);
                                break;
                            case 2:
                                a = 4;
                                break;
                            case 3:
                                a = 7;
                                break;
                            case 4:
                                a = rand(-3, -2);
                                break;
                            case 5:
                                a = 14 - this.amount;
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = 2;
                                break;
                            case 8:
                                a = 3;
                                break;
                            case 9:
                                a = rand(6, 9);
                                break;
                            case 10:
                                a = 34 - this.amount;
                                break;
                            case 11:
                                a = 4;
                                break;
                            case 12:
                                a = 7;
                                break;
                            case 13:
                                a = rand(6, 9);
                                break;
                            case 14:
                                a = 55 - this.amount;
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
                                a = 5;
                                break;
                            case 2:
                                a = rand(6, 9);
                                break;
                            case 3:
                                a = 15 - this.amount;
                                break;
                            case 4:
                                a = rand(3, 4);
                                break;
                            case 5:
                                a = 3;
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = -1;
                                break;
                            case 8:
                                a = 8;
                                break;
                            case 9:
                                a = 35 - this.amount;
                                break;
                            case 10:
                                a = rand(6, 9);
                                break;
                            case 11:
                                a = 9;
                                break;
                            case 12:
                                a = 1;
                                break;
                            case 13:
                                a = 55 - this.amount;
                                break;
                            case 14:
                                a = rand(6, 9);
                                break;
                            case 15:
                                a = 70 - this.amount;
                                break;
                            case 16:
                                a = rand(8, 9);
                                break;
                            case 17:
                                a = rand(2, 3);
                                break;
                            case 18:
                                a = rand(1, 2);
                                break;
                            case 19:
                                a = 85 - this.amount;
                                break;
                            case 20:
                                a = -this.amount;
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
                                a = 5;
                                break;
                            case 4:
                                a = rand(6, 9);
                                break;
                            case 5:
                                a = 25 - this.amount;
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = rand(1, 4);
                                break;
                            case 8:
                                a = 25 - this.amount;
                                break;
                            case 9:
                                a = rand(6, 9);
                                break;
                            case 10:
                                a = 30 - this.amount;
                                break;
                            case 11:
                                a = rand(6, 9);
                                break;
                            case 12:
                                a = 40 - this.amount;
                                break;
                            case 13:
                                a = 5;
                                break;
                            case 14:
                                a = rand(6, 9);
                                break;
                            case 15:
                                a = 50 - this.amount;
                                break;
                            case 16:
                                a = -this.amount;
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
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rand(6, 9);
                                break;
                            case 4:
                                a = 20 - this.amount;
                                break;
                            case 5:
                                a = rand(6, 9);
                                break;
                            case 6:
                                a = 30 - this.amount;
                                break;
                            case 7:
                                a = rand(1, 4);
                                break;
                            case 8:
                                a = 35 - this.amount;
                                break;
                            case 9:
                                a = 1;
                                break;
                            case 10:
                                a = rand(6, 8);
                                break;
                            case 11:
                                a = 40 - this.amount;
                                break;
                            case 12:
                                a = rand(6, 9);
                                break;
                            case 13:
                                a = 55 - this.amount;
                                break;
                            case 14:
                                a = rand(6, 9);
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
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = rand(6, 9);
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = 30 - this.amount;
                                break;
                            case 6:
                                a = rand(1, 4);
                                break;
                            case 7:
                                a = 35 - this.amount;
                                break;
                            case 8:
                                a = rand(6, 9);
                                break;
                            case 9:
                                a = 50 - this.amount;
                                break;
                            case 10:
                                a = rand(6, 9);
                                break;
                            case 11:
                                a = 65 - this.amount;
                                break;
                            case 12:
                                a = rand(6, 9);
                                break;
                            case 13:
                                a = 75 - this.amount;
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
                                a = 5 - this.amount;
                                break;
                            case 4:
                                a = rand(6, 9);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = rand(6, 9);
                                break;
                            case 7:
                                a = 25 - this.amount;
                                break;
                            case 8:
                                a = -5;
                                break;
                            case 9:
                                a = rand(1, 4);
                                break;
                            case 10:
                                a = 25 - this.amount;
                                break;
                            case 11:
                                a = rand(1, 4);
                                break;
                            case 12:
                                a = 20 - this.amount;
                                break;
                            case 13:
                                a = rand(1, 4);
                                break;
                            case 14:
                                a = 30 - this.amount;
                                break;
                            case 15:
                                a = rand(1, 9);
                                break;
                            case 16:
                                a = 30 - this.amount;
                                break;
                            case 17:
                                a = rand(1, 4);
                                break;
                            case 18:
                                a = 35 - this.amount;
                                break;
                            case 19:
                                a = -this.amount;
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
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = -5;
                                break;
                            case 4:
                                a = rand(6, 9);
                                break;
                            case 5:
                                a = 1 - this.amount;
                                break;
                            case 6:
                                a = 4;
                                break;
                            case 7:
                                a = rand(6, 9);
                                break;
                            case 8:
                                a = 20 - this.amount;
                                break;
                            case 9:
                                a = 5;
                                break;
                            case 10:
                                a = 29 - this.amount;
                                break;
                            case 11:
                                a = rand(1, 3);
                                break;
                            case 12:
                                a = 35 - this.amount;
                                break;
                            case 13:
                                a = -5;
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
                                a = rand(7, 9);
                                break;
                            case 2:
                                a = 2 - this.amount;
                                break;
                            case 3:
                                a = rand(3, 4);
                                break;
                            case 4:
                                a = rand(6, 8);
                                break;
                            case 5:
                                a = 15 - this.amount;
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = 9;
                                break;
                            case 8:
                                a = rand(2, 4);
                                break;
                            case 9:
                                a = 20 - this.amount;
                                break;
                            case 10:
                                a = rand(6, 9);
                                break;
                            case 11:
                                a = -5;
                                break;
                            case 12:
                                a = 25 - this.amount;
                                break;
                            case 13:
                                a = rand(6, 9);
                                break;
                            case 14:
                                a = 35 - this.amount;
                                break;
                            case 15:
                                a = -5;
                                break;
                            case 16:
                                a = rand(6, 9);
                                break;
                            case 17:
                                a = 31 - this.amount;
                                break;
                            case 18:
                                a = -this.amount;
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
                                a = 3 - this.amount;
                                break;
                            case 3:
                                a = 6;
                                break;
                            case 4:
                                a = rand(2, 4);
                                break;
                            case 5:
                                a = 15 - this.amount;
                                break;
                            case 6:
                                a = -5;
                                break;
                            case 7:
                                a = 5;
                                break;
                            case 8:
                                a = rand(6, 9);
                                break;
                            case 9:
                                a = 25 - this.amount;
                                break;
                            case 10:
                                a = -5;
                                break;
                            case 11:
                                a = rand(8, 9);
                                break;
                            case 12:
                                a = rand(2, 3);
                                break;
                            case 13:
                                a = 35 - this.amount;
                                break;
                            case 14:
                                a = rand(6, 9);
                                break;
                            case 15:
                                a = 40 - this.amount;
                                break;
                            case 16:
                                a = rand(1, 9);
                                break;
                            case 17:
                                a = -this.amount;
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
                                a = 9;
                                break;
                            case 4:
                                a = 5;
                                break;
                            case 5:
                                a = rand(6, 9);
                                break;
                            case 6:
                                a = 25 - this.amount;
                                break;
                            case 7:
                                a = -5;
                                break;
                            case 8:
                                a = rand(8, 9);
                                break;
                            case 9:
                                a = 30 - this.amount;
                                break;
                            case 10:
                                a = rand(1, 4);
                                break;
                            case 11:
                                a = 35 - this.amount;
                                break;
                            case 12:
                                a = rand(6, 9);
                                break;
                            case 13:
                                a = 40 - this.amount;
                                break;
                            case 14:
                                a = rand(8, 9);
                                break;
                            case 15:
                                a = 43 - this.amount;
                                break;
                            case 16:
                                a = 3;
                                break;
                            case 17:
                                a = -6;
                                break;
                            case 18:
                                a = rand(1, 9);
                                break;
                            case 19:
                                a = -this.amount;
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
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = 4;
                                break;
                            case 4:
                                a = rand(1, 4);
                                break;
                            case 5:
                                a = 15 - this.amount;
                                break;
                            case 6:
                                a = rand(6, 9);
                                break;
                            case 7:
                                a = 25 - this.amount;
                                break;
                            case 8:
                                a = -5;
                                break;
                            case 9:
                                a = rand(6, 9);
                                break;
                            case 10:
                                a = 35 - this.amount;
                                break;
                            case 11:
                                a = -5;
                                break;
                            case 12:
                                a = rand(6, 9);
                                break;
                            case 13:
                                a = 32 - this.amount;
                                break;
                            case 14:
                                a = 9;
                                break;
                            case 15:
                                a = 4;
                                break;
                            case 16:
                                a = rand(6, 9);
                                break;
                            case 17:
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
            'p': {
                'o': [
                    (step, a) => {
                        switch (step) {
                            case 1:
                                a = rand(7, 9);
                                break;
                            case 2:
                                a = rn(5 - this.amount, 6 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(11, 13), rand(21, 23), rand(31, 33));
                                break;
                            case 4:
                                a = rn(-this.amount, 15 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(71, 74), rand(51, 54), rand(61, 64));
                                break;
                            case 6:
                                a = rn(50 - this.amount, 1 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(11, 13), rand(21, 23));
                                break;
                            case 8:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-54, -51), rand(-64, -61));
                                break;
                            case 10:
                                a = rn(15 - this.amount, 5 - this.amount, -this.amount, -5);
                                this.nextAlgorithm = true;
                                break;
                        }
                        // console.log(1);

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {
                        switch (step) {
                            case 1:
                                a = rand(1, 3);
                                break;
                            case 2:
                                a = rn(5, 6);
                                break;
                            case 3:
                                a = rn(5 - this.amount, -this.amount);
                                break;
                            case 4:
                                a = rn(rand(11, 13), rand(21, 23));
                                break;
                            case 5:
                                a = rn(51, 61, 1);
                                break;
                            case 6:
                                a = rn(-this.amount, 2 - this.amount, 1 - this.amount);
                                break;
                            case 7:
                                a = rn(5, 6);
                                break;
                            case 8:
                                a = rn(10, 20, 11, 21);
                                break;
                            case 9:
                                a = rn(5 - this.amount, -this.amount);
                                break;
                            case 10:
                                a = rn(rand(1, 4), rand(11, 14));
                                this.nextAlgorithm = true;
                                break;
                        }
                        // console.log(2);

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {
                        switch (step) {
                            case 1:
                                a = rand(1, 3);
                                break;
                            case 2:
                                a = rn(5, 6);
                                break;
                            case 3:
                                a = rn(20, 30, 40);
                                break;
                            case 4:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(1, 4), rand(11, 14));
                                break;
                            case 6:
                                a = rn(39 - this.amount, 89 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(-4, -1), rand(-24, -21));
                                break;
                            case 8:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(1, 4), rand(51, 54));
                                break;
                            case 10:
                                a = rn(-this.amount, rand(-6, -5));
                                this.nextAlgorithm = true;
                                break;
                        }
                        // console.log(3);

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {
                        switch (step) {
                            case 1:
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = rn(5 - this.amount, 10);
                                break;
                            case 3:
                                a = rn(29 - this.amount, 39 - this.amount);
                                break;
                            case 4:
                                a = rn(-14, -11);
                                break;
                            case 5:
                                a = rn(5 - this.amount, -this.amount);
                                break;
                            case 6:
                                a = rand(21, 24);
                                break;
                            case 7:
                                a = rn(39 - this.amount, 89 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(-9, -1), rand(-19, -11));
                                break;
                            case 9:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 10:
                                a = rand(1, 19);
                                this.nextAlgorithm = true;
                                break;
                        }

                        // console.log(4);
                        this.amount += a;
                        return a;
                    },
                    (step, a) => {
                        switch (step) {
                            case 1:
                                a = rn(rand(1, 3), rand(5, 8));
                                break;
                            case 2:
                                a = rn(1, 11, 21);
                                break;
                            case 3:
                                a = rn(79 - this.amount, 89 - this.amount, 99 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(-9, -1), rand(-19, -11));
                                break;
                            case 5:
                                a = rn(50 - this.amount, -this.amount);
                                break;
                            case 6:
                                a = rand(9, 1);
                                break;
                            case 7:
                                a = rn(10, 20, 30);
                                break;
                            case 8:
                                a = rn(-this.amount, 10 - this.amount);
                                break;
                            case 9:
                                a = rand(11, 14);
                                break;
                            case 10:
                                a = rn(15, 25, 55);
                                this.nextAlgorithm = true;
                                break;
                        }

                        // console.log(5);
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
                                a = 9;
                                break;
                            case 2:
                                a = rand(1, 9);
                                break;
                            case 3:
                                a = rn((20 - this.amount), (30 - this.amount));
                                break;
                            case 4:
                                a = rand(1, 9);
                                break;
                            case 5:
                                a = rn((40 - this.amount), 50);
                                break;
                            case 6:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(1, 9), rand(11, 19));
                                break;
                            case 8:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 9:
                                a = rand(1, 9);
                                break;
                            case 10:
                                a = rn(-20, -30, -40, -41);
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
                                a = rn((20 - this.amount), (70 - this.amount));
                                break;
                            case 3:
                                a = rand(1, 9);
                                break;
                            case 4:
                                a = rn(90 - this.amount, 80 - this.amount);
                                break;
                            case 5:
                                a = rand(1, 9);
                                break;
                            case 6:
                                a = rn(-80, -70);
                                break;
                            case 7:
                                a = rn(30 - this.amount, 20 - this.amount);
                                break;
                            case 8:
                                a = rand(1, 9);
                                break;
                            case 9:
                                a = rn(40 - this.amount, 30 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(51, 59), rand(1, 9));
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
                                a = rn((10 - this.amount), (30 - this.amount));
                                break;
                            case 3:
                                a = 9;
                                break;
                            case 4:
                                a = rand(1, 9);
                                break;
                            case 5:
                                a = rn(30 - this.amount, -this.amount);
                                break;
                            case 6:
                                a = rand(1, 9);
                                break;
                            case 7:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(1, 2), rand(5, 7));
                                break;
                            case 9:
                                a = rn(-30, -20);
                                break;
                            case 10:
                                a = rn(80 - this.amount, rand(11, 12));
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
                                a = rn(rand(1, 9), rand(51, 59));
                                break;
                            case 3:
                                a = rn(70 - this.amount, 80 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(1, 2), rand(6, 7));
                                break;
                            case 5:
                                a = rn(1, 2);
                                break;
                            case 6:
                                a = rn(90 - this.amount, 99 - this.amount);
                                break;
                            case 7:
                                a = rn(-70, -80, -90);
                                break;
                            case 8:
                                a = rn(20 - this.amount, 30 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(1, 2), rand(5, 7));
                                break;
                            case 10:
                                a = rn(40 - this.amount, rn(1, 2));
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
                                a = rand(1, 9);
                                break;
                            case 4:
                                a = rn(40 - this.amount, 30 - this.amount);
                                break;
                            case 5:
                                a = rn(-10, -20);
                                break;
                            case 6:
                                a = 9;
                                break;
                            case 7:
                                a = rand(1, 9);
                                break;
                            case 8:
                                a = rn(20 - this.amount, 30 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(1, 9), rand(51, 59));
                                break;
                            case 10:
                                a = rn(90 - this.amount, -this.amount, 99 - this.amount);
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
                                a = rand(6, 9);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rn(rand(26, 29), rand(36, 39));
                                break;
                            case 4:
                                a = rn(rn(-11, -10), rn(-21, -20), rn(-31, -30));
                                break;
                            case 5:
                                a = 5;
                                break;
                            case 6:
                                a = rn(14 - this.amount, 24 - this.amount);
                                break;
                            case 7:
                                a = rn(-4, -3, -14, -13);
                                break;
                            case 8:
                                a = rn(rand(65, 66), rand(5, 6));
                                break;
                            case 9:
                                a = rand(6, 7);
                                break;
                            case 10:
                                a = rn(-1, -10, -11);
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
                                a = rn(35, 65, 75);
                                break;
                            case 4:
                                a = rn(25 - this.amount, 15 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(6, 9), rand(16, 19));
                                break;
                            case 6:
                                a = rn(5, 55);
                                break;
                            case 7:
                                a = rn(5 - this.amount, 15 - this.amount, 25 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(6, 9), rand(56, 59));
                                break;
                            case 9:
                                a = rn(1 - this.amount, 10 - this.amount, -this.amount);
                                break;
                            case 10:
                                a = rn(rand(1, 8), rand(31, 38));
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
                                a = rn(14 - this.amount, 24 - this.amount, 34 - this.amount);
                                break;
                            case 3:
                                a = rn(-3, -1);
                                break;
                            case 4:
                                a = rn(5, 15);
                                break;
                            case 5:
                                a = rn(rand(6, 9), rand(26, 29));
                                break;
                            case 6:
                                a = rn(rand(6, 9), rand(26, 29));
                                break;
                            case 7:
                                a = rn(1 - this.amount, -this.amount);
                                break;
                            case 8:
                                a = rn(25, 35);
                                break;
                            case 9:
                                a = rand(6, 8);
                                break;
                            case 10:
                                a = rn(-30, 55, -10, 94 - this.amount);
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
                                a = rn(15, 25);
                                break;
                            case 4:
                                a = rn(-2, -1);
                                break;
                            case 5:
                                a = rn(44 - this.amount, 94 - this.amount);
                                break;
                            case 6:
                                a = rand(-4, -1);
                                break;
                            case 7:
                                a = rn(-20, -30);
                                break;
                            case 8:
                                a = rn(5, 15);
                                break;
                            case 9:
                                a = rn(6, 94 - this.amount);
                                break;
                            case 10:
                                a = rn(-1, 99 - this.amount, -this.amount);
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
                                a = rn(1 - this.amount, 2 - this.amount);
                                break;
                            case 4:
                                a = rn(5, 6);
                                break;
                            case 5:
                                a = rn(16, 26);
                                break;
                            case 6:
                                a = 5;
                                break;
                            case 7:
                                a = rn(-12, -11, -22, -21);
                                break;
                            case 8:
                                a = 44 - this.amount;
                                break;
                            case 9:
                                a = rn(rand(-14, -11), rand(-24, -21));
                                break;
                            case 10:
                                a = rn(-10, -20, 65, 56);
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
                                a = rand(1, 9);
                                break;
                            case 2:
                                a = rand(4, 9);
                                break;
                            case 3:
                                a = rand(1, 9);
                                break;
                            case 4:
                                a = rand(4, 9);
                                break;
                            case 5:
                                a = rn(rand(21, 29), rand(31, 39));
                                break;
                            case 6:
                                a = rand(1, 9);
                                break;
                            case 7:
                                a = -this.amount;
                                break;
                            case 8:
                                a = rand(1, 30);
                                break;
                            case 9:
                                a = rand(10, 20);
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
                                a = rn(rand(44, 49), rand(34, 39));
                                break;
                            case 3:
                                a = rn(rand(1, 9), rand(11, 19));
                                break;
                            case 4:
                                a = rand(1, 9);
                                break;
                            case 5:
                                a = -this.amount;
                                break;
                            case 6:
                                a = rand(5, 9);
                                break;
                            case 7:
                                a = rn(24 - this.amount, 14 - this.amount, rand(6, 9));
                                break;
                            case 8:
                                a = rn(rand(4, 9), rand(14, 19));
                                break;
                            case 9:
                                a = rand(1, 9);
                                break;
                            case 10:
                                a = rn(rand(31, 39), rand(21, 29), rand(11, 19));
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
                                a = rn(15 - this.amount, 5 - this.amount, rand(4, 9));
                                break;
                            case 3:
                                a = rn(rand(40, 49), rand(60, 69));
                                break;
                            case 4:
                                a = rand(1, 9);
                                break;
                            case 5:
                                a = rn(95 - this.amount, 94 - this.amount, 96 - this.amount);
                                break;
                            case 6:
                                a = rn(40 - this.amount, 30 - this.amount);
                                break;
                            case 7:
                                a = rand(1, 9);
                                break;
                            case 8:
                                a = rn(rand(14, 19), rand(24, 29));
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
                                a = rand(5, 8);
                                break;
                            case 2:
                                a = rn(24 - this.amount, 14 - this.amount, rand(6, 9));
                                break;
                            case 3:
                                a = rn(rand(4, 9), rand(14, 19));
                                break;
                            case 4:
                                a = rn(rand(1, 9), rand(21, 29));
                                break;
                            case 5:
                                a = rn(84 - this.amount, 75 - this.amount, 80 - this.amount);
                                break;
                            case 6:
                                a = rand(1, 9);
                                break;
                            case 7:
                                a = rn(10 - this.amount, 20 - this.amount, 30 - this.amount);
                                break;
                            case 8:
                                a = rand(1, 9);
                                break;
                            case 9:
                                a = rn(rand(34, 39), rand(44, 49));
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
                                a = rn(10 - this.amount, 20 - this.amount, rand(4, 9));
                                break;
                            case 3:
                                a = rand(1, 9);
                                break;
                            case 4:
                                a = rn(30 - this.amount, 34 - this.amount, 35 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(21, 29), rand(31, 39));
                                break;
                            case 6:
                                a = rand(1, 9);
                                break;
                            case 7:
                                a = rand(1, 9);
                                break;
                            case 8:
                                a = rn(50 - this.amount, -this.amount);
                                break;
                            case 9:
                                a = rn(rand(1, 9), rand(21, 29));
                                break;
                            case 10:
                                a = rand(1, 19);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ]
            }
        },
        '2': {
            'p': {
                '1-4': [
                    () => {
                        let a
                        let s = this.amount / 10;

                        do {
                            a = rand(-4, 4);
                        } while (s + a > 4 || 0 > s + a || a === 0);

                        a *= 10;

                        this.amount += a;
                        return a;
                    }
                ],
                '1-5': [

                    () => {
                        let a
                        let s = this.amount / 10;

                        do {
                            a = rand(-5, 5);
                        } while (
                            s + a > 9 ||
                            0 > s + a ||
                            a === 0 ||

                            (s >= 5 && (a > s - 5 || a > 9 - s || a !== -5)) ||
                            (s <= 4 && (a > 4 - s && a !== 5))
                            );

                        a *= 10;
                        this.amount += a;
                        return a;
                    }
                ],
                '1-9': [
                    (step, a) => {

                        let s = this.amount / 10;
                        switch (step) {
                            case 1:
                                a = rand(8, 9);
                                break;
                            case 2:
                                a = rand(-6, -5);
                                break;
                            case 3:
                                a = rn(1 - s, -s);
                                break;
                            case 4:
                                a = rn(2, 3, 6, 7);
                                break;
                            case 5:
                                a = rn(1 - s, 9 - s);
                                break;
                            case 6:
                                a = rn(2 - s, 3 - s);
                                break;
                            case 7:
                                a = rn(8 - s, 4 - s, 9 - s);
                                break;
                            case 8:
                                a = rn(1 - s, 2 - s, 3 - s);
                                break;
                            case 9:
                                a = rn(4 - s, 1);
                                break;
                            case 10:
                                a = rn(5, -2, -1, -s);
                                break;
                            case 11:
                                a = -s;
                                this.nextAlgorithm = true;
                                break;
                        }
                        a *= 10;
                        this.amount += a;
                        return a;
                    },
                    (step, a) => {

                        let s = this.amount / 10;

                        switch (step) {
                            case 1:
                                a = rn(1, 2);
                                break;
                            case 2:
                                a = rn(6, 7);
                                break;
                            case 3:
                                a = rn(5 - s, 1 - s);
                                break;
                            case 4:
                                a = rn(2, 3);
                                break;
                            case 5:
                                a = rn(2 - s, -2, -1);
                                break;
                            case 6:
                                a = rn(9 - s, 8 - s, 1 - s);
                                break;
                            case 7:
                                a = rn(2 - s, 3 - s);
                                break;
                            case 8:
                                a = rn(8 - s, 4 - s);
                                break;
                            case 9:
                                a = rn(-3, -1);
                                break;
                            case 10:
                                a = rn(9 - s, 1, -1);
                                break;
                            case 11:
                                a = -s;
                                this.nextAlgorithm = true;
                                break;
                        }
                        a *= 10;
                        this.amount += a;
                        return a;
                    },
                    (step, a) => {

                        let s = this.amount / 10;

                        switch (step) {
                            case 1:
                                a = rand(7, 9);
                                break;
                            case 2:
                                a = rn(1 - s, 5 - s);
                                break;
                            case 3:
                                a = rn(1, 2, -s);
                                break;
                            case 4:
                                a = rn(9 - s, 8 - s);
                                break;
                            case 5:
                                a = rn(-7, -6);
                                break;
                            case 6:
                                a = rn(4 - s, 8 - s);
                                break;
                            case 7:
                                a = rn(-3, -1);
                                break;
                            case 8:
                                a = rn(9 - s, 1);
                                break;
                            case 9:
                                a = rn(1 - s, -s);
                                break;
                            case 10:
                                a = rn(rand(1, 3), rand(6, 8));
                                break;
                            case 11:
                                a = -s;
                                this.nextAlgorithm = true;
                                break;
                        }
                        a *= 10;
                        this.amount += a;
                        return a;
                    },
                    (step, a) => {

                        let s = this.amount / 10;

                        switch (step) {
                            case 1:
                                a = rn(3, 4, 8, 9);
                                break;
                            case 2:
                                a = rn(2 - s, 1 - s);
                                break;
                            case 3:
                                a = rn(7 - s, 8 - s);
                                break;
                            case 4:
                                a = rn(-2, -1);
                                break;
                            case 5:
                                a = rn(-s, 8 - s);
                                break;
                            case 6:
                                a = rn(9 - s, 7 - s, 6 - s);
                                break;
                            case 7:
                                a = rn(1 - s, 5 - s);
                                break;
                            case 8:
                                a = rn(1, 2);
                                break;
                            case 9:
                                a = rn(1 - s, 8 - s, 9 - s);
                                break;
                            case 10:
                                a = rn(2 - s, 3 - s);
                                break;
                            case 11:
                                a = -s;
                                this.nextAlgorithm = true;
                                break;
                        }
                        a *= 10;
                        this.amount += a;
                        return a;
                    },
                    (step, a) => {

                        let s = this.amount / 10;

                        switch (step) {
                            case 1:
                                a = rn(5, 6);
                                break;
                            case 2:
                                a = rn(2, 3);
                                break;
                            case 3:
                                a = rn(2 - s, 1 - s);
                                break;
                            case 4:
                                a = rn(6, 7);
                                break;
                            case 5:
                                a = rn(5 - s, 6 - s);
                                break;
                            case 6:
                                a = rn(2, 3);
                                break;
                            case 7:
                                a = rn(2 - s, -6);
                                break;
                            case 8:
                                a = rn(1, 5);
                                break;
                            case 9:
                                a = rn(1 - s, -1);
                                break;
                            case 10:
                                a = rn(8 - s, 9 - s, -s);
                                break;
                            case 11:
                                a = -s;
                                this.nextAlgorithm = true;
                                break;
                        }
                        a *= 10;
                        this.amount += a;
                        return a;
                    },
                    (step, a) => {

                        let s = this.amount / 10;

                        switch (step) {
                            case 1:
                                a = rn(6, 8);
                                break;
                            case 2:
                                a = rn(1 - s, 1);
                                break;
                            case 3:
                                a = rn(2 - s, -1);
                                break;
                            case 4:
                                a = rn(9 - s, 1 - s);
                                break;
                            case 5:
                                a = rn(3 - s, 4 - s);
                                break;
                            case 6:
                                a = rn(-2, -1);
                                break;
                            case 7:
                                a = rn(5, 6, 4 - s);
                                break;
                            case 8:
                                a = rn(1 - s, -s);
                                break;
                            case 9:
                                a = rn(2, 7);
                                break;
                            case 10:
                                a = rn(1 - s, 1, 9 - s);
                                break;
                            case 11:
                                a = -s;
                                this.nextAlgorithm = true;
                                break;
                        }
                        a *= 10;
                        this.amount += a;
                        return a;
                    },
                ],
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(31, 34), rand(21, 24), rand(11, 14));
                                break;
                            case 2:
                                a = rn(44 - this.amount, 84 - this.amount, 94 - this.amount);
                                break;
                            case 3:
                                a = rn(10 - this.amount, 22 - this.amount, 31 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(11, 12), rand(51, 52), rand(16, 17), rand(56, 57));
                                break;
                            case 5:
                                a = rn(10 - this.amount, 99 - this.amount);
                                break;
                            case 6:
                                a = rn(20 - this.amount, 30 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(11, 14), rand(51, 54));
                                break;
                            case 8:
                                a = rn(99 - this.amount, 20 - this.amount);
                                break;
                            case 9:
                                a = rn(70 - this.amount, 30 - this.amount, 10 - this.amount);
                                break;
                            case 10:
                                a = rand(11, 19);
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
                                a = rn(rand(56, 59), rand(66, 69), rand(76, 79));
                                break;
                            case 2:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-19, -11), rand(-59, -51));
                                break;
                            case 4:
                                a = rn(20 - this.amount, 10 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(21, 24), rand(16, 19));
                                break;
                            case 6:
                                a = rn(99 - this.amount, 99 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(-19, -16), rand(-29, -26));
                                break;
                            case 8:
                                a = rn(50 - this.amount, 10 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(11, 13), rand(21, 23));
                                break;
                            case 10:
                                a = rn(rand(15, 16), 84 - this.amount);
                                break;
                            case 11:
                                a = rn(10 - this.amount, 99 - this.amount);
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
                                a = rn(rand(11, 19), rand(21, 29));
                                break;
                            case 2:
                                a = rn(39 - this.amount, 79 - this.amount, 89 - this.amount);
                                break;
                            case 3:
                                a = rn(27 - this.amount, 18 - this.amount, 26 - this.amount, 17 - this.amount);
                                break;
                            case 4:
                                a = rn(5 - this.amount, -this.amount, 6 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(31, 33), rand(81, 83), rand(71, 73));
                                break;
                            case 6:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(21, 22), rand(11, 12));
                                break;
                            case 8:
                                a = rn(rand(55, 57), 99 - this.amount);
                                break;
                            case 9:
                                a = rn(55 - this.amount, 60 - this.amount, 50 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(21, 24), rand(11, 14));
                                break;
                            case 11:
                                a = rn(50 - this.amount, 1 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(36, 38), rand(26, 28));
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
                                a = rn(rand(41, 44), rand(91, 94));
                                break;
                            case 2:
                                a = rn(30 - this.amount, 20 - this.amount, 10 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(16, 18), rand(56, 58), rand(66, 68));
                                break;
                            case 4:
                                a = 5 - this.amount;
                                break;
                            case 5:
                                a = rn(10, 20);
                                break;
                            case 6:
                                a = rn(rand(11, 13), rand(61, 63));
                                break;
                            case 7:
                                a = rn(1 - this.amount, 5 - this.amount, -this.amount);
                                break;
                            case 8:
                                a = rn(rand(21, 23), rand(11, 13));
                                break;
                            case 9:
                                a = rn(49 - this.amount, 79 - this.amount, 89 - this.amount);
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
                                a = rn(rand(86, 88), rand(36, 38));
                                break;
                            case 2:
                                a = rn(98 - this.amount, 25 - this.amount);
                                break;
                            case 3:
                                a = rn(35 - this.amount, 5 - this.amount, 15 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(51, 54), rand(11, 14));
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
                                a = rn(rand(46, 49), rand(26, 29), rand(36, 39));
                                break;
                            case 2:
                                a = rn(-10, -20);
                                break;
                            case 3:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 4:
                                a = rand(-19, -12);
                                break;
                            case 5:
                                a = rn(20 - this.amount, 10 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(16, 19), rand(56, 59));
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
            'b': {
                1: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                if (rand(1, 2) === 1) {
                                    a = rand(10, 14);
                                } else {
                                    a = rand(20, 24);
                                }
                                break;
                            case 2:
                                a = 34 - this.amount;
                                break;
                            case 3:
                                if (rand(1, 2) === 1) {
                                    a = -20;
                                } else {
                                    a = -10;
                                }
                                break;
                            case 4:
                                if (rand(1, 2) === 1) {
                                    a = 11;
                                } else {
                                    a = 21;
                                }
                                break;
                            case 5:
                                if (rand(1, 2) === 1) {
                                    a = -25;
                                } else {
                                    a = -15;
                                }
                                break;
                            case 6:
                                a = 44 - this.amount;
                                break;
                            case 7:
                                a = 11;
                                break;
                            case 8:
                                if (rand(1, 2) === 1) {
                                    a = 24;
                                } else {
                                    a = 34;
                                }
                                break;
                            case 9:
                                if (rand(1, 2) === 1) {
                                    a = -25;
                                } else {
                                    a = -15;
                                }
                                break;
                            case 10:
                                a = 11;
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
                                a = rand(10, 13);
                                break;
                            case 2:
                                a = 24 - this.amount;
                                break;
                            case 3:
                                a = 11;
                                break;
                            case 4:
                                a = rn(-25, -15);
                                break;
                            case 5:
                                a = 41 - this.amount;
                                break;
                            case 6:
                                a = rand(10, 12);
                                break;
                            case 7:
                                a = rn(64 - this.amount, 74 - this.amount);
                                break;
                            case 8:
                                a = rn(11, 21);
                                break;
                            case 9:
                                a = 50 - this.amount;
                                break;
                            case 10:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 11:
                                a = 84 - this.amount;
                                break;
                            case 12:
                                a = 11;
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
                                a = rn(14, 24);
                                break;
                            case 2:
                                a = rn(11, 21);
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(10, 14), rand(20, 23));
                                break;
                            case 5:
                                a = 44 - this.amount;
                                break;
                            case 6:
                                a = 11;
                                break;
                            case 7:
                                a = rn(rand(10, 14), rand(20, 23));
                                break;
                            case 8:
                                a = -15;
                                break;
                            case 9:
                                a = 74 - this.amount;
                                break;
                            case 10:
                                a = 11;
                                break;
                            case 11:
                                a = rn(-25, -15);
                                break;
                            case 12:
                                a = rand(11, 19);
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
                                a = rn(84, 24, 74, 64);
                                break;
                            case 2:
                                a = rn(4 - this.amount, 14 - this.amount);
                                break;
                            case 3:
                                a = rn(21, 31, 61, 71);
                                break;
                            case 4:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 5:
                                a = rand(11, 13);
                                break;
                            case 6:
                                a = rn(84 - this.amount, 74 - this.amount, 34 - this.amount);
                                break;
                            case 7:
                                a = 11;
                                break;
                            case 8:
                                a = 20 - this.amount;
                                break;
                            case 9:
                                a = rand(11, 13);
                                break;
                            case 10:
                                a = rn(84 - this.amount, 44 - this.amount);
                                break;
                            case 11:
                                a = 11;
                                break;
                            case 12:
                                a = rand(11, 19);
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
                                a = rn(rand(10, 13), rand(20, 23));
                                break;
                            case 2:
                                a = rn(74 - this.amount, 84 - this.amount);
                                break;
                            case 3:
                                a = 11;
                                break;
                            case 4:
                                a = rn(20 - this.amount, 30 - this.amount, 50 - this.amount, 60 - this.amount);
                                break;
                            case 5:
                                a = 14;
                                break;
                            case 6:
                                a = 11;
                                break;
                            case 7:
                                a = rn(10 - this.amount, 20 - this.amount, -this.amount);
                                break;
                            case 8:
                                a = rn(54, 23);
                                break;
                            case 9:
                                a = 11;
                                break;
                            case 10:
                                a = rn(10 - this.amount, 5 - this.amount, 15 - this.amount, -this.amount);
                                break;
                            case 11:
                                a = rn(11, 14);
                                break;
                            case 12:
                                a = rn(49 - this.amount, 39 - this.amount, 89 - this.amount);
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },

                ],
                2: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                if (rand(1, 2) === 1) {
                                    a = rand(10, 12);
                                } else {
                                    a = rand(20, 22);
                                }
                                break;
                            case 2:
                                a = 33 - this.amount;
                                break;
                            case 3:
                                a = 12;
                                break;
                            case 4:
                                if (rand(1, 2) === 1) {
                                    a = -25;
                                } else {
                                    a = -15;
                                }
                                break;
                            case 5:
                                a = rand(13, 14);
                                break;
                            case 6:
                                a = 52;
                                break;
                            case 7:
                                a = 50 - this.amount;
                                break;
                            case 8:
                                if (rand(1, 2) === 1) {
                                    a = rand(23, 24);
                                } else {
                                    a = rand(33, 34);
                                }
                                break;
                            case 9:
                                a = 12;
                                break;
                            case 10:
                                if (rand(1, 2) === 1) {
                                    a = -25;
                                } else {
                                    a = -15;
                                }
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
                                if (rand(1, 2) === 1) {
                                    a = rand(13, 14);
                                } else {
                                    a = 23;
                                }
                                break;
                            case 2:
                                a = 22;
                                break;
                            case 3:
                                a = rand(20, 23);
                                break;
                            case 4:
                                if (rand(1, 2) === 1) {
                                    a = 79 - this.amount;
                                } else {
                                    a = 89 - this.amount;
                                }
                                break;
                            case 5:
                                a = -55;
                                break;
                            case 6:
                                if (rand(1, 2) === 1) {
                                    a = 12;
                                } else {
                                    a = 22;
                                }
                                break;
                            case 7:
                                a = rand(20, 22);
                                break;
                            case 8:
                                if (rand(1, 2) === 1) {
                                    a = 89 - this.amount;
                                } else {
                                    a = 99 - this.amount;
                                }
                                break;
                            case 9:
                                if (rand(1, 2) === 1) {
                                    a = -36;
                                } else {
                                    a = -26;
                                }
                                break;
                            case 10:
                                if (rand(1, 2) === 1) {
                                    a = 12;
                                } else {
                                    a = 22;
                                }
                                break;
                            case 11:
                                if (rand(1, 2) === 1) {
                                    a = -10;
                                } else {
                                    a = -15;
                                }
                                break;
                            case 12:
                                a = -50;
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
                                if (rand(1, 2) === 1) {
                                    a = rand(33, 34);
                                } else {
                                    a = rand(43, 44);
                                }
                                break;
                            case 2:
                                a = 20;
                                break;
                            case 3:
                                if (rand(1, 2) === 1) {
                                    a = 12;
                                } else {
                                    a = 22;
                                }
                                break;
                            case 4:
                                if (rand(1, 2) === 1) {
                                    a = -55;
                                } else {
                                    a = -65;
                                }
                                break;
                            case 5:
                                a = 44 - this.amount;
                                break;
                            case 6:
                                a = 22;
                                break;
                            case 7:
                                a = rand(20, 22);
                                break;
                            case 8:
                                a = 30 - this.amount;
                                break;
                            case 9:
                                a = rand(21, 24);
                                break;
                            case 10:
                                if (rand(1, 2) === 1) {
                                    a = 74 - this.amount;
                                } else {
                                    a = 84 - this.amount;
                                }
                                break;
                            case 11:
                                a = 12;
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
                                a = rn(63, 23, 73, 74);
                                break;
                            case 2:
                                a = rn(12, 22);
                                break;
                            case 3:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 4:
                                a = rand(10, 13);
                                break;
                            case 5:
                                a = rn(33 - this.amount, 74 - this.amount, 73 - this.amount);
                                break;
                            case 6:
                                a = rn(22, 12);
                                break;
                            case 7:
                                a = rn(5 - this.amount, -this.amount);
                                break;
                            case 8:
                                a = rn(rand(21, 24), rand(11, 14));
                                break;
                            case 9:
                                a = rn(99 - this.amount, 89 - this.amount, 79 - this.amount);
                                break;
                            case 10:
                                a = rn(-56, -65, -55, -66);
                                break;
                            case 11:
                                a = 22;
                                break;
                            case 12:
                                a = 22;
                                break;
                            case 13:
                                a = rn(99 - this.amount, 98 - this.amount);
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
                                a = rn(13, 14, 23, 24);
                                break;
                            case 2:
                                a = rn(52, 62, 72);
                                break;
                            case 3:
                                a = rn(-55, -65);
                                break;
                            case 4:
                                a = rn(22, 33);
                                break;
                            case 5:
                                a = 22;
                                break;
                            case 6:
                                a = rn(99 - this.amount, 98 - this.amount, 97 - this.amount);
                                break;
                            case 7:
                                a = rn(42 - this.amount, 32 - this.amount, 41 - this.amount, 31 - this.amount);
                                break;
                            case 8:
                                a = rn(21, 22);
                                break;
                            case 9:
                                a = rn(74 - this.amount, 84 - this.amount, 3 - this.amount);
                                break;
                            case 10:
                                a = 12;
                                break;
                            case 11:
                                a = rn(75 - this.amount, 65 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(12, 14), rand(22, 24));
                                break;
                            case 13:
                                a = rn(10 - this.amount, 11 - this.amount);
                                break;
                            case 14:
                                a = rn(rand(31, 33), rand(51, 53));
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
                3: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(21, 22), rand(31, 32));
                                break;
                            case 2:
                                a = rn(31, 32);
                                break;
                            case 3:
                                a = rn(23, 13);
                                break;
                            case 4:
                                a = rn(-15, -55);
                                break;
                            case 5:
                                a = 12;
                                break;
                            case 6:
                                a = 13;
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
                                a = rn(rand(31, 32), rand(41, 42));
                                break;
                            case 2:
                                a = rn(31, 32);
                                break;
                            case 3:
                                a = rn(-60, -50);
                                break;
                            case 4:
                                a = rn(13, 23);
                                break;
                            case 5:
                                a = rand(30, 34);
                                break;
                            case 6:
                                a = 99 - this.amount;
                                break;
                            case 7:
                                a = rn(-45, -35);
                                break;
                            case 8:
                                a = rn(13, 23, 33);
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
                                a = rand(12, 14);
                                break;
                            case 2:
                                a = rn(23, 33);
                                break;
                            case 3:
                                a = rand(30, 32);
                                break;
                            case 4:
                                a = 50 - this.amount;
                                break;
                            case 5:
                                a = rand(22, 24);
                                break;
                            case 6:
                                a = 23;
                                break;
                            case 7:
                                a = rn(60 - this.amount, 70 - this.amount);
                                break;
                            case 8:
                                a = rand(12, 14);
                                break;
                            case 9:
                                a = 13;
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
                                a = rn(rand(53, 54), rand(63, 64));
                                break;
                            case 2:
                                a = rn(13, 23);
                                break;
                            case 3:
                                a = rn(11 - this.amount, 1 - this.amount);
                                break;
                            case 4:
                                a = rn(22, 23, 32, 33);
                                break;
                            case 5:
                                a = 33;
                                break;
                            case 6:
                                a = rn(88 - this.amount, 98 - this.amount, 87 - this.amount, 97 - this.amount);
                                break;
                            case 7:
                                a = rn(22 - this.amount, 32 - this.amount);
                                break;
                            case 8:
                                a = rand(31, 32);
                                break;
                            case 9:
                                a = rn(23, 33);
                                break;
                            case 10:
                                a = rn(50 - this.amount, 61 - this.amount, 11 - this.amount, 10 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(11, 13), rand(21, 23));
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
                                a = rn(33, 34, 43, 44);
                                break;
                            case 2:
                                a = 33;
                                break;
                            case 3:
                                a = rn(-16, -15);
                                break;
                            case 4:
                                a = rn(73 - this.amount, 83 - this.amount, 84 - this.amount);
                                break;
                            case 5:
                                a = 13;
                                break;
                            case 6:
                                a = rn(21 - this.amount, 31 - this.amount, 20 - this.amount, 30 - this.amount);
                                break;
                            case 7:
                                a = rn(32, 33);
                                break;
                            case 8:
                                a = rand(23, 13);
                                break;
                            case 9:
                                a = rn(10 - this.amount, 50 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(22, 24), rand(12, 14));
                                break;
                            case 11:
                                a = 13;
                                break;
                            case 12:
                                a = rn(97 - this.amount, 99 - this.amount, 98 - this.amount);
                                break;
                            case 13:
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
                                a = rand(21, 24);
                                break;
                            case 2:
                                a = rn(40, 44);
                                break;
                            case 3:
                                a = 50 - this.amount;
                                break;
                            case 4:
                                a = rand(11, 13);
                                break;
                            case 5:
                                a = rn(14, 24, 34);
                                break;
                            case 6:
                                a = rn(-50, -60, -70);
                                break;
                            case 7:
                                a = rn(40, 41, 42);
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
                                a = rand(12, 14);
                                break;
                            case 2:
                                a = rn(14, 24, 34);
                                break;
                            case 3:
                                a = rand(-16, -15);
                                break;
                            case 4:
                                a = 41;
                                break;
                            case 5:
                                a = rn(84 - this.amount, 94 - this.amount);
                                break;
                            case 6:
                                a = rand(-63, -60);
                                break;
                            case 7:
                                a = rn(14, 44);
                                break;
                            case 8:
                                a = rn(89 - this.amount, 99 - this.amount);
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
                                a = rand(31, 33);
                                break;
                            case 2:
                                a = 14;
                                break;
                            case 3:
                                a = rn(30 - this.amount, 20 - this.amount);
                                break;
                            case 4:
                                a = rand(41, 44);
                                break;
                            case 5:
                                a = 50 - this.amount;
                                break;
                            case 6:
                                a = rand(11, 14);
                                break;
                            case 7:
                                a = rn(24, 34, 14);
                                break;
                            case 8:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 9:
                                a = rand(45, 49);
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
                                a = rn(rand(32, 34), rand(22, 24));
                                break;
                            case 2:
                                a = rn(14, 44);
                                break;
                            case 3:
                                a = rn(-15, 11 - this.amount);
                                break;
                            case 4:
                                a = 44;
                                break;
                            case 5:
                                a = 15 - this.amount;
                                break;
                            case 6:
                                a = rn(23, 24, 33, 34);
                                break;
                            case 7:
                                a = rn(12 - this.amount, 23 - this.amount, 11 - this.amount, 22 - this.amount);
                                break;
                            case 8:
                                a = rn(14, 24);
                                break;
                            case 9:
                                a = rand(41, 43);
                                break;
                            case 10:
                                a = rn(15 - this.amount, 50 - this.amount, -15, -55);
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
                                a = rn(rand(12, 14), rand(22, 24));
                                break;
                            case 2:
                                a = rn(54, 64, 74);
                                break;
                            case 3:
                                a = rn(15 - this.amount, 5 - this.amount, 16 - this.amount, 6 - this.amount);
                                break;
                            case 4:
                                a = rn(21, 22, 11, 12);
                                break;
                            case 5:
                                a = rn(40, 41);
                                break;
                            case 6:
                                a = rn(88 - this.amount, 89 - this.amount, 98 - this.amount, 99 - this.amount);
                                break;
                            case 7:
                                a = rn(23 - this.amount, 12 - this.amount, 13 - this.amount, 24 - this.amount);
                                break;
                            case 8:
                                a = 14;
                                break;
                            case 9:
                                a = rn(40, 41);
                                break;
                            case 10:
                                a = rn(-15, 5 - this.amount, -50);
                                break;
                            case 11:
                                a = rn(89, 99 - this.amount, 79 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(-14, -11), rand(-29, -26));
                                break;
                            case 13:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                ],
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 2:
                                a = rn(35 - this.amount, 45 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(31, 34), rand(41, 44));
                                break;
                            case 4:
                                a = rn(50 - this.amount, 50 - this.amount);
                                break;
                            case 5:
                                a = rand(11, 14);
                                break;
                            case 6:
                                a = rn(85 - this.amount, 95 - this.amount);
                                break;
                            case 7:
                                a = rn(10 - this.amount, 30 - this.amount, 40 - this.amount);
                                break;
                            case 8:
                                a = rn(53 - this.amount, 51 - this.amount, 52 - this.amount);
                                break;
                            case 9:
                                a = rn(31, 21);
                                break;
                            case 10:
                                a = rn(10 - this.amount, 20 - this.amount, 50 - this.amount);
                                break;
                            case 11:
                                a = rand(11, 19);
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
                                a = rn(rand(31, 34), rand(41, 44));
                                break;
                            case 2:
                                a = rn(35, 45);
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = rand(11, 14);
                                break;
                            case 5:
                                a = 35 - this.amount;
                                break;
                            case 6:
                                a = rn(rand(31, 34), rand(41, 44));
                                break;
                            case 7:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 8:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 9:
                                a = rand(11, 14);
                                break;
                            case 10:
                                a = rn(40, 30, 20);
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
                                a = rn(rand(51, 54), rand(61, 64));
                                break;
                            case 2:
                                a = rn(10, 20);
                                break;
                            case 3:
                                a = 95 - this.amount;
                                break;
                            case 4:
                                a = 10 - this.amount;
                                break;
                            case 5:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 6:
                                a = 45 - this.amount;
                                break;
                            case 7:
                                a = rn(rand(31, 33), rand(41, 43));
                                break;
                            case 8:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 10:
                                a = 59 - this.amount;
                                break;
                            case 11:
                                a = 9 - this.amount;
                                break;
                            case 12:
                                a = rn(20, 30, 40);
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
                                a = rn(25, 35, 45);
                                break;
                            case 2:
                                a = rn(rand(31, 34), rand(41, 44));
                                break;
                            case 3:
                                a = -this.amount;
                                break;
                            case 4:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 5:
                                a = rn(35 - this.amount, 45 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(21, 24), rand(31, 34));
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
                                a = rand(41, 44);
                                break;
                            case 2:
                                a = rn(15, 25, 35, 45);
                                break;
                            case 3:
                                a = 99 - this.amount;
                                break;
                            case 4:
                                a = rn(-75, -85, -95);
                                break;
                            case 5:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 6:
                                a = -this.amount;
                                break;
                            case 7:
                                a = rn(rand(51, 54), rand(61, 64));
                                break;
                            case 8:
                                a = rn(75 - this.amount, 85 - this.amount);
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
                                a = rn(rand(71, 79), rand(81, 89));
                                break;
                            case 2:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 4:
                                a = rn(55 - this.amount, 65 - this.amount);
                                break;
                            case 5:
                                a = -this.amount;
                                break;
                            case 6:
                                a = rn(rand(31, 34), rand(41, 44));
                                break;
                            case 7:
                                a = rn(35, 45);
                                break;
                            case 8:
                                a = rn(10 - this.amount, 50 - this.amount);
                                break;
                            case 9:
                                a = rand(11, 14);
                                break;
                            case 10:
                                a = rn(75 - this.amount, 85 - this.amount);
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
                                a = rn(rand(26, 29), rand(36, 39));
                                break;
                            case 2:
                                a = rn(-15, -25);
                                break;
                            case 3:
                                a = rn(45 - this.amount, 55 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 5:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 6:
                                a = rn(-35, -25);
                                break;
                            case 7:
                                a = rn(11, 14);
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
            'r': {
                1: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(19, 29);
                                break;
                            case 2:
                                a = rn(11, 51, 61);
                                break;
                            case 3:
                                a = rn(20 - this.amount, 10 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 5:
                                a = rn(1 - this.amount, 11 - this.amount);
                                break;
                            case 6:
                                a = rn(18, 28);
                                break;
                            case 7:
                                a = 51;
                                break;
                            case 8:
                                a = rn(50 - this.amount, 60 - this.amount);
                                break;
                            case 9:
                                a = rn(19, 29);
                                break;
                            case 10:
                                a = rn(9 - this.amount, 59 - this.amount);
                                break;
                            case 11:
                                a = rn(31, 21, 11);
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
                                a = rn(rand(10, 18), rand(20, 28));
                                break;
                            case 2:
                                a = 79 - this.amount;
                                break;
                            case 3:
                                a = 11;
                                break;
                            case 4:
                                a = rn(50 - this.amount, 60 - this.amount);
                                break;
                            case 5:
                                a = 19;
                                break;
                            case 6:
                                a = 11;
                                break;
                            case 7:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 8:
                                a = rand(11, 14);
                                break;
                            case 9:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 10:
                                a = rn(19 - this.amount, 21 - this.amount, 56 - this.amount, 69 - this.amount);
                                break;
                            case 11:
                                a = rn(21, 11);
                                break;
                            case 12:
                                a = rand(11, 13);
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
                                a = rn(29, 69);
                                break;
                            case 2:
                                a = 11;
                                break;
                            case 3:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 4:
                                a = rand(11, 14);
                                break;
                            case 5:
                                a = rn(39 - this.amount, 89 - this.amount);
                                break;
                            case 6:
                                a = rn(9 - this.amount, 19 - this.amount);
                                break;
                            case 7:
                                a = rn(21, 71, 51, 61);
                                break;
                            case 8:
                                a = rn(-this.amount, 10 - this.amount);
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
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(31, 38), rand(61, 68), rand(71, 78));
                                break;
                            case 2:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 3:
                                a = rn(-30, 19 - this.amount);
                                break;
                            case 4:
                                a = rn(21, 11);
                                break;
                            case 5:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 6:
                                a = rn(19, 59);
                                break;
                            case 7:
                                a = 11;
                                break;
                            case 8:
                                a = 99 - this.amount;
                                break;
                            case 9:
                                a = rn(-70, -80, -90, -20);
                                break;
                            case 10:
                                a = 11;
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
                                a = rn(rand(25, 28), rand(15, 18));
                                break;
                            case 2:
                                a = rn(79 - this.amount, 89 - this.amount, 99 - this.amount);
                                break;
                            case 3:
                                a = rn(59 - this.amount, 69 - this.amount);
                                break;
                            case 4:
                                a = rn(21, 11);
                                break;
                            case 5:
                                a = rn(-60, -70);
                                break;
                            case 6:
                                a = rand(51, 54);
                                break;
                            case 7:
                                a = 99 - this.amount;
                                break;
                            case 8:
                                a = rn(-40, -30);
                                break;
                            case 9:
                                a = rn(21, 11);
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
                                a = 19;
                                break;
                            case 2:
                                a = 21;
                                break;
                            case 3:
                                a = -this.amount;
                                break;
                            case 4:
                                a = 29;
                                break;
                            case 5:
                                a = 11;
                                break;
                            case 6:
                                a = -this.amount;
                                break;
                            case 7:
                                a = 39;
                                break;
                            case 8:
                                a = 51;
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
                                a = rn(rand(18, 19), rand(28, 29));
                                break;
                            case 2:
                                a = rn(12, 52, 62);
                                break;
                            case 3:
                                a = rn(-this.amount, 10 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(58, 59), rand(68, 69));
                                break;
                            case 5:
                                a = 12;
                                break;
                            case 6:
                                a = 50 - this.amount;
                                break;
                            case 7:
                                a = rn(rand(13, 14), 19);
                                break;
                            case 8:
                                a = rn(79 - this.amount, 10 - this.amount, 12 - this.amount);
                                break;
                            case 9:
                                a = rn(12, 10);
                                break;
                            case 10:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 11:
                                a = rn(rand(31, 34), rand(11, 14));
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
                                a = rn(rand(10, 18), rand(20, 28));
                                break;
                            case 2:
                                a = rn(79 - this.amount, 79 - this.amount);
                                break;
                            case 3:
                                a = 12;
                                break;
                            case 4:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 5:
                                a = rand(18, 19);
                                break;
                            case 6:
                                a = rn(52, 62);
                                break;
                            case 7:
                                a = rn(50 - this.amount, 60 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(28, 29), rand(38, 39));
                                break;
                            case 9:
                                a = rn(8 - this.amount, 18 - this.amount);
                                break;
                            case 10:
                                a = rn(22, 12, 72, 62);
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
                                a = rn(rand(28, 29), rand(68, 69));
                                break;
                            case 2:
                                a = 12;
                                break;
                            case 3:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 4:
                                a = rand(15, 18);
                                break;
                            case 5:
                                a = rn(39 - this.amount, 89 - this.amount);
                                break;
                            case 6:
                                a = rn(8 - this.amount, 18 - this.amount);
                                break;
                            case 7:
                                a = rn(22, 72, 52, 62);
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
                                a = rn(rand(31, 38), rand(61, 68), rand(71, 78));
                                break;
                            case 2:
                                a = rn(99 - this.amount, 88 - this.amount);
                                break;
                            case 3:
                                a = rn(-30, 18 - this.amount);
                                break;
                            case 4:
                                a = rn(22, 12);
                                break;
                            case 5:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 6:
                                a = rn(19, 59, 18, 58);
                                break;
                            case 7:
                                a = 12;
                                break;
                            case 8:
                                a = 99 - this.amount;
                                break;
                            case 9:
                                a = rn(-41, -80, -91, -30);
                                break;
                            case 10:
                                a = rn(12, 22);
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
                                a = rn(rand(25, 28), rand(15, 18));
                                break;
                            case 2:
                                a = rn(79 - this.amount, 89 - this.amount, 99 - this.amount);
                                break;
                            case 3:
                                a = rn(58 - this.amount, 68 - this.amount);
                                break;
                            case 4:
                                a = rn(22, 12);
                                break;
                            case 5:
                                a = rn(-60, -70);
                                break;
                            case 6:
                                a = rand(51, 53);
                                break;
                            case 7:
                                a = 99 - this.amount;
                                break;
                            case 8:
                                a = rn(-40, -30);
                                break;
                            case 9:
                                a = rn(22, 12);
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
                3: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(17, 19), rand(27, 29));
                                break;
                            case 2:
                                a = rn(13, 53, 63);
                                break;
                            case 3:
                                a = rn(-this.amount, 10 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(57, 59), rand(67, 69));
                                break;
                            case 5:
                                a = 13;
                                break;
                            case 6:
                                a = 50 - this.amount;
                                break;
                            case 7:
                                a = rn(rand(13, 14), rand(17, 18));
                                break;
                            case 8:
                                a = rn(79 - this.amount, 10 - this.amount, 13 - this.amount);
                                break;
                            case 9:
                                a = rn(13, 10);
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
                                a = rn(rand(10, 18), rand(20, 28));
                                break;
                            case 2:
                                a = rn(79 - this.amount, 79 - this.amount);
                                break;
                            case 3:
                                a = 13;
                                break;
                            case 4:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 5:
                                a = rand(17, 18);
                                break;
                            case 6:
                                a = rn(53, 63);
                                break;
                            case 7:
                                a = rn(50 - this.amount, 60 - this.amount);
                                break;
                            case 8:
                                a = rand(28, 29);
                                break;
                            case 9:
                                a = rn(7 - this.amount, 8 - this.amount);
                                break;
                            case 10:
                                a = rn(23, 13, 73, 63);
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
                                a = rn(rand(28, 29), rand(68, 69));
                                break;
                            case 2:
                                a = 13;
                                break;
                            case 3:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 4:
                                a = rand(15, 19);
                                break;
                            case 5:
                                a = rn(39 - this.amount, 89 - this.amount);
                                break;
                            case 6:
                                a = rn(8 - this.amount, 18 - this.amount);
                                break;
                            case 7:
                                a = rn(23, 73, 53, 63);
                                break;
                            case 8:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 9:
                                a = rn(17, 18);
                                break;
                            case 10:
                                a = rn(53, 63);
                                break;
                            case 11:
                                a = rn(50 - this.amount, 60 - this.amount);
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
                                a = rn(rand(31, 38), rand(61, 68), rand(71, 78));
                                break;
                            case 2:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 3:
                                a = rn(-31, 18 - this.amount);
                                break;
                            case 4:
                                a = rn(23, 13);
                                break;
                            case 5:
                                a = rn(10 - this.amount, -this.amount, 1 - this.amount);
                                break;
                            case 6:
                                a = rn(17, 57, 18, 58);
                                break;
                            case 7:
                                a = 13;
                                break;
                            case 8:
                                a = 99 - this.amount;
                                break;
                            case 9:
                                a = rn(-41, -80, -92, -32);
                                break;
                            case 10:
                                a = rn(13, 23);
                                break;
                            case 11:
                                a = rn(-this.amount, 10 - this.amount);
                                break;
                            case 12:
                                a = rand(21, 24);
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
                                a = rn(rand(25, 28), rand(15, 18));
                                break;
                            case 2:
                                a = rn(79 - this.amount, 89 - this.amount, 99 - this.amount);
                                break;
                            case 3:
                                a = rn(58 - this.amount, 68 - this.amount);
                                break;
                            case 4:
                                a = rn(23, 13);
                                break;
                            case 5:
                                a = rn(-60, -70);
                                break;
                            case 6:
                                a = rand(51, 53);
                                break;
                            case 7:
                                a = 99 - this.amount;
                                break;
                            case 8:
                                a = rn(-40, -30);
                                break;
                            case 9:
                                a = rn(23, 13);
                                break;
                            case 10:
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
                                a = rn(rand(16, 19), rand(26, 29));
                                break;
                            case 2:
                                a = rn(14, 54, 64);
                                break;
                            case 3:
                                a = rn(-this.amount, 10 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(56, 59), rand(66, 69));
                                break;
                            case 5:
                                a = 14;
                                break;
                            case 6:
                                a = 50 - this.amount;
                                break;
                            case 7:
                                a = rn(rand(11, 14), rand(16, 18));
                                break;
                            case 8:
                                a = rn(79 - this.amount, 10 - this.amount, 1 - this.amount);
                                break;
                            case 9:
                                a = rn(14, 10);
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
                                a = rn(rand(16, 18), rand(26, 28));
                                break;
                            case 2:
                                a = rn(79 - this.amount, 79 - this.amount);
                                break;
                            case 3:
                                a = 14;
                                break;
                            case 4:
                                a = rn(10 - this.amount, -this.amount, 1 - this.amount);
                                break;
                            case 5:
                                a = rand(16, 18);
                                break;
                            case 6:
                                a = rn(54, 64);
                                break;
                            case 7:
                                a = rn(50 - this.amount, 60 - this.amount);
                                break;
                            case 8:
                                a = rn(28, 29, 18, 19);
                                break;
                            case 9:
                                a = rn(6 - this.amount, 17 - this.amount);
                                break;
                            case 10:
                                a = rn(24, 14, 74, 64);
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
                                a = rn(rand(28, 29), rand(68, 69));
                                break;
                            case 2:
                                a = 14;
                                break;
                            case 3:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 4:
                                a = rand(16, 19);
                                break;
                            case 5:
                                a = rn(39 - this.amount, 89 - this.amount);
                                break;
                            case 6:
                                a = rn(8 - this.amount, 17 - this.amount);
                                break;
                            case 7:
                                a = rn(24, 74, 54, 64);
                                break;
                            case 8:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 9:
                                a = rn(16, 18);
                                break;
                            case 10:
                                a = rn(54, 64);
                                break;
                            case 11:
                                a = rn(50 - this.amount, 60 - this.amount);
                                break;
                            case 12:
                                a = rn(28, 29, 18, 19);
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
                                a = rn(rand(31, 38), rand(61, 68), rand(71, 78));
                                break;
                            case 2:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 3:
                                a = rn(-32, 18 - this.amount);
                                break;
                            case 4:
                                a = rn(24, 14);
                                break;
                            case 5:
                                a = rn(10 - this.amount, -this.amount, 1 - this.amount);
                                break;
                            case 6:
                                a = rn(17, 57, 18, 58);
                                break;
                            case 7:
                                a = 14;
                                break;
                            case 8:
                                a = 99 - this.amount;
                                break;
                            case 9:
                                a = rn(-41, -80, -92, -32);
                                break;
                            case 10:
                                a = rn(14, 24);
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
                                a = rn(rand(25, 28), rand(15, 18));
                                break;
                            case 2:
                                a = rn(79 - this.amount, 89 - this.amount, 99 - this.amount);
                                break;
                            case 3:
                                a = rn(57 - this.amount, 68 - this.amount);
                                break;
                            case 4:
                                a = rn(24, 14);
                                break;
                            case 5:
                                a = rn(-60, -70);
                                break;
                            case 6:
                                a = rand(51, 53);
                                break;
                            case 7:
                                a = 99 - this.amount;
                                break;
                            case 8:
                                a = rn(-40, -30);
                                break;
                            case 9:
                                a = rn(24, 14);
                                break;
                            case 10:
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
                                a = rn(rand(16, 19), rand(26, 29));
                                break;
                            case 2:
                                a = rn(15, 55, 65);
                                break;
                            case 3:
                                a = rn(1 - this.amount, 10 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(56, 59), rand(66, 69));
                                break;
                            case 5:
                                a = 15;
                                break;
                            case 6:
                                a = 50 - this.amount;
                                break;
                            case 7:
                                a = rn(rand(11, 14), rand(16, 19));
                                break;
                            case 8:
                                a = rn(79 - this.amount, 10 - this.amount, 11 - this.amount);
                                break;
                            case 9:
                                a = rn(15, 10);
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
                                a = rn(rand(10, 18), rand(20, 29));
                                break;
                            case 2:
                                a = rn(79 - this.amount, 79 - this.amount);
                                break;
                            case 3:
                                a = 15;
                                break;
                            case 4:
                                a = rn(10 - this.amount, -this.amount, 1 - this.amount);
                                break;
                            case 5:
                                a = rand(16, 18);
                                break;
                            case 6:
                                a = rn(55, 65);
                                break;
                            case 7:
                                a = rn(50 - this.amount, 60 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(25, 28), rand(15, 18));
                                break;
                            case 9:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 10:
                                a = rn(25, 15, 75, 65);
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
                                a = rn(rand(26, 29), rand(65, 69));
                                break;
                            case 2:
                                a = 15;
                                break;
                            case 3:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 4:
                                a = rand(16, 18);
                                break;
                            case 5:
                                a = rn(38 - this.amount, 88 - this.amount);
                                break;
                            case 6:
                                a = rn(7 - this.amount, 16 - this.amount);
                                break;
                            case 7:
                                a = rn(25, 75, 55, 65);
                                break;
                            case 8:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 9:
                                a = rn(rand(15, 18), rand(55, 58));
                                break;
                            case 10:
                                a = 15;
                                break;
                            case 11:
                                a = 99 - this.amount;
                                break;
                            case 12:
                                a = rn(-38, -15);
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
                                a = rn(rand(31, 38), rand(61, 68), rand(71, 78));
                                break;
                            case 2:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-33, -31), 17 - this.amount);
                                break;
                            case 4:
                                a = rn(25, 15);
                                break;
                            case 5:
                                a = rn(10 - this.amount, -this.amount, 1 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(15, 18), rand(55, 58));
                                break;
                            case 7:
                                a = 15;
                                break;
                            case 8:
                                a = 99 - this.amount;
                                break;
                            case 9:
                                a = rn(-41, -80, -92, -32);
                                break;
                            case 10:
                                a = rn(15, 25);
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
                                a = rn(rand(25, 28), rand(15, 18));
                                break;
                            case 2:
                                a = rn(79 - this.amount, 89 - this.amount, 99 - this.amount);
                                break;
                            case 3:
                                a = rn(57 - this.amount, 68 - this.amount);
                                break;
                            case 4:
                                a = rn(25, 15);
                                break;
                            case 5:
                                a = rn(-60, -70);
                                break;
                            case 6:
                                a = rand(51, 53);
                                break;
                            case 7:
                                a = 99 - this.amount;
                                break;
                            case 8:
                                a = rn(-40, -30);
                                break;
                            case 9:
                                a = rn(25, 15);
                                break;
                            case 10:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 11:
                                a = rand(51, 59);
                                break;
                            case 12:
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
                                a = rn(14, 24, 19, 29);
                                break;
                            case 2:
                                a = rn(16, 56, 66);
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = rand(11, 14);
                                break;
                            case 5:
                                a = rn(74 - this.amount, 79 - this.amount);
                                break;
                            case 6:
                                a = 16;
                                break;
                            case 7:
                                a = rn(50 - this.amount, -this.amount);
                                break;
                            case 8:
                                a = rn(24, 29, 14);
                                break;
                            case 9:
                                a = 16;
                                break;
                            case 10:
                                a = rand(51, 56);
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
                                a = rn(rand(10, 18), rand(20, 29));
                                break;
                            case 2:
                                a = rn(79 - this.amount, 79 - this.amount);
                                break;
                            case 3:
                                a = 16;
                                break;
                            case 4:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 5:
                                a = rand(14, 24);
                                break;
                            case 6:
                                a = rn(56, 16);
                                break;
                            case 7:
                                a = rn(-this.amount, 10 - this.amount);
                                break;
                            case 8:
                                a = rn(14, 19);
                                break;
                            case 9:
                                a = rn(16, 56);
                                break;
                            case 10:
                                a = rn(20 - this.amount, 10 - this.amount);
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
                                a = rn(rand(20, 24), rand(60, 64));
                                break;
                            case 2:
                                a = rn(74 - this.amount, 84 - this.amount);
                                break;
                            case 3:
                                a = 4 - this.amount;
                                break;
                            case 4:
                                a = rn(26, 16, 56, 66);
                                break;
                            case 5:
                                a = rn(rand(17, 18), rand(11, 14));
                                break;
                            case 6:
                                a = 99 - this.amount;
                                break;
                            case 7:
                                a = rn(14 - this.amount, 19 - this.amount, 24 - this.amount);
                                break;
                            case 8:
                                a = rn(16, 56);
                                break;
                            case 9:
                                a = rn(11, 14);
                                break;
                            case 10:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 11:
                                a = rand(11, 18);
                                break;
                            case 12:
                                a = rn(50, 10);
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
                                a = rn(rand(31, 38), rand(61, 68), rand(71, 78));
                                break;
                            case 2:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 3:
                                a = rn(9 - this.amount, 4 - this.amount);
                                break;
                            case 4:
                                a = rn(26, 76, 86);
                                break;
                            case 5:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 6:
                                a = rn(14, 19);
                                break;
                            case 7:
                                a = rn(16, 56);
                                break;
                            case 8:
                                a = rn(20 - this.amount, 10 - this.amount, -this.amount);
                                break;
                            case 9:
                                a = rn(rand(21, 26), rand(51, 56));
                                break;
                            case 10:
                                a = 99 - this.amount;
                                break;
                            case 11:
                                a = rn(-37, -17);
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
                                a = rn(14, 24, 19, 29);
                                break;
                            case 2:
                                a = rn(16, 56);
                                break;
                            case 3:
                                a = 99 - this.amount;
                                break;
                            case 4:
                                a = rn(9 - this.amount, 19 - this.amount, 4 - this.amount);
                                break;
                            case 5:
                                a = rn(66, 76);
                                break;
                            case 6:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 7:
                                a = rand(11, 13);
                                break;
                            case 8:
                                a = 74 - this.amount;
                                break;
                            case 9:
                                a = rn(16, rand(-23, -21));
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
                7: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(13, 14), rand(18, 19), rand(23, 24));
                                break;
                            case 2:
                                a = rn(17, 57, 67);
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = rand(11, 14);
                                break;
                            case 5:
                                a = rn(74 - this.amount, 79 - this.amount);
                                break;
                            case 6:
                                a = 17;
                                break;
                            case 7:
                                a = rn(50 - this.amount, -this.amount);
                                break;
                            case 8:
                                a = rn(rand(23, 24), rand(28, 29), rand(13, 14));
                                break;
                            case 9:
                                a = 17;
                                break;
                            case 10:
                                a = rn(20 - this.amount, 10 - this.amount);
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
                                a = rn(rand(10, 18), rand(20, 29));
                                break;
                            case 2:
                                a = rn(79 - this.amount, 79 - this.amount);
                                break;
                            case 3:
                                a = 17;
                                break;
                            case 4:
                                a = rn(10 - this.amount, -this.amount, 5 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(23, 24), rand(13, 14));
                                break;
                            case 6:
                                a = rn(57, 17);
                                break;
                            case 7:
                                a = rn(-this.amount, 10 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(13, 14), rand(18, 19));
                                break;
                            case 9:
                                a = rn(17, 57);
                                break;
                            case 10:
                                a = rn(20 - this.amount, 10 - this.amount);
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
                                a = rn(rand(20, 24), rand(60, 64));
                                break;
                            case 2:
                                a = rn(74 - this.amount, 84 - this.amount);
                                break;
                            case 3:
                                a = rn(4 - this.amount, 3 - this.amount);
                                break;
                            case 4:
                                a = rn(27, 17, 57, 67);
                                break;
                            case 5:
                                a = rn(rand(15, 16), rand(11, 12));
                                break;
                            case 6:
                                a = rn(99 - this.amount, 99 - this.amount);
                                break;
                            case 7:
                                a = rn(14 - this.amount, 19 - this.amount, 24 - this.amount);
                                break;
                            case 8:
                                a = rn(17, 57);
                                break;
                            case 9:
                                a = rn(11, 13);
                                break;
                            case 10:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 11:
                                a = rand(11, 17);
                                break;
                            case 12:
                                a = rn(rand(50, 52), rand(10, 12));
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
                                a = rn(rand(31, 38), rand(61, 68), rand(71, 78));
                                break;
                            case 2:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 3:
                                a = rn(8 - this.amount, 3 - this.amount);
                                break;
                            case 4:
                                a = rn(37, 77, 87);
                                break;
                            case 5:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 6:
                                a = rn(14, 19);
                                break;
                            case 7:
                                a = rn(17, 57);
                                break;
                            case 8:
                                a = rn(20 - this.amount, 10 - this.amount, -this.amount);
                                break;
                            case 9:
                                a = rn(rand(21, 26), rand(51, 56));
                                break;
                            case 10:
                                a = rn(98 - this.amount, 99 - this.amount);
                                break;
                            case 11:
                                a = rn(-37, -17);
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
                                a = rn(rand(13, 14), rand(23, 24), 18, 29);
                                break;
                            case 2:
                                a = rn(17, 57);
                                break;
                            case 3:
                                a = rn(99 - this.amount, 98 - this.amount);
                                break;
                            case 4:
                                a = rn(8 - this.amount, 18 - this.amount, 3 - this.amount);
                                break;
                            case 5:
                                a = rn(67, 77);
                                break;
                            case 6:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 7:
                                a = rand(11, 13);
                                break;
                            case 8:
                                a = rn(74 - this.amount, 73 - this.amount);
                                break;
                            case 9:
                                a = rn(17, rand(-23, -21));
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
                8: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(12, 14), rand(17, 19), rand(22, 24));
                                break;
                            case 2:
                                a = rn(18, 58, 68);
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = rand(11, 14);
                                break;
                            case 5:
                                a = rn(74 - this.amount, 79 - this.amount);
                                break;
                            case 6:
                                a = 18;
                                break;
                            case 7:
                                a = rn(51 - this.amount, 1 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(21, 23), rand(26, 28), rand(11, 13));
                                break;
                            case 9:
                                a = 18;
                                break;
                            case 10:
                                a = rn(20 - this.amount, 10 - this.amount);
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
                                a = rn(rand(10, 18), rand(20, 28));
                                break;
                            case 2:
                                a = rn(79 - this.amount, 79 - this.amount);
                                break;
                            case 3:
                                a = 18;
                                break;
                            case 4:
                                a = rn(10 - this.amount, -this.amount, 5 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(12, 14), rand(22, 24));
                                break;
                            case 6:
                                a = rn(18, 58);
                                break;
                            case 7:
                                a = rn(-this.amount, 10 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(12, 14), rand(17, 19));
                                break;
                            case 9:
                                a = rn(18, 58);
                                break;
                            case 10:
                                a = rn(20 - this.amount, 10 - this.amount);
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
                                a = rn(rand(20, 24), rand(60, 64));
                                break;
                            case 2:
                                a = rn(74 - this.amount, 84 - this.amount);
                                break;
                            case 3:
                                a = rn(2 - this.amount, 3 - this.amount);
                                break;
                            case 4:
                                a = rn(28, 18, 58, 68);
                                break;
                            case 5:
                                a = rn(rand(15, 16), rand(11, 12));
                                break;
                            case 6:
                                a = rn(99 - this.amount, 99 - this.amount);
                                break;
                            case 7:
                                a = rn(13 - this.amount, 17 - this.amount, 22 - this.amount);
                                break;
                            case 8:
                                a = rn(18, 58);
                                break;
                            case 9:
                                a = rn(11, 13);
                                break;
                            case 10:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 11:
                                a = rand(11, 17);
                                break;
                            case 12:
                                a = rn(rand(50, 52), rand(10, 12));
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
                                a = rn(rand(31, 38), rand(61, 68), rand(71, 78));
                                break;
                            case 2:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 3:
                                a = rn(8 - this.amount, 2 - this.amount);
                                break;
                            case 4:
                                a = rn(38, 78, 88);
                                break;
                            case 5:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 6:
                                a = rn(rand(12, 13), rand(17, 19));
                                break;
                            case 7:
                                a = rn(18, 58);
                                break;
                            case 8:
                                a = rn(20 - this.amount, 10 - this.amount, -this.amount);
                                break;
                            case 9:
                                a = rn(rand(21, 26), rand(51, 56));
                                break;
                            case 10:
                                a = rn(98 - this.amount, 99 - this.amount);
                                break;
                            case 11:
                                a = rn(-37, -17);
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
                                a = rn(rand(12, 14), rand(22, 24), 18);
                                break;
                            case 2:
                                a = rn(18, 58);
                                break;
                            case 3:
                                a = rn(99 - this.amount, 98 - this.amount);
                                break;
                            case 4:
                                a = rn(7 - this.amount, 18 - this.amount, 3 - this.amount);
                                break;
                            case 5:
                                a = rn(68, 78);
                                break;
                            case 6:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 7:
                                a = rand(11, 13);
                                break;
                            case 8:
                                a = rn(74 - this.amount, 73 - this.amount);
                                break;
                            case 9:
                                a = rn(18, rand(-23, -21));
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
                                a = rn(rand(11, 14), rand(16, 19), rand(21, 24));
                                break;
                            case 2:
                                a = rn(19, 59, 69);
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = rand(11, 14);
                                break;
                            case 5:
                                a = rn(74 - this.amount, 79 - this.amount);
                                break;
                            case 6:
                                a = 19;
                                break;
                            case 7:
                                a = rn(52 - this.amount, 2 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(21, 22), rand(26, 27), rand(11, 12));
                                break;
                            case 9:
                                a = 19;
                                break;
                            case 10:
                                a = rn(20 - this.amount, 10 - this.amount);
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
                                a = rn(rand(10, 18), rand(20, 28));
                                break;
                            case 2:
                                a = rn(79 - this.amount, 79 - this.amount);
                                break;
                            case 3:
                                a = 19;
                                break;
                            case 4:
                                a = rn(10 - this.amount, -this.amount, 5 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 6:
                                a = rn(19, 59);
                                break;
                            case 7:
                                a = rn(-this.amount, 10 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(11, 14), rand(16, 19));
                                break;
                            case 9:
                                a = rn(19, 59);
                                break;
                            case 10:
                                a = rn(20 - this.amount, 10 - this.amount);
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
                                a = rn(rand(20, 24), rand(60, 64));
                                break;
                            case 2:
                                a = rn(74 - this.amount, 84 - this.amount);
                                break;
                            case 3:
                                a = rn(1 - this.amount, 2 - this.amount);
                                break;
                            case 4:
                                a = rn(29, 19, 59, 69);
                                break;
                            case 5:
                                a = rn(rand(15, 16), rand(11, 12));
                                break;
                            case 6:
                                a = rn(99 - this.amount, 99 - this.amount);
                                break;
                            case 7:
                                a = rn(11 - this.amount, 12 - this.amount, 21 - this.amount);
                                break;
                            case 8:
                                a = rn(19, 59);
                                break;
                            case 9:
                                a = rn(11, 13);
                                break;
                            case 10:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 11:
                                a = rand(11, 17);
                                break;
                            case 12:
                                a = rn(rand(50, 52), rand(10, 12));
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
                                a = rn(rand(31, 38), rand(61, 68), rand(71, 78));
                                break;
                            case 2:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 3:
                                a = rn(7 - this.amount, 1 - this.amount);
                                break;
                            case 4:
                                a = rn(39, 79, 89);
                                break;
                            case 5:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 6:
                                a = rn(rand(11, 14), rand(17, 19));
                                break;
                            case 7:
                                a = rn(19, 59);
                                break;
                            case 8:
                                a = rn(20 - this.amount, 10 - this.amount, -this.amount);
                                break;
                            case 9:
                                a = rn(rand(21, 26), rand(51, 56));
                                break;
                            case 10:
                                a = rn(98 - this.amount, 99 - this.amount);
                                break;
                            case 11:
                                a = rn(-37, -11);
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
                                a = rn(rand(11, 14), rand(21, 24), 19);
                                break;
                            case 2:
                                a = rn(19, 59);
                                break;
                            case 3:
                                a = rn(99 - this.amount, 98 - this.amount);
                                break;
                            case 4:
                                a = rn(6 - this.amount, 17 - this.amount, 2 - this.amount);
                                break;
                            case 5:
                                a = rn(69, 79);
                                break;
                            case 6:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 7:
                                a = rand(11, 13);
                                break;
                            case 8:
                                a = rn(74 - this.amount, 73 - this.amount);
                                break;
                            case 9:
                                a = rn(19, rand(-23, -21));
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
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(11, 13);
                                break;
                            case 2:
                                a = rn(30 - this.amount, 70 - this.amount, 80 - this.amount);
                                break;
                            case 3:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 4:
                                a = rand(11, 19);
                                break;
                            case 5:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 6:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 7:
                                a = rn(24, 14);
                                break;
                            case 8:
                                a = rand(16, 19);
                                break;
                            case 9:
                                a = rn(51, rand(55, 56));
                                break;
                            case 10:
                                a = rn(-30, -20);
                                break;
                            case 11:
                                a = 90 - this.amount;
                                break;
                            case 12:
                                a = rn(-60, -70, -80);
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
                                a = rn(rand(21, 29), rand(11, 19));
                                break;
                            case 2:
                                a = 39 - this.amount;
                                break;
                            case 3:
                                a = rand(56, 59);
                                break;
                            case 4:
                                a = rn(-35, -30);
                                break;
                            case 5:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 6:
                                a = rn(50 - this.amount, 60 - this.amount);
                                break;
                            case 7:
                                a = rand(11, 18);
                                break;
                            case 8:
                                a = rn(-50, -60);
                                break;
                            case 9:
                                a = rn(40 - this.amount, 20);
                                break;
                            case 10:
                                a = rn(99 - this.amount, 98 - this.amount);
                                break;
                            case 11:
                                a = rand(-38, -35);
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
                                a = rn(19, 29, 59, 69);
                                break;
                            case 2:
                                a = rand(11, 15);
                                break;
                            case 3:
                                a = 94 - this.amount;
                                break;
                            case 4:
                                a = rn(-40, -30, -80);
                                break;
                            case 5:
                                a = rn(rand(26, 29), rand(16, 19));
                                break;
                            case 6:
                                a = rn(20 - this.amount, -this.amount);
                                break;
                            case 7:
                                a = rand(11, 19);
                                break;
                            case 8:
                                a = rn(90 - this.amount, 99 - this.amount);
                                break;
                            case 9:
                                a = rn(10 - this.amount, 20 - this.amount, 30 - this.amount);
                                break;
                            case 10:
                                a = rand(11, 19);
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
                                a = rn(rand(42, 44), rand(22, 24), rand(32, 34));
                                break;
                            case 2:
                                a = rn(10 - this.amount, 11 - this.amount, 12 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(11, 12), rand(15, 17));
                                break;
                            case 4:
                                a = rn(40 - this.amount, 80 - this.amount);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = rand(11, 19);
                                break;
                            case 7:
                                a = 40 - this.amount;
                                break;
                            case 8:
                                a = rand(51, 59);
                                break;
                            case 9:
                                a = rn(-40, -30);
                                break;
                            case 10:
                                a = 80 - this.amount;
                                break;
                            case 11:
                                a = rand(11, 19);
                                break;
                            case 12:
                                a = rn(-40, -30);
                                break;
                            case 13:
                                a = rn(80 - this.amount, 50 - this.amount);
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
                                a = rn(rand(31, 38), rand(21, 29), rand(11, 19));
                                break;
                            case 2:
                                a = 99 - this.amount;
                                break;
                            case 3:
                                a = rn(rand(-48, -40), rand(-38, -30));
                                break;
                            case 4:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 5:
                                a = rn(20 - this.amount, 10 - this.amount);
                                break;
                            case 6:
                                a = rand(21, 29);
                                break;
                            case 7:
                                a = rn(-30, -20);
                                break;
                            case 8:
                                a = rn(80 - this.amount, 40 - this.amount);
                                break;
                            case 9:
                                a = rn(-30, -20);
                                break;
                            case 10:
                                a = rand(11, 19);
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
                                a = rn(rand(20, 22), rand(60, 62), rand(50, 52));
                                break;
                            case 2:
                                a = rn(rand(11, 12), rand(15, 17));
                                break;
                            case 3:
                                a = 90 - this.amount;
                                break;
                            case 4:
                                a = rn(-20, -70);
                                break;
                            case 5:
                                a = rand(11, 19);
                                break;
                            case 6:
                                a = -30;
                                break;
                            case 7:
                                a = 80 - this.amount;
                                break;
                            case 8:
                                a = rand(11, 19);
                                break;
                            case 9:
                                a = rn(-90, -80);
                                break;
                            case 10:
                                a = rn(40 - this.amount, 30 - this.amount);
                                break;
                            case 11:
                                a = rand(51, 59);
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
                                a = rn(rand(63, 64), rand(73, 74), rand(83, 84));
                                break;
                            case 2:
                                a = rn(3 - this.amount, 2 - this.amount, 1 - this.amount);
                                break;
                            case 3:
                                a = rn(24 - this.amount, 14 - this.amount, 54 - this.amount);
                                break;
                            case 4:
                                a = rand(16, 19);
                                break;
                            case 5:
                                a = rn(84 - this.amount, 94 - this.amount);
                                break;
                            case 6:
                                a = -20;
                                break;
                            case 7:
                                a = rand(16, 19);
                                break;
                            case 8:
                                a = rn(-70, -80);
                                break;
                            case 9:
                                a = rn(11, 15, 16);
                                break;
                            case 10:
                                a = 90 - this.amount;
                                break;
                            case 11:
                                a = rn(-70, -80, -30, -20);
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
                                a = rn(14, 54, 64);
                                break;
                            case 2:
                                a = rand(16, 19);
                                break;
                            case 3:
                                a = rn(-20, -10);
                                break;
                            case 4:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 5:
                                a = rn(-80, 19 - this.amount);
                                break;
                            case 6:
                                a = rand(21, 25);
                                break;
                            case 7:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 8:
                                a = rand(21, 29);
                                break;
                            case 9:
                                a = rn(90 - this.amount, 10 - this.amount);
                                break;
                            case 10:
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
                                a = rand(11, 19);
                                break;
                            case 2:
                                a = rn(30 - this.amount, 70 - this.amount);
                                break;
                            case 3:
                                a = rand(11, 14);
                                break;
                            case 4:
                                a = 95 - this.amount;
                                break;
                            case 5:
                                a = rn(-90, -85);
                                break;
                            case 6:
                                a = rand(11, 14);
                                break;
                            case 7:
                                a = rn(40 - this.amount, 80 - this.amount, 45 - this.amount);
                                break;
                            case 8:
                                a = rn(10 - this.amount, 20 - this.amount, 30 - this.amount);
                                break;
                            case 9:
                                a = rand(41, 44);
                                break;
                            case 10:
                                a = rn(90 - this.amount, 95 - this.amount);
                                break;
                            case 11:
                                a = rn(20 - this.amount, 40 - this.amount, 30 - this.amount, 10 - this.amount);
                                break;
                            case 12:
                                a = rn(50 - this.amount, rand(41, 49));
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
                                a = rn(rand(30, 33), rand(40, 43));
                                break;
                            case 2:
                                a = rn(31, rand(35, 36), 21, rand(25, 26));
                                break;
                            case 3:
                                a = 90 - this.amount;
                                break;
                            case 4:
                                a = rn(-40, -30);
                                break;
                            case 5:
                                a = rand(11, 14);
                                break;
                            case 6:
                                a = rn(90 - this.amount, 95 - this.amount);
                                break;
                            case 7:
                                a = rn(10 - this.amount, 60 - this.amount);
                                break;
                            case 8:
                                a = rand(11, 19);
                                break;
                            case 9:
                                a = 90 - this.amount;
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
                                a = rn(rand(61, 69), rand(71, 79));
                                break;
                            case 2:
                                a = 90 - this.amount;
                                break;
                            case 3:
                                a = rn(-80, -70);
                                break;
                            case 4:
                                a = rand(11, 19);
                                break;
                            case 5:
                                a = rn(30, 40);
                                break;
                            case 6:
                                a = -50;
                                break;
                            case 7:
                                a = rn(40 - this.amount, 45 - this.amount);
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
                                a = rn(19, 29, 59, 69);
                                break;
                            case 2:
                                a = rand(12, 15);
                                break;
                            case 3:
                                a = 95 - this.amount;
                                break;
                            case 4:
                                a = rn(-80, -75);
                                break;
                            case 5:
                                a = rand(11, 14);
                                break;
                            case 6:
                                a = rn(45 - this.amount, 30);
                                break;
                            case 7:
                                a = rn(95 - this.amount, 99 - this.amount);
                                break;
                            case 8:
                                a = rn(-90, -80);
                                break;
                            case 9:
                                a = rn(30 - this.amount, 40 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(21, 24), rand(31, 34));
                                break;
                            case 11:
                                a = rn(90 - this.amount, 95 - this.amount);
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
                                a = rn(rand(31, 34), rand(21, 24), rand(11, 14));
                                break;
                            case 2:
                                a = 45 - this.amount;
                                break;
                            case 3:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 4:
                                a = rn(-50, -55);
                                break;
                            case 5:
                                a = rn(30 - this.amount, 40 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(31, 39), rand(41, 49));
                                break;
                            case 7:
                                a = rn(-60, 10 - this.amount);
                                break;
                            case 8:
                                a = rn(40 - this.amount, 40);
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
                                a = rn(14, 54, 64);
                                break;
                            case 2:
                                a = rand(17, 19);
                                break;
                            case 3:
                                a = 95 - this.amount;
                                break;
                            case 4:
                                a = rn(-85, -75);
                                break;
                            case 5:
                                a = rand(21, 29);
                                break;
                            case 6:
                                a = rn(20, 30);
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
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 2:
                                a = 50 - this.amount;
                                break;
                            case 3:
                                a = rand(11, 14);
                                break;
                            case 4:
                                a = rn(75 - this.amount, 80 - this.amount);
                                break;
                            case 5:
                                a = rand(11, 14);
                                break;
                            case 6:
                                a = rn(-20, -70);
                                break;
                            case 7:
                                a = 90 - this.amount;
                                break;
                            case 8:
                                a = rn(-40, -30);
                                break;
                            case 9:
                                a = rand(11, 14);
                                break;
                            case 10:
                                a = rn(85 - this.amount, 95 - this.amount);
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
                                a = rn(rand(11, 14), rand(21, 24), rand(31, 34), rand(42, 44));
                                break;
                            case 2:
                                a = 55 - this.amount;
                                break;
                            case 3:
                                a = rand(11, 14);
                                break;
                            case 4:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = rn(rand(21, 29), rand(11, 19));
                                break;
                            case 7:
                                a = rn(30, 40);
                                break;
                            case 8:
                                a = rn(90 - this.amount, -50);
                                break;
                            case 9:
                                a = rn(40 - this.amount, 80 - this.amount);
                                break;
                            case 10:
                                a = rand(11, 19);
                                break;
                            case 11:
                                a = rn(70 - this.amount, 80 - this.amount);
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
            's': {
                6: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(15, 18);
                                break;
                            case 2:
                                a = rn(16, 26);
                                break;
                            case 3:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 4:
                                a = rand(55, 58);
                                break;
                            case 5:
                                a = 16;
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = rn(rand(36, 38), rand(36, 38));
                                break;
                            case 8:
                                a = 5 - this.amount;
                                break;
                            case 9:
                                a = rn(26, 36);
                                break;
                            case 10:
                                a = rand(55, 58);
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
                                a = rand(55, 58);
                                break;
                            case 2:
                                a = rn(16, 26);
                                break;
                            case 3:
                                a = -this.amount;
                                break;
                            case 4:
                                a = rand(15, 18);
                                break;
                            case 5:
                                a = rn(56, 66);
                                break;
                            case 6:
                                a = rn(-21, -11);
                                break;
                            case 7:
                                a = 99 - this.amount;
                                break;
                            case 8:
                                a = rn(rand(-44, -41), rand(-34, -31));
                                break;
                            case 9:
                                a = rn(16, 26);
                                break;
                            case 10:
                                a = rn(-61, -71);
                                break;
                            case 11:
                                a = rn(15, 11);
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
                                a = rn(rand(27, 28), rand(47, 49));
                                break;
                            case 2:
                                a = rn(5 - this.amount, 6 - this.amount, 7 - this.amount);
                                break;
                            case 3:
                                a = rn(36, 76, 86);
                                break;
                            case 4:
                                a = rn(10 - this.amount, 11 - this.amount);
                                break;
                            case 5:
                                a = rand(15, 17);
                                break;
                            case 6:
                                a = 16;
                                break;
                            case 7:
                                a = rn(21 - this.amount, 20 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(55, 57), rand(65, 67));
                                break;
                            case 9:
                                a = 5 - this.amount;
                                break;
                            case 10:
                                a = rn(26, 16, 36);
                                break;
                            case 11:
                                a = rn(10 - this.amount, 11 - this.amount);
                                break;
                            case 12:
                                a = rand(15, 18);
                                break;
                            case 13:
                                a = 16;
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
                                a = rand(37, 39);
                                break;
                            case 2:
                                a = rn(rand(-22, -21), rand(-12, -11));
                                break;
                            case 3:
                                a = rn(55, 56);
                                break;
                            case 4:
                                a = rn(50 - this.amount, 60 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(18, 19), rand(28, 29));
                                break;
                            case 6:
                                a = rn(5 - this.amount, 6 - this.amount, 7 - this.amount);
                                break;
                            case 7:
                                a = rn(16, 26, 36);
                                break;
                            case 8:
                                a = 99 - this.amount;
                                break;
                            case 9:
                                a = rn(rand(-44, -43), rand(-34, -33));
                                break;
                            case 10:
                                a = 16;
                                break;
                            case 11:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(21, 29), rand(15, 19));
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
                                a = rn(rand(67, 69), rand(77, 79));
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = 16;
                                break;
                            case 4:
                                a = rand(55, 58);
                                break;
                            case 5:
                                a = rn(55 - this.amount, 65 - this.amount);
                                break;
                            case 6:
                                a = rn(26, 16);
                                break;
                            case 7:
                                a = 50 - this.amount;
                                break;
                            case 8:
                                a = rn(17, 18);
                                break;
                            case 9:
                                a = rn(5 - this.amount, 6 - this.amount);
                                break;
                            case 10:
                                a = rn(16, 26, 36);
                                break;
                            case 11:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                ],
                7: [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(15, 17);
                                break;
                            case 2:
                                a = rn(17, 27);
                                break;
                            case 3:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 4:
                                a = rand(55, 57);
                                break;
                            case 5:
                                a = 17;
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = rn(rand(25, 29), rand(35, 39));
                                break;
                            case 8:
                                a = 5 - this.amount;
                                break;
                            case 9:
                                a = rn(37, 27);
                                break;
                            case 10:
                                a = rand(55, 57);
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
                                a = rand(55, 57);
                                break;
                            case 2:
                                a = rn(17, 27);
                                break;
                            case 3:
                                a = -this.amount;
                                break;
                            case 4:
                                a = rand(15, 17);
                                break;
                            case 5:
                                a = rn(57, 67, 77);
                                break;
                            case 6:
                                a = rand(-22, -21);
                                break;
                            case 7:
                                a = 99 - this.amount;
                                break;
                            case 8:
                                a = rn(rand(-44, -42), rand(-34, -32));
                                break;
                            case 9:
                                a = rn(17, 27);
                                break;
                            case 10:
                                a = rn(-62, -61, -72, -71);
                                break;
                            case 11:
                                a = 15;
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
                                a = rn(rand(28, 29), rand(47, 49));
                                break;
                            case 2:
                                a = rn(5 - this.amount, 6 - this.amount);
                                break;
                            case 3:
                                a = rn(37, 67, 77);
                                break;
                            case 4:
                                a = rn(10 - this.amount, 11 - this.amount);
                                break;
                            case 5:
                                a = rand(15, 16);
                                break;
                            case 6:
                                a = 17;
                                break;
                            case 7:
                                a = rn(21 - this.amount, 20 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(56, 57), rand(66, 67));
                                break;
                            case 9:
                                a = rn(5 - this.amount, 6 - this.amount);
                                break;
                            case 10:
                                a = rn(17, 27, 37);
                                break;
                            case 11:
                                a = rn(10 - this.amount, 11 - this.amount);
                                break;
                            case 12:
                                a = rand(15, 16);
                                break;
                            case 13:
                                a = 17;
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
                                a = rand(37, 38);
                                break;
                            case 2:
                                a = rn(rand(-22, -21), rand(-12, -11));
                                break;
                            case 3:
                                a = rn(57, 67);
                                break;
                            case 4:
                                a = rn(50 - this.amount, 60 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(26, 29), rand(36, 39));
                                break;
                            case 6:
                                a = rn(5 - this.amount, 6 - this.amount);
                                break;
                            case 7:
                                a = rn(17, 27, 37);
                                break;
                            case 8:
                                a = 99 - this.amount;
                                break;
                            case 9:
                                a = rn(rand(-44, -43), rand(-34, -33));
                                break;
                            case 10:
                                a = 17;
                                break;
                            case 11:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(21, 29), rand(11, 19));
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
                                a = rn(rand(65, 69), rand(77, 79));
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = 17;
                                break;
                            case 4:
                                a = rand(55, 57);
                                break;
                            case 5:
                                a = rn(65 - this.amount, 55 - this.amount);
                                break;
                            case 6:
                                a = rn(27, 17);
                                break;
                            case 7:
                                a = 50 - this.amount;
                                break;
                            case 8:
                                a = rn(18, 19, 28, 29);
                                break;
                            case 9:
                                a = rn(5 - this.amount, 6 - this.amount);
                                break;
                            case 10:
                                a = rn(17, 27, 37);
                                break;
                            case 11:
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
                                a = rand(15, 16);
                                break;
                            case 2:
                                a = rn(18, 28);
                                break;
                            case 3:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 4:
                                a = rand(55, 56);
                                break;
                            case 5:
                                a = 18;
                                break;
                            case 6:
                                a = 10 - this.amount;
                                break;
                            case 7:
                                a = rn(rand(35, 39), rand(25, 29));
                                break;
                            case 8:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 9:
                                a = rn(58, 68, 78);
                                break;
                            case 10:
                                a = rn(rand(-13, -11), rand(-53, -51));
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
                                a = rand(55, 56);
                                break;
                            case 2:
                                a = rn(18, 28);
                                break;
                            case 3:
                                a = -this.amount;
                                break;
                            case 4:
                                a = rand(15, 16);
                                break;
                            case 5:
                                a = rn(58, 68);
                                break;
                            case 6:
                                a = rn(rand(-23, -22), rand(-13, -12));
                                break;
                            case 7:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 8:
                                a = rand(-34, -33);
                                break;
                            case 9:
                                a = rn(18, 28);
                                break;
                            case 10:
                                a = rn(-62, -61, -72, -71);
                                break;
                            case 11:
                                a = rn(15, 55);
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
                                a = rn(rand(28, 29), rand(47, 49));
                                break;
                            case 2:
                                a = rn(5 - this.amount, 6 - this.amount);
                                break;
                            case 3:
                                a = rn(38, 68, 78);
                                break;
                            case 4:
                                a = rn(10 - this.amount, 11 - this.amount);
                                break;
                            case 5:
                                a = rn(15, 25);
                                break;
                            case 6:
                                a = 58;
                                break;
                            case 7:
                                a = rn(21 - this.amount, 20 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(56, 58), rand(76, 77));
                                break;
                            case 9:
                                a = rn(5 - this.amount, 6 - this.amount);
                                break;
                            case 10:
                                a = rn(18, 28, 38);
                                break;
                            case 11:
                                a = rn(10 - this.amount, 11 - this.amount);
                                break;
                            case 12:
                                a = 15;
                                break;
                            case 13:
                                a = 18;
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
                                a = rand(37, 38);
                                break;
                            case 2:
                                a = rn(-22, -12);
                                break;
                            case 3:
                                a = rn(58, 68);
                                break;
                            case 4:
                                a = rn(50 - this.amount, 60 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(26, 29), rand(36, 39));
                                break;
                            case 6:
                                a = rn(5 - this.amount, 6 - this.amount);
                                break;
                            case 7:
                                a = rn(18, 28, 38);
                                break;
                            case 8:
                                a = 99 - this.amount;
                                break;
                            case 9:
                                a = rn(rand(-44, -43), rand(-34, -33));
                                break;
                            case 10:
                                a = 18;
                                break;
                            case 11:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(21, 29), rand(11, 19));
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
                                a = rn(rand(65, 69), rand(77, 79));
                                break;
                            case 2:
                                a = 15 - this.amount;
                                break;
                            case 3:
                                a = 18;
                                break;
                            case 4:
                                a = rand(55, 57);
                                break;
                            case 5:
                                a = rn(65 - this.amount, 55 - this.amount);
                                break;
                            case 6:
                                a = rn(28, 18);
                                break;
                            case 7:
                                a = 50 - this.amount;
                                break;
                            case 8:
                                a = rn(16, 17, 26, 27);
                                break;
                            case 9:
                                a = rn(5 - this.amount, 6 - this.amount);
                                break;
                            case 10:
                                a = rn(18, 28, 38);
                                break;
                            case 11:
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
                                a = rn(15, 55);
                                break;
                            case 2:
                                a = rn(19, 29);
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = rn(15, 55);
                                break;
                            case 5:
                                a = 19;
                                break;
                            case 6:
                                a = 99 - this.amount;
                                break;
                            case 7:
                                a = rn(-84, -94);
                                break;
                            case 8:
                                a = 29;
                                break;
                            case 9:
                                a = rn(rand(-24, -21), rand(-32, -31));
                                break;
                            case 10:
                                a = rn(16, 26);
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
                                a = rn(25, 35);
                                break;
                            case 2:
                                a = 59;
                                break;
                            case 3:
                                a = -this.amount;
                                break;
                            case 4:
                                a = 15;
                                break;
                            case 5:
                                a = rn(69, 79);
                                break;
                            case 6:
                                a = rand(-23, -21);
                                break;
                            case 7:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 8:
                                a = -34;
                                break;
                            case 9:
                                a = rn(19, 29);
                                break;
                            case 10:
                                a = rn(rand(-63, -61), rand(-73, -71));
                                break;
                            case 11:
                                a = rn(15, 55);
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
                                a = rn(rand(27, 29), rand(47, 49));
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rn(39, 69, 79);
                                break;
                            case 4:
                                a = rn(10 - this.amount, 11 - this.amount);
                                break;
                            case 5:
                                a = rn(15, 25);
                                break;
                            case 6:
                                a = rn(-20, -10);
                                break;
                            case 7:
                                a = 59;
                                break;
                            case 8:
                                a = rn(10 - this.amount, 50 - this.amount);
                                break;
                            case 9:
                                a = 65 - this.amount;
                                break;
                            case 10:
                                a = 29;
                                break;
                            case 11:
                                a = rn(rand(-34, -31), rand(-24, -21));
                                break;
                            case 12:
                                a = rn(15, 25);
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
                                a = rand(35, 38);
                                break;
                            case 2:
                                a = rn(15 - this.amount, 25 - this.amount);
                                break;
                            case 3:
                                a = rn(59, 69);
                                break;
                            case 4:
                                a = rn(50 - this.amount, 60 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(26, 29), rand(36, 39));
                                break;
                            case 6:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 7:
                                a = rn(19, 29);
                                break;
                            case 8:
                                a = 99 - this.amount;
                                break;
                            case 9:
                                a = rn(-34, -24);
                                break;
                            case 10:
                                a = 19;
                                break;
                            case 11:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(21, 29), rand(11, 19));
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
                                a = rn(rand(65, 69), rand(77, 79));
                                break;
                            case 2:
                                a = rn(15 - this.amount, 5 - this.amount);
                                break;
                            case 3:
                                a = rn(19, 29);
                                break;
                            case 4:
                                a = rn(rand(-13, -11), rand(-23, -21));
                                break;
                            case 5:
                                a = rn(55, 65);
                                break;
                            case 6:
                                a = 5 - this.amount;
                                break;
                            case 7:
                                a = rn(69, 79);
                                break;
                            case 8:
                                a = rn(rand(-63, -61), rand(-53, -51));
                                break;
                            case 9:
                                a = rn(99 - this.amount, 89 - this.amount);
                                break;
                            case 10:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                ],
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(16, 19), rand(26, 29));
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rand(16, 19);
                                break;
                            case 4:
                                a = 39 - this.amount;
                                break;
                            case 5:
                                a = rn(-34, -24);
                                break;
                            case 6:
                                a = rand(16, 19);
                                break;
                            case 7:
                                a = rn(55, 65);
                                break;
                            case 8:
                                a = rn(56 - this.amount, 66 - this.amount);
                                break;
                            case 9:
                                a = rand(26, 28);
                                break;
                            case 10:
                                a = rn(11 - this.amount, 22 - this.amount);
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
                                a = rn(15, 25);
                                break;
                            case 2:
                                a = rn(rand(56, 59), rand(66, 69));
                                break;
                            case 3:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(16, 19), rand(26, 29));
                                break;
                            case 5:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(16, 19), rand(26, 29));
                                break;
                            case 7:
                                a = 99 - this.amount;
                                break;
                            case 8:
                                a = rn(-44, -34, -24);
                                break;
                            case 9:
                                a = rand(16, 19);
                                break;
                            case 10:
                                a = rn(60 - this.amount, 51 - this.amount, 21 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(21, 23), rand(11, 13));
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
                                a = rn(rand(36, 39), rand(56, 59));
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rn(rand(26, 29), rand(36, 39));
                                break;
                            case 4:
                                a = rn(10 - this.amount, 11 - this.amount);
                                break;
                            case 5:
                                a = rn(15, 25);
                                break;
                            case 6:
                                a = rn(56, 58);
                                break;
                            case 7:
                                a = rn(20 - this.amount, 21 - this.amount);
                                break;
                            case 8:
                                a = 55;
                                break;
                            case 9:
                                a = rand(16, 19);
                                break;
                            case 10:
                                a = rn(30 - this.amount, 31 - this.amount);
                                break;
                            case 11:
                                a = rand(51, 53);
                                break;
                            case 12:
                                a = rn(-20, 70 - this.amount);
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
                                a = rn(rand(76, 79), rand(86, 89));
                                break;
                            case 2:
                                a = rn(15 - this.amount, 25 - this.amount);
                                break;
                            case 3:
                                a = rand(16, 19);
                                break;
                            case 4:
                                a = 55;
                                break;
                            case 5:
                                a = 5 - this.amount;
                                break;
                            case 6:
                                a = rn(rand(26, 29), rand(36, 39));
                                break;
                            case 7:
                                a = rn(89 - this.amount, 99 - this.amount);
                                break;
                            case 8:
                                a = 55 - this.amount;
                                break;
                            case 9:
                                a = rand(36, 39);
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
                                a = 15;
                                break;
                            case 2:
                                a = rand(26, 29);
                                break;
                            case 3:
                                a = 55;
                                break;
                            case 4:
                                a = rn(65 - this.amount, 75 - this.amount);
                                break;
                            case 5:
                                a = rand(16, 19);
                                break;
                            case 6:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 7:
                                a = rand(15, 16);
                                break;
                            case 8:
                                a = 5 - this.amount;
                                break;
                            case 9:
                                a = rn(rand(56, 59), rand(66, 69), rand(76, 79));
                                break;
                            case 10:
                                a = 99 - this.amount;
                                break;
                            case 11:
                                a = rn(-44, -34, -24);
                                break;
                            case 12:
                                a = rand(16, 19);
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
                                a = 55;
                                break;
                            case 2:
                                a = rn(rand(16, 19), rand(36, 39));
                                break;
                            case 3:
                                a = -this.amount;
                                break;
                            case 4:
                                a = rn(rand(15, 16), rand(25, 26));
                                break;
                            case 5:
                                a = rand(16, 18);
                                break;
                            case 6:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 7:
                                a = rn(65, 15);
                                break;
                            case 8:
                                a = 5 - this.amount;
                                break;
                            case 9:
                                a = rand(11, 14);
                                break;
                            case 10:
                                a = rn(29 - this.amount, 39 - this.amount);
                                break;
                            case 11:
                                a = 5 - this.amount;
                                break;
                            case 12:
                                a = rn(rand(56, 59), rand(66, 69), rand(76, 79));
                                break;
                            case 13:
                                a = rn(10 - this.amount, 11 - this.amount, 51 - this.amount);
                                break;
                            case 14:
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
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 2:
                                a = rn(35 - this.amount, 45 - this.amount);
                                break;
                            case 3:
                                a = rn(-10, -20, -30);
                                break;
                            case 4:
                                a = rn(56, 59);
                                break;
                            case 5:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 6:
                                a = rn(15, 25, 35);
                                break;
                            case 7:
                                a = 55 - this.amount;
                                break;
                            case 8:
                                a = rn(rand(16, 19), rand(26, 29));
                                break;
                            case 9:
                                a = 95 - this.amount;
                                break;
                            case 10:
                                a = rn(-70, -80);
                                break;
                            case 11:
                                a = rn(16, 19);
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
                                a = rn(rand(31, 34), rand(21, 24));
                                break;
                            case 2:
                                a = 55 - this.amount;
                                break;
                            case 3:
                                a = rn(rand(16, 19), rand(26, 29));
                                break;
                            case 4:
                                a = rn(95 - this.amount, 50 - this.amount);
                                break;
                            case 5:
                                a = rn(65 - this.amount, 75 - this.amount);
                                break;
                            case 6:
                                a = rand(16, 19);
                                break;
                            case 7:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 8:
                                a = rand(11, 14);
                                break;
                            case 9:
                                a = rn(45 - this.amount, 55 - this.amount);
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
                                a = rn(15, 25);
                                break;
                            case 2:
                                a = rand(16, 19);
                                break;
                            case 3:
                                a = rn(-20, -30);
                                break;
                            case 4:
                                a = rand(35 - this.amount, 45 - this.amount);
                                break;
                            case 5:
                                a = 55 - this.amount;
                                break;
                            case 6:
                                a = rn(rand(16, 19), rand(26, 29));
                                break;
                            case 7:
                                a = rn(95 - this.amount, 21 - this.amount);
                                break;
                            case 8:
                                a = -this.amount;
                                break;
                            case 9:
                                a = rn(55, 15, 25);
                                break;
                            case 10:
                                a = rand(16, 19);
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
                                a = 15;
                                break;
                            case 2:
                                a = rn(rand(16, 19), rand(26, 29));
                                break;
                            case 3:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 4:
                                a = rn(51 - this.amount, 52 - this.amount, 53 - this.amount, 54 - this.amount);
                                break;
                            case 5:
                                a = rn(85 - this.amount, 95 - this.amount);
                                break;
                            case 6:
                                a = rn(-30, -20);
                                break;
                            case 7:
                                a = rand(16, 19);
                                break;
                            case 8:
                                a = rn(-60, -70);
                                break;
                            case 9:
                                a = rn(45 - this.amount, 55 - this.amount);
                                break;
                            case 10:
                                a = 99 - this.amount;
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
                                a = rn(rand(51, 54), rand(61, 64));
                                break;
                            case 2:
                                a = rn(75 - this.amount, 85 - this.amount);
                                break;
                            case 3:
                                a = rn(-60, -70);
                                break;
                            case 4:
                                a = rand(16, 19);
                                break;
                            case 5:
                                a = 10 - this.amount;
                                break;
                            case 6:
                                a = rn(35 - this.amount, 45 - this.amount);
                                break;
                            case 7:
                                a = rn(-20, -30);
                                break;
                            case 8:
                                a = rand(16, 19);
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
                                a = 55;
                                break;
                            case 2:
                                a = rand(26, 29);
                                break;
                            case 3:
                                a = 95 - this.amount;
                                break;
                            case 4:
                                a = rn(-40, -30);
                                break;
                            case 5:
                                a = rand(16, 19);
                                break;
                            case 6:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 7:
                                a = rn(15, 55);
                                break;
                            case 8:
                                a = rand(16, 19);
                                break;
                            case 9:
                                a = rn(-20, -10);
                                break;
                            case 10:
                                a = rn(85 - this.amount, 75 - this.amount);
                                break;
                            case 11:
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
                                a = rand(16, 19);
                                break;
                            case 2:
                                a = 35 - this.amount;
                                break;
                            case 3:
                                a = rn(-20, -30);
                                break;
                            case 4:
                                a = rn(rand(56, 59), rand(66, 69));
                                break;
                            case 5:
                                a = rn(50 - this.amount, 51 - this.amount);
                                break;
                            case 6:
                                a = rn(69 - this.amount, 79 - this.amount);
                                break;
                            case 7:
                                a = rand(11, 14);
                                break;
                            case 8:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 9:
                                a = 15;
                                break;
                            case 10:
                                a = rand(16, 19);
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
                                a = 15;
                                break;
                            case 2:
                                a = rand(56, 59);
                                break;
                            case 3:
                                a = 90 - this.amount;
                                break;
                            case 4:
                                a = rn(-70, -80);
                                break;
                            case 5:
                                a = rand(16, 19);
                                break;
                            case 6:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 7:
                                a = rand(26, 29);
                                break;
                            case 8:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 9:
                                a = rand(15, 19);
                                break;
                            case 10:
                                a = 90 - this.amount;
                                break;
                            case 11:
                                a = rn(-40, -30, -20);
                                break;
                            case 12:
                                a = rand(11, 13);
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
                                a = rn(rand(36, 39), rand(56, 59));
                                break;
                            case 2:
                                a = 95 - this.amount;
                                break;
                            case 3:
                                a = rn(-40, -30);
                                break;
                            case 4:
                                a = rand(26, 29);
                                break;
                            case 5:
                                a = rn(10 - this.amount, 40 - this.amount);
                                break;
                            case 6:
                                a = 19;
                                break;
                            case 7:
                                a = rn(85 - this.amount, 95 - this.amount);
                                break;
                            case 8:
                                a = rn(55 - this.amount, 65 - this.amount);
                                break;
                            case 9:
                                a = rand(16, 19);
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
                                a = rand(11, 14);
                                break;
                            case 2:
                                a = 30 - this.amount;
                                break;
                            case 3:
                                a = rn(55, 56);
                                break;
                            case 4:
                                a = rn(55 - this.amount, 65 - this.amount);
                                break;
                            case 5:
                                a = rand(16, 19);
                                break;
                            case 6:
                                a = 99 - this.amount;
                                break;
                            case 7:
                                a = rn(-80, -90);
                                break;
                            case 8:
                                a = rand(11, 14);
                                break;
                            case 9:
                                a = 10 - this.amount;
                                break;
                            case 10:
                                a = rn(rand(21, 24), rand(31, 34));
                                break;
                            case 11:
                                a = rn(50, 55);
                                break;
                            case 12:
                                a = 10 - this.amount;
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
                                a = rn(rand(65, 66), rand(75, 76));
                                break;
                            case 2:
                                a = rand(16, 18);
                                break;
                            case 3:
                                a = rn(-70, -80);
                                break;
                            case 4:
                                a = 40 - this.amount;
                                break;
                            case 5:
                                a = rand(55, 59);
                                break;
                            case 6:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 7:
                                a = rand(26, 29);
                                break;
                            case 8:
                                a = 99 - this.amount;
                                break;
                            case 9:
                                a = rn(-34, -44, -24);
                                break;
                            case 10:
                                a = rand(16, 19);
                                break;
                            case 11:
                                a = rn(-11, -21, -50, -51);
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
                                a = rand(45, 49);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rand(36, 39);
                                break;
                            case 4:
                                a = rn(-40, -30);
                                break;
                            case 5:
                                a = rn(30 - this.amount, 40 - this.amount);
                                break;
                            case 6:
                                a = rand(56, 59);
                                break;
                            case 7:
                                a = rn(25 - this.amount, 15 - this.amount);
                                break;
                            case 8:
                                a = rand(16, 19);
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
                                a = rn(19, 29);
                                break;
                            case 2:
                                a = rand(11, 14);
                                break;
                            case 3:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(56, 59), rand(66, 69), rand(76, 79));
                                break;
                            case 5:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 6:
                                a = rand(16, 19);
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
            'srb': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(45, 49);
                                break;
                            case 2:
                                a = 5 - this.amount;
                                break;
                            case 3:
                                a = rand(56, 59);
                                break;
                            case 4:
                                a = 80 - this.amount;
                                break;
                            case 5:
                                a = rand(11, 19);
                                break;
                            case 6:
                                a = rn(30 - this.amount, 40 - this.amount);
                                break;
                            case 7:
                                a = rand(41, 49);
                                break;
                            case 8:
                                a = 99 - this.amount;
                                break;
                            case 9:
                                a = rn(rand(-68, -66), rand(-78, -76));
                                break;
                            case 10:
                                a = rand(31, 39);
                                break;
                            case 11:
                                a = rand(21, 25);
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
                                a = rn(rand(86, 89), rand(96, 99));
                                break;
                            case 2:
                                a = rn(15 - this.amount, 25 - this.amount);
                                break;
                            case 3:
                                a = rn(16, 19);
                                break;
                            case 4:
                                a = rn(-20, -30);
                                break;
                            case 5:
                                a = rn(35 - this.amount, 40 - this.amount);
                                break;
                            case 6:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(55, 59), rand(65, 69));
                                break;
                            case 8:
                                a = 55 - this.amount;
                                break;
                            case 9:
                                a = rand(26, 29);
                                break;
                            case 10:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 11:
                                a = rn(20, 30);
                                break;
                            case 12:
                                a = rn(10, 11);
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
                                a = rand(11, 14);
                                break;
                            case 2:
                                a = 25 - this.amount;
                                break;
                            case 3:
                                a = rand(16, 19);
                                break;
                            case 4:
                                a = 90 - this.amount;
                                break;
                            case 5:
                                a = rn(-40, -30);
                                break;
                            case 6:
                                a = rand(16, 19);
                                break;
                            case 7:
                                a = 5 - this.amount;
                                break;
                            case 8:
                                a = rand(26, 29);
                                break;
                            case 9:
                                a = 54 - this.amount;
                                break;
                            case 10:
                                a = rand(21, 24);
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
                                a = rand(21, 24);
                                break;
                            case 2:
                                a = 35 - this.amount;
                                break;
                            case 3:
                                a = rn(rand(26, 29), rand(36, 39));
                                break;
                            case 4:
                                a = rand(11, 20);
                                break;
                            case 5:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 6:
                                a = rn(20, 30);
                                break;
                            case 7:
                                a = rn(10, 20);
                                break;
                            case 8:
                                a = 85 - this.amount;
                                break;
                            case 9:
                                a = rn(5 - this.amount, 15 - this.amount, 25 - this.amount);
                                break;
                            case 10:
                                a = rand(16, 19);
                                break;
                            case 11:
                                a = rand(20, 40);
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
                                a = rn(19, 29);
                                break;
                            case 2:
                                a = rand(11, 14);
                                break;
                            case 3:
                                a = rand(20, 30);
                                break;
                            case 4:
                                a = rand(10, 11);
                                break;
                            case 5:
                                a = rn(95 - this.amount, 96 - this.amount);
                                break;
                            case 6:
                                a = rn(15 - this.amount, 25 - this.amount);
                                break;
                            case 7:
                                a = rand(16, 19);
                                break;
                            case 8:
                                a = rn(60 - this.amount, 70 - this.amount);
                                break;
                            case 9:
                                a = rand(11, 20);
                                break;
                            case 10:
                                a = rn(50 - this.amount, 60 - this.amount);
                                break;
                            case 11:
                                a = rand(10, 20);
                                break;
                            case 12:
                                a = 99 - this.amount;
                                break;
                            case 13:
                                a = rn(rand(-34, -31), rand(-24, -21));
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
                                a = rand(16, 19);
                                break;
                            case 2:
                                a = 35 - this.amount;
                                break;
                            case 3:
                                a = rand(16, 19);
                                break;
                            case 4:
                                a = rand(10, 20);
                                break;
                            case 5:
                                a = rand(10, 20);
                                break;
                            case 6:
                                a = rn(60 - this.amount, 50 - this.amount);
                                break;
                            case 7:
                                a = rand(11, 19);
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
                                a = rn(rand(21, 24), rand(31, 34));
                                break;
                            case 2:
                                a = 50 - this.amount;
                                break;
                            case 3:
                                a = rand(16, 19);
                                break;
                            case 4:
                                a = rand(11, 19);
                                break;
                            case 5:
                                a = rn(-10, -20);
                                break;
                            case 6:
                                a = rand(11, 19);
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
                                a = rn(rand(65, 66), rand(75, 76));
                                break;
                            case 2:
                                a = rand(16, 18);
                                break;
                            case 3:
                                a = 10 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(51, 59), rand(61, 69));
                                break;
                            case 5:
                                a = rand(11, 19);
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
                                a = 15;
                                break;
                            case 2:
                                a = rand(26, 29);
                                break;
                            case 3:
                                a = rand(11, 19);
                                break;
                            case 4:
                                a = rand(31, 34);
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
                                a = rn(rand(51, 54), rand(61, 64));
                                break;
                            case 2:
                                a = rn(75 - this.amount, 85 - this.amount);
                                break;
                            case 3:
                                a = rn(15 - this.amount, 25 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(41, 49), rand(31, 39));
                                break;
                            case 5:
                                a = rand(11, 19);
                                break;
                            case 6:
                                a = 50 - this.amount;
                                break;
                            case 7:
                                a = rand(11, 15);
                                break;
                            case 8:
                                a = rand(11, 15);
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
                                a = rn(59, 69);
                                break;
                            case 2:
                                a = rand(21, 24);
                                break;
                            case 3:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 4:
                                a = rand(11, 19);
                                break;
                            case 5:
                                a = rand(21, 29);
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
                                a = rand(36, 39);
                                break;
                            case 2:
                                a = 55 - this.amount;
                                break;
                            case 3:
                                a = rand(11, 19);
                                break;
                            case 4:
                                a = rand(21, 25);
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
        },
        '2*': {
            'p': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(11, 19), rand(21, 29));
                                break;
                            case 2:
                                a = rn(40 - this.amount, 90 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(75, 79), rand(65, 69));
                                break;
                            case 4:
                                a = rn(180 - this.amount, 190 - this.amount);
                                break;
                            case 5:
                                a = rn(100 - this.amount, 110 - this.amount);
                                break;
                            case 6:
                                a = rand(11, 19);
                                break;
                            case 7:
                                a = rn(140 - this.amount, 180 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 9:
                                a = rand(290 - this.amount);
                                break;
                            case 10:
                                a = rn(19, 29, 79);
                                break;
                            case 11:
                                a = rand(11, 19);
                                break;
                            case 12:
                                a = 310 - this.amount;
                                break;
                            case 13:
                                a = rn(rand(51, 59), rand(11, 19));
                                break;
                            case 14:
                                a = rn(380 - this.amount, 390 - this.amount);
                                break;
                            case 15:
                                a = rn(310 - this.amount, 300 - this.amount);
                                break;
                            case 16:
                                a = rn(19, 59, 69);
                                break;
                            case 17:
                                a = rand(11, 19);
                                break;
                            case 18:
                                a = rn(410 - this.amount, 420 - this.amount);
                                break;
                            case 19:
                                a = rand(11, 19);
                                break;
                            case 20:
                                a = rn(490 - this.amount, 500 - this.amount, 400 - this.amount);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(31, 39), rand(41, 49), rand(21, 29));
                                break;
                            case 2:
                                a = rn(100 - this.amount, 110 - this.amount);
                                break;
                            case 3:
                                a = rn(19, 59, 69);
                                break;
                            case 4:
                                a = rand(11, 19);
                                break;
                            case 5:
                                a = rn(210 - this.amount, 220 - this.amount);
                                break;
                            case 6:
                                a = rand(51, 59);
                                break;
                            case 7:
                                a = rn(290 - this.amount, 300 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(21, 29), rand(11, 19));
                                break;
                            case 9:
                                a = rn(340 - this.amount, 380 - this.amount, 390 - this.amount);
                                break;
                            case 10:
                                a = rn(300 - this.amount, 310 - this.amount);
                                break;
                            case 11:
                                a = rand(11, 19);
                                break;
                            case 12:
                                a = rn(340 - this.amount, 380 - this.amount, 390 - this.amount);
                                break;
                            case 13:
                                a = rn(300 - this.amount, 310 - this.amount);
                                break;
                            case 14:
                                a = rn(19, 59, 69);
                                break;
                            case 15:
                                a = rand(11, 19);
                                break;
                            case 16:
                                a = rn(410 - this.amount, 420 - this.amount);
                                break;
                            case 17:
                                a = rn(rand(21, 29), rand(11, 19));
                                break;
                            case 18:
                                a = rn(-20, -10);
                                break;
                            case 19:
                                a = rn(490 - this.amount, 449 - this.amount);
                                break;
                            case 20:
                                a = rn(410 - this.amount, 420 - this.amount, 430 - this.amount);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(51, 59), rand(61, 69), rand(71, 79), rand(81, 89));
                                break;
                            case 2:
                                a = rn(100 - this.amount, 110 - this.amount);
                                break;
                            case 3:
                                a = rn(51, 59);
                                break;
                            case 4:
                                a = rn(169 - this.amount, 179 - this.amount);
                                break;
                            case 5:
                                a = rand(11, 19);
                                break;
                            case 6:
                                a = rn(100 - this.amount, 110 - this.amount);
                                break;
                            case 7:
                                a = rand(11, 19);
                                break;
                            case 8:
                                a = rn(140 - this.amount, 180 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(71, 79), rand(81, 89));
                                break;
                            case 10:
                                a = rn(280 - this.amount, 290 - this.amount);
                                break;
                            case 11:
                                a = rn(210 - this.amount, 220 - this.amount, 200 - this.amount);
                                break;
                            case 12:
                                a = rand(51, 59);
                                break;
                            case 13:
                                a = rn(290 - this.amount, 300 - this.amount);
                                break;
                            case 14:
                                a = rand(21, 29);
                                break;
                            case 15:
                                a = rn(380 - this.amount, 340 - this.amount, 390 - this.amount);
                                break;
                            case 16:
                                a = rn(310 - this.amount, 320 - this.amount);
                                break;
                            case 17:
                                a = rand(51, 59);
                                break;
                            case 18:
                                a = rn(-50, -60);
                                break;
                            case 19:
                                a = rn(340 - this.amount, 380 - this.amount, 390 - this.amount);
                                break;
                            case 20:
                                a = rn(300 - this.amount, 320 - this.amount, rand(51, 59));
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(11, 19), rand(21, 29), rand(51, 59), rand(61, 69));
                                break;
                            case 2:
                                a = rn(79 - this.amount, 89 - this.amount);
                                break;
                            case 3:
                                a = rn(59 - this.amount, 69 - this.amount, 9 - this.amount, 19 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(11, 19), rand(21, 29));
                                break;
                            case 5:
                                a = rn(10 - this.amount, -this.amount);
                                break;
                            case 6:
                                a = rand(rand(21, 29), rand(11, 19));
                                break;
                            case 7:
                                a = rn(90 - this.amount, 100 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(11, 19), rand(21, 29));
                                break;
                            case 9:
                                a = rn(140 - this.amount, 180 - this.amount);
                                break;
                            case 10:
                                a = rn(100 - this.amount, 110 - this.amount);
                                break;
                            case 11:
                                a = rn(19, 59, 69);
                                break;
                            case 12:
                                a = rand(11, 19);
                                break;
                            case 13:
                                a = rn(210 - this.amount, 220 - this.amount);
                                break;
                            case 14:
                                a = rand(51, 59);
                                break;
                            case 15:
                                a = rn(290 - this.amount, 300 - this.amount);
                                break;
                            case 16:
                                a = rn(rand(21, 29), rand(11, 19));
                                break;
                            case 17:
                                a = rn(340 - this.amount, 380 - this.amount, 390 - this.amount);
                                break;
                            case 18:
                                a = rn(300 - this.amount, 310 - this.amount);
                                break;
                            case 19:
                                a = rn(19, 59);
                                break;
                            case 20:
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
                                a = rn(19, 59, 69);
                                break;
                            case 2:
                                a = rn(110 - this.amount, 100 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(11, 19), rand(21, 29));
                                break;
                            case 4:
                                a = rn(10 - this.amount, 20 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(31, 39), rand(41, 49));
                                break;
                            case 6:
                                a = 200 - this.amount;
                                break;
                            case 7:
                                a = a;
                                break;
                            case 8:
                                a = rn(rand(11, 19), rand(21, 29), rand(51, 59));
                                break;
                            case 9:
                                a = rn(279 - this.amount, 289 - this.amount);
                                break;
                            case 10:
                                a = rn(259 - this.amount, 269 - this.amount, 209 - this.amount, 219 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(11, 19), rand(21, 29));
                                break;
                            case 12:
                                a = rn(210 - this.amount, 200 - this.amount);
                                break;
                            case 13:
                                a = rn(59, 69, 79);
                                break;
                            case 14:
                                a = rn(rand(31, 39), rand(41, 49));
                                break;
                            case 15:
                                a = 300 - this.amount;
                                break;
                            case 16:
                                a = rn(rand(51, 59), rand(61, 69));
                                break;
                            case 17:
                                a = rn(380 - this.amount, 390 - this.amount);
                                break;
                            case 18:
                                a = rn(rand(41, 49), rand(31, 39));
                                break;
                            case 19:
                                a = rn(490 - this.amount, 449 - this.amount);
                                break;
                            case 20:
                                a = rn(410 - this.amount, 420 - this.amount, 430 - this.amount);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                ]
            },
            'b': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(11, 19), rand(21, 29), rand(31, 39));
                                break;
                            case 2:
                                a = rn(60 - this.amount, 70 - this.amount, 80 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(41, 49), rand(51, 59));
                                break;
                            case 4:
                                a = rn(150 - this.amount, 160 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(31, 39), rand(41, 49));
                                break;
                            case 6:
                                a = rn(220 - this.amount, 230 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 8:
                                a = rn(350 - this.amount, 360 - this.amount);
                                break;
                            case 9:
                                a = rand(51, 59);
                                break;
                            case 10:
                                a = rn(430 - this.amount, 440 - this.amount, 450 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(21, 29), rand(31, 39));
                                break;
                            case 12:
                                a = rn(500 - this.amount, 510 - this.amount);
                                break;
                            case 13:
                                a = rn(rand(71, 79), rand(61, 69));
                                break;
                            case 14:
                                a = rn(610 - this.amount, 600 - this.amount);
                                break;
                            case 15:
                                a = rn(rand(11, 19), rand(21, 29), rand(31, 39));
                                break;
                            case 16:
                                a = rn(660 - this.amount, 670 - this.amount);
                                break;
                            case 17:
                                a = rn(rand(41, 44), rand(51, 54));
                                break;
                            case 18:
                                a = rn(755 - this.amount, 765 - this.amount);
                                break;
                            case 19:
                                a = rn(800 - this.amount, 810 - this.amount);
                                break;
                            case 20:
                                a = rn(rand(71, 79), rand(61, 69));
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(31, 39), rand(41, 49), rand(51, 59));
                                break;
                            case 2:
                                a = rn(80 - this.amount, 90 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(81, 84), rand(91, 94));
                                break;
                            case 4:
                                a = rn(205 - this.amount, 215 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(21, 24), rand(31, 34));
                                break;
                            case 6:
                                a = rn(280 - this.amount, 270 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 8:
                                a = rn(400 - this.amount, 410 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(31, 34), rand(41, 44));
                                break;
                            case 10:
                                a = rn(465 - this.amount, 475 - this.amount);
                                break;
                            case 11:
                                a = rn(500 - this.amount, 510 - this.amount, 520 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 13:
                                a = rn(640 - this.amount, 630 - this.amount);
                                break;
                            case 14:
                                a = rn(rand(41, 44), rand(21, 24), rand(31, 34));
                                break;
                            case 15:
                                a = rn(705 - this.amount, 700 - this.amount);
                                break;
                            case 16:
                                a = rn(rand(21, 24), rand(31, 34));
                                break;
                            case 17:
                                a = rn(750 - this.amount, 700 - this.amount);
                                break;
                            case 18:
                                a = rn(rand(31, 39), rand(41, 49));
                                break;
                            case 19:
                                a = rn(820 - this.amount, 830 - this.amount);
                                break;
                            case 20:
                                a = rn(rand(51, 59), rand(41, 49));
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(14, 24, 34);
                                break;
                            case 2:
                                a = rn(rand(41, 44), rand(51, 54));
                                break;
                            case 3:
                                a = rn(100 - this.amount, 110 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(71, 74), rand(81, 84));
                                break;
                            case 5:
                                a = rn(265 - this.amount, 215 - this.amount);
                                break;
                            case 6:
                                a = rand(91, 95);
                                break;
                            case 7:
                                a = 400 - this.amount;
                                break;
                            case 8:
                                a = rn(rand(81, 84), rand(91, 94));
                                break;
                            case 9:
                                a = rn(515 - this.amount, 505 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(21, 24), rand(31, 34));
                                break;
                            case 11:
                                a = rn(570 - this.amount, 560 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(41, 49), rand(51, 59));
                                break;
                            case 13:
                                a = rn(650 - this.amount, 660 - this.amount);
                                break;
                            case 14:
                                a = rn(rand(31, 39), rand(41, 49));
                                break;
                            case 15:
                                a = rn(720 - this.amount, 730 - this.amount);
                                break;
                            case 16:
                                a = rn(rand(31, 39), rand(41, 49));
                                break;
                            case 17:
                                a = rn(800 - this.amount, 810 - this.amount);
                                break;
                            case 18:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 19:
                                a = rn(920 - this.amount, 930 - this.amount);
                                break;
                            case 20:
                                a = rn(rand(31, 39), rand(41, 49));
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(29, 39, 49);
                                break;
                            case 2:
                                a = rn(rand(41, 49), rand(51, 59));
                                break;
                            case 3:
                                a = 110 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(11, 19), rand(21, 29), rand(31, 39));
                                break;
                            case 5:
                                a = rn(160 - this.amount, 170 - this.amount);
                                break;
                            case 6:
                                a = rand(rand(41, 49), rand(51, 59));
                                break;
                            case 7:
                                a = rn(250 - this.amount, 260 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(11, 19), rand(21, 29));
                                break;
                            case 9:
                                a = rn(300 - this.amount, 310 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 11:
                                a = rn(420 - this.amount, 430 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(31, 39), rand(41, 49));
                                break;
                            case 13:
                                a = rn(500 - this.amount, 510 - this.amount);
                                break;
                            case 14:
                                a = rn(rand(11, 19), rand(21, 29));
                                break;
                            case 15:
                                a = rn(560 - this.amount, 570 - this.amount, 580 - this.amount);
                                break;
                            case 16:
                                a = rand(41, 49);
                                break;
                            case 17:
                                a = rn(650 - this.amount, 660 - this.amount);
                                break;
                            case 18:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 19:
                                a = rn(705 - this.amount, 715 - this.amount);
                                break;
                            case 20:
                                a = rn(rand(41, 44), rand(31, 34));
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(61, 69), rand(71, 79), rand(81, 89));
                                break;
                            case 2:
                                a = rn(110 - this.amount, 100 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(11, 19), rand(21, 29));
                                break;
                            case 4:
                                a = rn(160 - this.amount, 170 - this.amount, 180 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(41, 49), 213 - this.amount);
                                break;
                            case 6:
                                a = rand(250 - this.amount, 260 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 8:
                                a = rn(295 - this.amount, 305 - this.amount, 315 - this.amount);
                                break;
                            case 9:
                                a = rn(330 - this.amount, 340 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(21, 29), rand(31, 39));
                                break;
                            case 11:
                                a = rn(390 - this.amount, 389 - this.amount);
                                break;
                            case 12:
                                a = rn(300 - this.amount, 310 - this.amount);
                                break;
                            case 13:
                                a = rn(rand(31, 39), rand(21, 29));
                                break;
                            case 14:
                                a = rn(360 - this.amount, 350 - this.amount);
                                break;
                            case 15:
                                a = rn(rand(31, 39), rand(41, 49));
                                break;
                            case 16:
                                a = rn(420 - this.amount, 430 - this.amount);
                                break;
                            case 17:
                                a = rn(rand(91, 94), rand(81, 84));
                                break;
                            case 18:
                                a = rn(555 - this.amount, 545 - this.amount);
                                break;
                            case 19:
                                a = rn(rand(21, 24), rand(31, 34));
                                break;
                            case 20:
                                a = rn(600 - this.amount, 610 - this.amount, 510 - this.amount, 515 - this.amount);
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
                                a = rn(rand(45, 49), rand(25, 29), rand(35, 39));
                                break;
                            case 2:
                                a = rn(5 - this.amount, 15 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(16, 19), rand(26, 29));
                                break;
                            case 4:
                                a = rn(-this.amount, 10 - this.amount, 1 - this.amount, 11 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(65, 66), rand(55, 56));
                                break;
                            case 6:
                                a = rn(137 - this.amount, 147 - this.amount, 66, 67);
                                break;
                            case 7:
                                a = rn(100 - this.amount, 101 - this.amount, 110 - this.amount, 111 - this.amount);
                                break;
                            case 8:
                                a = rand(15, 17);
                                break;
                            case 9:
                                a = rn(194 - this.amount, 144 - this.amount);
                                break;
                            case 10:
                                a = rn(101 - this.amount, 112 - this.amount, 121 - this.amount, 122 - this.amount);
                                break;
                            case 11:
                                a = rn(55, 56);
                                break;
                            case 12:
                                a = 244 - this.amount;
                                break;
                            case 13:
                                a = rn(rand(-14, -12), rand(-24, -22));
                                break;
                            case 14:
                                a = rn(55, 56);
                                break;
                            case 15:
                                a = rn(60, 348 - this.amount);
                                break;
                            case 16:
                                a = rn(305 - this.amount, 315 - this.amount);
                                break;
                            case 17:
                                a = rand(26, 29);
                                break;
                            case 18:
                                a = rn(311 - this.amount, 301 - this.amount, 321 - this.amount);
                                break;
                            case 19:
                                a = rn(15, 16);
                                break;
                            case 20:
                                a = rn(56, 57);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;

                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(55, 58), rand(65, 68));
                                break;
                            case 2:
                                a = rn(84 - this.amount, 94 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-34, -33), rand(-24, -23), rand(-14, -13));
                                break;
                            case 4:
                                a = rn(146 - this.amount, 147 - this.amount, 148 - this.amount);
                                break;
                            case 5:
                                a = rn(-31, -30, -21, -20);
                                break;
                            case 6:
                                a = rn(184 - this.amount, 194 - this.amount);
                                break;
                            case 7:
                                a = rn(-24, -34);
                                break;
                            case 8:
                                a = rn(245 - this.amount, 235 - this.amount);
                                break;
                            case 9:
                                a = rn(-20, -30);
                                break;
                            case 10:
                                a = rand(56, 59);
                                break;
                            case 11:
                                a = rn(249 - this.amount, 244 - this.amount);
                                break;
                            case 12:
                                a = rn(211 - this.amount, 212 - this.amount, 210 - this.amount);
                                break;
                            case 13:
                                a = rn(rand(15, 17), rand(25, 27));
                                break;
                            case 14:
                                a = rn(205 - this.amount, 215 - this.amount);
                                break;
                            case 15:
                                a = rand(16, 19);
                                break;
                            case 16:
                                a = rn(50, 60);
                                break;
                            case 17:
                                a = rn(344 - this.amount, 349 - this.amount);
                                break;
                            case 18:
                                a = rn(320 - this.amount, 321 - this.amount);
                                break;
                            case 19:
                                a = rn(rand(11, 19), rand(51, 53));
                                break;
                            case 20:
                                a = rn(300 - this.amount, 310 - this.amount, 322 - this.amount);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(65, 68), rand(75, 78));
                                break;
                            case 2:
                                a = 144 - this.amount;
                                break;
                            case 3:
                                a = rn(-24, -34, -44);
                                break;
                            case 4:
                                a = rn(rand(51, 52), rand(61, 62));
                                break;
                            case 5:
                                a = rn(248 - this.amount, 249 - this.amount, 247 - this.amount);
                                break;
                            case 6:
                                a = rn(215 - this.amount, 205 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(56, 59), rand(66, 69));
                                break;
                            case 8:
                                a = rn(349 - this.amount, 344 - this.amount);
                                break;
                            case 9:
                                a = rn(310 - this.amount, 300 - this.amount, 311 - this.amount, 301 - this.amount);
                                break;
                            case 10:
                                a = rand(25, 27);
                                break;
                            case 11:
                                a = rn(344 - this.amount, 394 - this.amount);
                                break;
                            case 12:
                                a = rn(300 - this.amount, 310 - this.amount);
                                break;
                            case 13:
                                a = rand(55, 58);
                                break;
                            case 14:
                                a = rn(384 - this.amount, 394 - this.amount);
                                break;
                            case 15:
                                a = rn(rn(-34, -33), rn(-24, -23), rn(-14, -13));
                                break;
                            case 16:
                                a = rn(446 - this.amount, 447 - this.amount, 448 - this.amount);
                                break;
                            case 17:
                                a = rn(-31, -30, -21, -20);
                                break;
                            case 18:
                                a = rn(484 - this.amount, 494 - this.amount);
                                break;
                            case 19:
                                a = rn(-24, -21);
                                break;
                            case 20:
                                a = rn(410 - this.amount, 15);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(86, 89), rand(26, 29), rand(76, 79));
                                break;
                            case 2:
                                a = rn(25 - this.amount, 15 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(56, 59), rand(66, 69));
                                break;
                            case 4:
                                a = rn(50 - this.amount, 60 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(75, 79), rand(85, 89));
                                break;
                            case 6:
                                a = rn(115 - this.amount, 105 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(16, 19), rand(26, 29));
                                break;
                            case 8:
                                a = rn(100 - this.amount, 110 - this.amount);
                                break;
                            case 9:
                                a = rn(55, 56, 65, 66);
                                break;
                            case 10:
                                a = rand(16, 18);
                                break;
                            case 11:
                                a = rn(150 - this.amount, 160 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(76, 79), rand(86, 89));
                                break;
                            case 13:
                                a = rn(205 - this.amount, 215 - this.amount);
                                break;
                            case 14:
                                a = rand(26, 29);
                                break;
                            case 15:
                                a = rn(211 - this.amount, 220 - this.amount);
                                break;
                            case 16:
                                a = rn(55, 56);
                                break;
                            case 17:
                                a = rn(66, 67);
                                break;
                            case 18:
                                a = rn(300 - this.amount, 310 - this.amount);
                                break;
                            case 19:
                                a = rn(15, 55);
                                break;
                            case 20:
                                a = rand(16, 19);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(46, 49), rand(86, 89), rand(96, 99));
                                break;
                            case 2:
                                a = rn(15 - this.amount, 25 - this.amount);
                                break;
                            case 3:
                                a = rand(56, 59);
                                break;
                            case 4:
                                a = rn(149 - this.amount, 144 - this.amount);
                                break;
                            case 5:
                                a = rn(111 - this.amount, 121 - this.amount, 120 - this.amount, 110 - this.amount);
                                break;
                            case 6:
                                a = rand(55, 57);
                                break;
                            case 7:
                                a = rn(244 - this.amount, 239 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(-24, -21), rand(-34, -31));
                                break;
                            case 9:
                                a = rn(288 - this.amount, 278 - this.amount);
                                break;
                            case 10:
                                a = rn(349 - this.amount, 348 - this.amount);
                                break;
                            case 11:
                                a = rn(315 - this.amount, 305 - this.amount);
                                break;
                            case 12:
                                a = rand(26, 29);
                                break;
                            case 13:
                                a = rn(310 - this.amount, 320 - this.amount);
                                break;
                            case 14:
                                a = rn(55, 65);
                                break;
                            case 15:
                                a = rn(446 - this.amount, 447 - this.amount, 448 - this.amount);
                                break;
                            case 16:
                                a = rn(425 - this.amount, 415 - this.amount);
                                break;
                            case 17:
                                a = rand(66, 69);
                                break;
                            case 18:
                                a = rn(450 - this.amount, 400 - this.amount);
                                break;
                            case 19:
                                a = rn(15, 25);
                                break;
                            case 20:
                                a = rand(16, 19);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ]
            },
            'sb': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(51, 54), rand(61, 64));
                                break;
                            case 2:
                                a = rn(75 - this.amount, 85 - this.amount);
                                break;
                            case 3:
                                a = rand(66, 69);
                                break;
                            case 4:
                                a = rn(174 - this.amount, 184 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(-14, -10), rand(-24, -20));
                                break;
                            case 6:
                                a = rn(245 - this.amount, 235 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(26, 29), rand(36, 39));
                                break;
                            case 8:
                                a = rn(345 - this.amount, 60);
                                break;
                            case 9:
                                a = rn(355 - this.amount, 365 - this.amount, 375 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(60, 61), rand(70, 71));
                                break;
                            case 11:
                                a = rn(rand(46, 48), rand(36, 38));
                                break;
                            case 12:
                                a = 450 - this.amount;
                                break;
                            case 13:
                                a = rn(rand(95, 98), rand(85, 88));
                                break;
                            case 14:
                                a = rn(564 - this.amount, 574 - this.amount);
                                break;
                            case 15:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 16:
                                a = 555 - this.amount;
                                break;
                            case 17:
                                a = rn(rand(16, 19), rand(26, 29));
                                break;
                            case 18:
                                a = 645 - this.amount;
                                break;
                            case 19:
                                a = rn(rand(16, 19), rand(26, 29));
                                break;
                            case 20:
                                a = rn(745 - this.amount, 695 - this.amount, rand(61, 63));
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(15, 25, 35);
                                break;
                            case 2:
                                a = rn(rand(46, 49), rand(36, 39));
                                break;
                            case 3:
                                a = rn(60, 145 - this.amount);
                                break;
                            case 4:
                                a = rn(155 - this.amount, rand(31, 32));
                                break;
                            case 5:
                                a = rn(244 - this.amount, 70, 60);
                                break;
                            case 6:
                                a = 200 - this.amount;
                                break;
                            case 7:
                                a = rn(rand(31, 34), rand(21, 24));
                                break;
                            case 8:
                                a = rn(275 - this.amount, 44);
                                break;
                            case 9:
                                a = rn(354, 344) - this.amount;
                                break;
                            case 10:
                                a = rn(rand(21, 24), rand(31, 34));
                                break;
                            case 11:
                                a = 355 - this.amount;
                                break;
                            case 12:
                                a = rn(rand(96, 99), rand(76, 79), rand(86, 89));
                                break;
                            case 13:
                                a = rn(465 - this.amount, 475 - this.amount);
                                break;
                            case 14:
                                a = rand(76, 79);
                                break;
                            case 15:
                                a = rn(565 - this.amount, 575 - this.amount);
                                break;
                            case 16:
                                a = rand(66, 69);
                                break;
                            case 17:
                                a = rn(655 - this.amount, 665 - this.amount);
                                break;
                            case 18:
                                a = rand(16, 19);
                                break;
                            case 19:
                                a = rn(650 - this.amount, 660 - this.amount);
                                break;
                            case 20:
                                a = rn(rand(61, 69), rand(71, 79));
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(31, 34), rand(21, 24));
                                break;
                            case 2:
                                a = rn(75 - this.amount, 44);
                                break;
                            case 3:
                                a = rn(154 - this.amount, 144 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 5:
                                a = rn(254 - this.amount, 66, 76);
                                break;
                            case 6:
                                a = rn(24, 34, 275 - this.amount);
                                break;
                            case 7:
                                a = rn(344 - this.amount, 354 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 9:
                                a = rn(66, 76, 444 - this.amount);
                                break;
                            case 10:
                                a = rn(44, 34, 475 - this.amount);
                                break;
                            case 11:
                                a = rn(544 - this.amount, 554 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(11, 14), rand(21, 24));
                                break;
                            case 13:
                                a = 644 - this.amount;
                                break;
                            case 14:
                                a = rn(610 - this.amount, 600 - this.amount);
                                break;
                            case 15:
                                a = rn(15, 25);
                                break;
                            case 16:
                                a = rn(rand(46, 49), rand(36, 39));
                                break;
                            case 17:
                                a = rn(60, 745 - this.amount);
                                break;
                            case 18:
                                a = 700 - this.amount;
                                break;
                            case 19:
                                a = rn(15, 25, 35);
                                break;
                            case 20:
                                a = rn(rand(46, 49), rand(36, 39));
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(45, 48), rand(35, 38));
                                break;
                            case 2:
                                a = rn(64 - this.amount, 74 - this.amount, 84 - this.amount);
                                break;
                            case 3:
                                a = rn(65, 145 - this.amount);
                                break;
                            case 4:
                                a = rn(115 - this.amount, 105 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(56, 59), rand(46, 49));
                                break;
                            case 6:
                                a = rn(65, 75);
                                break;
                            case 7:
                                a = 205 - this.amount;
                                break;
                            case 8:
                                a = rn(rand(46, 49), rand(56, 59));
                                break;
                            case 9:
                                a = rn(275 - this.amount, 285 - this.amount);
                                break;
                            case 10:
                                a = rand(66, 69);
                                break;
                            case 11:
                                a = rn(365 - this.amount, 375 - this.amount);
                                break;
                            case 12:
                                a = rand(16, 19);
                                break;
                            case 13:
                                a = 350 - this.amount;
                                break;
                            case 14:
                                a = rn(65, 75, 85, 95);
                                break;
                            case 15:
                                a = rand(46, 49);
                                break;
                            case 16:
                                a = 450 - this.amount;
                                break;
                            case 17:
                                a = rn(65, 75, 85, 95);
                                break;
                            case 18:
                                a = 645 - this.amount;
                                break;
                            case 19:
                                a = rn(rand(16, 19), rand(26, 29), rand(36, 39));
                                break;
                            case 20:
                                a = rn(rand(46, 49), rand(36, 39));
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(75, 78), rand(85, 88));
                                break;
                            case 2:
                                a = 154 - this.amount;
                                break;
                            case 3:
                                a = rn(rand(91, 94), rand(71, 74), rand(81, 84));
                                break;
                            case 4:
                                a = rn(264 - this.amount, 274 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(61, 64), rand(71, 74));
                                break;
                            case 6:
                                a = rn(36, 26);
                                break;
                            case 7:
                                a = rn(445 - this.amount, 64);
                                break;
                            case 8:
                                a = rn(464 - this.amount, 474 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(61, 64), rand(71, 74));
                                break;
                            case 10:
                                a = rn(46, 36, 584 - this.amount);
                                break;
                            case 11:
                                a = rn(500 - this.amount, 510 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(31, 34), rand(41, 44));
                                break;
                            case 13:
                                a = rn(575 - this.amount, 585 - this.amount);
                                break;
                            case 14:
                                a = rand(66, 69);
                                break;
                            case 15:
                                a = rn(674 - this.amount, 684 - this.amount);
                                break;
                            case 16:
                                a = rn(rand(-14, -10), rand(-24, -20));
                                break;
                            case 17:
                                a = rn(745 - this.amount, 735 - this.amount);
                                break;
                            case 18:
                                a = rn(rand(26, 29), rand(36, 39));
                                break;
                            case 19:
                                a = rn(845 - this.amount, 60);
                                break;
                            case 20:
                                a = rn(855 - this.amount, 865 - this.amount, 875 - this.amount);
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
                                a = 55;
                                break;
                            case 2:
                                a = rn(rand(66, 69), rand(76, 79), rand(86, 89));
                                break;
                            case 3:
                                a = rn(200 - this.amount, 210 - this.amount);
                                break;
                            case 4:
                                a = rn(25, 35);
                                break;
                            case 5:
                                a = rn(rand(76, 79), rand(86, 89));
                                break;
                            case 6:
                                a = rn(55, 50);
                                break;
                            case 7:
                                a = rn(440 - this.amount, 410 - this.amount);
                                break;
                            case 8:
                                a = rn(400 - this.amount, 410 - this.amount);
                                break;
                            case 9:
                                a = rn(15, 55);
                                break;
                            case 10:
                                a = rn(rand(16, 19), rand(26, 29));
                                break;
                            case 11:
                                a = 400 - this.amount;
                                break;
                            case 12:
                                a = rand(16, 19);
                                break;
                            case 13:
                                a = 435 - this.amount;
                                break;
                            case 14:
                                a = rn(-20, -30);
                                break;
                            case 15:
                                a = rn(rand(56, 59), rand(66, 69));
                                break;
                            case 16:
                                a = rn(450 - this.amount, 451 - this.amount);
                                break;
                            case 17:
                                a = rn(469 - this.amount, 479 - this.amount);
                                break;
                            case 18:
                                a = rand(11, 14);
                                break;
                            case 19:
                                a = rn(410 - this.amount, 400 - this.amount);
                                break;
                            case 20:
                                a = rn(rand(21, 29), rand(11, 19));
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rand(65, 75);
                                break;
                            case 2:
                                a = rn(rand(46, 49), rand(36, 39));
                                break;
                            case 3:
                                a = rn(190 - this.amount, 180 - this.amount);
                                break;
                            case 4:
                                a = rn(25, 26, 35, 36);
                                break;
                            case 5:
                                a = rand(16, 18);
                                break;
                            case 6:
                                a = rn(59, 300 - this.amount);
                                break;
                            case 7:
                                a = rn(45, 46, 35, 36);
                                break;
                            case 8:
                                a = rn(305 - this.amount, -10);
                                break;
                            case 9:
                                a = rand(56, 59);
                                break;
                            case 10:
                                a = rn(-50, -10);
                                break;
                            case 11:
                                a = 400 - this.amount;
                                break;
                            case 12:
                                a = rn(rand(36, 39), rand(56, 59));
                                break;
                            case 13:
                                a = 95 - this.amount;
                                break;
                            case 14:
                                a = rn(-40, -30);
                                break;
                            case 15:
                                a = rand(26, 29);
                                break;
                            case 16:
                                a = rn(410 - this.amount, 450 - this.amount);
                                break;
                            case 17:
                                a = 19;
                                break;
                            case 18:
                                a = rn(485 - this.amount, 495 - this.amount);
                                break;
                            case 19:
                                a = rn(455 - this.amount, 465 - this.amount);
                                break;
                            case 20:
                                a = rand(16, 19);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(21, 29), rand(31, 39), rand(41, 49));
                                break;
                            case 2:
                                a = rn(100 - this.amount, 110 - this.amount);
                                break;
                            case 3:
                                a = rn(25, 35, 15);
                                break;
                            case 4:
                                a = rand(86, 89);
                                break;
                            case 5:
                                a = rn(290 - this.amount, 59);
                                break;
                            case 6:
                                a = 250 - this.amount;
                                break;
                            case 7:
                                a = rn(15, 25);
                                break;
                            case 8:
                                a = rand(16, 19);
                                break;
                            case 9:
                                a = rn(-20, -10, -30);
                                break;
                            case 10:
                                a = rn(340 - this.amount, 330 - this.amount, 65);
                                break;
                            case 11:
                                a = 300 - this.amount;
                                break;
                            case 12:
                                a = rn(rand(71, 79), rand(91, 99));
                                break;
                            case 13:
                                a = rn(350 - this.amount, 360 - this.amount);
                                break;
                            case 14:
                                a = rn(rand(11, 19), rand(21, 29));
                                break;
                            case 15:
                                a = rn(440 - this.amount, 430 - this.amount);
                                break;
                            case 16:
                                a = rand(56, 59);
                                break;
                            case 17:
                                a = rn(405 - this.amount, 415 - this.amount);
                                break;
                            case 18:
                                a = rn(rand(26, 29), rand(16, 19));
                                break;
                            case 19:
                                a = rn(-10, -20);
                                break;
                            case 20:
                                a = rn(440 - this.amount, 19, 59);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(51, 59), rand(61, 69), rand(71, 79), rand(81, 89));
                                break;
                            case 2:
                                a = rn(120 - this.amount, 130 - this.amount);
                                break;
                            case 3:
                                a = rand(11, 19);
                                break;
                            case 4:
                                a = rn(-30, -20);
                                break;
                            case 5:
                                a = rn(190 - this.amount, 180 - this.amount);
                                break;
                            case 6:
                                a = rn(25, 35, 45);
                                break;
                            case 7:
                                a = rand(56, 59);
                                break;
                            case 8:
                                a = rn(250 - this.amount, 200 - this.amount, 210 - this.amount);
                                break;
                            case 9:
                                a = rand(11, 19);
                                break;
                            case 10:
                                a = rn(280 - this.amount, 290 - this.amount);
                                break;
                            case 11:
                                a = rn(25, 35);
                                break;
                            case 12:
                                a = rand(16, 19);
                                break;
                            case 13:
                                a = rn(300 - this.amount, 310 - this.amount);
                                break;
                            case 14:
                                a = rand(11, 19);
                                break;
                            case 15:
                                a = rn(340 - this.amount, 390 - this.amount);
                                break;
                            case 16:
                                a = rn(65, 75, 85);
                                break;
                            case 17:
                                a = rand(16, 19);
                                break;
                            case 18:
                                a = rn(400 - this.amount, 410 - this.amount);
                                break;
                            case 19:
                                a = rn(15, 55);
                                break;
                            case 20:
                                a = rand(16, 19);
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(71, 79), rand(91, 99));
                                break;
                            case 2:
                                a = rn(50 - this.amount, 60 - this.amount);
                                break;
                            case 3:
                                a = rand(11, 19);
                                break;
                            case 4:
                                a = rn(140 - this.amount, 130 - this.amount);
                                break;
                            case 5:
                                a = rand(56, 59);
                                break;
                            case 6:
                                a = rn(25 - this.amount, 15 - this.amount);
                                break;
                            case 7:
                                a = rand(16, 19);
                                break;
                            case 8:
                                a = rn(-10, -20);
                                break;
                            case 9:
                                a = rand(200 - this.amount, 210 - this.amount);
                                break;
                            case 10:
                                a = rand(11, 19);
                                break;
                            case 11:
                                a = rn(240 - this.amount, 280 - this.amount);
                                break;
                            case 12:
                                a = rn(220 - this.amount, 210 - this.amount);
                                break;
                            case 13:
                                a = rn(15, 65);
                                break;
                            case 14:
                                a = rand(rand(86, 89), rand(96, 99));
                                break;
                            case 15:
                                a = rn(400 - this.amount, 410 - this.amount);
                                break;
                            case 16:
                                a = rn(15, 55);
                                break;
                            case 17:
                                a = rand(16, 19);
                                break;
                            case 18:
                                a = rn(420 - this.amount, 410 - this.amount);
                                break;
                            case 19:
                                a = rand(11, 19);
                                break;
                            case 20:
                                a = rn(410 - this.amount, 490 - this.amount);
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
                                a = rn(rand(56, 58), rand(66, 68), rand(76, 78));
                                break;
                            case 2:
                                a = rn(150 - this.amount, 155 - this.amount, 154 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(61, 69), rand(71, 79), rand(81, 89));
                                break;
                            case 4:
                                a = rn(rand(91, 99), rand(51, 59));
                                break;
                            case 5:
                                a = rn(rand(41, 49), rand(31, 39));
                                break;
                            case 6:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 7:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 8:
                                a = rn(rand(71, 79), rand(61, 69));
                                break;
                            case 9:
                                a = rn(rand(51, 59), rand(61, 69));
                                break;
                            case 10:
                                a = rn(rand(91, 99), rand(81, 89));
                                break;
                            case 11:
                                a = rn(rand(11, 19), rand(21, 29));
                                break;
                            case 12:
                                a = rn(rand(71, 79), rand(61, 69));
                                break;
                            case 13:
                                a = rn(rand(41, 49), rand(51, 59));
                                break;
                            case 14:
                                a = rn(rand(81, 89), rand(91, 99));
                                break;
                            case 15:
                                a = rn(rand(61, 69), rand(71, 79));
                                break;
                            case 16:
                                a = rn(rand(31, 39), rand(21, 29));
                                break;
                            case 17:
                                a = rn(rand(41, 49), rand(11, 19));
                                break;
                            case 18:
                                a = rn(rand(61, 69), rand(71, 79));
                                break;
                            case 19:
                                a = rn(rand(91, 99), rand(81, 89));
                                break;
                            case 20:
                                a = rn(rand(11, 19), rand(21, 29));
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                ]
            },
        },
        '3': {
            'p': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(371, 399), rand(461, 499), rand(961, 999), rand(861, 866));
                                break;
                            case 2:
                                a = rn(250 - this.amount, 260 - this.amount, 150 - this.amount, 160 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(121, 124), rand(221, 224), rand(101, 104), rand(201, 204));
                                break;
                            case 4:
                                a = rn(505, 515, 500);
                                break;
                            case 5:
                                a = rn(200 - this.amount, 100 - this.amount, 500 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(166, 169), rand(176, 179));
                                break;
                            case 7:
                                a = rn(110, 210, 520, 120);
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
                                a = rn(rand(441, 449), rand(491, 494), rand(381, 389));
                                break;
                            case 2:
                                a = rn(220 - this.amount, 110 - this.amount, 100 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(116, 119), rand(206, 209));
                                break;
                            case 4:
                                a = rn(510, 949 - this.amount);
                                break;
                            case 5:
                                a = -this.amount;
                                break;
                            case 6:
                                a = rn(rand(106, 109), rand(216, 219), rand(116, 119), rand(206, 209));
                                break;
                            case 7:
                                a = rn(379 - this.amount, 469 - this.amount, 369 - this.amount, 479 - this.amount);
                                break;
                            case 8:
                                a = rn(510, 520, 250 - this.amount, 150 - this.amount);
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
                                a = rn(rand(611, 614), rand(521, 524), rand(731, 734));
                                break;
                            case 2:
                                a = rn(844 - this.amount, 834 - this.amount, 944 - this.amount, 934 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(-234, -231), rand(-214, -211), rand(-124, -121), rand(-114, -111));
                                break;
                            case 4:
                                a = rn(500 - this.amount, 100 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(211, 212), rand(221, 222), rand(131, 132), rand(121, 122));
                                break;
                            case 6:
                                a = rn(rand(156, 157), rand(166, 167));
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
                                a = rn(rand(106, 109), rand(216, 219), rand(116, 119));
                                break;
                            case 2:
                                a = rn(379 - this.amount, 469 - this.amount, 369 - this.amount, 479 - this.amount);
                                break;
                            case 3:
                                a = rn(510, 520, 250 - this.amount, 150 - this.amount);
                                break;
                            case 4:
                                a = -this.amount;
                                break;
                            case 5:
                                a = rn(rand(371, 399), rand(461, 499), rand(961, 999), rand(861, 899));
                                break;
                            case 6:
                                a = rn(250 - this.amount, 260 - this.amount, 150 - this.amount, 160 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(121, 124), rand(221, 224), rand(101, 104), rand(201, 204));
                                break;
                            case 8:
                                a = rn(505, 515, 500);
                                break;
                            case 9:
                                a = rn(200 - this.amount, 100 - this.amount, 500 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(161, 169), rand(181, 189));
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
                                a = rn(rand(981, 999), rand(871, 899), 500);
                                break;
                            case 2:
                                a = rn(750 - this.amount, 760 - this.amount, 650 - this.amount, 660 - this.amount);
                                break;
                            case 3:
                                a = rn(500 - this.amount, 100 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(121, 124), rand(211, 214), rand(221, 224));
                                break;
                            case 5:
                                a = rn(944 - this.amount, 844 - this.amount, 934 - this.amount, 834 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(-634, -631), rand(-524, -521));
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
            'b': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(111, 114), rand(221, 224), rand(311, 314));
                                break;
                            case 2:
                                a = rn(435 - this.amount, 445 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(131, 134), rand(241, 244));
                                break;
                            case 4:
                                a = rn(799 - this.amount, 899 - this.amount);
                                break;
                            case 5:
                                a = rn(112 - this.amount, 224 - this.amount, 133 - this.amount);
                                break;
                            case 6:
                                a = rn(335 - this.amount, 354 - this.amount, 355 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(241, 244), rand(331, 334), rand(421, 424));
                                break;
                            case 8:
                                a = rn(889 - this.amount, 989 - this.amount, 999 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(-377, -361), rand(-278, -251));
                                break;
                            case 10:
                                a = rn(140, 220, 130, 240);
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
                                a = rn(rand(520, 523), rand(620, 623), rand(530, 533), rand(640, 643));
                                break;
                            case 2:
                                a = rn(764 - this.amount, 765 - this.amount, 875 - this.amount);
                                break;
                            case 3:
                                a = rn(110 - this.amount, 10 - this.amount, 100 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(121, 124), rand(111, 114));
                                break;
                            case 5:
                                a = rn(365 - this.amount, 355 - this.amount);
                                break;
                            case 6:
                                a = rand(111, 113);
                                break;
                            case 7:
                                a = rn(121, 210, 311, 421);
                                break;
                            case 8:
                                a = rn(11 - this.amount, 21 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(220, 223), rand(320, 323), rand(420, 423));
                                break;
                            case 10:
                                a = rn(595 - this.amount, 695 - this.amount);
                                break;
                            case 11:
                                a = rn(70 - this.amount, 60 - this.amount, 50 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(411, 429), rand(311, 329), rand(611, 629));
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
                                a = rn(rand(435, 437), rand(445, 447), rand(475, 477));
                                break;
                            case 2:
                                a = rn(rand(110, 112), rand(220, 222), rand(310, 312), rand(420, 422));
                                break;
                            case 3:
                                a = 999 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(-389, -381), rand(-289, -281));
                                break;
                            case 5:
                                a = rn(110, 210, 120);
                                break;
                            case 6:
                                a = rn(520 - this.amount, 220 - this.amount, 120 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(131, 134), rand(141, 144));
                                break;
                            case 8:
                                a = rn(775 - this.amount, 865 - this.amount, 985 - this.amount);
                                break;
                            case 9:
                                a = rn(110 - this.amount, 210 - this.amount, 100 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(221, 224), rand(131, 134), rand(201, 204));
                                break;
                            case 11:
                                a = rn(555 - this.amount, 585 - this.amount, 432, 341);
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
                                a = rn(rand(751, 799), rand(851, 899), rand(951, 998));
                                break;
                            case 2:
                                a = rn(150 - this.amount, 250 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(411, 414), rand(421, 424), rand(431, 434));
                                break;
                            case 4:
                                a = rn(785 - this.amount, 895 - this.amount, 985 - this.amount);
                                break;
                            case 5:
                                a = rn(510 - this.amount, 520 - this.amount, 530 - this.amount);
                                break;
                            case 6:
                                a = rn(654 - this.amount, 753 - this.amount, rand(141, 144));
                                break;
                            case 7:
                                a = rn(885 - this.amount, 124, 114);
                                break;
                            case 8:
                                a = rn(115 - this.amount, 215 - this.amount, 105 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(221, 223), rand(101, 104), 133);
                                break;
                            case 10:
                                a = rn(459 - this.amount, 469 - this.amount);
                                break;
                            case 11:
                                a = rn(679 - this.amount, 205 - this.amount);
                                break;
                            case 12:
                                a = rn(100 - this.amount, 500 - this.amount, 555 - this.amount);
                                break;
                            case 13:
                                a = rn(rand(401, 404), rand(221, 224), rand(310, 314));
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
                                a = rn(rand(221, 249), rand(321, 349), rand(421, 449), rand(721, 749));
                                break;
                            case 2:
                                a = rn(110 - this.amount, 100 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(111, 114), rand(121, 124));
                                break;
                            case 4:
                                a = rn(354 - this.amount, 345 - this.amount, 365 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(311, 313), rand(411, 413));
                                break;
                            case 6:
                                a = rn(500 - this.amount, 505 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(141, 144), rand(241, 244));
                                break;
                            case 8:
                                a = rn(210, 120, 230, 140);
                                break;
                            case 9:
                                a = rn(150 - this.amount, 250 - this.amount, 50 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(211, 214), rand(221, 224), rand(121, 124));
                                break;
                            case 11:
                                a = rn(575 - this.amount, 685 - this.amount, 695 - this.amount, 595 - this.amount);
                                break;
                            case 12:
                                a = rn(70 - this.amount, 50 - this.amount, 65 - this.amount, 55 - this.amount);
                                break;
                            case 13:
                                a = rn(rand(311, 314), rand(221, 224), rand(401, 404));
                                break;
                            case 14:
                                a = rn(589 - this.amount, 679 - this.amount);
                                break;
                            case 15:
                                a = rn(210, 110, 799 - this.amount);
                                break;
                            case 16:
                                a = -this.amount;
                                this.nextAlgorithm = true;
                                break;
                        }

                        this.amount += a;
                        return a;
                    },
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(210, 289), rand(100, 199), rand(510, 589), rand(601, 689));
                                break;
                            case 2:
                                a = rn(799 - this.amount, 899 - this.amount, 989 - this.amount);
                                break;
                            case 3:
                                a = rn(532 - this.amount, 613 - this.amount, 624 - this.amount);
                                break;
                            case 4:
                                a = rn(754 - this.amount, 764 - this.amount, 854 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(121, 124), rand(131, 134), rand(111, 114));
                                break;
                            case 6:
                                a = rn(150 - this.amount, 250 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(421, 424), rand(411, 414));
                                break;
                            case 8:
                                a = rn(775 - this.amount, 885 - this.amount);
                                break;
                            case 9:
                                a = rn(-125, -275, 500 - this.amount, 650 - this.amount);
                                break;
                            case 10:
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
                                a = rn(rand(111, 119), rand(221, 229), rand(311, 319));
                                break;
                            case 2:
                                a = rn(430 - this.amount, 440 - this.amount, 480 - this.amount);
                                break;
                            case 3:
                                a = rn(110 - this.amount, 120 - this.amount, 130 - this.amount, 100 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(111, 114), rand(151, 154), rand(161, 164));
                                break;
                            case 5:
                                a = rn(804 - this.amount, 904 - this.amount);
                                break;
                            case 6:
                                a = rn(-304, 500 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(111, 119), rand(121, 129));
                                break;
                            case 8:
                                a = rn(840 - this.amount, 940 - this.amount);
                                break;
                            case 9:
                                a = rn(-810, -720, -730, -820);
                                break;
                            case 10:
                                a = rn(110, 150, 160);
                                break;
                            case 11:
                                a = rn(900 - this.amount, 909 - this.amount);
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
                                a = rn(rand(511, 519), rand(221, 229), rand(631, 639));
                                break;
                            case 2:
                                a = rn(740 - this.amount, 840 - this.amount, 940 - this.amount);
                                break;
                            case 3:
                                a = rn(510 - this.amount, 520 - this.amount, 530 - this.amount, 540 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(151, 159), rand(101, 109));
                                break;
                            case 5:
                                a = rn(800 - this.amount, 900 - this.amount);
                                break;
                            case 6:
                                a = rn(100 - this.amount, -this.amount);
                                break;
                            case 7:
                                a = rn(rand(111, 119), rand(221, 229));
                                break;
                            case 8:
                                a = rn(430 - this.amount, 440 - this.amount, 470 - this.amount);
                                break;
                            case 9:
                                a = rn(110 - this.amount, 120 - this.amount, 130 - this.amount, 100 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(111, 114), rand(151, 154), rand(161, 164));
                                break;
                            case 11:
                                a = rn(804 - this.amount, 904 - this.amount);
                                break;
                            case 12:
                                a = rn(-300, -200, -100);
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
                                a = rn(rand(115, 117), rand(125, 127), rand(135, 137), rand(145, 147));
                                break;
                            case 2:
                                a = rn(rand(150, 152), rand(100, 102));
                                break;
                            case 3:
                                a = rn(400 - this.amount, 900 - this.amount, 800 - this.amount);
                                break;
                            case 4:
                                a = rn(100 - this.amount, 200 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(501, 509), rand(521, 529));
                                break;
                            case 6:
                                a = rn(830 - this.amount, 840 - this.amount, 940 - this.amount, 930 - this.amount);
                                break;
                            case 7:
                                a = rn(110 - this.amount, 120 - this.amount, 100 - this.amount);
                                break;
                            case 8:
                                a = rand(111, 119);
                                break;
                            case 9:
                                a = rn(340 - this.amount, 740 - this.amount);
                                break;
                            case 10:
                                a = rn(220 - this.amount, 130 - this.amount, 240 - this.amount);
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
                                a = rn(rand(491, 499), rand(481, 489), rand(471, 479));
                                break;
                            case 2:
                                a = rn(-360, -260);
                                break;
                            case 3:
                                a = rn(150, 100);
                                break;
                            case 4:
                                a = rn(900 - this.amount, 100 - this.amount);
                                break;
                            case 5:
                                a = -this.amount;
                                break;
                            case 6:
                                a = rn(rand(511, 519), rand(521, 529));
                                break;
                            case 7:
                                a = rn(740 - this.amount, 840 - this.amount, 940 - this.amount);
                                break;
                            case 8:
                                a = rn(510 - this.amount, 520 - this.amount, 530 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(151, 159), rand(101, 109));
                                break;
                            case 10:
                                a = rn(800 - this.amount, 900 - this.amount);
                                break;
                            case 11:
                                a = rn(100 - this.amount, 200 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(111, 118), rand(221, 229));
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
                                a = rn(rand(741, 749), rand(731, 739), rand(681, 689), rand(691, 699));
                                break;
                            case 2:
                                a = rn(-510, -520, -610, -630);
                                break;
                            case 3:
                                a = rn(400 - this.amount, 900 - this.amount);
                                break;
                            case 4:
                                a = rn(300 - this.amount, 200 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(511, 519), rand(541, 549), rand(561, 569));
                                break;
                            case 6:
                                a = rn(990 - this.amount, 980 - this.amount);
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
                                a = rn(rand(841, 849), rand(941, 949));
                                break;
                            case 2:
                                a = rn(-330, -220, -310);
                                break;
                            case 3:
                                a = rn(890 - this.amount, 990 - this.amount);
                                break;
                            case 4:
                                a = rn(100 - this.amount, 110 - this.amount, 120 - this.amount, 130 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(111, 114), rand(151, 154), rand(161, 164));
                                break;
                            case 6:
                                a = rn(804 - this.amount, 904 - this.amount);
                                break;
                            case 7:
                                a = rn(-304, 500 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(111, 119), rand(121, 129));
                                break;
                            case 9:
                                a = rn(840 - this.amount, 940 - this.amount);
                                break;
                            case 10:
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
                                a = rn(rand(121, 124), rand(211, 214), rand(996, 998));
                                break;
                            case 2:
                                a = rn(430 - this.amount, 445 - this.amount, 475 - this.amount, 440 - this.amount);
                                break;
                            case 3:
                                a = rn(110 - this.amount, 120 - this.amount, 130 - this.amount, 100 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(111, 114), rand(151, 154), rand(161, 164));
                                break;
                            case 5:
                                a = rn(405 - this.amount, 905 - this.amount);
                                break;
                            case 6:
                                a = rn(600 - this.amount, 600 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(111, 119), rand(121, 129), rand(131, 139), rand(141, 144));
                                break;
                            case 8:
                                a = rn(860 - this.amount, 960 - this.amount);
                                break;
                            case 9:
                                a = rn(120 - this.amount, 210 - this.amount, 250 - this.amount, 160 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(511, 519), rand(521, 529));
                                break;
                            case 11:
                                a = rn(900 - this.amount, 990 - this.amount);
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
                                a = rn(rand(511, 519), rand(221, 229), rand(631, 639), rand(141, 149));
                                break;
                            case 2:
                                a = rn(760 - this.amount, 860 - this.amount, 960 - this.amount);
                                break;
                            case 3:
                                a = rn(510 - this.amount, 500 - this.amount, 550 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(121, 124), rand(131, 134));
                                break;
                            case 5:
                                a = rn(805 - this.amount, 895 - this.amount, 855 - this.amount);
                                break;
                            case 6:
                                a = rn(200 - this.amount, 100 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(561, 569), rand(521, 529), rand(531, 539), rand(571, 579));
                                break;
                            case 8:
                                a = rn(900 - this.amount, 890 - this.amount, 990 - this.amount);
                                break;
                            case 9:
                                a = rn(500 - this.amount, 600 - this.amount, 200 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(119, 199), rand(201, 299));
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
                                a = rn(rand(491, 499), rand(481, 471), rand(471, 479));
                                break;
                            case 2:
                                a = rn(-250, -150);
                                break;
                            case 3:
                                a = rn(860 - this.amount, 960 - this.amount);
                                break;
                            case 4:
                                a = rn(510 - this.amount, 610 - this.amount, 550 - this.amount, 560 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(121, 124), rand(101, 104), rand(131, 134), rand(111, 114));
                                break;
                            case 6:
                                a = rn(895 - this.amount, 900 - this.amount, 995 - this.amount);
                                break;
                            case 7:
                                a = rn(100 - this.amount, 200 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(111, 119), rand(521, 529), rand(631, 639));
                                break;
                            case 9:
                                a = rn(940 - this.amount, 990 - this.amount);
                                break;
                            case 10:
                                a = rn(-130, -240, -310, -120);
                                break;
                            case 11:
                                a = rn(500 - this.amount, -this.amount);
                                break;
                            case 12:
                                a = rn(110, 390);
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
                                a = rn(rand(131, 139), rand(221, 229), rand(521, 529), rand(511, 529));
                                break;
                            case 2:
                                a = rn(740 - this.amount, 840 - this.amount, 760 - this.amount);
                                break;
                            case 3:
                                a = rn(996 - this.amount, 974 - this.amount);
                                break;
                            case 4:
                                a = rn(100 - this.amount, 110 - this.amount, 120 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(501, 509), rand(611, 619), rand(511, 519));
                                break;
                            case 6:
                                a = rn(940 - this.amount, 860 - this.amount);
                                break;
                            case 7:
                                a = rn(-110, 610 - this.amount);
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
                                a = rn(rand(361, 364), rand(861, 864), rand(761, 764));
                                break;
                            case 2:
                                a = rn(980 - this.amount, 990 - this.amount, 975 - this.amount);
                                break;
                            case 3:
                                a = rn(50 - this.amount, 60 - this.amount, 10 - this.amount);
                                break;
                            case 4:
                                a = rn(300 - this.amount, 400 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(341, 349), rand(231, 239), rand(421, 429));
                                break;
                            case 6:
                                a = rn(960 - this.amount, 970 - this.amount, 980 - this.amount);
                                break;
                            case 7:
                                a = rn(350 - this.amount, 260 - this.amount, 110 - this.amount, 160 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(111, 119), rand(121, 129));
                                break;
                            case 9:
                                a = rn(-110, 990 - this.amount);
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
                                a = rn(rand(441, 444), rand(421, 424), rand(431, 434));
                                break;
                            case 2:
                                a = rn(rand(321, 324), rand(231, 234), rand(441, 444), rand(431, 434));
                                break;
                            case 3:
                                a = rn(990 - this.amount, 100 - this.amount);
                                break;
                            case 4:
                                a = rn(640 - this.amount, 730 - this.amount, 520 - this.amount, 720 - this.amount);
                                break;
                            case 5:
                                a = rn(854 - this.amount, 953 - this.amount, 862 - this.amount, 961 - this.amount);
                                break;
                            case 6:
                                a = rn(-350, -250);
                                break;
                            case 7:
                                a = rn(875 - this.amount, 885 - this.amount, 895 - this.amount);
                                break;
                            case 8:
                                a = rn(100 - this.amount, 200 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(121, 129), rand(151, 159), rand(161, 169));
                                break;
                            case 10:
                                a = rn(900 - this.amount, 890 - this.amount, 870 - this.amount);
                                break;
                            case 11:
                                a = rn(300 - this.amount, 500 - this.amount, 200 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(111, 119), rand(121, 129));
                                break;
                            case 13:
                                a = rn(100 - this.amount, 990 - this.amount, 960 - this.amount);
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
                                a = rn(rand(298, 299), rand(778, 779), rand(388, 389), rand(878, 879));
                                break;
                            case 2:
                                a = rn(-152, -163, -251, -265);
                                break;
                            case 3:
                                a = rn(860 - this.amount, 970 - this.amount);
                                break;
                            case 4:
                                a = rn(500 - this.amount, 110 - this.amount, 610 - this.amount, 510 - this.amount);
                                break;
                            case 5:
                                a = rn(741 - this.amount, 734 - this.amount, 723 - this.amount, 712 - this.amount);
                                break;
                            case 6:
                                a = rn(855 - this.amount, 960 - this.amount, 965 - this.amount);
                                break;
                            case 7:
                                a = rn(50 - this.amount, -this.amount);
                                break;
                            case 8:
                                a = rn(rand(111, 119), rand(221, 229));
                                break;
                            case 9:
                                a = rn(390 - this.amount, 380 - this.amount, 490 - this.amount, 480 - this.amount);
                                break;
                            case 10:
                                a = rn(-200, -110, -230);
                                break;
                            case 11:
                                a = 999 - this.amount;
                                break;
                            case 12:
                                a = rn(-290, -201);
                                break;
                            case 13:
                                a = rn(500 - this.amount, 100 - this.amount, 200 - this.amount);
                                break;
                            case 14:
                                a = rn(110, 190);
                                break;
                            case 15:
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
                                a = rn(515, 505, 605, 615);
                                break;
                            case 2:
                                a = rn(rand(156, 159), rand(166, 169), rand(276, 279), rand(266, 269));
                                break;
                            case 3:
                                a = rn(150 - this.amount, 50 - this.amount, 151 - this.amount, 51 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(165, 167), rand(175, 177), rand(285, 287), rand(295, 297));
                                break;
                            case 5:
                                a = -this.amount;
                                break;
                            case 6:
                                a = rn(105, 505, 115, 515);
                                break;
                            case 7:
                                a = rn(rand(126, 129), rand(106, 109), rand(116, 119));
                                break;
                            case 8:
                                a = rn(894 - this.amount, 899 - this.amount, 994 - this.amount);
                                break;
                            case 9:
                                a = rn(150 - this.amount, 50 - this.amount, 152 - this.amount, 51 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(166, 167), rand(276, 277), rand(286, 287), rand(196, 197));
                                break;
                            case 11:
                                a = rn(105 - this.amount, 15 - this.amount, 115 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(526, 529), rand(616, 619), rand(516, 519));
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
                                a = rn(rand(151, 153), rand(261, 263), rand(561, 563), rand(651, 653));
                                break;
                            case 2:
                                a = rn(161, 175, rand(185, 186), rand(170, 171));
                                break;
                            case 3:
                                a = rn(110 - this.amount, 100 - this.amount, -this.amount, 10 - this.amount);
                                break;
                            case 4:
                                a = rn(215, 255, 205, 265);
                                break;
                            case 5:
                                a = rn(rand(516, 519), rand(506, 509), rand(616, 619), rand(606, 609));
                                break;
                            case 6:
                                a = rn(500 - this.amount, 510 - this.amount, 100 - this.amount, 110 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(151, 159), rand(161, 169), rand(271, 279), rand(381, 389));
                                break;
                            case 8:
                                a = rn(50 - this.amount, 150 - this.amount);
                                break;
                            case 9:
                                a = rn(264, rand(576, 579), rand(181, 189), rand(691, 699));
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
                                a = rn(rand(352, 354), rand(462, 464), rand(782, 784), rand(872, 874));
                                break;
                            case 2:
                                a = rn(52 - this.amount, 51 - this.amount, 151 - this.amount, 152 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(265, 267), rand(775, 777), rand(185, 187), rand(695, 697));
                                break;
                            case 4:
                                a = rn(115 - this.amount, 15 - this.amount, 105 - this.amount, 5 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(156, 159), rand(256, 259));
                                break;
                            case 6:
                                a = rn(560, 575, 565, 570);
                                break;
                            case 7:
                                a = rn(-this.amount, 500 - this.amount, 100 - this.amount);
                                break;
                            case 8:
                                a = rn(115, 105, 155);
                                break;
                            case 9:
                                a = rn(rand(126, 129), rand(216, 219), rand(106, 109));
                                break;
                            case 10:
                                a = rn(100 - this.amount, 100 - this.amount);
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
                                a = rn(105, 505, 115, 515);
                                break;
                            case 2:
                                a = rn(rand(126, 129), rand(106, 109), rand(116, 119), rand(216, 219));
                                break;
                            case 3:
                                a = rn(894 - this.amount, 899 - this.amount, 994 - this.amount);
                                break;
                            case 4:
                                a = rn(150 - this.amount, 50 - this.amount, 152 - this.amount, 51 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(166, 167), rand(276, 277), rand(286, 287), rand(196, 197));
                                break;
                            case 6:
                                a = rn(105 - this.amount, 15 - this.amount, 115 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(526, 529), rand(616, 619), rand(516, 519));
                                break;
                            case 8:
                                a = rn(794 - this.amount, 844 - this.amount, 949 - this.amount);
                                break;
                            case 9:
                                a = rn(122 - this.amount, 231 - this.amount, 132 - this.amount, 212 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(105, 106), rand(515, 517), rand(605, 607));
                                break;
                            case 11:
                                a = rn(5 - this.amount, 15 - this.amount, 105 - this.amount, 115 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(106, 109), rand(526, 529));
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
                                a = rn(rand(295, 299), rand(985, 989), rand(375, 379), rand(465, 469));
                                break;
                            case 2:
                                a = rn(155 - this.amount, 55 - this.amount, 105 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(116, 119), rand(516, 519), rand(106, 109), rand(506, 509));
                                break;
                            case 4:
                                a = rn(170, 160, 175, 165);
                                break;
                            case 5:
                                a = 999 - this.amount;
                                break;
                            case 6:
                                a = rn(552 - this.amount, 651 - this.amount, 152 - this.amount, 51 - this.amount);
                                break;
                            case 7:
                                a = rn(296, 285, 186, 195);
                                break;
                            case 8:
                                a = rn(105 - this.amount, 5 - this.amount, 115 - this.amount, 15 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(206, 209), rand(216, 219), rand(116, 119));
                                break;
                            case 10:
                                a = rn(444 - this.amount, 449 - this.amount, 844 - this.amount, 849 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(-124, -121), rand(-314, -311), rand(-234, -231));
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
                                a = rn(rand(211, 214), rand(121, 124), rand(131, 134));
                                break;
                            case 2:
                                a = rn(345 - this.amount, 445 - this.amount, 845 - this.amount);
                                break;
                            case 3:
                                a = rn(115 - this.amount, 125 - this.amount, 105 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(206, 209), rand(216, 219), rand(116, 119));
                                break;
                            case 5:
                                a = rn(554 - this.amount, 654 - this.amount, 664 - this.amount, 564 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(161, 164), rand(271, 274), rand(181, 184));
                                break;
                            case 7:
                                a = rn(505 - this.amount, 515 - this.amount, 605 - this.amount, 615 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(366, 369), rand(276, 279), rand(176, 179));
                                break;
                            case 9:
                                a = rn(151 - this.amount, 51 - this.amount, 261 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(161, 163), rand(571, 573), rand(681, 683));
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
                                a = rn(515, 505, 615, 625);
                                break;
                            case 2:
                                a = rn(rand(116, 119), rand(206, 209), rand(106, 109), rand(216, 219));
                                break;
                            case 3:
                                a = rn(954 - this.amount, 955 - this.amount, 964 - this.amount, 965 - this.amount);
                                break;
                            case 4:
                                a = rn(150 - this.amount, 550 - this.amount, 650 - this.amount, 50 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(261, 264), rand(171, 174), rand(281, 284), rand(191, 194));
                                break;
                            case 6:
                                a = rn(500 - this.amount, 510 - this.amount, 511 - this.amount, 501 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(211, 213), rand(121, 123), rand(221, 223), rand(131, 134));
                                break;
                            case 8:
                                a = rn(855 - this.amount, 865 - this.amount, 875 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(106, 109), rand(116, 119));
                                break;
                            case 10:
                                a = rn(500 - this.amount, 600 - this.amount, 100 - this.amount, -this.amount);
                                break;
                            case 11:
                                a = rand(101, 299);
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
                                a = rn(rand(366, 369), rand(476, 479), rand(886, 889), rand(966, 969));
                                break;
                            case 2:
                                a = rn(155 - this.amount, 55 - this.amount, 255 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(106, 109), rand(506, 509));
                                break;
                            case 4:
                                a = rn(925 - this.amount, 935 - this.amount, 945 - this.amount);
                                break;
                            case 5:
                                a = rn(505 - this.amount, 615 - this.amount, 105 - this.amount, 115 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(126, 129), rand(216, 219));
                                break;
                            case 7:
                                a = rn(101 - this.amount, 111 - this.amount, 110 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(211, 213), rand(121, 124), rand(331, 334));
                                break;
                            case 9:
                                a = rn(554 - this.amount, 565 - this.amount, 654 - this.amount, 665 - this.amount);
                                break;
                            case 10:
                                a = rn(160, 170, 180);
                                break;
                            case 11:
                                a = rn(500 - this.amount, 100 - this.amount, 510 - this.amount, 110 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(201, 289), rand(101, 189));
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
                                a = rn(rand(541, 544), rand(631, 634), rand(521, 524), rand(621, 624));
                                break;
                            case 2:
                                a = rn(755 - this.amount, 765 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(116, 119), rand(161, 164), rand(171, 174), rand(126, 129));
                                break;
                            case 4:
                                a = rn(510 - this.amount, 110 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(101, 104), rand(111, 114), rand(121, 124), rand(131, 134));
                                break;
                            case 6:
                                a = rn(754 - this.amount, 755 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(161, 164), rand(171, 174), rand(181, 184), rand(191, 194));
                                break;
                            case 8:
                                a = rn(101 - this.amount, 111 - this.amount, 110 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(211, 213), rand(221, 223), rand(231, 233), rand(311, 314));
                                break;
                            case 10:
                                a = rn(545 - this.amount, 555 - this.amount, 655 - this.amount, 645 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(216, 219), rand(126, 129));
                                break;
                            case 12:
                                a = rn(985 - this.amount, 995 - this.amount, 650 - this.amount);
                                break;
                            case 13:
                                a = rn(100 - this.amount, 150 - this.amount, 500 - this.amount);
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
                                a = rn(rand(245, 246), rand(345, 346), 145, 445);
                                break;
                            case 2:
                                a = rn(556 - this.amount, 656 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(261, 263), rand(271, 273), rand(281, 283), rand(291, 293));
                                break;
                            case 4:
                                a = rn(115 - this.amount, 215 - this.amount, 205 - this.amount, 105 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(126, 129), rand(106, 109), rand(206, 209), rand(116, 119));
                                break;
                            case 6:
                                a = rn(554 - this.amount, 654 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(261, 264), rand(171, 174), rand(281, 284), rand(191, 194));
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
                                a = rn(rand(241, 244), rand(141, 144), rand(341, 344), rand(441, 444));
                                break;
                            case 2:
                                a = rn(554 - this.amount, 654 - this.amount, 754 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(161, 164), rand(171, 174), rand(181, 184), rand(191, 194));
                                break;
                            case 4:
                                a = rn(101 - this.amount, 111 - this.amount, 110 - this.amount);
                                break;
                            case 5:
                                a = rn(754 - this.amount, 755 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(161, 164), rand(171, 174), rand(181, 184), rand(191, 194));
                                break;
                            case 7:
                                a = rn(510 - this.amount, 110 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(101, 104), rand(111, 114), rand(121, 124), rand(131, 134));
                                break;
                            case 9:
                                a = rn(855 - this.amount, 955 - this.amount, 854 - this.amount);
                                break;
                            case 10:
                                a = rn(150 - this.amount, 350 - this.amount, 250 - this.amount);
                                break;
                            case 11:
                                a = rn(610 - this.amount, 620 - this.amount, 630 - this.amount, 640 - this.amount);
                                break;
                            case 12:
                                a = rn(rand(111, 114), rand(121, 124), rand(131, 134));
                                break;
                            case 13:
                                a = rn(500 - this.amount, 600 - this.amount, 100 - this.amount);
                                break;
                            case 14:
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
                                a = rn(rand(151, 159), rand(551, 559), rand(651, 659));
                                break;
                            case 2:
                                a = rn(760 - this.amount, 870 - this.amount, 780 - this.amount, 880 - this.amount);
                                break;
                            case 3:
                                a = rn(550 - this.amount, 50 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(161, 169), rand(271, 279), rand(181, 189), rand(291, 299));
                                break;
                            case 5:
                                a = rn(990 - this.amount, 999 - this.amount);
                                break;
                            case 6:
                                a = rn(650 - this.amount, 550 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(171, 179), rand(161, 169), rand(181, 189), rand(191, 199));
                                break;
                            case 8:
                                a = rn(100 - this.amount, 500 - this.amount);
                                break;
                            case 9:
                                a = rand(101, 299);
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
                                a = rn(115, 215, 105, 225);
                                break;
                            case 2:
                                a = rn(rand(116, 119), rand(156, 159), rand(106, 109));
                                break;
                            case 3:
                                a = 900 - this.amount;
                                break;
                            case 4:
                                a = rn(100 - this.amount, 500 - this.amount, 600 - this.amount, -this.amount);
                                break;
                            case 5:
                                a = rand(151, 159);
                                break;
                            case 6:
                                a = rn(160, 170, 180, 190);
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
                                a = rn(rand(101, 109), rand(201, 209));
                                break;
                            case 2:
                                a = 360 - this.amount;
                                break;
                            case 3:
                                a = rn(rand(566, 569), rand(576, 579), rand(586, 589));
                                break;
                            case 4:
                                a = rn(205 - this.amount, 115 - this.amount, 225 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(116, 119), rand(106, 109), rand(156, 159));
                                break;
                            case 6:
                                a = 900 - this.amount;
                                break;
                            case 7:
                                a = rn(100 - this.amount, 500 - this.amount, -this.amount);
                                break;
                            case 8:
                                a = rn(255, 265, 275);
                                break;
                            case 9:
                                a = rn(rand(106, 109), rand(116, 119));
                                break;
                            case 10:
                                a = rn(-200, -100);
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
                                a = rn(265, 175, 675, 555);
                                break;
                            case 2:
                                a = rn(rand(106, 109), rand(116, 119));
                                break;
                            case 3:
                                a = rn(150 - this.amount, 50 - this.amount);
                                break;
                            case 4:
                                a = rn(rand(161, 169), rand(171, 179), rand(181, 189));
                                break;
                            case 5:
                                a = rn(840 - this.amount, 890 - this.amount);
                                break;
                            case 6:
                                a = rn(210 - this.amount, 120 - this.amount, 220 - this.amount);
                                break;
                            case 7:
                                a = rn(105, 505, 605);
                                break;
                            case 8:
                                a = rand(116, 119);
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
                                a = rn(rand(295, 299), rand(985, 989), rand(375, 379), rand(465, 469));
                                break;
                            case 2:
                                a = rn(155 - this.amount, 55 - this.amount, 105 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(116, 119), rand(516, 519), rand(106, 109), rand(506, 509));
                                break;
                            case 4:
                                a = rn(170, 160, 175, 165);
                                break;
                            case 5:
                                a = 999 - this.amount;
                                break;
                            case 6:
                                a = rn(rand(-348, -340), rand(-248, -240));
                                break;
                            case 7:
                                a = rn(860 - this.amount, 880 - this.amount, 870 - this.amount);
                                break;
                            case 8:
                                a = rn(150 - this.amount, 250 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(165, 169), rand(175, 179), rand(185, 189), rand(195, 199));
                                break;
                            case 10:
                                a = rn(105 - this.amount, 115 - this.amount);
                                break;
                            case 11:
                                a = rn(rand(516, 519), rand(626, 629));
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
                                a = rn(rand(111, 119), rand(221, 229));
                                break;
                            case 2:
                                a = rn(480 - this.amount, 490 - this.amount, 880 - this.amount);
                                break;
                            case 3:
                                a = 150 - this.amount;
                                break;
                            case 4:
                                a = rn(rand(561, 569), rand(671, 679), rand(581, 589), rand(691, 699));
                                break;
                            case 5:
                                a = rn(110 - this.amount, 211 - this.amount, 101 - this.amount, 111 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(101, 108), rand(121, 128));
                                break;
                            case 7:
                                a = rn(440 - this.amount, 840 - this.amount);
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
            'srb': {
                'o': [
                    (step, a) => {


                        switch (step) {
                            case 1:
                                a = rn(rand(121, 124), rand(211, 214), rand(300, 329));
                                break;
                            case 2:
                                a = rn(430 - this.amount, 445 - this.amount, 475 - this.amount, 440 - this.amount);
                                break;
                            case 3:
                                a = rn(110 - this.amount, 120 - this.amount, 130 - this.amount, 140 - this.amount);
                                break;
                            case 4:
                                a = rn(251 - this.amount, 352 - this.amount, 453 - this.amount);
                                break;
                            case 5:
                                a = rn(rand(161, 166), rand(171, 176), rand(181, 186), rand(191, 196));
                                break;
                            case 6:
                                a = rn(100 - this.amount, -this.amount, 200 - this.amount);
                                break;
                            case 7:
                                a = rn(rand(141, 144), rand(221, 224), rand(111, 114), rand(131, 134));
                                break;
                            case 8:
                                a = rn(554 - this.amount, 654 - this.amount, 664 - this.amount, 564 - this.amount);
                                break;
                            case 9:
                                a = rn(rand(161, 164), rand(271, 274), rand(181, 184));
                                break;
                            case 10:
                                a = rn(500 - this.amount, 950 - this.amount, 600 - this.amount, 990 - this.amount);
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
                                a = rand(100, 200);
                                break;
                            case 2:
                                a = rand(100, 200);
                                break;
                            case 3:
                                a = rand(100, 200);
                                break;
                            case 4:
                                a = rand(100, 200);
                                break;
                            case 5:
                                a = rand(100, 199);
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
                                a = rn(rand(511, 519), rand(221, 229), rand(631, 639));
                                break;
                            case 2:
                                a = rn(740 - this.amount, 840 - this.amount);
                                break;
                            case 3:
                                a = rn(rand(111, 119), rand(121, 129), rand(131, 139), rand(141, 149));
                                break;
                            case 4:
                                a = rn(-600, -700);
                                break;
                            case 5:
                                a = rn(515 - this.amount, 615 - this.amount, 605 - this.amount, 505 - this.amount);
                                break;
                            case 6:
                                a = rn(rand(156, 159), rand(166, 169), rand(276, 279), rand(266, 269));
                                break;
                            case 7:
                                a = rn(150 - this.amount, 50 - this.amount, 151 - this.amount, 51 - this.amount);
                                break;
                            case 8:
                                a = rn(rand(101, 108), rand(201, 208));
                                break;
                            case 9:
                                a = rn(360 - this.amount, 364 - this.amount);
                                break;
                            case 10:
                                a = rn(rand(261, 269), rand(271, 279), rand(391, 399), rand(481, 489));
                                break;
                            case 11:
                                a = rn(rand(101, 120), 500 - this.amount);
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
                                a = rand(101, 399);
                                break;
                            case 2:
                                a = rn(500 - this.amount, 600 - this.amount);
                                break;
                            case 3:
                                a = rand(101, 200);
                                break;
                            case 4:
                                a = rn(900 - this.amount, rand(101, 199));
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
                                a = rn(125, 235, 145, 225);
                                break;
                            case 2:
                                a = rn(rand(116, 119), rand(226, 229), rand(336, 339), rand(136, 139));
                                break;
                            case 3:
                                a = rn(105, rand(151, 154), 115, 125);
                                break;
                            case 4:
                                a = rn(800 - this.amount, 900 - this.amount, 808 - this.amount, 906 - this.amount);
                                break;
                            case 5:
                                a = rn(100 - this.amount, -this.amount, 500 - this.amount, 600 - this.amount);
                                break;
                            case 6:
                                a = rn(105, rand(151, 154), 115, 125);
                                break;
                            case 7:
                                a = rn(rand(166, 169), rand(176, 179), rand(186, 189), rand(196, 199));
                                break;
                            case 8:
                                a = rn(100 - this.amount, -this.amount);
                                break;
                            case 9:
                                a = rn(rand(511, 519), rand(221, 229), rand(671, 679), rand(141, 149));
                                break;
                            case 10:
                                a = rn(760 - this.amount, 860 - this.amount, 960 - this.amount);
                                break;
                            case 11:
                                a = rn(500 - this.amount, 510 - this.amount, 650 - this.amount, 610 - this.amount);
                                break;
                            case 12:
                                a = rand(100, 350);
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
                                a = rn(rand(601, 750), rand(400, 499));
                                break;
                            case 2:
                                a = rn(859 - this.amount, 856 - this.amount, rand(201, 295));
                                break;
                            case 3:
                                a = rn(100 - this.amount, -this.amount);
                                break;
                            case 4:
                                a = rand(101, 199);
                                break;
                            case 5:
                                a = rn(410 - this.amount, rand(101, 201), 460 - this.amount);
                                break;
                            case 6:
                                a = rn(610 - this.amount, rand(200, 399));
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
                                a = rand(750, 998);
                                break;
                            case 2:
                                a = rn(500 - this.amount, 600 - this.amount, 100 - this.amount);
                                break;
                            case 3:
                                a = rand(101, 166);
                                break;
                            case 4:
                                a = rand(101, 184);
                                break;
                            case 5:
                                a = 200 - this.amount;
                                break;
                            case 6:
                                a = rand(110, 140);
                                break;
                            case 7:
                                a = rn(rand(210, 299), rand(301, 399), rand(510, 580));
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