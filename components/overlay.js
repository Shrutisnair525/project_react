import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Popover from 'react-bootstrap/lib/Popover';
import Styles from '/home/shruti/project/project_react/Style.css';
import Pagination from 'react-bootstrap/lib/Pagination';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';

export default class Overlay extends Component{
  constructor() {
    super();
    this.state = {
      show: false,
      activePage: 1,
    };
  }

  handleSelect(eventKey) {
    this.setState({
        activePage: eventKey,
      });
  }

  close() {
    this.setState({ show: false });
  }

  open() {
    this.setState({ show: true });
  }

  render() {
    const tooltip = (
    <Tooltip id="tooltip">More on Tooltips!!</Tooltip>
);
    const tooltip1 = (
      <Tooltip id="tooltip1">More on Tooltips!!</Tooltip>
);
    const popoverTop = (
      <Popover id="popover-positioned-top" title="Sample popover">
        For more check this info.
      </Popover>
    );
    return (
        <div>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <Button
              bsStyle = "primary"
              onClick = {this.open.bind(this)} > Overlay
            </Button>
          </OverlayTrigger>

          <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
            <Button>Popover!!</Button>
          </OverlayTrigger>

          <Modal show={this.state.show} onHide={this.close.bind(this)}
              dialogClassName={Styles.container} keyboard>
            <Modal.Header closeButton>
              <Modal.Title>Sample Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Sample Modal Text</p>
              <p> Ipsum molestiae modi eligendi? Debitis amet quae unde commodi aspernatur enim,
                  consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam
                  adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mam neque. Perspiciatis
                  omnis obcaecati consequatur sunt deleniti similique facilis sequi. Ipsum harum
                  vitae modi reiciendis officiis.
              </p>
              </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close.bind(this)}> Exit </Button>
            </Modal.Footer>
          </Modal>

          <Pagination bsSize="large" prev next items={5} activePage={this.state.activePage}
              onSelect={this.handleSelect.bind(this)} />

          <Accordion>
            <Panel header="Collapsible Group Item #1" eventKey="1">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute,
              non cupidatat skateboard dolor brunch. Food truck quinoa
              nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
            </Panel>
            <Panel header="Collapsible Group Item #2" eventKey="2">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute,
              non cupidatat skateboard dolor brunch. Food truck quinoa
              nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
            </Panel>
     </Accordion>

        </div>
    );
  }
}
