import React, { useState } from 'react'
import { Button, Card, CardImg, Col, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { Link } from 'react-router-dom';
import './ShoppingCart.css'
import { cartDetailType, useShoppingCart } from './ShoppingCartState'


export const ShoppingCart: React.VFC = () => {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const shoppingCartState = useShoppingCart()

    const onChangeHandler = (changedGoods: cartDetailType, inputElement: React.ChangeEvent<HTMLInputElement>) => {
        if (inputElement.target.value) {
            const newQuantity = parseInt(inputElement.target.value)

            if (newQuantity < 0) {
                inputElement.target.value = '0'
                return
            }

            shoppingCartState?.changeQuantity(changedGoods, newQuantity)
        }
    }

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
                    {shoppingCartState?.cartDetail.length === 0 ? '' :
                        shoppingCartState?.cartDetail.map((val, index) => {
                            return (
                                <Row key={val.id}>
                                    <Col className='col-3'>
                                        <Card><CardImg alt={val.id} src={val.imagePath} top width="100%" /></Card>
                                    </Col>
                                    <Col className='col-9'>
                                        <Row>
                                            <Col sm={4}>{val.name}</Col>
                                            <Col sm={6}>Unit Price: {val.currencySign} {val.unitPrice}</Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup row>
                                                    <Label for="cart-row1-qty" sm={1} size='sm'>Qty: </Label>
                                                    <Col sm={3}>
                                                        <Input id="cart-row1-qty" defaultValue={val.quantity} onChange={(e) => onChangeHandler(val, e)} bsSize="sm" type='number' />
                                                    </Col>
                                                    <Col sm={6}>
                                                        <span>Subtotal: {val.currencySign} {val.quantity * val.unitPrice}</span>
                                                    </Col>
                                                    <Col sm={2}><FontAwesomeIcon className='trashCan' icon={faTrashCan} size='1x' onClick={(e) => shoppingCartState.deleteFromCart(val)} /></Col>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            )
                        })}
                </ModalBody>
                <h5 style={{ padding: '3px 16px', textAlign: 'right' }}>Total \{shoppingCartState?.total.toLocaleString()}</h5>
                <ModalFooter>
                    <Link color="primary" to='/checkout' onClick={toggle}><Button color='primary'>Checkout</Button></Link>
                    {' '}
                    <Button onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}