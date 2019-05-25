import {
    NEW_USER,
    SELECT_PROFILTYPE,
    CREATE_GENERAL_INFO,
    CONNEXION,
    UPDATE_PROFILE,
    CHANGE_CHOICE,
    SAVE_PROFILE,
    SAVE_RESEARCH_REQUEST,
    SAVE_SELECTED_ARTICLE
} from './constants';

// name of actioncreator

export function newUser(userID, userName, userPassword) {
    return {
        type: NEW_USER,
        userID,
        userName,
        userPassword
    };
}

export function updateProfile(labName, firstName, lastName, country, website, technicalEmail, interpretationEmail) {
    return {
        type: UPDATE_PROFILE,
        labName,
        firstName,
        lastName,
        country,
        website,
        technicalEmail,
        interpretationEmail
    };
}

export function saveProfile(profile) {
    return {
        type: SAVE_PROFILE,
        profile
    };
}

export function saveResearchRequest(userRequest) {
    console.log(userRequest);
    return {
        type: SAVE_RESEARCH_REQUEST,
        userRequest
    };
}

export function saveSelectedArticle(selectedArticleId) {
    return {
        type: SAVE_SELECTED_ARTICLE,
        selectedArticleId
    };
}

export function changeChoice(choice) {
    return {
        type: CHANGE_CHOICE,
        choice
    };
}

export function selectProfilType(profilType, userID) {
    return {
        type: SELECT_PROFILTYPE,
        profilType,
        userID
    };
}

export function createGeneralInfo(profilType, userID, lastname, firstname, labname, country, website, technicalEmail, interpretationEmail, researchThemes) {
    return {
        type: CREATE_GENERAL_INFO,
        profilType,
        userID,
        lastname,
        firstname,
        labname,
        country,
        website,
        technicalEmail,
        interpretationEmail,
        researchThemes
    };
}


export function connexion(profilInfo, userID) {
    return {
        type: CONNEXION,
        profilInfo,
        userID
    };
}
