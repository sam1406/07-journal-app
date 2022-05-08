/* export const MyMuttation  = (state) => {

} */

export const setEntries = (state, entries) => {
    console.log(state, entries);
    state.entries = [...state.entries, ...entries]
    state.isloading = false
}