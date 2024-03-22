import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "../modal/Modal";
import "./form.css";

export default function Form() {
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
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
          />
        </div>

        <div className="input-container">
          <input
            className="input lastname-input"
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
        </div>

        <div className="birthdate-input">
          <DatePicker
            placeholderText="Date of Birth"
            monthYearClassName="customMonthYear"
          />
        </div>

        <div className="startdate-input">
          <DatePicker placeholderText="Start Date" />
        </div>

        <div className="input-container street-input">
          <input
            className="input street-input"
            type="text"
            name="street"
            placeholder="Street"
          />
        </div>

        <div className="input-container city-input">
          <input
            className="input city-input"
            type="text"
            name="city"
            placeholder="City"
          />
        </div>

        <select id="state" name="state" className="input state-input">
          <option value="choice">Choose a State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>

        <div className="input-container zipcode-input">
          <input
            className="input zipcode-input"
            type="text"
            name="zipcode"
            placeholder="Zip Code"
          />
        </div>

        <div className="input-container department-input">
          <select
            id="department"
            name="department"
            className="input department-input"
          >
            <option value="choice">Choose an Option</option>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
        </div>

        <button type="submit" className="new-employee-button">
          Add New Employee
        </button>
      </form>
    </main>
  );
}
