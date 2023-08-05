import React from "react";
import {Container,Title,List,StatLi} from "./statistics.style"
export const Statistics = ({ items }) => {
  return (
    <Container>
      <Title>Upload stats</Title>

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
