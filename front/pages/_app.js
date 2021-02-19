import "antd/dist/antd.css";
import propTypes from "prop-types";
import Head from "next/head"; // <head>에 접근할 수 있게 next에서 지원함

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: propTypes.elementType.isRequired,
};
export default NodeBird;
