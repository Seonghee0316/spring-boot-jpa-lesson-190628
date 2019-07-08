import React from 'react'
import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Login from '../containers/customer/Login.jsx'
import Join from '../containers/customer/Join.jsx'
import Mypage from '../containers/customer/Mypage.jsx'
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
                <Navbar.Brand href="#home">BITCAMP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">
                        <Link to="home"> Home</Link>
                            
                            </Nav.Link>
                        <Nav.Link href="TodoApp">스케줄러</Nav.Link>
                        <NavDropdown title="기본문법" id="basic-nav-dropdown">
                            <NavDropdown.Item href="join">
                            <Nav.Link href="Hello">Hello</Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="join">
                            <Nav.Link href="Clock">시계</Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item href="login">
                            <Nav.Link href="LightSwitch">LightSwitch</Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="mypage">
                            <Nav.Link href="Timer">Timer</Nav.Link>
                                </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="remove">
                            회원탈퇴
                            </NavDropdown.Item>

                        </NavDropdown>
                       

                       

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Route path="/login" exact component={Login} />
            <Route path="/join" exact component={Join} />
            <Route path="/mypage" exact component={Mypage} />
            <Route path="/home" exact component={Home} />
            <Route path="/hello" exact component={Hello}/>
            <Route path="/lightSwitch" exact component={LightSwitch}/>
            <Route path="/timer" exact component={Timer}/>
            <Route path="/todoApp" exact component={TodoApp}/>
            <Route path="/clock" exact component={Clock}/>
            {/* <Route path="/"exact component={App}/> */}

        </Router>
    )
}

export default MyNavbar