import styled from "styled-components/native";

const StyledScrollView =  styled.ScrollView`
  width: 100%;
  padding: 10px 20px;
`;

const RateRow = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin: 5px auto;
  padding: 10px;
  width: 270px;
  border-radius: 10px;
  justify-content: space-between;
  background-color: #0078AA;
`;

const Currency = styled.Text`
  color: #F6F6F6;
  font-size: 22px;
`;

const Value = styled.Text`
  color: #F6F6F6;
  font-weight: bold;
  font-size: 20px;
`;

export {
  StyledScrollView,
  RateRow,
  Currency,
  Value,
}