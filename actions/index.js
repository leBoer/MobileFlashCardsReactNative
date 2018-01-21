export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export function receiveDecks (decks) {
    decks = JSON.parse(decks);
    return {
        type: RECEIVE_DECKS,
        decks,
    };
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    };
}

export function addCard(title, card) {
    return {
        type: ADD_CARD,
        card,
        title
    };
}