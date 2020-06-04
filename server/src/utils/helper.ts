import UserInterface from '../types/UserInterface'

function sortAscending(array: any, filterOption: keyof UserInterface) {
    let arraySorted = [...array]
    return arraySorted.sort(function (a: UserInterface, b: UserInterface) {
        var itemA = a[filterOption].toLowerCase()
        var itemB = b[filterOption].toLowerCase()

        if (itemA < itemB) {
            return -1
        }
        if (itemA > itemB) {
            return 1
        }

        return 0
    })
}

function sortDescending(array: any, filterOption: keyof UserInterface) {
    let arraySorted = [...array]
    arraySorted = array.sort(function (a: UserInterface, b: UserInterface) {
        var itemA = a[filterOption].toLowerCase()
        var itemB = b[filterOption].toLowerCase()

        if (itemA > itemB) {
            return -1
        }
        if (itemA < itemB) {
            return 1
        }

        return 0
    })

    return arraySorted
}

function filterUser(array: any, property: string, filter: any) {
    let copyArray = [...array]
    return copyArray.filter((user) => user[property].toLowerCase().includes(filter))
}

export { sortAscending, sortDescending, filterUser }
