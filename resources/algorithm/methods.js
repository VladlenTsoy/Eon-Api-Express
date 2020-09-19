const rn = (...params) => {
    const i = rand(0, params.length - 1)
    return params[i]
}

const all = (a, min, max, minR, maxR, minErr, maxErr) => {
    let r
    do {
        r = rand(minR, maxR);
    } while ((r + a > max) || (r + a < min) || (r === 0) || (r < maxErr && r > 0) || (r > minErr && r < 0));
    return r;
}

const multiply = (amin, amax, bmin, bmax) => {
    return [rand(amin, amax), rand(bmin, bmax)];
}

const divide = (stat, dmin, dmax)  => {
    let c, d
    do {
        switch (stat) {
            case 2:
                c = rand(11, 99);
                break;
            case 3:
                c = rand(101, 999);
                break;
            case 4:
                c = rand(1001, 9999);
                break;
            case 5:
                c = rand(10001, 99999);
                break;
            case 6:
                c = rand(100001, 999999);
                break;
        }
        d = rand(dmin, dmax);
    } while ((c % d !== 0) || (c / d === 1));

    return [c, d];
}

module.exports = {rn, all, multiply, divide}