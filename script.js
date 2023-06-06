const API_KEY = 'api_key=ff66bab726f1691ab37b93e8322b3905';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = `${BASE_URL}/search/movie?${API_KEY}`;

fetch(API_URL)
  .then(res => {
    return res.json();
  })
  .then(data => {
    const ans = data.results;
    let data1 = "";
    ans.map(values => {
      data1 += `
        <div class="base">
          <img src="${IMG_URL}${values.poster_path}" alt="" class="poster" />
          <div class="content">
            <div class="tag">
              Rating: ${values.vote_average}
            </div>
            <p class="movie">
              ${values.title}
            </p>
          </div>
        </div>
      `;
    });
    document.getElementById("container").innerHTML = data1;
  })
  .catch(error => console.log('ERROR'));
