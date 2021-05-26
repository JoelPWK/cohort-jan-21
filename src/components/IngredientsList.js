import React from "react";
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
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                {/* TODO: Make these buttons do the specified actions */}
                <td>
                    <Button>Update</Button>
                    <Button>Remove</Button>
                </td>
            </tr>
        );
    };

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Calories</th>
                        <th>Fat</th>
                        <th>Saturated Fat</th>
                        <th>Carbs</th>
                        <th>Fibre</th>
                        <th>Salt</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{buildRows()}</tbody>
            </Table>
        </div>
    );
};

export default IngredientsList;
