import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PythonAPI = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://127.0.0.1:5000")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);
  const formatedData = data.map((d) => {
    return (
      <>
        <div class="card col-md-3">
          <div class="card-body">
            <h5 class="card-title">{d.id}</h5>
            <p class="card-text">{d.UserName}</p>
            <p class="card-text">{d.IsLiked}</p>
          </div>
        </div>
      </>
    );
  });
  return <div className="row">{formatedData}</div>;
};

export default PythonAPI;
