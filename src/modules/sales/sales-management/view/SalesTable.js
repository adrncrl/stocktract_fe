import React from "react";
import { Table } from "components/Table";
import SaleBadge from "components/Badges/SaleBadge";

const SalesTable = (props) => {
  const { sales, isLoading, toggleEdit, toggleDelete } = props;
  const tableHeaders = [
    "Sale ID",
    "Item",
    "Quantity",
    "Total Amount",
    "Status",
    "Actions",
  ];

  return (
    <Table heads={tableHeaders} isLoading={isLoading}>
      {sales?.map((sale) => (
        <tr key={sale.saleID} className="hover:bg-gray-50">
          <td className="px-4 py-2 border-b border-gray-200">{sale.saleID}</td>
          <td className="px-4 py-2 border-b border-gray-200">
            {sale?.items.item}
          </td>
          <td className="px-4 py-2 border-b border-gray-200">
            {sale.itemQuantity}
          </td>
          <td className="px-4 py-2 border-b border-gray-200">
            ₱ {sale.totalAmount.toLocaleString()}
          </td>
          <td className="px-4 py-2 border-b border-gray-200">
            <SaleBadge status={sale.status} />
          </td>
          <td className="px-4 py-2 border-b border-gray-200">
            <button
              className="text-blue-500 hover:underline"
              onClick={() => toggleEdit(sale.saleID)}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:underline ml-4"
              onClick={() => toggleDelete(sale.saleID)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </Table>
  );
};

export default SalesTable;
