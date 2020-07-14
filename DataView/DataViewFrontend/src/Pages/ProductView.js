import React, { useState, Fragment, useEffect } from "react";
import classes from "./ProductView.module.css";
import { connect } from "react-redux";
import classNames from "classnames";
import { Card, Row, Col, Modal, ModalHeader, Button } from "reactstrap";
import PieCharts from "../Components/ProductViewComponents/PieCharts";
import StackedBarGraph from "../Components/ProductViewComponents/StackedLineGraph";
import {
  tableDataFormatter,
  linePieGraphFormatter,
} from "../Utility/dataFormatting";
import CardHeader from "reactstrap/es/CardHeader";
import CardTitle from "reactstrap/es/CardTitle";
import ProductTable from "../Components/ProductViewComponents/ProductTable";

function ProductView(props) {
  const [tableData, setTableData] = useState();
  const [graphData, setGraphData] = useState();
  const [product, setProduct] = useState(1);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const formattedTableData = tableDataFormatter(
      props.productData.productData
    );
    const formattedGraphData = linePieGraphFormatter(
      props.productData.productData,
      product
    );
    setTableData(formattedTableData);
    setGraphData(formattedGraphData);
  }, [props.productData.productData, product]);

  const toggleModal = () => setModal(!modal);
  const callbackFunction = (selectedProd) => {
    setModal(!modal);
    setProduct(selectedProd);
  };

  const closeBtn = (
    <button
      className={classNames("close", classes.closeButton)}
      onClick={toggleModal}
    >
      &times;
    </button>
  );
  return (
    <Fragment>
      <Row>
        <Col>
          <CardHeader className={classes.header}>
            <Row>
              <Col className={classNames("text-left", classes.title)} sm="6">
                <h5 className="card-category" onClick={toggleModal}>
                  Product Overview
                </h5>
                <CardTitle tag="h2">Product ID: {product}</CardTitle>
              </Col>
              <Col sm="6">
                <div className={classes.searchBox}>
                  <Button color="secondary" size="sm" onClick={toggleModal}>
                    {" "}
                    Search for a product{" "}
                  </Button>
                </div>
              </Col>
            </Row>
          </CardHeader>
          <Card className={classNames("card-chart", classes.datagraphs)}>
            <StackedBarGraph graphData={graphData} />
            <PieCharts graphData={graphData} />
          </Card>
        </Col>
      </Row>

      <div className={classes.modalContainer}>
        <Modal isOpen={modal} toggle={toggleModal} className={classes.modal}>
          <ModalHeader
            toggle={toggleModal}
            close={closeBtn}
            className={classes.modalHeader}
          >
            Product Search
          </ModalHeader>
          <div className={classes.modalBody}>
            <ProductTable
              tableData={tableData}
              parentCallback={callbackFunction}
            />
          </div>
        </Modal>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  productData: state.productData,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
