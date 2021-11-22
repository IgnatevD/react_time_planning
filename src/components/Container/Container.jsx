import PropTypes from 'prop-types';

import styles from './Container.module.scss';

const Container = ({ children, className = null }) => (
  <div className={[styles.container, className].join(' ')}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
