import propTypes from 'prop-types';
import { ButtonContainer, ButtonItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonContainer>
    {options.map(( option, index ) => (
    <ButtonItem
        key={index}
        onClick={() => onLeaveFeedback(option)}
    >
        {option}
    </ButtonItem>
    ))}
  </ButtonContainer>
);

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};




