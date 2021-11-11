export interface states {
    messages: string[]
}

const INITIAL_STATE = {
    messages: []
}

type Action = {type: 'NEW_MESSAGE', payload: string}

export const reducer = (state:states = INITIAL_STATE, action: Action) => {
    switch(action.type) {
        case 'NEW_MESSAGE': {
            return {...state, messages: [...state.messages, action.payload]}
        }
        default:
            return state
    }
}