import { users, cards } from "../data"

export interface states {
    messages: {
        from: string,
        text: string
    }[],
    current_user: {
        id: number,
        name: string,
        effort: number,
        time: number
    },
    current_card: {
        name: string,
        description: string,
        status: boolean
    },
    consolidated: {
        effort: number,
        time: number
    },
    already_voted: {
        id: number,
        name: string,
        effort: number,
        time: number
    }[]
}

const INITIAL_STATE = {
    messages: [],
    current_user: {
        id: users[0].id,
        name: users[0].name,
        effort: users[0].effort,
        time: users[0].time
    },
    current_card: {
        name: cards[0].name,
        description: cards[0].description,
        status: cards[0].status
    },
    consolidated: {
        effort: -1,
        time: -1
    },
    already_voted: []
}

type messageType = {from: string, text: string}
type userType = {id: number, name: string, effort: number, time: number}
type cardType = {name: string, description: string, status: boolean}

type ActionMessage = {type: 'NEW_MESSAGE', payload: messageType}
type ActionUser = {type: 'SET_USER', payload: userType}
type ActionFinish = {type: 'FINISH_CARD', payload: cardType}
type ActionEffort = {type: 'VOTE_EFFORT', payload: userType}
type ActionTime = {type: 'VOTE_TIME', payload: userType}
type ActionVote = {type: 'SET_VOTE', payload: userType}

type Action = ActionMessage | ActionUser | ActionFinish | ActionEffort | ActionTime | ActionVote

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
        case 'VOTE_EFFORT': {
            return {...state, current_user: action.payload}
        }
        case 'VOTE_TIME': {
            return {...state, current_user: action.payload}
        }
        case 'SET_VOTE': {
            return {...state, already_voted: [...state.already_voted, action.payload]}
        }
        default:
            return state
    }
}