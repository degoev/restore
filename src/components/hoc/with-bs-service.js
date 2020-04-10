import React from "react";

import { BsServiceConsumer } from "../../services/bs-service-context.js";

const withBsService = (Wrapped) => {
     return (props) => {
               return (
                    <BsServiceConsumer>{
                         (value) => {
                              return(<Wrapped {...props} service={value} />);
                         }
                    }</BsServiceConsumer>
               );
            };
};

export default withBsService;

