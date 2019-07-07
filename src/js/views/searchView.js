import { elements } from '../models/base';
// import { cursorTo } from 'readline';

export const getChoice = () => elements.searchTitle.value;

export const clearInput = () => {
   elements.searchTitle.value = "";
};

export const clearSearch = () => {
    elements.serchResList.innerHTML = "";
}

const sortRecipeTitle = (title, limit = 17) =>{
    const newTitle = [];

    if(title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if(acc + cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        //Returning final title
        return  `${newTitle.join(' ')} ...`;
    }
    // Returning out of function
    return title;
}

const dispRecipe = el => {
    const template = `
    <li>
        <a class="results__link" href="${el.recipe_id}">
            <figure class="results__fig">
                <img src="${el.image_url}" alt="${el.image_url}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${sortRecipeTitle(el.title)}</h4>
                <p class="results__author">${el.publisher}</p>
            </div>
        </a>
    </li>
    `;

    elements.serchResList.insertAdjacentHTML('beforeend', template);
};

const dispPag = (page, type) => {
    const pag = `
    
    <button class="btn-inline results__btn--${type}" data-goto = ${type === 'prev' ? page - 1: page + 1}>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left': 'right'}"></use>
        </svg>
        <span>Page ${type === 'prev' ? page - 1: page + 1}</span>
    </button>
    
    `;

    return pag;
};

const renderBtn = (page, numResult, resPerPage) =>{
    const pages = Math.ceil(numResult / resPerPage);

    let button;

    if(page === 1 && pages > 1){
        //Only display next btn
        button = dispPag(page, 'next');
    }else if(page < pages){
        //Display both btns
        button = `
            ${dispPag(page, 'prev')}
            ${dispPag(page, 'next')}
        `;
    }else if(page === pages && pages > 1){
        //Display prev btns
        button = dispPag(page, 'prev');
    }

    elements.searchResPag.insertAdjacentHTML('afterbegin', button);
};

export const clearPag = () => {
    elements.searchResPag.innerHTML = '';
};

export const renderResults = (recipe, page = 1, recipePerPage = 10) => {
    //Render Recipe
    const start = (page - 1) * 10;
    const end = recipePerPage * page;

    recipe.slice(start , end).forEach(dispRecipe);

    //Render Pagination
    renderBtn(page, recipe.length, recipePerPage);
}