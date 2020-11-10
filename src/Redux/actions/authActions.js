export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILED = "SIGN_IN_FAILED";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";
export const EMAIL_VERIFICATION_SENT = "EMAIL_VERIFICATION_SENT";
export const EMAIL_SENT_ERROR = "EMAIL_SENT_ERROR";

export const signInSuccess = () => {
  return {
    type: SIGN_IN_SUCCESS,
  };
};

export const signInFailed = (err) => {
  return {
    type: SIGN_IN_FAILED,
    payload: err,
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};

export const signUpSuccess = () => {
  return {
    type: SIGN_UP_SUCCESS,
  };
};

export const signUpFailed = (err) => {
  return {
    type: SIGN_UP_FAILED,
    payload: err,
  };
};

export const emailVerificationSent = () => {
  return {
    type: EMAIL_VERIFICATION_SENT,
  };
};

export const emailSentError = (err) => {
  return {
    type: EMAIL_SENT_ERROR,
    payload: err,
  };
};
