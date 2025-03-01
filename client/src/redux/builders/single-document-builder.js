import {
  fetchSingleDocumentThunk,
  fetchSingleDocumentByIdThunk
} from "@thunks/single-document-thunk";
import moment from "moment";
import {fetchDocumentStatusDataThunk} from "@thunks/document-status";
import { DATE_FORMAT, EMPTY_DOCUMENT } from "@constants/document";
import { setDataToLocalStorage } from "@/helpers/localStorageActions";

export const loopSingleDocumentCases = (builder) => {
  builder.addCase(fetchSingleDocumentThunk.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(fetchSingleDocumentThunk.fulfilled, (state, { payload }) => {
    state.loading = false;
    if (payload.id === EMPTY_DOCUMENT) {
      setDataToLocalStorage("currentDocument", payload);
      state.currentDocument = {
        _id: payload._id,
        id: payload.id === EMPTY_DOCUMENT ? "" : payload.id,
        name: payload.name === EMPTY_DOCUMENT ? "" : payload.name,
        surname: payload.surname === EMPTY_DOCUMENT ? "" : payload.surname,
        middlename:
          payload.middleName === EMPTY_DOCUMENT ? "" : payload.middleName,
        birthDate: moment(new Date()).format(DATE_FORMAT),
        from: moment(new Date()).format(DATE_FORMAT),
        to: moment(new Date()).format(DATE_FORMAT),
      };
    } else {
      state.currentDocument = payload;
    }
  });
  builder.addCase(fetchSingleDocumentThunk.rejected, (state) => {
    state.loading = false;
    state.error = true;
  });

  builder.addCase(fetchSingleDocumentByIdThunk.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(
    fetchSingleDocumentByIdThunk.fulfilled,
    (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.currentDocument = payload;
    },
  );
  builder.addCase(fetchSingleDocumentByIdThunk.rejected, (state) => {
    state.loading = false;
    state.error = true;
  });
};
