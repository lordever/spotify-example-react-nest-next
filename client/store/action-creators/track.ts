import {Dispatch} from "react";
import {TrackAction, TrackActionTypes} from "../../types/track";
import axios from "axios";

export const fetchTracks = async (dispatch: Dispatch<TrackAction>) => {
    try {
        const response = await axios("http://localhost:5000/tracks");
        dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data});
    } catch (e) {
        dispatch({type: TrackActionTypes.FETCH_TRACKS_ERROR, payload: "Track load error"})
    }
}

export const searchTracks = async (dispatch: Dispatch<TrackAction>, query: string) => {
    try {
        const response = await axios("http://localhost:5000/tracks/search?query=" + query);
        dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data});
    } catch (e) {
        dispatch({type: TrackActionTypes.FETCH_TRACKS_ERROR, payload: "Track load error"})
    }
}
