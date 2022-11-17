import { put, takeEvery } from "redux-saga/effects";
import { CARDS, GETDATA } from "./commen";
import axios from "axios";

function* getdata(props) {
  const data = yield axios.get(`https://api.unsplash.com/search/photos?per_page=50&query=${props.query}&client_id=fNZxU3j0BwP87u2Fco6aFSZOkn-4S9kmkx9bGH5nq3s`);
  yield put({ type: GETDATA, payload: data });
  
}

function* Saga() {
  yield takeEvery(CARDS, getdata);
}

export default Saga;
