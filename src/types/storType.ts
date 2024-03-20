import {store} from "../stors";

type RootState = ReturnType<typeof store.getState>

export type {
    RootState
}