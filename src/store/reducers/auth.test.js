import reducer from './auth';
import * as actionTypes from './../actions/actionTypes';

describe('auth reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined,{})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    });

    it('should store the token after login', () => {
        const initState = {
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        };
        const action = {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-user-id'
        };
        const expectedResult = {
            token: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        };
        const result = reducer(initState,action);
        expect(result).toEqual(expectedResult);
    });

});