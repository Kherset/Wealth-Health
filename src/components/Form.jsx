import { useState } from "react";

export default function Form() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Effectuez ici la logique d'envoi du formulaire
    console.log("Formulaire soumis !");
  };

  return (
    <main id="form-container">
      <form onSubmit={handleSubmit} className="create-employee-form">
        <input
          className="input1"
          type="text"
          name="firstname"
          placeholder="First Name"
        />
        <input
          className="input2"
          type="text"
          name="lastname"
          placeholder="Last Name"
        />

        <input
          className="input3"
          type="text"
          name=""
          placeholder="Start Date"
        />
        <input
          className="input4"
          type="text"
          name=""
          placeholder="Date of Birth"
        />

        <input className="input5" type="text" name="" placeholder="Street" />

        <input className="input6" type="text" name="" placeholder="City" />
        <select
          id="state"
          name="state"
          value={selectedState}
          onChange={handleStateChange}
          className="input7"
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

        <input className="input8" type="text" name="" placeholder="Zip Code" />

        <select
          id="department"
          name="department"
          value={selectedOption}
          onChange={handleOptionChange}
          className="input9"
        >
          <option value="choice">Choose an Option</option>
          <option value="sales">Sales</option>
          <option value="marketing">Marketing</option>
          <option value="engineering">Engineering</option>
          <option value="human Resources">Human Resources</option>
          <option value="legal">Legal</option>
        </select>
        <button type="submit" className="new-employee-button">
          Add New Employee
        </button>
      </form>
    </main>
  );
}
