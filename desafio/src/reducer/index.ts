import { users, cards } from "../data"

export interface states {
    messages: {
        from: string,
        text: string
    }[],
    current_user: {
        id: number,
        name: string
    },
    current_card: {
        name: string,
        description: string,
        status: boolean
    }
}

const INITIAL_STATE = {
    messages: [],
    current_user: {
        id: users[0].id,
        name: users[0].name
    },
    current_card: {
        name: cards[0].name,
        description: cards[0].description,
        status: cards[0].status
    }
}

type messageType = {from: string, text: string}
type userType = {id: number, name: string}
type cardType = {name: string, description: string, status: boolean}

type ActionMessage = {type: 'NEW_MESSAGE', payload: messageType}
type ActionUser = {type: 'SET_USER', payload: userType}
type ActionFinish = {type: 'FINISH_CARD', payload: cardType}

type Action = ActionMessage | ActionUser | ActionFinish

export const reducer = (state:states = INITIAL_STATE, action: Action) => {
    switch(action.type) {
        case 'NEW_MESSAGE': {
            return {...state, messages: [...state.messages, action.payload]}
        }
        case 'SET_USER': {
            return {...state, current_user: action.payload}
        }
        case 'FINISH_CARD': {
            return {...state, current_card: action.payload}
        }
        default:
            return state
    }
}