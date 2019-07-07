import { elements, preLoader, clearLoader } from './models/base';
import Search from './models/Search';
import * as searchView from './views/searchView';

/** Global State of the App
 * - Search Object
 * - Current Recipe Object
 * - Shopping List Object
 * - Liked Recipe
 */

 const state = {};

 // Search Controller 
const controlSearch = async () => {
    // Get the query from view
    const query = searchView.getChoice();
    // console.log(query);

    if(query){
        // Add new object to state
        state.search = new Search(query);

        // Prepare UI like preloader 
        searchView.clearInput();
        searchView.clearSearch();
        preLoader(elements.serchResList);

        // Search fro receipe
        await state.search.getReceipe();

        //Rendering the result on UI
        // console.log(state.search.result);
        clearLoader();
        searchView.renderResults(state.search.result);
    }
} 
 
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPag.addEventListener('click', el => {
    const btn = el.target.closest('.btn-inline');
    if (btn) {
        const goToPage = btn.dataset.goto;
        // console.log(goToPage);
        searchView.clearSearch();
        searchView.clearPag();
        searchView.renderResults(state.search.result, goToPage);

    }

});