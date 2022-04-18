/* export const MyGetters  = (state) => {

} */

export const getEntryByTerm  = (state)=> (term) => {
    if ( term.length === 0 ) return state.entries

    return state.entries.filter( entry => entry.text.toLowerCase().includes( term.toLocaleLowerCase()))
}

export const getEntryById  = (state) => (id) => {
    return state.entries.find(entry => entry.id === id)
}