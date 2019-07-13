import React from 'react'
import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Login from '../containers/customer/Login.jsx'
import Join from '../containers/customer/Join.jsx'
import MyPage from "../containers/customer/Mypage.jsx"
import Home from '../containers/common/Home.jsx'
import Hello from '../containers/customer/Hello.jsx'
import LightSwitch from '../containers/common/LightSwitch.jsx'
import Timer from '../containers/common/Timer.jsx'
import TodoApp from '../containers/common/TodoApp.jsx'
import Clock from '../containers/common/Clock.jsx'

const MyNavbar = () => {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand >BITCAMP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link >
                            <Link to="/home">Home</Link>
                        </Nav.Link>
                        {/* <Nav.Link>스케줄러</Nav.Link> */}
                        <NavDropdown title="기본문법" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/hello">Hello</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/switch">SWITCH</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/timer">타이머</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/todoapp">스케쥴</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/clock">시 계</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="회원관리" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/join">회원가입</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/login">로그인</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/mypage">마이페이지</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link to="/remove">회원탈퇴</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Route path="/login" component={Login} />
            <Route path="/join" component={Join} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/home" component={Home} />
            <Route path="/hello" component={Hello} />
            <Route path="/switch" component={LightSwitch} />
            <Route path="/timer" component={Timer} />
            <Route path="/todoapp" component={TodoApp} />
            <Route path="/clock" component={Clock} />
        </Router>
    )
}


export default MyNavbar