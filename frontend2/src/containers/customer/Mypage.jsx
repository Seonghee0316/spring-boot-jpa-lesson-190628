import React, { Component } from 'react';
import { Figure, Table } from 'react-bootstrap';
import cat from '../../assets/images/cat.jpg';

class Mypage extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td rowSpan='2'>
                                <Figure>
                                    <Figure.Image
                                        width={200}
                                        height={100}
                                        alt="171x180"
                                        src={cat}
                                    />
                                    <Figure.Caption>
                                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                         </Figure.Caption>
                                </Figure>
                            </td>
                            <td>ID</td>
                            <td>이름</td>
                        </tr>
                        <tr>
                            <td>hong</td>
                            <td>홍길동</td>
                        </tr>
                        <tr>
                            <td colSpan='1'>전화번호</td>
                            <td colSpan='2'>010-1234-5678</td>
                        </tr>
                        <tr>
                            <td colSpan='1'>주 소(도시)</td>
                            <td colSpan='2'>서 울</td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        );
    }
}
export default Mypage;