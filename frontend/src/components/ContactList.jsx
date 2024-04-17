import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <>
    <div className="container mx-auto mt-5">
      <table className="min-w-full divide-y divide-blue-200">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-blue-700 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-blue-700 uppercase tracking-wider">First Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-blue-700 uppercase tracking-wider">Last Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-blue-700 uppercase tracking-wider">Email</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-green-200">
          {contacts.map(contacts => (
            <tr key={contacts.id} className="bg-blue-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-900">{contacts.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-900">{contacts.firstName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-900">{contacts.lastName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-900">{contacts.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  );
};

export default ContactList;
