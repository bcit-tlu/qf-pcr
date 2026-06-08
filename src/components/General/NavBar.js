import { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { withRouterV7 } from '../../util/withRouterV7';

class NavBar extends Component {
    render() {
        const pathname = this.props.location ? this.props.location.pathname : '';
        const active = (path) =>
            pathname === path ? 'active border-bottom border-secondary' : '';

        return (
            <Navbar
                style={{ backgroundColor: 'rgb(248,249,255)', position: 'sticky' }}
                sticky="top"
                expand="lg"
                className="px-3"
            >
                <Navbar.Brand style={{ color: '#043E6B' }} href="#introduction"><h3>QF - PCR</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="ms-auto font-monospace">
                        <Nav.Link href="#introduction"      className={`${active('/introduction')} me-2`}>Introduction</Nav.Link>
                        <Nav.Link href="#background"        className={`${active('/background')} me-2`}>Background</Nav.Link>
                        <Nav.Link href="#guidedpractice"    className={`${active('/guidedpractice')} me-2`}>Guided Practice</Nav.Link>
                        <Nav.Link href="#quiz"              className={`${active('/quiz')} me-2`}>Quiz</Nav.Link>
                        <Nav.Link href="#practice"          className={`${active('/practice')} me-2`}>Practice Cases</Nav.Link>
                        <Nav.Link href="#final_assessment"  className={`${active('/final_assessment/intro')} me-2`}>Final Assessment</Nav.Link>
                        <Nav.Link href="#achievements"      className={`${active('/achievements')} me-2`}>Achievements</Nav.Link>
                    </Nav>
                    <Button href="#/" className="ms-2" variant="outline-info">
                        <FontAwesomeIcon rotation={180} size="1x" icon={faSignOutAlt} />
                    </Button>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouterV7(NavBar);
