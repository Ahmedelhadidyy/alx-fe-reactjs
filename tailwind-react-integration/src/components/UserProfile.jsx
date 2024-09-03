function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl sm:p-4 sm:max-w-xs md:p-8 md:max-w-sm" >
        <img src="https://via.placeholder.com/150" alt="User" className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"/>
        <h1 className="sm:text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500">John Doe</h1>
        <p className="text-gray-600 sm:text-sm md:text-base hover:text-gray-800">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;