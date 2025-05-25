import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-10 bg-white text-black shadow-sm rounded-sm p-2">
      <div>
        <h1 className="text-lg font-bold">Hokker</h1>
      </div>
      <div>
        <nav>
          <Link to="/" className="text-gray-700 hover:text-blue-500 mx-2">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-500 mx-2">Products</Link>
          <Link to="/users" className="text-gray-700 hover:text-blue-500 mx-2">Users</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
