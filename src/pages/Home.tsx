import React, { useState } from "react";
import { ContentContainer } from "../components/ContentContainer";

interface Customer {
  name: string;
  email: string;
  address: string;
  phone: string;
}

const sampleCustomers: Customer[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main St",
    phone: "555-1234",
  },
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    address: "456 Elm St",
    phone: "555-5678",
  },
  {
    name: "Bob Smith",
    email: "bob.smith@example.com",
    address: "789 Oak St",
    phone: "555-9012",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    address: "321 Birch St",
    phone: "555-3456",
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    address: "654 Cedar St",
    phone: "555-7890",
  },
  {
    name: "Eve Martin",
    email: "eve.martin@example.com",
    address: "987 Maple St",
    phone: "555-2345",
  },
  {
    name: "Frank Underwood",
    email: "frank.underwood@example.com",
    address: "147 Willow St",
    phone: "555-6789",
  },
  {
    name: "Grace Hopper",
    email: "grace.hopper@example.com",
    address: "369 Pine St",
    phone: "555-0123",
  },
  {
    name: "Hank Aaron",
    email: "hank.aaron@example.com",
    address: "258 Spruce St",
    phone: "555-4567",
  },
  {
    name: "Ivy League",
    email: "ivy.league@example.com",
    address: "852 Walnut St",
    phone: "555-8901",
  },
];

const Home = () => {
  const [customers] = useState<Customer[]>(sampleCustomers);

  const handleClick = () => {
    console.log('click!!!');
    window.parent.postMessage("HELLO_PARENT", 'http://parent.com');
  }

  return (
    <>

      <button onClick={handleClick} className=" bg-fuchsia-200 w-52 p-4 mb-4">
        click me
      </button>


      <ContentContainer>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {customer.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {customer.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {customer.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContentContainer>
    </>
  );
};

export { Home };
