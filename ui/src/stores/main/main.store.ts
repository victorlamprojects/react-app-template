import { createAppSlice } from "../createAppSlice"

export type MainState = {
    isLoading: boolean | undefined
}

const initialState: MainState = {
    isLoading: undefined
}

export const mainSlice = createAppSlice({
    name: "main",
    initialState,
    reducers: create => ({
        init: create.asyncThunk(
            async () => {
                await new Promise(resolve => setTimeout(resolve, 5000));
                return {
                    success: true
                };
            },
            {
                pending: state => {
                    state.isLoading = true;
                },
                fulfilled: (state, action) => {
                    state.isLoading = action.payload.success ? false : undefined;
                },
            }
        ),
    }),
    selectors: {
        isLoading: state => state.isLoading,
    },
})

export const { init } = mainSlice.actions

export const { isLoading } = mainSlice.selectors
