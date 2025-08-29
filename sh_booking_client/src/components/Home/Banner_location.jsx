export default function Banner_location() {
  return (
    <div className="px-1 md:px-5 py-2 border-2 rounded-md shadow-2xl space-y-2">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
        <div className="flex flex-col ">
          <label>Location</label>
          <input
            type="text"
            placeholder="Search Location"
            className="border-2 rounded-md px-2 py-1"
          ></input>
        </div>
        
          <div className="flex flex-col">
            <label>Guest and Rooms</label>
            <input
              type="text"
              placeholder="2 Guest, 1 Room"
              className="border-2 rounded-md px-2 py-1"
            ></input>
          
        </div>
        <div className="flex flex-col w-[212.8px]">
          
            <label>Check In/Out Date</label>
            <input
              type="date"
              placeholder="Search Location"
              className="border-2 rounded-md px-2 py-1"
            ></input>
         
        </div>
      </div>
      <div className="w-[212.8px] mx-auto md:w-full">
        <button className=" btn btn-primary w-full">Search</button>
      </div>
    </div>
  );
}
