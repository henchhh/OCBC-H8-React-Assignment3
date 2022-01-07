const initialState = {
    inputContent: '',
    backlogContent: [],
    inProgressContent: [],
    evaluationContent: [],
    doneContent: []
  }
  
  export default function counterReducer (state = initialState, action) {
    const { type, payload } = action
  
    switch(type){
        case 'CHECKINPUT':
            return { ...state, inputContent: payload }
        case 'TOBACKLOG':
            return { ...state, backlogContent: payload }
        case 'TOINPROGRESS':
            return { ...state, inProgressContent: payload }
        case 'TOEVALUATION':
            return { ...state, evaluationContent: payload }
        case 'TODONE':
            return { ...state, doneContent: payload }
        case 'CLEAR':
            return { ...state, doneContent: payload }
      default:
        return state
    }
}