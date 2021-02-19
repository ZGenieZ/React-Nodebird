import propTypes from "prop-types";
import Link from "next/link"; // next에서는 react에서 사용하는 'react-router-dom'과 다르게 자체적인 라우터, Link를 지원한다.
import { Menu } from "antd";

// 개발 모드(development mode)일 때는 링크를 눌렀을 때 페이지 전환이 느리게 될 수 있다. 하지만 배포 모드(production  mode)로 전환하면 이 현상은 거의 없어진다 !
const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: propTypes.node.isRequired, // react의 node 타입(nodejs의 node가 아님!)
};

export default AppLayout;
