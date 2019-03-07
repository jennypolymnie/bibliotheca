// name of actioncreator

export function selectProfilType(profilType, userID) {
    return {
        type: 'SELECT_PROFILTYPE',
        profilType,
        userID
    };
}

export function connexion(profilInfo, userID) {
    return {
        type: 'CONNEXION',
        profilInfo,
        userID
    };
}

export function makeASearchPreevaluation(parameter, useLabProfil) {
    return {
        type: 'MAKE_A_SEARCH_PREEVALUATION',
        parameter
        useLabProfil
    };
}


export function makeASearchSubsource(parameter, useLabProfil) {
    return {
        type: 'MAKE_A_SEARCH_SUBSOURCE',
        parameter,
        useLabProfil
    };
}

export function makeASearchSource(parameter, useLabProfil) {
    return {
        type: 'MAKE_A_SEARCH_SOURCE',
        parameter,
        useLabProfil
    };
}


export function makeASearchSubActivity(parameter, useLabProfil) {
    return {
        type: 'MAKE_A_SEARCH_SUBACTIVITY',
        parameter,
        useLabProfil
    };
}

export function makeASearchActivity(parameter, useLabProfil) {
    return {
        type: 'MAKE_A_SEARCH_ACTIVITY',
        parameter,
        useLabProfil
    };
}

export function makeASearchReview(parameter) {
    return {
        type: 'MAKE_A_SEARCH_REVIEW',
        parameter
    };
}

export function incrementRigor(articleID, userID) {
    return {
        type: 'INCREMENT_RIGOR',
        articleID,
        userID
    };
}

export function incrementAnalyse(articleID, userID) {
    return {
        type: 'INCREMENT_ANALYSE',
        articleID,
        userID
    };
}

export function importDocument(userID, title, docType, authors, authorsrights, link) {
    return {
        type: 'IMPORT_DOCUMENT',
        userID,
        title,
        docType,
        authors,
        authorsrights,
        link
    };
}

export function askQuestion(userID, question) {
    return {
        type: 'ASK_QUESTION',
        userID,
        question
    };
}
