// Action Creator 

export const selectLibrary = (librarayId) => {
    console.log(librarayId);
    // Action Itself
    return {
        type: 'select_library',
        payload: librarayId
    };
};