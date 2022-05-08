/* export const MyAction  = async({commit}) => {

} */
import journalApi from "@/api/journalApi"
export const loadEntries  = async({commit}) => {
    const {data} = await journalApi.get('/entries.json')

    const entriesArray = []
    for (let id of Object.keys(data)) {
        entriesArray.push({
            id,
            ...data[id]
        })
    }
    //console.log(entriesArray)
    commit('setEntries', entriesArray)
}