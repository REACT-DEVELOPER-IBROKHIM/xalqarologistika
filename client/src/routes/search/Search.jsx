import { useEffect } from "react";
import "./Search.scss";
import { useParams } from "react-router-dom";
import Draft from "@routes/draft/Draft";
import { fetchSingleDocumentByIdThunk } from "@/redux/thunks/single-document-thunk";
import {
  getSingleDocument,
  getSingleDocumentLoading,
} from "@/redux/selectors/single-document";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const document = useSelector(getSingleDocument);
  const loading = useSelector(getSingleDocumentLoading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleDocumentByIdThunk(id));
  }, []);
  return (
    <div className="search-certificate">
      {!loading && document ? (
        <div className="search-certificate__content">
          <Draft document={document} />
        </div>
      ) : !document && !loading ? (
        <p>No data</p>
      ) : (
        <Spin tip="Loading..." />
      )}
    </div>
  );
};

export default Search;
