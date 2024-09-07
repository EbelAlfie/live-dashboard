import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AppBar } from "../../component/AppBar";
import InputSection from "./components/InputSection";
import { WelcomeBanner } from "./components/MiscDesc";

function LoginContent() {
    return (
        <Row>
            <InputSection />
            <WelcomeBanner />
        </Row>
    )
}

export default function LoginScreen() {

    return (
        <>
            <Col>
                <AppBar />
                <LoginContent />
            </Col>
        </>
    )
}