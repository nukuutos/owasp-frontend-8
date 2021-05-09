import React from 'react';
import Input from '../../utils/form/input';
import { Formik, Form } from 'formik';
import useAsyncAction from '../../../hooks/use-async-action/use-async-action';
import Textarea from '../../utils/form/textarea';

const AddComment = ({ className }) => {
  const [asyncAction] = useAsyncAction();

  return (
    <Formik
      initialValues={{ comment: '' }}
      onSubmit={async (values) => {
        // async
        const config = {
          method: 'post',
          url: `/comment`,
          data: { ...values },
        };

        const data = await asyncAction(config);

        if (data) {
        }
      }}>
      {({ isSubmitting }) => (
        <Form className={`add-comment ${className}`}>
          <label className="label mb-s-1">Your comment</label>
          <Textarea className="add-comment__textarea textarea" maxLength={160} type="text" name="comment" />

          <button
            disabled={isSubmitting}
            type="submit"
            className={`add-comment__btn btn btn--primary  
                ${isSubmitting ? 'btn--spinner btn--submitted' : ''} mt-m-3`}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddComment;
