import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import User from "../components/User";
import Layout from "../components/Layout";
import { Logo } from "../assets/Icons/Logo";

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
        <Logo color="white" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={titleStyles}>Our Contributors</h1>
      </div>
      <Contributors />
    </Layout>
  );
};

const Contributors = () => (
  <StaticQuery
    query={graphql`
      {
        allContributorsYaml {
          edges {
            node {
              bio
              github
              firstName
              lastName
            }
          }
        }
      }
    `}
    render={(data) => (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.allContributorsYaml.edges.map(({ node }: any, i: number) => (
          <User {...node} key={i} index={i} />
        ))}
      </div>
    )}
  ></StaticQuery>
);
export default IndexPage;
