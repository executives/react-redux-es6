import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  // gets the value from the form
  // course = {title: 'the-text-from-the-form'}
  return { type: types.LOAD_COURSES_SUCCESS, courses};
  // goes to the REDUCER with this type
}

// async call to api
// thunks always returns a function that uses dispatch
export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => { //returns a promise -- handy for all api routing
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });  
  };
}
