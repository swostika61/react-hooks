export const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payLoad]
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'item added',
        }
    }
    if (action.type === 'NO_VALUE') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'enter value'
        }}
        if (action.type === 'CLOSE_MODAL') {
            return {
                ...state,
                isModalOpen: false,
                modalContent: 'enter value'
            }}
            if (action.type === 'REMOVE_ITEM') {
                const newPeople = state.people.filter((person)=> person.id !== action.payLoad)
                return {
                    ...state,
                    people: newPeople
                }}
    throw new Error('no matching action type');
};