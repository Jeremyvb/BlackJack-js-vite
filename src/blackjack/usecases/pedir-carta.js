/**
 * Esta función pide una carta del deck
 * @param {array<string>} deck 
 * @returns {String}
 * Retorna una carta random
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}