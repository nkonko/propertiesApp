import { UserResponse } from './user.models';
import * as fromActions from './user.actions';

export interface UserState {
  entity: UserResponse | null;
  id: string | null;
  loading: boolean | null;
  error: string | null;
}

const initialState: UserState = {
  entity: null,
  id: null,
  loading: null,
  error: null,
};

export function reducer(
  state = initialState,
  action: fromActions.All | any
): UserState {
  switch (action.type) {
    case fromActions.Types.INIT: {
      return { ...state, loading: true };
    }

    case fromActions.Types.INIT_AUTHORIZED: {
      return {
        ...state,
        loading: false,
        entity: action.user,
        id: action.id,
        error: null,
      };
    }

    case fromActions.Types.INIT_ERROR: {
      return {
        ...state,
        loading: false,
        entity: null,
        id: null,
        error: action.error,
      };
    }

    case fromActions.Types.INIT_UNAUTHORIZED: {
      return { ...state, loading: false, entity: null, id: null, error: null };
    }

    case fromActions.Types.SIGN_IN: {
      return { ...state, loading: true, entity: null, id: null, error: null };
    }

    case fromActions.Types.SIGN_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        entity: action.user,
        id: action.id,
        error: null,
      };
    }

    case fromActions.Types.SIGN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        entity: null,
        id: null,
        error: action.error,
      };
    }

    case fromActions.Types.SIGN_UP: {
      return { ...state, loading: true, entity: null, id: null, error: null };
    }

    case fromActions.Types.SIGN_UP_SUCCESS: {
      return {
        ...state,
        loading: false,
        entity: action.user,
        id: action.id,
        error: null,
      };
    }

    case fromActions.Types.SIGN_UP_ERROR: {
      return { ...state, loading: false, entity: null, id: null, error: null };
    }

    case fromActions.Types.SIGN_OUT: {
      return { ...initialState };
    }

    case fromActions.Types.SIGN_OUT_SUCCESS: {
      return { ...initialState };
    }

    case fromActions.Types.SIGN_OUT_ERROR: {
      return {
        ...state,
        loading: false,
        entity: null,
        id: null,
        error: action.error,
      };
    }
    default:
      return state;

  }
}
