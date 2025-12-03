import React from 'react';

interface RowData {
  id: number;
  name: string;
  city: string;
}

const tableData: RowData[] = [
  { id: 1, name: 'Alice', city: 'New York' },
  { id: 2, name: 'Bob', city: 'Los Angeles' },
  { id: 3, name: 'Charlie', city: 'Chicago' },
  { id: 4, name: 'David', city: 'Houston' },
  { id: 5, name: 'Eve', city: 'Phoenix' },
  { id: 6, name: 'Frank', city: 'Philadelphia' },
  { id: 7, name: 'Grace', city: 'San Antonio' },
];

const TablePage: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Table Page</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                City
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row) => (
              <tr key={row.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {row.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {row.city}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePage;