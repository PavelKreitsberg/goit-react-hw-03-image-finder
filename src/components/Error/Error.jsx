import css from '../Error/Error.module.css';

export const Error = ({ message }) => {
  return <p className={css.error}>{message}</p>;
};
