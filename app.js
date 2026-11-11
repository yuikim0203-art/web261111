// app.js : 영화 배열을 다루는 함수 6개 / 김유이(2651015) / 11주차
// average : 영화 배열 ⇒ 평균 평점(숫자)
// renderCards : 영화 배열 ⇒ 보드에 카드 생성(반환값 없음)

function posterUrl(path, size) { return "https://image.tmdb.org/t/p/" + size + path; }

const movies = [
    {
        title: "인터스텔라", 
        year:2014, 
        data:"2014-11-06",
        rating: 8.4, 
        poster:"/gDN2NWtHbs8ZWEBQM8Dh5OVXdb4.jpg"
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
    },

    {title: "극장판 치이카와: 인어 섬의 비밀 포스터", 
        year:2026, 
        data:"2026-07-24",
        rating: 7.1, 
        poster:"/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg"
    }
];


function sortBy(list, key, desc) {

    const copy = [...list];

    copy.sort((a, b) => {

        if (typeof a[key] === "string") return a[key].localeCompare(b[key]);
        return a[key] - b[key];
    });

    if (desc) copy.reverse();
    return copy;
}

function applySort() {
 
   const key = document.getElementById("sort").value;

   renderCards(sortBy(movies, key, key !== "title"));
}

renderCards(movies);

function average(list) {

    let sum = 0;

for (let m = 0; m < list.length; m++) {
        sum += list[m].rating;
    }

    return sum / list.length;
}

function renderCards(list) {

    const board = document.querySelector(".board");
    board.innerHTML = "";

    for (const m of list) {

        const card = document.createElement("article");

        card.className = "card";

        if (m.rating >= 8) { card.classList.add("hot"); }

        card.innerHTML = 
            `<img class="poster" src="${posterUrl(m.poster, "w342")}" alt="${m.title} 포스터">
            <span class="badge">${m.rating}</span>

            <div class="info">

                <h2>${m.title}</h2>
                <p class="year">${m.year}</p>
            </div>`;

            board.appendChild(card);
    }

    document.getElementById("count").textContent = list.length + "편";

}

