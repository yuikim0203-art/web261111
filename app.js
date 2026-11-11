// app.js : 영화 배열을 다루는 함수 6개 / 김유이(2651015) / 11주차
// average : 영화 배열 ⇒ 평균 평점(숫자)



function average(list) {

    let sum = 0;

for (let m = 0; m < list.length; m++) {
        sum += m.rating;
    }

    return sum / list.length;
}

console.log("평균:", average(movies));

document.title = "내 영화" + movies.length + "편";
console.table(sortByRating(movies));
document.getElementById("out").textContent = "평균 " + average(movies).toFixed(1) + "점, 최고 " + best(movies).title;