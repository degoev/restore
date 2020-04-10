import React from "react";

import { BsServiceConsumer } from "../../services/bs-service-context.js";

const withBsService = (Wrapped) => {
     return (props) => {
               return (
                    <BsServiceConsumer>{
                         (service) => {
                              return(<Wrapped {...props} service={service} />);
                         }
                    }</BsServiceConsumer>
               );
            }
};

export default withBsService;

