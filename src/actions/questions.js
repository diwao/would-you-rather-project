import { saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleSaveQuestionAnswer({ qid, answer }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(answerQuestion({ authedUser, qid, answer }));
    });
  };
}
