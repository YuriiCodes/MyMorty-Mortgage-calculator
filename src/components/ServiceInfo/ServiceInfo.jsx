import {ListGroup} from "react-bootstrap";

const ServiceInfo = (props) => {
    return (
        <div className="mt-4 p-5 bg-light  rounded">
            <h1>MyMorty is a mortgage calculating app!</h1>
            <p>Here's how you use it👇</p>
            <ListGroup as="ol" numbered>
                <ListGroup.Item as="li">Take a look at our banks collection</ListGroup.Item>
                <ListGroup.Item as="li">If needed, add your own bank (don't worry, you can edit or delete them anytime)</ListGroup.Item>
                <ListGroup.Item as="li">Add your mortgage and calculate monthly payment</ListGroup.Item>
            </ListGroup>
        </div>
    )
}
export default ServiceInfo;