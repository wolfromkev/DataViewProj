import React, { Fragment, useState } from "react";
import classes from "./ProductTable.module.scss";
import { useTable, useFilters, useRowSelect } from "react-table";
import { connect } from "react-redux";

function SliderColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={filterValue || min}
        onChange={(e) => {
          setFilter(parseInt(e.target.value, 10));
        }}
      />
    </>
  );
}

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;
  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

function Table({ columns, data, parentCallback }) {
  const filterTypes = React.useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      filterTypes,
      defaultColumn,
    },
    useFilters,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Cell: ({ row }) => (
            <a
              className={classes.selectButton}
              onClick={() => {
                parentCallback(row.original.productId);
              }}
            >
              Select{" "}
            </a>
          ),
        },
        ...columns,
      ]);
    }
  );
  const firstPageRows = rows.slice(0, 10);
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            style={{
              textAlign: "center",
            }}
          >
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}{" "}
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {firstPageRows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              style={{
                textAlign: "center",
              }}
            >
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function filterGreaterThan(rows, id, filterValue) {
  return rows.filter((row) => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}
filterGreaterThan.autoRemove = (val) => typeof val !== "number";

function ProductTable(props) {
  const { tableData } = props;
  const dataSet = React.useMemo(() => tableData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Product List",
        columns: [
          {
            Header: "Product ID",
            accessor: "productId",
          },
          {
            Header: "Start Date",
            accessor: "startTime",
          },
          {
            Header: "Finish Date",
            accessor: "finishTime",
          },
          {
            Header: "Total Defects",
            accessor: "totalDefects",
            Filter: SliderColumnFilter,
            filter: filterGreaterThan,
          },
        ],
      },
    ],
    []
  );

  return (
    <Fragment>
      <Table
        className={classes.tableStyle}
        columns={columns}
        data={dataSet}
        parentCallback={props.parentCallback}
      />
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  productData: state.productData,
});

export default connect(mapStateToProps)(ProductTable);
