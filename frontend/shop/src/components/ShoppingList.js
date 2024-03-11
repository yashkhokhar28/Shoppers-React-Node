import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShoppingList = () => {
  const [shops, setShops] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setShops(res);
      });
  }, []);
  const formatedData = shops.map((s) => {
    return (
      <>
        <div class="card col-md-3">
          <div class="card-body">
            <h5 class="card-title">{s.ShopID}</h5>
            <p class="card-text">{s.ShopName}</p>
            <p class="card-text">{s.ShopAddress}</p>
            <button
              class="btn btn-outline-primary"
              onClick={() => {
                navigate("/shop/" + s.ShopID);
              }}
            >
              View
            </button>
            <button
              class="btn btn-outline-danger"
              onClick={() => {
                fetch("http://localhost:5000/" + s.ShopID, { method: "DELETE" })
                  .then((res) => {
                    return res.json();
                  })
                  .then(() => {
                    window.location.reload();
                  });
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </>
    );
  });
  return <div className="row">{formatedData}</div>;
};

export default ShoppingList;
