import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"> <FaGoogle></FaGoogle> Login via Google</Button>
                <Button className="mt-2" variant="outline-dark"> <FaGithub></FaGithub> Login via GitHub</Button>
            </ButtonGroup>
            <div className="mt-3">
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className="mb-2"><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaFacebookMessenger /> Messenger</ListGroup.Item>
                </ListGroup>
            </div>

            {/* Brand Carousel Starts here   */}
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
            {/* Brand Carousel Ends here */}
        </div>
    );
};

export default RightSideNav;