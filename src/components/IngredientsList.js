import React from "react";
import Table from "react-bootstrap/Table";

const IngredientsList = () => {
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
                <td>
                    <span>Update</span>
                    <span>Remove</span>
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
