import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Api() {
  const [data, setData] = useState([]);
  const API = "https://fakestoreapi.com/products";

  // Handle HTTP req and responses
  const fectData = async () => {
    try {
      const res = await axios.get(API);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fectData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-8 bg-gray-50">
      {data.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-xl p-5 flex flex-col items-center w-full max-w-xs mx-auto bg-white shadow hover:shadow-lg transition-shadow duration-200"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-36 h-36 object-contain mb-3"
          />
          <h1 className="font-semibold text-base text-gray-800 text-center line-clamp-2">
            {item.title}
          </h1>
          <p className="text-green-600 font-bold mt-2 text-lg">
            ${item.price}
          </p>
          <NavLink to={`/products/${item.id}`} className="w-full">
            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition">
              See Details
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Api;
