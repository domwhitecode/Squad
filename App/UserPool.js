import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_qKu4owaQ6",
  ClientId: "2jb5l8epvsei9eu1epqm3mldl",
};

export default new CognitoUserPool(poolData);
