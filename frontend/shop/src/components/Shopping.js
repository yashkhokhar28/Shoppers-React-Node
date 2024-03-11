import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Shopping = () => {
  const [shop, setShop] = useState({
    ShopID: "",
    ShopName: "",
    ShopAddress: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setShop(res);
      });
  }, []);

  return (
    <>
      <div class="card col-md-3">
        <div class="card-body">
          <h5 class="card-title">{shop.ShopID}</h5>
          <p class="card-text">{shop.ShopName}</p>
          <p class="card-text">{shop.ShopAddress}</p>
          <button
            class="btn btn-outline-primary"
            onClick={() => {
              navigate("/shop/edit/" + shop.ShopID);
            }}
          >
            Edit
          </button>
          <button
            class="btn btn-outline-danger"
            onClick={() => {
              fetch("http://localhost:5000/" + params.id, { method: "DELETE" })
                .then((res) => {
                  return res.json();
                })
                .then(() => {
                  navigate("/shops");
                });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Shopping;
