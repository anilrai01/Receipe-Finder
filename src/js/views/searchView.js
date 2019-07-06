import { elements } from '../models/DOM';

export const getChoice = () => elements.searchTitle.value;

export const clearInput = () => {
   elements.searchTitle.value = "";
};

export const clearSearch = () => {
    elements.serchResList.innerHTML = "";
}

const dispRecipe = el => {
    const template = `
    <li>
        <a class="results__link" href="${el.recipe_id}">
            <figure class="results__fig">
                <img src="${el.image_url}" alt="${el.image_url}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${el.title}</h4>
                <p class="results__author">${el.publisher}</p>
            </div>
        </a>
    </li>
    `;

    elements.serchResList.insertAdjacentHTML('beforeend', template);
};

export const renderResults = recipe => {
    recipe.forEach(dispRecipe);
}