import React from "react";
import './Body.css';
import BodyContentComponent from "./BodyContentComponent";


class BodyComponent extends React.Component {
    render() {
        return (
            <div className="BodyComponent">
                <h2> I am Body Component!!</h2>

                {/* Call BodyContentComponent 2 times
                Sending props as content="This is Body Left Component" to one component
                and content="This is Body Right Component" to another component */}
                <BodyContentComponent content="This is Body Left Component"></BodyContentComponent>
                <BodyContentComponent content="This is Body Right Component"></BodyContentComponent>

            </div>
        );
    }
}
export default BodyComponent;