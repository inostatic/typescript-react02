import {data} from "./data"
import {searchByStrAC, selectedItemAC, sendFormAc, setDataAC, setItemAC, setLoaderAC, sortByAC} from "./actionData"

let initialState = {
    data: [],
    dataReserve: [],
    items: [],
    countItem: 50,
    currentPage: 1,
    countPages: 0,
    selectedRow: null,
    isLoaded: true
}



test('must disable the loader', () => {
    let action = setLoaderAC()
    let newState = data(initialState, action)
    expect(newState.isLoaded).toBe(false)

})


test('need to download the data', () => {
    const dateArr = [{
        id: 1,
        firstName: 'Nate'
    }]
    let action = setDataAC(dateArr)
    let newState = data(initialState, action)
    expect(newState.data.length).toBe(1)
    expect(newState.data[0].firstName).toBe('Nate')
})

test('should return the number of pages', () => {
    let state = {
        data: [{id: 1}, {id: 1}, {id: 1}],
        currentPage: 1,
        countPages: 0,
        countItem: 50,
        items: []
    }
    let action = setItemAC()
    let newState = data(state, action)
    expect(newState.countPages).toBe(1)
    expect(newState.items.length).toBe(3)
})

test('should return the selected string', () => {
    let state = {
        items: [{id: 1}, {id: 2}, {id: 3}]
    }
    let action = selectedItemAC(2)
    let newState = data(state, action)
    expect(newState.selectedRow.id).toBe(2)
})

test('must add an entry to the table', () => {
    const form = {
        id: 639,
        firstName: 'Elaine',
        lastName: 'Hmptn',
        email: 'ZPick@dolor.gov',
        phone: '(496)594-8334'
    }
    let action = sendFormAc(form)
    let newState = data(initialState, action)
    expect(newState.data[0].id).toBe(639)
    expect(newState.dataReserve[0].id).toBe(639)
    expect(newState.items[0].id).toBe(639)
    expect(newState.data.length).toBe(1)
    expect(newState.countPages).toBe(1)
})

test('must sort the data', () => {
    let state = {
        data: [{id: 2}, {id: 1}, {id: 3}],
        currentPage: 1,
        countPages: 0,
        countItem: 50
    }
    let payload = {
        key: 'id',
        flag: false
    }
    let action = sortByAC(payload)
    let newState = data(state, action)
    expect(newState.data[0].id).toBe(1)
    expect(newState.items[2].id).toBe(3)
})

test('should return a selection by string', () => {
    let state = {
        data: [{id: 2}, {id: 3}],
        dataReserve: [{id: 2}, {id: 1}, {id: 3}],
        currentPage: 1,
        countPages: 1,
        countItem: 50
    }
    let action = searchByStrAC('')
    let newState = data(state, action)
    expect(newState.data.length).toBe(3)

})

test('should return a selection by empty string', () => {
    let state = {
        dataReserve: [
            {
                id: 558,
                firstName: 'Nikko',
                lastName: 'Bell',
                email: 'KCates@nullam.com',
                phone: '(756)861-5796'
            },
            {
                id: 689,
                firstName: 'Ali',
                lastName: 'Bergin',
                email: 'MLightner@tellus.ly',
                phone: '(434)838-5015'
            },
            {
                id: 415,
                firstName: 'Jonathan',
                lastName: 'Polovich',
                email: 'LEugene@consequat.ly',
                phone: '(606)740-0214'
            }
        ],
        currentPage: 1,
        countPages: 1,
        countItem: 50
    }
    let action = searchByStrAC('be')
    let newState = data(state, action)
    expect(newState.items.length).toBe(2)
    expect(newState.data[0].firstName).toBe('Nikko')
    expect(newState.data[1].firstName).toBe('Ali')
})
