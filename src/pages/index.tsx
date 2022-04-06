import * as React from "react";
import User from "../components/User";
import Layout from "../components/Layout";
import { hot } from 'react-hot-loader';
import logo from '@assets/logo.svg';
import Student from "../Student";
let users = requireAll(require.context('../../contributors/', false, /\.yml$/));

function requireAll(r:any): Student[] { 
  return r.keys().map((element:string) => r(element));
} 

const headerStyles = {
  maxWidth: `450px`,
  marginBottom: `1.45rem`,
  paddingTop: 40,
};

const titleStyles: any = {
  display: "inline",
  fontSize: 30,
  fontWeight: "bold",
  padding: "5px  10px",
  boxShadow: `0px 131.961px 263.922px rgba(3, 3, 3, 0.2)`,
  borderRadius: `7.18104px`,
  color: "#FFF",
  textAlign: "center",
};

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div style={headerStyles}>
          <img src={logo} title='1337 Contributors' />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={titleStyles}>Our Contributors</h1>
      </div>
      <Contributors />
    </Layout>
  );
};

const Contributors = () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((node: any, i: number) => (
          <User {...node} key={i} index={i} />
        ))}
      </div>
    )
};
export default hot(module)(IndexPage);
