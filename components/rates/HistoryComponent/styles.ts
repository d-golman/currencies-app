import styled from "styled-components/native";

const ChartContainer = styled.View`
  width: 100%;
  height: 300px;
  background-color: white;
  display: flex;
  padding: 20px;
  flex-direction: row;
`;

const Chart = styled.View`
  width: 70%;
  flex-direction: column;
`;


export {
  ChartContainer,
  Chart
};