import styles from './segments.module.css';

const DocsByIDPage = ({params}) => {
  console.log(params);
  return (<div className={styles.title}>Docs</div>);
};

export default DocsByIDPage;