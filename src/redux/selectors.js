export const selectId = state => state.user.id;
export const selectToken = state => state.user.accessToken;
export const selectIsSignedIn = state => state.user.isSignedIn;
export const selectEmail = state => state.user.userData?.email;
export const selectPeriodData = state => state.period.periodInfo;
export const selectIsLoading = state => state.user.isLoading;
export const selectBalance = state => state.user.balance;
export const selectTransaction = state => state.user.userData?.transactions;
export const selectDate = state => state.user.selectedDate;
export const selectorIncomeTransaction = state => state.income.incomes;
export const selectorExpenseTransaction = state => state.expenses.expenses;
export const selectIncomeList_ = state => state.income.incomes?.toReversed();
export const selectExpenseList_ = state =>
  state.expenses.expenses?.toReversed();
export const selectExpensesSummary_ = state => state.expenses.monthsStats;
export const selectIncomeSummary_ = state => state.income.monthsStats;
export const selectRefreshToken = state => state.auth.refreshToken;
