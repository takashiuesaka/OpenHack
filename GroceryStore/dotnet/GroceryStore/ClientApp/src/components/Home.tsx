import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, CardGroup, Row, Col } from 'reactstrap'
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
        <Category onClick={clickCategory}>Fish</Category>
        <Category onClick={clickCategory}>Meat</Category>
        <Category onClick={clickCategory}>Frozen food</Category>
        <Category onClick={clickCategory}>Beverage</Category>
        <Category onClick={clickCategory}>Bread</Category>
        <Category onClick={clickCategory}>Side dish</Category>
      </div>
      <CardGroup>
        {goods.map((value, index) => {
          return (
            <Card key={value.id}>
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
          )
        })}
      </CardGroup>
      <p>Welcome to your new single-page application, built with:</p>
      <ul>
        <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
        <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
        <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
      </ul>
      <p>To help you get started, we have also set up:</p>
      <ul>
        <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
        <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
        <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
      </ul>
      <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
    </div>
  );
}
