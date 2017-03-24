export const selectLibrary = (librarayId) => {
    return {
        type: 'select_library',
        payload: librarayId
    }
}