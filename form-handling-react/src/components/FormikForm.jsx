import {Formik , Form , Field , ErrorMessage} from 'formik';
import * as Yup from 'yup';

const validiationSchema = Yup.object({
    username : Yup.string().required('Username is required'),
    email : Yup.string().email('Invalid email format').required('Required'),
    password : Yup.string().required('Required'),
});


const FormikForm = () => {
    return (
    <Formik 
        initialValues={{username: '', email: '', password: ''}}
        validationSchema={validiationSchema}
        onSubmit={(values) => {console.log(values)}}        
    >
        {() => (
            <Form>
                <Field type="text" name="username" placeholder="Username" />
                <ErrorMessage name="username" component="div" />
                <Field type="email" name="email" placeholder="Email"/>
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" placeholder="Password"/>
                <ErrorMessage name="password" component="div" />
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
    )

}
export default FormikForm;
