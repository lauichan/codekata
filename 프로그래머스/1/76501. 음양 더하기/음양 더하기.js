function solution(absolutes, signs) {
    let sum = 0;
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] === true ? sum+=absolutes[i] : sum-=absolutes[i]
    } 
    return sum;
}