import React from "react";
import "./Table.css";

const Table = ({
  data = null,
  columns = null,
  hover = false,
  striped = true,
}) => {
  const getCaps = (head, field) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };
  return (
    <div>
      <table>
        <thead>
          <tr className="TableHeader">
            {columns &&
              columns.map((head) => (
                <th className={`${head.left && "Left"}`}>
                  {getCaps(head.header, head.field)}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row) => (
              <tr className={`${hover && "hover"} ${striped && "striped"}`}>
                {columns.map((col) => (
                  <td className={`${col.left && "Left"} TableCell `}>
                    <span>{row[col.field]}</span>{" "}
                    <span className="Red">{row[col.command]}</span>{" "}
                    <span className="Red">{row[col.price]}</span>{" "}
                    <span className="Blue">{row[col.value]}</span>{" "}
                    <span>{[col.unit]}</span>
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      {data ? null : <p>No Row to show :)</p>}
    </div>
  );
};

export default Table;
