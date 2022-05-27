import React from "react";

import Card from "../Card";
import {PaddedRow, StyledContainer} from "../../config/styles";


const Projects = ({lang}) => (<StyledContainer>
  <PaddedRow lg={2}
             md={2}
             sm={1}
             xl={2}
             xs={1}>
    {lang["projects"].map((item, idx) => (<Card key={idx}
                                                title={item.title}
                                                text={item.description}
                                                btnText={item.btnText}
                                                img={item.imageKey}
                                                link={item.url}/>))}
  </PaddedRow>
</StyledContainer>);

export default Projects;