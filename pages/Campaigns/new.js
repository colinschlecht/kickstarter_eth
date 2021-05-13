import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, error: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({ from: accounts[0] });
    } catch (err) {
      this.setState({ errorMessage: err.message });
      this.setState({ minimumContribution: "" });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Create a Campaign</h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Min Contribution</label>
            <input
              placeholder="wei"
              value={this.state.minimumContribution}
              onChange={(e) =>
                this.setState({ minimumContribution: e.target.value })
              }
            />
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button loading={this.state.loading} primary>
              {" "}
              Create{" "}
            </Button>
          </Form.Field>
        </Form>
      </Layout>
    );
  }
}
export default CampaignNew;
