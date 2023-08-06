import React from "react";
import {Container,Title,List,StatLi} from "./statistics.style"
export const Statistics = ({ items,title}) => {
  return (
    <Container>
        {title && <Title className="title">{title}</Title>}

      <List>
        {items.map((item) => (
          <StatLi  key={item.id} dataId={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </StatLi>
        ))}
      </List>
    </Container>
  );
};
