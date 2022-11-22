export const findItemIndexById = (items, id) => {
    return items.findIndex((item) => item.id === id)
}

export function overrideItemAtIndex(array,newItem,targetIndex){
    return array.map((item, index) => {
        if (index !== targetIndex){
            return item
        }
        return newItem
    })
}

