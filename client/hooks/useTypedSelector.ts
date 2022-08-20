import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/reducers/playerReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
