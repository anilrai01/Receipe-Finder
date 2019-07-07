export const elements = {
    searchForm: document.querySelector('.search'),
    searchTitle: document.querySelector('.search__field'),
    serchResList: document.querySelector('.results__list'),
    searchLoader: document.querySelector('.results'),
    searchResPag: document.querySelector('.results__pages'),
}

export const className = {
    loader: 'loader'
}
// Reloader
export const preLoader = parent => {
    const loader =  `
        <div class="loader">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;

    parent.insertAdjacentHTML('afterbegin', loader);
};


export const clearLoader = () => {
    const loader = document.querySelector(`.${className.loader}`);
    if(loader) loader.parentElement.removeChild(loader);
}
