import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ShoppingAdd = () => {
  const [data, setData] = useState({
    ShopID: "",
    ShopName: "",
    ShopAddress: "",
  });
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    fetch("http://localhost:5000/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, [params.id]);
  return (
    <>
      <form className="m-4">
        <div class="form-floating mb-3">
          <input
            type="text"
            value={data ? data.ShopID : null}
            class="form-control"
            id="floatingInput"
            onChange={(e) => setData({ ...data, ShopID: e.target.value })}
          />
          <label for="floatingInput">Shop ID</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            value={data ? data.ShopName : null}
            class="form-control"
            id="floatingInput"
            onChange={(e) => setData({ ...data, ShopName: e.target.value })}
          />
          <label for="floatingInput">Shop Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            value={data ? data.ShopAddress : null}
            id="floatingInput"
            onChange={(e) => setData({ ...data, ShopAddress: e.target.value })}
          />
          <label for="floatingInput">Shop Address</label>
        </div>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={() => {
            if (params.id > 0) {
              fetch("http://localhost:5000/" + params.id, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
              }).then((res) => {
                if (res.ok) {
                  navigate("/shops");
                } else {
                  alert("error");
                }
              });
            } else {
              fetch("http://localhost:5000/", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
              }).then((res) => {
                if (res.ok) {
                  navigate("/shops");
                } else {
                  alert("error");
                }
              });
            }
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ShoppingAdd;
