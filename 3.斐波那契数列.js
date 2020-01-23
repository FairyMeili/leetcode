//  F(0) = 0,   F(1) = 1
//  F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
//  给定 N，计算 F(N)。

var fib = function (N) {
    if (N <= 1) {
        return N
    } else {
        let list = [0, 1];
        for (var i = 2; i <= N; i++) {
            list[i] = list[i - 1] + list[i - 2];
        }
        return list[N]
    }
};