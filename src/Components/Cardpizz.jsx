import React from 'react'
import {Card,Button} from 'react-bootstrap'
export default function Cardpizz(props) {
    return (
        <>
            <Card className=' cardpizza' style={{ width: '15rem' }}>
                <Card.Img  variant="top" src={props.img} height='275px'  />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="warning">Add to cart 🛒</Button>
                </Card.Body>
            </Card>

        </>
    )
}
