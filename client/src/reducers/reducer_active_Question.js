export default function(state = null, action) {
	console.log('inside reducer_active_Question state is : ',state)
	switch(action.type) {
		case 'ANSWER_SELECTED':
		return {...state, quizAnswers: action.payload.answers, questionIndex: action.payload.index};
		default: return state
	}
	return state;
}

