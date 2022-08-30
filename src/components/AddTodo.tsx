import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions/Action";
function AddTodo() {
  const dispatch = useDispatch();
  interface ErrorType {
    todo?: string;
  }
  return (
    <Formik
      initialValues={{
        todo: "",
      }}
      validate={(values) => {
        const errors: ErrorType = {};
        if (!values.todo) {
          errors.todo = "Required";
        }
        return errors;
      }}
      onSubmit={(values) => {
        dispatch(actions.addTodo(values.todo));
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleSubmit,
          handleBlur,
        } = props;

        return (
          <form onSubmit={handleSubmit} className="form-container">
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              name="todo"
              type="text"
              placeholder="Add Todo..."
              className={`input-text ${errors.todo ? "border" : ""}`}
            />
      
            <input type="submit" className="input-submit" value="Submit" />
          </form>
        );
      }}
    </Formik>
  );
}
export default AddTodo;
