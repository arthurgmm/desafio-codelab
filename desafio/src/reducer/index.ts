import { users, cards } from "../data"

export interface states {
    messages: {
        from: string,
        text: string
    }[],
    current_id: number,
    users: {
        id: number,
        name: string,
        effort: number,
        time: number
    }[],
    current_card: {
        name: string,
        description: string,
        status: boolean,
        effort: number,
        time: number
    }
}

const INITIAL_STATE = {
    messages: [],
    current_id: users[0].id,
    users: users,
    current_card: {
        name: cards[0].name,
        description: cards[0].description,
        status: cards[0].status,
        effort: cards[0].effort,
        time: cards[0].time
    }
}

export type messageType = {from: string, text: string}
export type userType = {id: number, name: string, effort: number, time: number}
export type usersType = {id: number, name: string, effort: number, time: number}[]
export type cardType = {name: string, description: string, status: boolean, effort: number, time: number}

type ActionMessage = {type: 'NEW_MESSAGE', payload: messageType}
type ActionID = {type: 'SET_ID', payload: number}
type ActionUsers = {type: 'SET_USERS', payload: usersType}
type ActionFinish = {type: 'FINISH_CARD', payload: cardType}
type ActionVoteCard = {type: 'SET_VOTE', payload: cardType}

type Action = ActionMessage | 
            ActionID | 
            ActionFinish | 
            ActionUsers | 
            ActionVoteCard

export const reducer = (state:states = INITIAL_STATE, action: Action) => {
    switch(action.type) {
        case 'NEW_MESSAGE': {
            return {...state, messages: [...state.messages, action.payload]}
        }
        case 'SET_ID': {
            return {...state, current_id: action.payload}
        }
        case 'SET_USERS': {
            return {...state, users: action.payload}
        }
        case 'FINISH_CARD': {
            return {...state, current_card: action.payload}
        }
        case 'SET_VOTE': {
            return {...state, current_card: action.payload}
        }
        default:
            return state
    }
}