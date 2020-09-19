const {all} = require('../methods')

module.exports = function () {
    return {
        '1': {
            'o': {
                'o': [
                    (step, a) => {
                        a = all(this.amount, 1, 99, -9, 9, 0, 0);
                        this.amount += a;
                        return a;
                    }
                ]
            }
        },
        '1**': {
            'o': {
                'o': [
                    (step, a) => {
                        a = all(this.amount, 1, 999, -99, 99, 0, 0);
                        this.amount += a;
                        return a;
                    }
                ]
            }
        },
        '2': {
            'o': {
                'o': [
                    (step, a) => {
                        a = all(this.amount, 1, 999, -99, 99, -10, 10);
                        this.amount += a;
                        return a;
                    }
                ]
            }
        },
        '2*': {
            'o': {
                'o': [
                    (step, a) => {
                        a = all(this.amount, 1, 9999, -999, 999, -10, 10);
                        this.amount += a;
                        return a;
                    }
                ]
            }
        },
        '3': {
            'o': {
                'o': [
                    (step, a) => {
                        a = all(this.amount, 1, 9999, -999, 999, -100, 100);
                        this.amount += a;
                        return a;
                    }
                ]
            }
        },
        '4': {
            'o': {
                'o': [
                    (step, a) => {
                        a = all(this.amount, 1, 99999, -9999, 9999, -1000, 1000);
                        this.amount += a;
                        return a;
                    }
                ]
            }
        },
        '5': {
            'o': {
                'o': [
                    (step, a) => {
                        a = all(this.amount, 1, 999999, -99999, 99999, -10000, 10000);
                        this.amount += a;
                        return a;
                    }
                ]
            }
        },
        '6': {
            'o': {
                'o': [
                    (step, a) => {
                        a = all(this.amount, 1, 9999999, -999999, 999999, -100000, 100000);
                        this.amount += a;
                        return a;
                    }
                ]
            }
        },
        '7': {
            'o': {
                'o': [
                    (step, a) => {
                        a = all(this.amount, 1, 99999999, -9999999, 9999999, -1000000, 1000000);
                        this.amount += a;
                        return a;
                    }
                ]
            }
        },
        '8': {
            'o': {
                'o': [
                    (step, a) => {
                        a = all(this.amount, 1, 999999999, -99999999, 99999999, -10000000, 10000000);
                        this.amount += a;
                        return a;
                    }
                ]
            }
        },
        '9': {
            'o': {
                'o': [
                    (step, a) => {
                        a = all(this.amount, 1, 9999999999, -999999999, 999999999, -100000000, 100000000);
                        this.amount += a;
                        return a;
                    }
                ]
            }
        },
        '10': {
            'o': {
                'o': [
                    (step, a) => {
                        a = all(this.amount, 1, 99999999999, -9999999999, 9999999999, -1000000000, 1000000000);
                        this.amount += a;
                        return a;
                    }
                ]
            }
        }
    }
}