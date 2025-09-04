import { AppContext } from '../contextApi/ContextAPIform';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Deleteproducts() {
     const {data, deleteData} = useContext(AppContext);
  return (
    <div className="px-6 py-8 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Products</h2>
        <NavLink to={'/products/new'}>
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-lg shadow transition">
            <FontAwesomeIcon icon={faPlus} />
            Add New Product
          </button>
        </NavLink>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

            <NavLink to={`/products/${item.id}/edit`} className="w-full">
              <button className="mt-2 w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition">
                Edit Product
              </button>
            </NavLink>

            <button
              onClick={() => deleteData(item.id)}
              className="mt-2 w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
            >
              Delete Product
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Deleteproducts