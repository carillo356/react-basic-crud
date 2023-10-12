import * as React from "react";
import { useTable } from "react-table";
import Button from 'react-bootstrap/Button';
import clientService from "../services/api/clientService";

const ClientTable = () => {
    const [clients, setClients] = React.useState([]);

    React.useEffect(() => {
      const fetchData = async () => {
            const response = await clientService.findAllClient()
            setClients(response); 

      };
      fetchData()
    }, [() => useNavigate()])

    const data = React.useMemo(() => clients, [clients])

    const columns = React.useMemo(
      () => [
        {
          Header: "ClientID",
          accessor: "id",
        },
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Email",
          accessor: "email",
        },
        {
          Header: "CreatedAt",
          accessor: "dateCreated",
        },
        {
          Header: "Actions",  
          Cell: ({ row }) => (
            <div>
              <Button onClick={() => console.log(row.original.id)}>Update</Button>
              <Button variant="danger" onClick={() => console.log(row.original.id)}>Delete</Button>
            </div>
          ),
        },
      ],
      []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = 
    useTable({ columns, data });
  
    return (
          <table {...getTableProps()} className="table">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
    );
}

export default ClientTable