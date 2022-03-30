import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, Container, Row, Col } from 'reactstrap'
import { Category, categoryState } from '../components/Category'
import { ShoppingCart } from '../components/ShoppingCart'
import { useShoppingCart } from '../components/ShoppingCartState'
import './Home.css'

export const Home: React.VFC = () => {

  const [goods, setGoods] = useState<goodsType[]>([])
  const [categories, setCategories] = useState<categoryState[]>([])
  const shoppingCart = useShoppingCart()

  type goodsType = {
    id: string,
    name: string,
    imagePath: string,
    category: string,
    unitName: string,
    unitPrice: number,
    currencySign: string,
    description: string
  }

  const goodsData = [
    {
      id: 'cucumber',
      name: 'Cucumber',
      imagePath: 'cucumber.jpg',
      category: 'Vegetable',
      unitName: '3-pack',
      unitPrice: 167,
      currencySign: '\\',
      description: 'Made in Gunma'
    },
    {
      id: 'tomato',
      name: 'Tomato',
      imagePath: 'tomato.jpg',
      category: 'Vegetable',
      unitName: 'one tomato',
      unitPrice: 112,
      currencySign: '\\',
      description: 'Made in Kumamoto'
    },
    {
      id: 'cabbage',
      name: 'Cabbage',
      imagePath: 'cabbage.jpg',
      category: 'Vegetable',
      unitName: '1 cabagge',
      unitPrice: 217,
      currencySign: '\\',
      description: 'Made in Aichi'
    },
    {
      id: 'lettuce',
      name: 'Lettuce',
      imagePath: 'lettuce.jpg',
      category: 'Vegetable',
      unitName: '1 lettuce',
      unitPrice: 182,
      currencySign: '\\',
      description: 'Made in Gunma'
    },
    {
      id: 'asparagus',
      name: 'Asparagus',
      imagePath: 'asparagus.jpg',
      category: 'Vegetable',
      unitName: '1-pack',
      unitPrice: 104,
      currencySign: '\\',
      description: 'Made in Mexico'
    },
    {
      id: 'bell-pepper',
      name: 'Bell Pepper',
      imagePath: 'bell-pepper.jpg',
      category: 'Vegetable',
      unitName: '1 bell pepper',
      unitPrice: 170,
      currencySign: '\\',
      description: 'Made in Koria'
    },
    {
      id: 'blackcoffee',
      name: 'Black Coffee',
      imagePath: 'blackcoffee.png',
      category: 'Beverage',
      unitName: '1 Black Coffee',
      unitPrice: 105,
      currencySign: '\\',
      description: 'Made in Japan'
    },
    {
      id: 'celery',
      name: 'Celery',
      imagePath: 'celery.jpg',
      category: 'Vegetable',
      unitName: '1 Celery',
      unitPrice: 146,
      currencySign: '\\',
      description: 'Made in Sizuoka'
    },
    {
      id: 'cola',
      name: 'Cola',
      imagePath: 'cola.png',
      category: 'Beverage',
      unitName: '1 Bottle',
      unitPrice: 116,
      currencySign: '\\',
      description: 'Made in Japan'
    },
    {
      id: 'eggplant',
      name: 'Eggplant',
      imagePath: 'eggplant.jpg',
      category: 'Vegetable',
      unitName: '3-pack',
      unitPrice: 205,
      currencySign: '\\',
      description: 'Made in Kouchi'
    },
    {
      id: 'loin',
      name: 'Loin',
      imagePath: 'loin.jpg',
      category: 'Meat',
      unitName: '1-pack, 300g',
      unitPrice: 1025,
      currencySign: '\\',
      description: 'Made in Japan'
    },
    {
      id: 'milktea',
      name: 'Milk Tea',
      imagePath: 'milktea.png',
      category: 'Beverage',
      unitName: '1 Bottle',
      unitPrice: 108,
      currencySign: '\\',
      description: 'Made in Japan'
    },
    {
      id: 'onion',
      name: 'Onion',
      imagePath: 'onion.jpg',
      category: 'Vegetable',
      unitName: '1 onion',
      unitPrice: 112,
      currencySign: '\\',
      description: 'Made in Hokkaido'
    },
    {
      id: 'orangejuice',
      name: 'Orange Juice',
      imagePath: 'orangejuice.png',
      category: 'Beverage',
      unitName: '1 Bottle',
      unitPrice: 108,
      currencySign: '\\',
      description: 'Made in Japan'
    },
    {
      id: 'potato',
      name: 'Potato',
      imagePath: 'potato.jpg',
      category: 'Vegetable',
      unitName: '1 potato',
      unitPrice: 89,
      currencySign: '\\',
      description: 'Made in Hokkaido'
    },
    {
      id: 'pumpkin',
      name: 'Pumpkin',
      imagePath: 'pumpkin.jpg',
      category: 'Vegetable',
      unitName: '1 pumpkin',
      unitPrice: 512,
      currencySign: '\\',
      description: 'Made in New zealand'
    },
    {
      id: 'radish',
      name: 'Radish',
      imagePath: 'radish.jpg',
      category: 'Vegetable',
      unitName: '1 radish',
      unitPrice: 205,
      currencySign: '\\',
      description: 'Made in Kanagawa'
    },
    {
      id: 'shallot',
      name: 'Shallot',
      imagePath: 'shallot.jpg',
      category: 'Vegetable',
      unitName: '1 shallot',
      unitPrice: 115,
      currencySign: '\\',
      description: 'Made in Tochigi'
    },
    {
      id: 'shank',
      name: 'Shank',
      imagePath: 'shank.jpg',
      category: 'Meat',
      unitName: '1-pack 300g',
      unitPrice: 490,
      currencySign: '\\',
      description: 'Made in Japan'
    },
    {
      id: 'sirloin',
      name: 'Sirloin',
      imagePath: 'sirloin.jpg',
      category: 'Meat',
      unitName: '1-pack 300g',
      unitPrice: 1580,
      currencySign: '\\',
      description: 'Made in Japan'
    },
    {
      id: 'sodadrink',
      name: 'Sodadrink',
      imagePath: 'sodadrink.png',
      category: 'Beverage',
      unitName: '1-Bottle',
      unitPrice: 78,
      currencySign: '\\',
      description: 'Made in Japan'
    },
    {
      id: 'sportsdrink',
      name: 'Sports Drink',
      imagePath: 'sportsdrink.png',
      category: 'Beverage',
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
      category: 'Meat',
      unitPrice: 3800,
      currencySign: '\\',
      description: 'Made in Japan'
    },
    {
      id: 'water',
      name: 'Water Bottle',
      imagePath: 'water.png',
      category: 'Beverage',
      unitName: '1-Bottle',
      unitPrice: 68,
      currencySign: '\\',
      description: 'Made in Japan'
    }
  ]

  useEffect(() => {
    // TODO: Get goods from the backend
    setGoods(goodsData)
    setCategories(
      Array.from(new Set(goodsData.map(current => current.category)))  //distinct categories from goods
        .map<categoryState>(goodsName => {
          return ({ name: goodsName, isOn: true }
          )
        }))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clickCategory = (name: string | undefined, isOn: boolean) => {
    console.log(`name: ${name}, isOn: ${isOn}`)
    setCategories(currentCategories => {
      const clickedCategory = currentCategories.find(val => val.name === name)
      if (clickedCategory !== undefined)
        clickedCategory.isOn = isOn

      setGoods(currentGoods => {
        const searchOnCategories = currentCategories.filter(val => val.isOn).map(val => val.name)
        return (
          goodsData.filter(val => searchOnCategories.includes(val.category))
        )
      })

      return currentCategories
    })
  }

  return (
    <div>
      <Row>
        <Col><h2>Choose Category</h2></Col>
        <Col className='text-end'><ShoppingCart /></Col>
      </Row>
      <div id='categories'>
        {categories.map((val, index) => <Category key={val.name} categoryState={val} onClick={clickCategory} />)}
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
                    <CardText className='text-center'><button className='addCartButton' onClick={() => shoppingCart?.addToCart({ ...value, quantity: 1 })}>Add to cart</button></CardText>
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
