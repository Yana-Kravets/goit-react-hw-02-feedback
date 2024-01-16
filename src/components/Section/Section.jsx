import propTypes from 'prop-types';
import { SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => (
  <div>
    <SectionTitle>
      {title}
    </SectionTitle>
    {children}
  </div>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};