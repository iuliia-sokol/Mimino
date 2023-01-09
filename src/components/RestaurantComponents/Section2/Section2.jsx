import { Box } from 'components/Box';

import { hotDishes, mainDishes, salads } from 'utils/menu';

import {
  Section2Wrapper,
  CaptionStyled,
  TableSubtitle,
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
        <div>
          <table>
            <CaptionStyled>МЕНЮ РЕСТОРАНУ</CaptionStyled>
            <tbody>
              <TableSubtitle>
                <th colSpan="3">Гарячі страви</th>
              </TableSubtitle>
              {hotDishes.map(dish => {
                return (
                  <tr key={dish.name}>
                    <td>
                      {dish.name} <br />
                      <span>{dish.ingredients}</span>
                    </td>
                    <td>{dish.portion}</td>
                    <td>{dish.price}</td>
                  </tr>
                );
              })}
              <TableSubtitle>
                <th colSpan="3">Гарніри та закуски</th>
              </TableSubtitle>
              {mainDishes.map(dish => {
                return (
                  <tr key={dish.name}>
                    <td>
                      {dish.name} <br />
                      <span>{dish.ingredients}</span>
                    </td>
                    <td>{dish.portion}</td>
                    <td>{dish.price}</td>
                  </tr>
                );
              })}
              <TableSubtitle>
                <th colSpan="3">Салати</th>
              </TableSubtitle>
              {salads.map(dish => {
                return (
                  <tr key={dish.name}>
                    <td>
                      {dish.name} <br />
                      <span>{dish.ingredients}</span>
                    </td>
                    <td>{dish.portion}</td>
                    <td>{dish.price}</td>
                  </tr>
                );
              })}
              <TableSubtitle>
                <th colSpan="3">Десерти</th>
              </TableSubtitle>
            </tbody>
          </table>
        </div>
      </Box>
    </Section2Wrapper>
  );
};
