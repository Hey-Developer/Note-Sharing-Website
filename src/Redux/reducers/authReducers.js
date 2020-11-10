import {
  EMAIL_SENT_ERROR,
  EMAIL_VERIFICATION_SENT,
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
} from "../actions/authActions";

const authStatus = {
  signInStatus: {
    success: null,
    failed: null,
    error: null,
  },

  signOutStatus: null,
  signUpStatus: {
    success: null,
    failed: null,
    error: null,
  },
  emailVerification: {
    sent: null,
    error: null,
  },
};

export const authReducer = (state = authStatus, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signInStatus: {
          success: true,
          failed: false,
          error: null,
        },
      };

    case SIGN_IN_FAILED:
      return {
        ...state,
        signInStatus: {
          success: false,
          failed: true,
          error: action.payload.message,
        },
      };

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        signOutStatus: true,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpStatus: {
          success: true,
          failed: false,
          error: null,
        },
      };

    case SIGN_UP_FAILED:
      return {
        ...state,
        signUpStatus: {
          success: false,
          failed: true,
          error: action.payload,
        },
      };

    case EMAIL_VERIFICATION_SENT:
      return {
        ...state,
        emailVerification: {
          sent: true,
          error: null,
        },
      };

    case EMAIL_SENT_ERROR:
      return {
        ...state,
        emailVerification: {
          sent: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
