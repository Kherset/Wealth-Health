import { DropdownMenu } from "@kherset/dropdown-menu";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { formatDate } from "../../app/formatDate";
import { createNewEmployee } from "../../features/employeeSlice";
import Modal from "../modal/Modal";
import "./form.css";

export default function Form() {
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    birthdate: null,
    startdate: null,
    street: "",
    city: "",
    countryState: "",
    zipcode: "",
    department: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    dispatch(createNewEmployee(formData));
    // Small delay added to allow the component to load properly.
    setTimeout(() => {
      setShowModal(true);
    }, 1);
  };

  useEffect(() => {
    if (submitting) {
      setShowModal(false);
    }
  }, [submitting]);

  const handleDateChange = (date, fieldName) => {
    const formattedDate = formatDate(date);
    setFormData({
      ...formData,
      [fieldName]: formattedDate,
    });
  };

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const stateOptions = [
    { value: "choice", label: "Choose a State" },
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
  ];

  const departmentOptions = [
    { value: "choice", label: "Choose an Option" },
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Legal", label: "Legal" },
  ];

  return (
    <main id="form-container">
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          modalAnimationStart="modal-fall"
          modalAnimationEnd="modal-rise"
        />
      )}
      <form onSubmit={handleSubmit} className="create-employee-form">
        <div className="input-container">
          <input
            className="input firstname-input"
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={(e) =>
              setFormData({
                ...formData,
                firstname: e.target.value,
              })
            }
          />
        </div>

        <div className="input-container">
          <input
            className="input lastname-input"
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={(e) =>
              setFormData({
                ...formData,
                lastname: e.target.value,
              })
            }
          />
        </div>

        <div className="birthdate-input">
          <DatePicker
            selected={formData.birthdate}
            placeholderText="Date of Birth"
            monthYearClassName="customMonthYear"
            onChange={(date) => handleDateChange(date, "birthdate")}
          />
        </div>

        <div className="startdate-input">
          <DatePicker
            selected={formData.startdate}
            placeholderText="Start Date"
            onChange={(date) => handleDateChange(date, "startdate")}
          />
        </div>

        <div className="input-container street-input">
          <input
            className="input street-input"
            type="text"
            name="street"
            placeholder="Street"
            onChange={(e) =>
              setFormData({
                ...formData,
                street: e.target.value,
              })
            }
          />
        </div>

        <div className="input-container city-input">
          <input
            className="input city-input"
            type="text"
            name="city"
            placeholder="City"
            onChange={(e) =>
              setFormData({
                ...formData,
                city: e.target.value,
              })
            }
          />
        </div>

        <DropdownMenu
          id="countryState"
          name="countryState"
          className="input countryState-input"
          options={stateOptions}
          onChange={(fieldName, value) => handleInputChange(fieldName, value)}
        />

        <div className="input-container zipcode-input">
          <input
            className="input zipcode-input"
            type="text"
            name="zipcode"
            placeholder="Zip Code"
            onChange={(e) =>
              setFormData({
                ...formData,
                zipcode: e.target.value,
              })
            }
          />
        </div>

        <div className="input-container department-input">
          <DropdownMenu
            id="department"
            name="department"
            className="input department-input"
            options={departmentOptions}
            onChange={(fieldName, value) => handleInputChange(fieldName, value)}
          />
        </div>

        <button type="submit" className="new-employee-button">
          Add New Employee
        </button>
      </form>
    </main>
  );
}
