import { ReactSVG } from 'react-svg';
import ArrowRight from '../../images/icons/arrow-right.svg';

export const GoBackLink = (to, text) => {
  return (
    <GoBackLink to={to}>
      <span>{text}</span>
      <ReactSVG src={ArrowRight} />
    </GoBackLink>
  );
};
