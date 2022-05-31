import React, { Fragment } from 'react'
import {Modal,Button} from 'react-bootstrap'
// import PropTypes from 'prop-types'

const BModal = ({
    title,
    open,
    close,
    isFooter,
    children,
    ...props
}) => {
    
  return (
    <Fragment>
        <Modal 
        show={open} 
        onHide={close}
        {...props}
        >
            <Modal.Header closeButton={true}>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            {isFooter &&
            <Modal.Footer>
                <Button variant="secondary" onClick={null}>
                    Close
                </Button>
                <Button variant="primary" onClick={null}>
                    Save Changes
                </Button>
            </Modal.Footer> 
            }
        </Modal>
    </Fragment>
  )
}

BModal.defaultProps = {
    title: "",
    isFooter: false,
    open:false

}

// BModal.propTypes = {
//     title: PropTypes.string.isRequired,
//     isFooter: PropTypes.bool
// }

export default BModal