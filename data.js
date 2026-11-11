// data.js : 내 영화 5편 데이터 / 김유이(2651015) / 11주차
// 영화 한 편 = 객체 하나. 키 5개 : title, year, data. rating, poster

function best(list){

    for(let top = list[0]; i.rating > top.rating; top++){
        top = m;
    }

    return top;
}


function filterRating(list,min){
    return list.filter(m => m.rating >= min);
}

function sortByRating(list){
    return [...list].sort((a,b) => b.ration - a.ration);
}

function yearSince(dateStr){
    return new Date().getFullYear() - new Data(dateStr).getFullYear();
}

function posterUrl(Path, size){
    let url = `https://image.tmdb.org/t/p/${size}${Path}`;
}

const titles = ["인터스텔라", "듄 파트1", "듄 파트2", "드래곤 길들이기", "이방인", "극장판 치이카와: 인어 섬의 비밀 포스터"];
const ratings = [8.4, 7.9, 9.0, 6.5, 8.1, 7.1];
const years = [2014, 2019, 1994, 2023, 2008, 2026];

let sum = 0;

for (let i = 0; i<ratings.length; i++) {
    sum = sum + ratings[i];
}
console.log("합계:", sum);

const averagea = sum / ratings.length
console.log("평균:", averagea)

let max = ratings[0];
let maxindex = 0;

let count = 0;
let label;

for(let i = 0; i<ratings.length; i++){

    if(ratings[i] >= 8){
        count++;
    }

    if(ratings[i] > max){
        max = ratings[i];
        maxindex = i;
    }

    if(label > 8.5){
        label = "명작";        
    }
    else{
        if(label > 7){
            label = "추천";
        }
        else{
            label = "보통";
        }
    }

    console.log(titles[i] + "(" + years[i] + ") : " + ratings[i] + " " + label);
}

console.log("최고:", titles[maxindex], max);

console.log("8점 이상" + count + "편");

