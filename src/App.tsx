import React from 'react';
import './App.scss';
import { Row, Col, Jumbotron, Container } from 'react-bootstrap';

function App() {
    const funFacts = [
        "It sort of bothers me that the 'i' and '!' in the greeting are not perfect mirrors of each other, but I guess it makes sense from a typographical perspective.",
        "This website was built with React and TypeScript. It doesn't need either of them, but I am a big proponent of a liberal arts education.",
        "Someday I'll turn this place into a blog, which I'm really just telling you to pretend I'm holding myself accountable."
    ]

    const random = Math.floor(Math.random() * 3);

    return (
        <Container fluid>
            <Row>
                <Col className="col-no-padding">
                    <Jumbotron fluid>
                        <div className="jumbo-content">
                            <h1>Hoi!</h1>
                            <p>I'm Rayo Verweij, a Cog Sci grad at the University of Edinburgh.</p>
                            <p>{funFacts[random]}</p>
                            <p>Occasionally, I build a web thing, which then might end up here, like TacoTab below.</p>
                            <p>If you're trying to talk to me, you can find me on <a href="https://github.com/rayoverweij/" target="_blank" rel="noreferrer noopener">GitHub</a> or <a href="https://twitter.com/rayoverweij" target="_blank" rel="noopener noreferrer">Twitter</a> or <a href="https://www.linkedin.com/in/rayo-verweij/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="mailto:rayo.verweij@live.nl">send me an email</a>.</p>
                        </div>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 6, offset: 3}} className="col-no-padding">
                    <h3><span role="img" aria-label="taco emoji">🌮</span> Looking for TacoTab?</h3>
                    <p>TacoTab is an app I built for tabulating small debating tournaments. It's <a href="/tacotab">over here</a>.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
