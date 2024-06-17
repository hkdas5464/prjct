// components/EmployeeProfile.js

const EmployeeProfile = () => {
    return (
      <div className="flex flex-col items-center p-6 font-sans text-black">
        <div className="flex justify-around w-full bg-gray-100 p-4 rounded-lg mb-6">
          <div className="flex flex-col items-center">
            <div className="bg-gray-500 rounded-full w-12 h-12 mb-2"></div>
            <div className="text-center">
              <p className="font-bold">Manager</p>
              <p>xyz Kumar</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Location</p>
            <p>abcd 12345</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Cost Center</p>
            <p>abcd 12345</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Company</p>
            <p>abcd 12345</p>
          </div>
        </div>
        <div className="w-full bg-white p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Job Details</h2>
          <p><strong>Employee ID</strong><br />123456789</p>
          <p><strong>Superior Organization</strong><br /></p>
          <p><strong>Position</strong><br /></p>
          <p><strong>Business Title</strong><br /></p>
          <p><strong>Job Profile</strong><br /></p>
          <p><strong>Employee Type</strong><br /></p>
          <p><strong>Time Type</strong><br /></p>
          <p><strong>Location</strong><br /></p>
          <p><strong>Hire Date</strong><br /></p>
          <p><strong>Time In Job Profile</strong><br /></p>
        </div>
        <div className="w-full bg-white p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <p><strong>Email</strong><br />1234567a9yb@gmail.com</p>
        </div>
        <div className="w-full bg-white p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Work Address</h2>
          <p>Flat No A/5 Sector 9 Ramdinmore</p>
          <p>Pin code - 827004</p>
        </div>
      </div>
    );
  };
  
  export default EmployeeProfile;
  
  
  