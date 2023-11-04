const { createSlice } = require('@reduxjs/toolkit');
const {
  registerThunk,
  loginThunk,
  logoutThunk,
  userThunk,
  addIncomeTransactionThunk,
  addExpenseTransactionThunk,
  deleteExpenseTransactionThunk,
  deleteIncomeTransactionThunk,
  userSetBalanceThunk,
} = require('./thunks');

const initialState = {
  userData: null,
  isLoading: false,
  error: null,
  accessToken: null,
  isSignedIn: false,
  id: null,
  balance: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      //------------ Registration -------------//

      .addCase(registerThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.isSignedIn = true;
        state.id = action.payload.id;
        state.userData = action.payload.user;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //------------- Log in ------------------//

      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload.userData;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = false;
        state.error = action.payload;
      })

      //------------- Log out -----------------//

      .addCase(logoutThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        return {
          ...initialState,
        };
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = false;
        state.error = action.payload;
      })
      //---------- User Info -----------------//

      .addCase(userThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(userThunk.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.isSignedIn = true;
        state.balance = action.payload.balance;
      })
      .addCase(userThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addIncomeTransactionThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.newBalance;
      })
      .addCase(addExpenseTransactionThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.newBalance;
      })
      .addCase(
        deleteExpenseTransactionThunk.fulfilled,
        (state, { payload }) => {
          state.balance = payload.newBalance;
        }
      )
      .addCase(deleteIncomeTransactionThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.newBalance;
      })
      .addCase(userSetBalanceThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.newBalance;
      });
  },
});

export const { setBalance } = userSlice.actions;
export const userReducer = userSlice.reducer;
