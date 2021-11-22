const allSprints = state => state.sprints.items;
const getIsLoading = state => state.sprints.isLoading;
const getError = state => state.sprints.error;

const allSelectors = { allSprints, getIsLoading, getError };

export default allSelectors;
