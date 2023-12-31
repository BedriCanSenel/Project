import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid } from "semantic-ui-react";

function Dashboard() {
  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Dashboard;