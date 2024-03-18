import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "../modal/Modal";
import "./form.css";

export default function Form() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [inputFields, setInputFields] = useState({
    firstname: "",
    lastname: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    department: "",
  });

  const validateValues = (inputValues) => {
    let errors = {};
    if (!/^[A-Za-z]{2,}$/.test(inputValues.firstname)) {
      errors.firstname = "Please enter a valid first name";
    }
    if (!/^[A-Za-z]{2,}$/.test(inputValues.lastname)) {
      errors.lastname = "Please enter a valid last name";
    }
    if (inputValues.street.length < 5) {
      errors.street = "Please enter a valid street address";
    }
    if (!inputValues.city || inputValues.city.length < 2) {
      errors.city = "Please enter a valid city name";
    }
    if (!inputValues.state || inputValues.state === "") {
      errors.state = "Please choose a State";
    }
    if (!inputValues.zipcode || !/^\d{5}$/.test(inputValues.zipcode)) {
      errors.zipcode = "Please enter a valid 5-digit zip code";
    }
    if (!inputValues.department || inputValues.department === "") {
      errors.department = "Please choose a department";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields({ ...inputFields, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    if (name === "firstname" || name === "lastname") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: /^[A-Za-z]{2,}$/.test(value)
          ? ""
          : `Please enter a valid ${
              name === "firstname" ? "first" : "last"
            } name`,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateValues(inputFields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      setShowModal(true);
      // Ajouter la logique pour soumettre les données
    }
  };

  useEffect(() => {
    if (submitting) {
      // Ajouter la logique de soumission
      console.log("Form submitted!");
    }
  }, [submitting]);

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
            className={`input firstname-input ${errors.firstname && "error"}`}
            type="text"
            name="firstname"
            placeholder="First Name"
            value={inputFields.firstname}
            onChange={handleChange}
          />
          {errors.lastname && (
            <div className="error-message">{errors.firstname}</div>
          )}
        </div>

        <div className="input-container">
          <input
            className={`input lastname-input ${errors.lastname && "error"}`}
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={inputFields.lastname}
            onChange={handleChange}
          />
          {errors.lastname && (
            <p className="error-message">{errors.lastname}</p>
          )}
        </div>

        <div className="birthdate-input">
          <DatePicker
            selected={birthDate}
            onChange={setBirthDate}
            placeholderText="Date of Birth"
            monthYearClassName="customMonthYear"
          />
        </div>

        <div className="startdate-input">
          <DatePicker
            selected={startDate}
            onChange={setStartDate}
            placeholderText="Start Date"
          />
        </div>

        <div className="input-container street-input">
          <input
            className={`input street-input ${errors.street && "error"}`}
            type="text"
            name="street"
            placeholder="Street"
            value={inputFields.street}
            onChange={handleChange}
          />
          {errors.street && <p className="error-message">{errors.street}</p>}
        </div>

        <div className="input-container city-input">
          <input
            className={`input city-input ${errors.city && "error"}`}
            type="text"
            name="city"
            placeholder="City"
            value={inputFields.city}
            onChange={handleChange}
          />
          {errors.city && <p className="error-message">{errors.city}</p>}
        </div>

        <select
          id="state"
          name="state"
          value={inputFields.state}
          onChange={(e) => {
            handleChange(e);
            setSelectedState(e.target.value);
          }}
          className={`input state-input ${errors.state && "error"}`}
        >
          <option value="">Choose a State</option>
          <option value="alabama">Alabama</option>
          <option value="alaska">Alaska</option>
          <option value="arizona">Arizona</option>
          <option value="arkansas">Arkansas</option>
          <option value="california">California</option>
          <option value="colorado">Colorado</option>
          <option value="connecticut">Connecticut</option>
          <option value="delaware">Delaware</option>
          <option value="florida">Florida</option>
          <option value="georgia">Georgia</option>
          <option value="hawaii">Hawaii</option>
          <option value="idaho">Idaho</option>
          <option value="illinois">Illinois</option>
          <option value="indiana">Indiana</option>
          <option value="iowa">Iowa</option>
          <option value="kansas">Kansas</option>
          <option value="kentucky">Kentucky</option>
          <option value="louisiana">Louisiana</option>
          <option value="maine">Maine</option>
          <option value="maryland">Maryland</option>
          <option value="massachusetts">Massachusetts</option>
          <option value="michigan">Michigan</option>
          <option value="minnesota">Minnesota</option>
          <option value="mississippi">Mississippi</option>
          <option value="missouri">Missouri</option>
          <option value="montana">Montana</option>
          <option value="nebraska">Nebraska</option>
          <option value="nevada">Nevada</option>
          <option value="new-hampshire">New Hampshire</option>
          <option value="new-jersey">New Jersey</option>
          <option value="new-mexico">New Mexico</option>
          <option value="new-york">New York</option>
          <option value="north-carolina">North Carolina</option>
          <option value="north-dakota">North Dakota</option>
          <option value="ohio">Ohio</option>
          <option value="oklahoma">Oklahoma</option>
          <option value="oregon">Oregon</option>
          <option value="pennsylvania">Pennsylvania</option>
          <option value="rhode-island">Rhode Island</option>
          <option value="south-carolina">South Carolina</option>
          <option value="south-dakota">South Dakota</option>
          <option value="tennessee">Tennessee</option>
          <option value="texas">Texas</option>
          <option value="utah">Utah</option>
          <option value="vermont">Vermont</option>
          <option value="virginia">Virginia</option>
          <option value="washington">Washington</option>
          <option value="west-virginia">West Virginia</option>
          <option value="wisconsin">Wisconsin</option>
          <option value="wyoming">Wyoming</option>
        </select>

        <div className="input-container zipcode-input">
          <input
            className={`input zipcode-input ${errors.zipcode && "error"}`}
            type="text"
            name="zipcode"
            placeholder="Zip Code"
            value={inputFields.zipcode}
            onChange={handleChange}
          />
          {errors.zipcode && <p className="error-message">{errors.zipcode}</p>}
        </div>

        <div className="input-container department-input">
          <select
            id="department"
            name="department"
            value={inputFields.department}
            onChange={(e) => {
              handleChange(e);
              setSelectedOption(e.target.value);
            }}
            className={`input department-input ${errors.department && "error"}`}
          >
            <option value="choice">Choose an Option</option>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
          {errors.department && (
            <p className="error-message">{errors.department}</p>
          )}
        </div>

        <button type="submit" className="new-employee-button">
          Add New Employee
        </button>
      </form>
    </main>
  );
}
