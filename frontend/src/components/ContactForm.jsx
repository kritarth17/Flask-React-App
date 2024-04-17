import { useState } from "react";

const ContactForm = ({ contacts }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault()

    const data = {
      firstName,
      lastName,
      email
    }
    const url = "http://127.0.0.1:5000/create_contact"

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    const response = await fetch(url, options)
    if(response.status !=200 && response.status != 201) {
      const data = await response.json()
      alert(data.message)
    }
    else{
      console.log("Suscessful")
    }
  }
 
  return (
    <>
      <div className="container mx-auto mt-5">
        <h2>Fill the details</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
