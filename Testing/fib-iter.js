
function fibIter(n) {
    let F = [n + 1]
    F[1] = 1;
    F[2] = 1;
    for (let i = 3; i <= n + 1; i++) {
        F[i] = F[i - 2] + F[i - 1];
    }
    return F[n+1];
}

console.log(fibIter(10));