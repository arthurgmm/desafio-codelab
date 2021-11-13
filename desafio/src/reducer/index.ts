import { users } from "../data"

export interface states {
    messages: {
        from: string,
        text: string
    }[],
    current_user: {
        id: number,
        name: string
    }
}

const INITIAL_STATE = {
    messages: [],
    current_user: {
        id: users[0].id,
        name: users[0].name
    }
}

type messageType = {from: string, text: string}
type userType = {id: number, name: string}

type ActionMessage = {type: 'NEW_MESSAGE', payload: messageType}
type ActionTeste = {type: 'SET_USER', payload: userType}

type Action = ActionMessage | ActionTeste

export const reducer = (state:states = INITIAL_STATE, action: Action) => {
    switch(action.type) {
        case 'NEW_MESSAGE': {
            return {...state, messages: [...state.messages, action.payload]}
        }
        case 'SET_USER': {
            return {...state, current_user: action.payload}
        }
        default:
            return state
    }
}