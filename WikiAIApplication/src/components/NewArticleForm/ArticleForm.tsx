import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import style from './ArticleForm.module.css';

// типизируем значения формы
interface ArticleFormValues {
    title: string;
    tags: string;
    image: File | [];
    description: string;
    content: string;  
}

const ArticleForm: React.FC = () => {
  const validationSchema = Yup.object({
      title: Yup.string().required('Title is required'),
      tags: Yup.array().of(Yup.string()).required('Tags are required'),
      descritpion: Yup.array().of(Yup.string()).required('Description is required'),
      content: Yup.string().required('Content is required'),   
  });

  const initialValues: ArticleFormValues = {
      title: '',
      tags: '',
      image: [],
      description: '',
      content: '',      
  };

  // события при отправке формы
  const handleSubmit = (values: ArticleFormValues, { setSubmitting }: FormikHelpers<ArticleFormValues>) => {
      const tagsArray = values.tags.split(',').map(tag => tag.trim());
      const formValues = { ...values, tags: tagsArray };
      console.log(formValues);
      setSubmitting(false);
  };

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form>
            <div>
                <label htmlFor="title">Title</label>
                <Field type="text" name="title" />
                <ErrorMessage name="title" component="div" />
            </div>
            <div>
                <label htmlFor="tags">Tags</label>
                <Field type="text" name="tags" />
                <ErrorMessage name="tags" component="div" />
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <input
                   type="file"
                   name="image"
                   onChange={(event) => {
                       if (event.currentTarget.files) {
                           setFieldValue('image', event.currentTarget.files[0]);
                       }
                   }}
                />
               {/* Если понадобится обработка отсутсвия картинки */}
               {/* <ErrorMessage name="image" component="div" /> */}
            </div>
            <div>
                <label htmlFor="descritpion">Descritpion</label>
                <Field name="descritpion" type="textarea" className={style.descriptionInput}/>
                <ErrorMessage name="descritpion" component="div" />
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <Field as="input" name="content" />
                <ErrorMessage name="content" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </Form>
      )}
    </Formik>
  );
};

export default ArticleForm;