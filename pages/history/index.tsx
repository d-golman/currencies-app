import { FC } from "react";
import ComonLayoutComponent from "../../components/layout/CommonLayoutComponent";
import { Title } from "../../components/layout/TitleComponent/styles";
import HistoryComponent from "../../components/rates/HistoryComponent";
import { PropsInterface } from "../../types/components";

const HistoryPage: FC<PropsInterface> = ({ route }) => {
  const { currency } = route!.params;
  return (
    <ComonLayoutComponent>
      <Title>Данные за последнюю неделю</Title>
      <HistoryComponent currency={currency} />
    </ComonLayoutComponent>
  );
};

export default HistoryPage;