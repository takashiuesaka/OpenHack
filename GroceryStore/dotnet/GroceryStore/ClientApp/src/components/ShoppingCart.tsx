import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { ShoppingCartDetail, cartDetailType } from './ShoppingCartDetail'

type shoppingCartType = {
    goods: cartDetailType[]
}
export const ShoppingCart: React.VFC<shoppingCartType> = (prop) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <Button outline onClick={toggle}>Shopping Cart <FontAwesomeIcon style={{ color: 'ffc107' }} icon={faCartShopping} /></Button>
            <Modal
                centered
                scrollable
                isOpen={modal}
                toggle={toggle}
            >
                <ModalHeader toggle={toggle}>
                    <FontAwesomeIcon style={{ color: 'ffc107' }} icon={faCartShopping} /> Shopping Cart
                </ModalHeader>
                <ModalBody>
                    {prop.goods.length === 0 ? '' :
                        prop.goods.map((val, index) => {
                            return (
                                <ShoppingCartDetail key={val.id} id={val.id} name={val.name} imagePath={val.imagePath} quantity={val.quantity} unitPrice={val.unitPrice} currencySign={val.currencySign} onDeleteHandler={val.onDeleteHandler} />
                            )
                        })}
                </ModalBody>
                <ModalFooter>
                    <Link color="primary" to='/checkout' onClick={toggle}><Button color='primary'>Checkout</Button></Link>
                    {' '}
                    <Button onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}