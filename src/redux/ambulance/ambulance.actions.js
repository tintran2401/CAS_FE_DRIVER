import AmbulanceActionTypes from "./ambulance.types";

export const registerAmbulance = (token, userId, ambulance) => ({
    type: AmbulanceActionTypes.REGISTER_AMBULANCE_START,
    payload: { token, userId, ambulance }
});

export const registerAmbulanceSuccess = ambulance => ({
    type: AmbulanceActionTypes.REGISTER_AMBULANCE_SUCCESS,
    payload: ambulance
});

export const registerAmbulanceFail = error => ({
    type: AmbulanceActionTypes.REGISTER_AMBULANCE_FAIL,
    payload: error
});

export const updateAmbulance = (token, userId, ambulance) => ({
    type: AmbulanceActionTypes.UPDATE_AMBULANCE_START,
    payload: { token, userId, ambulance }
});

export const updateAmbulanceSuccess = ambulance => ({
    type: AmbulanceActionTypes.UPDATE_AMBULANCE_SUCCESS,
    payload: ambulance
});

export const updateAmbulanceFail = error => ({
    type: AmbulanceActionTypes.UPDATE_AMBULANCE_FAIL,
    payload: error
});
