import styles from "../css/dashboard.module.css";
import { Link } from 'react-router-dom';

function Tables() {
  return (
    <><section className={styles.dashboard}>
    <table className={styles.rwd_table}>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Subject</th>
          <th>className</th>
          <th>Gender</th>
          <th>Email Address</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td data-th="Name">
            <div className={styles.first_td}>
              <img
                src="https://source.unsplash.com/random"
                className={styles.table_img}
                alt="name"
              />
              Bozorg
            </div>
          </td>
          <td data-th="Subject">Chemistry</td>
          <td data-th="className">11 A</td>
          <td data-th="Gender">male</td>
          <td data-th="Email Adress">bozorg.shkn1@gmail.com</td>
          <td data-th="Actions">
            <div className={styles.action_wrapper}>
               <Link className={styles.action_button}>
                <i className="bx bx-edit-alt"></i>
              </Link>
               <Link className={styles.action_button}>
                <i className="bx bx-trash"></i>
              </Link>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section></>
  )
}

export default Tables