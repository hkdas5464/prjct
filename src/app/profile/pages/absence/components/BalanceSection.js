const BalanceSection = () => {
    return (
      <div className="bg-gray-200 p-4 rounded-lg shadow-md mt-4">
        <h2 className="text-lg font-semibold mb-2">Available Balance as of Today</h2>
        <p className="text-sm text-gray-600">Does not include future absence requests</p>
        <ul className="mt-2">
          <li>0 Days - Compensatory Leave</li>
          <li>29 Days - Annual Leave</li>
          <li>6 Days - Annual Leave Carryover</li>
        </ul>
      </div>
    );
  };
  
  export default BalanceSection;
  