import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getReceipe() {
        const key = '5cbc9b66f10c7f7db7c55c71c8bb14c2';
        try{
            const proxy = `https://cors-anywhere.herokuapp.com/`;
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);

        }catch (error){
            console.log(error);
        }
    }
}
