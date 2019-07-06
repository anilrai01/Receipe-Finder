import { elements } from './models/DOM';
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

        // Search fro receipe
        await state.search.getReceipe();

        //Rendering the result on UI
        // console.log(state.search.result);
        searchView.renderResults(state.search.result);
    }
} 
 
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
    
});