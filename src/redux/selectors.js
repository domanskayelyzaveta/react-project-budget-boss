export const selectId = state => state.user.id;
export const selectToken = state => state.user.accessToken;
export const selectIsSignedIn = state => state.user.isSignedIn;
export const selectEmail = state => state.user.userData?.email;
export const selectPeriodData = state => state.period.periodInfo;
export const selectIsLoading = state => state.user.isLoading;
