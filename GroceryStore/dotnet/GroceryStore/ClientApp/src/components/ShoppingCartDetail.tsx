import { faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Card, CardImg, Col, FormGroup, Input, Label, Row } from "reactstrap"
import './ShoppingCartDetail.css'

export type cartDetailType = {
    id: string,
    name: string,
    imagePath: string,
    quantity: number,
    unitPrice: number,
    currencySign: string,
    onDeleteHandler: (rowKey: string) => void
}

export const ShoppingCartDetail: React.VFC<cartDetailType> = (props) => {

    const [detail, setDetail] = useState(props)

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (val) => {
        if (val.target.value) {
            const newQuantity = parseInt(val.target.value)

            if (newQuantity < 0) {
                val.target.value = '0'
                return
            }

            setDetail(current => {
                return { ...current, quantity: newQuantity }
            })
        }
    }
    return (
        <Row>
            <Col className='col-3'>
                <Card><CardImg alt={detail.id} src={detail.imagePath} top width="100%" /></Card>
            </Col>
            <Col className='col-9'>
                <Row>
                    <Col sm={4}>{detail.name}</Col>
                    <Col sm={6}>Unit Price: {detail.currencySign} {detail.unitPrice}</Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup row>
                            <Label for="cart-row1-qty" sm={1} size='sm'>Qty: </Label>
                            <Col sm={3}>
                                <Input id="cart-row1-qty" defaultValue={detail.quantity} onChange={onChangeHandler} bsSize="sm" type='number' />
                            </Col>
                            <Col sm={6}>
                                <span>Subtotal: {detail.currencySign} {detail.quantity * detail.unitPrice}</span>
                            </Col>
                            <Col sm={2}><FontAwesomeIcon className='trashCan' icon={faTrashCan} size='1x' onClick={() => detail.onDeleteHandler(detail.id)} /></Col>
                        </FormGroup>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
