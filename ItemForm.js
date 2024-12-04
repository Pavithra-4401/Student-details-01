import React, { useState, useEffect } from "react";

const ItemForm = ({ addItem, editingItem, updateItem }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    language: "", 
    address: "",
  });

  
  const languages = [
    "Tamil",
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Chinese",
    "Japanese",
    "Russian",
  ];


  useEffect(() => {
    if (editingItem) {
      setFormData({
        name: editingItem.name,
        email: editingItem.email,
        phone: editingItem.phone,
        date_of_birth: editingItem.date_of_birth,
        language: editingItem.language,
        address: editingItem.address,
      });
    }
  }, [editingItem]);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateItem({ ...editingItem, ...formData });
    } else {
      const newItem = { id: Date.now(), ...formData };
      addItem(newItem);
    }

   
    setFormData({
      name: "",
      email: "",
      phone: "",
      date_of_birth: "",
      language: "",
      address: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="container xs-6 p-3 w-50 justify-content-center ">
        <div className="card p-3">
          {/* Name Field */}
          <div className="input-group mb-3">
            <label htmlFor="name" className="control-label col-sm-3">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          {/* Email Field */}
          <div className="input-group mb-3">
            <label htmlFor="email" className="control-label col-sm-3">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          {/* Phone Field */}
          <div className="input-group mb-3">
            <label htmlFor="phone" className="control-label col-sm-3">Phone No</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          {/* Date of Birth Field */}
          <div className="input-group mb-3">
            <label htmlFor="date_of_birth" className="control-label col-sm-3">Date of Birth</label>
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          {/* Language Dropdown Field */}
          <div className="input-group mb-3">
            <label htmlFor="language" className="control-label col-sm-3">Preferred Language</label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
              className="form-control"
            >
              <option value="">Select Language</option>
              {languages.map((language, index) => (
                <option key={index} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>

          {/* Address Field */}
          <div className="input-group mb-3">
            <label htmlFor="address" className="control-label col-sm-3">Address</label>
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            {editingItem ? "Update Item" : "Add Item"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ItemForm;
