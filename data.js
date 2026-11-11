// data.js : 내 영화 5편 데이터 / 김유이(2651015) / 11주차
// 영화 한 편 = 객체 하나. 키 5개 : title, year, data. rating, poster

function best(list){

    for(let top = list[0]; i.rating > top.rating; top++){
        top = m;
    }

    return top;
}


function filterRating(list,min){
    return list.filter(m.rating >= min);
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

const titles = ["인터스텔라", "듄 파트1", "듄 파트2", "드래곤 길들이기", "이방인"];
const ratings = [8.4, 7.9, 9.0, 6.5, 8.1];
const years = [2014, 2019, 1994, 2023, 2008];

let sum = 0;

for (let i = 0; i<ratings.length; i++) {
    sum = sum + ratings[i];
}
console.log("합계:", sum);

const average = sum / ratings.length
console.log("평균:", average)

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

console.log("최고:",best(movies).titles);

console.log("8점 이상" + count + "편");

const movies = [
    {
        title: "인터스텔라", 
        year:2014, 
        data:"2014-11-06",
        rating: 8.4, 
        poster:"/frXkpt1dLKO3iDbmBsjQUKseLiS.jpg"
    },
    
    {
        title: "듄 파트1", 
        year:2021, data:"2024-09-15",
        rating: 7.7,
        poster:"/7zV8FTYofAORGm0Umgh1mNNCym8.jpg"
    },

    {
        title: "듄 파트2", 
        year:2024, data:"2024-2-27",
        rating: 8.1, 
        poster:"/8AsDR2o5AC3V8Jmj6JH6cpta7dz.jpg"
    },

    {title: "드래곤 길들이기", 
        year:2025, 
        data:"2026-06-06",
        rating: 7.9, 
        poster:"/frXkpt1dLKO3iDbmBsjQUKseLiS.jpg"
    },

    {title: "이방인", 
        year:2025, 
        data:"2025-10-29",
        rating: 6.9, 
        poster:"/2NoWaSTgKF7FcJ0Lr5NrvDDINOv.jpg"
    }
];
