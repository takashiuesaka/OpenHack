import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, CardGroup, Container, Row, Col } from 'reactstrap'
import { Category } from './Category'
import { ShoppingCart } from './ShoppingCart'
import { cartDetailType } from './ShoppingCartDetail'
import './Home.css'

export const Home: React.VFC = () => {

  const clickCategory = (name: string | undefined, clickToOn: boolean) => {
    console.log(name)
  }

  const [goodsToShoppingCart, setGoodsToShoppingCart] = useState<cartDetailType[]>([])
  const [goods, setGoods] = useState<goodsType[]>([])

  type goodsType = {
    id: string,
    name: string,
    imagePath: string,
    unitName: string,
    unitPrice: number,
    currencySign: string,
    description: string
  }

  useEffect(() => {
    setGoods([
      {
        id: 'cucumber',
        name: 'Cucumber',
        imagePath: 'cucumber.jpg',
        unitName: '3-pack',
        unitPrice: 167,
        currencySign: '\\',
        description: 'Made in Gunma'
      },
      {
        id: 'tomato',
        name: 'Tomato',
        imagePath: 'tomato.jpg',
        unitName: 'one tomato',
        unitPrice: 112,
        currencySign: '\\',
        description: 'Made in Kumamoto/Tochigi'
      },
      {
        id: 'cabbage',
        name: 'Cabbage',
        imagePath: 'cabbage.jpg',
        unitName: '1 cabagge',
        unitPrice: 217,
        currencySign: '\\',
        description: 'Made in Aichi/Chiba'
      },
      {
        id: 'lettuce',
        name: 'Lettuce',
        imagePath: 'lettuce.jpg',
        unitName: '1 lettuce',
        unitPrice: 182,
        currencySign: '\\',
        description: 'Made in Gunma/Ibaraki'
      },
      {
        id: 'asparagus',
        name: 'Asparagus',
        imagePath: 'asparagus.jpg',
        unitName: '1-pack',
        unitPrice: 104,
        currencySign: '\\',
        description: 'Made in Mexico'
      },
      {
        id: 'bell-pepper',
        name: 'Bell Pepper',
        imagePath: 'bell-pepper.jpg',
        unitName: '1 bell pepper',
        unitPrice: 170,
        currencySign: '\\',
        description: 'Made in Koria/New zealand/Holland'
      },
      {
        id: 'blackcoffee',
        name: 'Black Coffee',
        imagePath: 'blackcoffee.png',
        unitName: '1 Black Coffee',
        unitPrice: 105,
        currencySign: '\\',
        description: 'Made in Japan'
      },
      {
        id: 'celery',
        name: 'Celery',
        imagePath: 'celery.jpg',
        unitName: '1 Celery',
        unitPrice: 146,
        currencySign: '\\',
        description: 'Made in Sizuoka/Aichi'
      },
      {
        id: 'cola',
        name: 'Cola',
        imagePath: 'cola.png',
        unitName: '1 Bottle',
        unitPrice: 116,
        currencySign: '\\',
        description: 'Made in Japan'
      },
      {
        id: 'eggplant',
        name: 'Eggplant',
        imagePath: 'eggplant.jpg',
        unitName: '3-pack',
        unitPrice: 205,
        currencySign: '\\',
        description: 'Made in Kouchi'
      },
      {
        id: 'loin',
        name: 'Loin',
        imagePath: 'loin.jpg',
        unitName: '1-pack, 300g',
        unitPrice: 1025,
        currencySign: '\\',
        description: 'Made in Japan'
      },
      {
        id: 'milktea',
        name: 'Milk Tea',
        imagePath: 'milktea.png',
        unitName: '1 Bottle',
        unitPrice: 108,
        currencySign: '\\',
        description: 'Made in Japan'
      },
      {
        id: 'onion',
        name: 'Onion',
        imagePath: 'onion.jpg',
        unitName: '1 onion',
        unitPrice: 112,
        currencySign: '\\',
        description: 'Made in Hokkaido'
      },
      {
        id: 'orangejuice',
        name: 'Orange Juice',
        imagePath: 'orangejuice.png',
        unitName: '1 Bottle',
        unitPrice: 108,
        currencySign: '\\',
        description: 'Made in Japan'
      },
      {
        id: 'potato',
        name: 'Potato',
        imagePath: 'potato.jpg',
        unitName: '1 potato',
        unitPrice: 89,
        currencySign: '\\',
        description: 'Made in Hokkaido'
      },
      {
        id: 'pumpkin',
        name: 'Pumpkin',
        imagePath: 'pumpkin.jpg',
        unitName: '1 pumpkin',
        unitPrice: 512,
        currencySign: '\\',
        description: 'Made in New zealand'
      },
      {
        id: 'radish',
        name: 'Radish',
        imagePath: 'radish.jpg',
        unitName: '1 radish',
        unitPrice: 205,
        currencySign: '\\',
        description: 'Made in Kanagawa'
      },
      {
        id: 'shallot',
        name: 'Shallot',
        imagePath: 'shallot.jpg',
        unitName: '1 shallot',
        unitPrice: 115,
        currencySign: '\\',
        description: 'Made in Tochigi'
      },
      {
        id: 'shank',
        name: 'Shank',
        imagePath: 'shank.jpg',
        unitName: '1-pack 300g',
        unitPrice: 490,
        currencySign: '\\',
        description: 'Made in Japan'
      },
      {
        id: 'sirloin',
        name: 'Sirloin',
        imagePath: 'sirloin.jpg',
        unitName: '1-pack 300g',
        unitPrice: 1580,
        currencySign: '\\',
        description: 'Made in Japan'
      },
      {
        id: 'sodadrink',
        name: 'Sodadrink',
        imagePath: 'sodadrink.png',
        unitName: '1-Bottle',
        unitPrice: 78,
        currencySign: '\\',
        description: 'Made in Japan'
      },
      {
        id: 'sportsdrink',
        name: 'Sports Drink',
        imagePath: 'sportsdrink.png',
        unitName: '1-Bottle',
        unitPrice: 88,
        currencySign: '\\',
        description: 'Made in Japan'
      },
      {
        id: 'tongue',
        name: 'Tongue',
        imagePath: 'tongue.jpg',
        unitName: '1-pack 300g',
        unitPrice: 3800,
        currencySign: '\\',
        description: 'Made in Japan'
      },
      {
        id: 'water',
        name: 'Water Bottle',
        imagePath: 'water.png',
        unitName: '1-Bottle',
        unitPrice: 68,
        currencySign: '\\',
        description: 'Made in Japan'
      }
    ])

  }, [])

  const addToCart = (clickedGoods: goodsType) => {
    setGoodsToShoppingCart(currentGoodsInCart => {
      const goodsInCart = currentGoodsInCart.find((val) => val.id === clickedGoods.id)
      if (goodsInCart) {
        goodsInCart.quantity++
        return (currentGoodsInCart)
      }
      else {
        const newGoodsInCart: cartDetailType = { ...clickedGoods, quantity: 1, onDeleteHandler: deleteGoodsFromShoppingCart }
        currentGoodsInCart.push(newGoodsInCart)
        return (currentGoodsInCart)
      }
    })
  }

  const deleteGoodsFromShoppingCart = (rowKey: string) => {
    setGoodsToShoppingCart(currentGoodsInCart => {
      return currentGoodsInCart.filter((value, index) => value.id !== rowKey)
    })
  }

  return (
    <div>
      <Row>
        <Col><h2>Choose Category</h2></Col>
        <Col className='text-end'><ShoppingCart goods={goodsToShoppingCart} /></Col>
      </Row>
      <div id='badgelist'>
        <Category onClick={clickCategory}>Vegetable</Category>
        <Category onClick={clickCategory}>Fruit</Category>
        <Category onClick={clickCategory}>Meat</Category>
        <Category onClick={clickCategory}>Beverage</Category>
      </div>
      <Container fluid>
        <Row className='row-cols-2 row-cols-md-4 row-cols-xl-6'>
          {goods.map((value, index) => {
            return (
              <Col key={index}>
                <Card>
                  <CardImg alt={value.name} src={value.imagePath} top width="100%" />
                  <CardBody>
                    <CardTitle tag="h5">{value.name}</CardTitle>
                    <CardText>{value.unitName} {value.currencySign}{value.unitPrice}</CardText>
                    <CardText className='text-center'><button className='addCartButton' onClick={() => addToCart(value)}>Add to cart</button></CardText>
                    <CardText>
                      <small className="text-muted">
                        {value.description}
                      </small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}
