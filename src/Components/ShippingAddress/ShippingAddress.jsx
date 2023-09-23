const ShippingAddress = () => {
  return (
    <div>
      <div>
        <div className="mt-5">
          {" "}
          <label htmlFor="" className="mt-5">
            Country <span>*</span>
          </label>
        </div>

        <select name="" id="" className="w-full border border-black p-2  mt-2">
          <option className="shadow-lg shadow-blue-400" value="">
            bangladesh
          </option>
          <option className="shadow-lg shadow-blue-400" value="">
            Algeria
          </option>
          <option className="shadow-lg shadow-blue-400" value="">
            Afghanistan
          </option>
          <option className="shadow-lg shadow-blue-400" value="">
            ghana
          </option>
          <option className="shadow-lg shadow-blue-400" value="">
            Albania
          </option>
          <option className="shadow-lg shadow-blue-400" value="">
            baharain
          </option>
          <option className="shadow-lg shadow-blue-400" value="">
            Colombia
          </option>
        </select>
      </div>
      <div className="flex gap-2 mt-3 w-full">
        {" "}
        <div className="w-full">
          <div>
            <label htmlFor="">
              First Name <span>*</span>
            </label>
          </div>
          <input type="text" className="border w-full p-1" />
        </div>
        <div className="w-full">
          <div>
            <label htmlFor="">
              Last Name <span>*</span>
            </label>
          </div>
          <input type="text" className="border w-full p-1" />
        </div>
      </div>
      <div>
        <div className="w-full mt-4">
          <div className="mb-2">
            <label htmlFor="">
              Company Name <span>*</span>
            </label>
          </div>
          <input type="text" className="border w-full p-1" />
        </div>
      </div>
      <div>
        <div className="w-full mt-4">
          <div className="mb-2">
            <label htmlFor="">
              Street Address <span>*</span>
            </label>
          </div>
          <input
            type="text"
            placeholder="Stress Address"
            className="border w-full p-1"
          />
        </div>
      </div>
      <div>
        <div className="w-full mt-4">
          <input
            type="text"
            placeholder="Apartment suite unit etc.(optional)"
            className="border w-full p-2 mt-2"
          />
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="mb-2">
          <label htmlFor="">
            Town/City <span>*</span>
          </label>
        </div>
        <input
          type="text"
          placeholder="Town/City"
          className="border w-full p-1"
        />
      </div>
      <div className="flex gap-2 mt-3 w-full">
        {" "}
        <div className="w-full">
          <div>
            <label htmlFor="">
              State/Country <span>*</span>
            </label>
          </div>
          <input type="text" className="border w-full p-1" />
        </div>
        <div className="w-full">
          <div>
            <label htmlFor="">
              PostCode/Zip <span>*</span>
            </label>
          </div>
          <input
            type="text"
            placeholder="PostCode/Zip"
            className="border w-full p-1"
          />
        </div>
      </div>
      <div className="flex gap-2 mt-3 w-full">
        {" "}
        <div className="w-full">
          <div>
            <label htmlFor="">
              Email <span>*</span>
            </label>
          </div>
          <input type="email" className="border w-full p-1" />
        </div>
        <div className="w-full">
          <div>
            <label htmlFor="">
              Phone <span>*</span>
            </label>
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="border w-full p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
