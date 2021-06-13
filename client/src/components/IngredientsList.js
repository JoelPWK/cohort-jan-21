import React, { Fragment } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const IngredientsList = () => {
    // This is a table to show the users' list of ingredients. Currently mocked data.
    // TODO: Run this for each entry in the ingredients database for the user and populate each row with each entry.
    const buildRows = () => {
        return (
            <tr key="0">
                <td>Apple</td>
                <td>1</td>
                <td>95</td>
                <td>0.3</td>
                <td>0.1</td>
                <td>25</td>
                <td>4.4</td>
                <td>0.0018</td>
                {/* TODO: Make these buttons do the specified actions */}
                <td>
                    <Button variant="secondary" className="mx-2">
                        Update
                    </Button>
                    <Button variant="danger" className="mx-2">
                        Remove
                    </Button>
                </td>
            </tr>
        );
    };

    return (
        <Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Weight (g)</th>
                        <th>Energy (cal)</th>
                        <th>Fat (g)</th>
                        <th>Saturated Fat (g)</th>
                        <th>Carbs (g)</th>
                        <th>Fibre (g)</th>
                        <th>Salt (g)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{buildRows()}</tbody>
            </Table>
        </Fragment>
    );
};

export default IngredientsList;
