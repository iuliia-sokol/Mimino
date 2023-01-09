import { Box } from 'components/Box';
import { ButtonStandart } from 'components/Buttons/ButtonStandart/ButtonStandart';

import { hotDishes, mainDishes, salads, desserts, drinks } from 'utils/menu';

import {
  Section2Wrapper,
  CaptionStyled,
  TableSubtitle,
  DishName,
  DishIngredients,
  DishPortion,
  DishPrice,
  Table,
  TableWrapper,
  ButtonWrapper,
} from './Section2.styled';

export const Section2 = () => {
  return (
    <Section2Wrapper>
      <Box
        display="flex"
        flexDirection="column"
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
      >
        <TableWrapper>
          <Table>
            <CaptionStyled>МЕНЮ РЕСТОРАНУ</CaptionStyled>
            <tbody>
              <TableSubtitle>
                <th colSpan="3">Гарячі страви</th>
              </TableSubtitle>
              {hotDishes.map(dish => {
                return (
                  <tr key={dish.name}>
                    <DishName>
                      {dish.name} <br />
                      <DishIngredients>{dish.ingredients}</DishIngredients>
                    </DishName>
                    <DishPortion>{dish.portion}</DishPortion>
                    <DishPrice>{dish.price}</DishPrice>
                  </tr>
                );
              })}
              <TableSubtitle>
                <th colSpan="3">Гарніри та закуски</th>
              </TableSubtitle>
              {mainDishes.map(dish => {
                return (
                  <tr key={dish.name}>
                    <DishName>
                      {dish.name} <br />
                      <DishIngredients>{dish.ingredients}</DishIngredients>
                    </DishName>
                    <DishPortion>{dish.portion}</DishPortion>
                    <DishPrice>{dish.price}</DishPrice>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Table>
            <tbody>
              <TableSubtitle>
                <th colSpan="3">Салати</th>
              </TableSubtitle>
              {salads.map(dish => {
                return (
                  <tr key={dish.name}>
                    <DishName>
                      {dish.name} <br />
                      <DishIngredients>{dish.ingredients}</DishIngredients>
                    </DishName>
                    <DishPortion>{dish.portion}</DishPortion>
                    <DishPrice>{dish.price}</DishPrice>
                  </tr>
                );
              })}
              <TableSubtitle>
                <th colSpan="3">Десерти</th>
              </TableSubtitle>
              {desserts.map(dish => {
                return (
                  <tr key={dish.name}>
                    <DishName>{dish.name}</DishName>
                    <DishPortion>{dish.portion}</DishPortion>
                    <DishPrice>{dish.price}</DishPrice>
                  </tr>
                );
              })}
              <TableSubtitle>
                <th colSpan="3">Напої</th>
              </TableSubtitle>
              {drinks.map(dish => {
                return (
                  <tr key={dish.name}>
                    <DishName>{dish.name}</DishName>
                    <DishPortion>{dish.portion}</DishPortion>
                    <DishPrice>{dish.price}</DishPrice>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableWrapper>
        <ButtonWrapper>
          <ButtonStandart text="Забронювати столик" />
        </ButtonWrapper>
      </Box>
    </Section2Wrapper>
  );
};
