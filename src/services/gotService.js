export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(this._apiBase + url);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${this._apiBase + url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=10');
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses = async () => {
        const res = await this.getResource('/houses');
        return res.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }

    getAllBooks = async () => {
        const res = await this.getResource('/books');
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }

    _transformCharacter = (char) => {
        return {
            name: char.name || 'no data :(',
            gender: char.gender || 'no data :(',
            born: char.born || 'no data :(',
            died: char.died || 'no data :(',
            culture: char.culture || 'no data :(',
            id: char.url.slice(49)
        }
    }

    _transformHouse = (house) => {
        return {
            name: house.name || 'no data :(',
            region: house.region || 'no data :(',
            words: house.words || 'no data :(',
            titles: house.titles || 'no data :(',
            ancestralWeapons: house.ancestralWeapons || 'no data :(',
            id: house.url.slice(45)
        }
    }

    _transformBook = (book) => {
        return {
            name: book.name || 'no data :(',
            numberOfPages: book.numberOfPages || 'no data :(',
            publisher: book.publisher || 'no data :(',
            released: new Date(book.released).toDateString() || 'no data :(',
            id: book.url.slice(44)
        }
    }
}