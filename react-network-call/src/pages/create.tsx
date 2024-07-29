import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup'

const createSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().email("invalid format").required("email is required"),
    age: yup.number().required("age is required").min(1, "minimal age is 1")
})

interface FormValue {
    name: string;
    email: string;
    age: number;
}

export default function CreateUser() {
    const intialValues: FormValue = { name: "", email: "", age: 0 }
    const handleCreate = async (data: FormValue) => {
        try {
            await axios.post("http://localhost:2000/users", data)
            alert("User Created")
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <Formik
            initialValues={intialValues}
            validationSchema={createSchema}
            onSubmit={(values) => {
                // console.log(values);
                handleCreate(values)
            }} 
        >
            {
                () => {
                    return (
                        <Form>
                            <div className='mt-[10px]'>
                                <label htmlFor="name">Name</label>
                                <Field type="text" name="name" className="border border-1" />
                                <ErrorMessage 
                                    name='name'
                                    component="div"
                                    className='text-[12px] text-red-500'
                                />
                            </div>
                            <div className='mt-[10px]'>
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" className="border border-1" />
                                <ErrorMessage 
                                    name='email'
                                    component="div"
                                    className='text-[12px] text-red-500'
                                />
                            </div>
                            <div className='mt-[10px]'>
                                <label htmlFor="age">Age</label>
                                <Field type="number" name="age" className="border border-1" />
                                <ErrorMessage 
                                    name='age'
                                    component="div"
                                    className='text-[12px] text-red-500'
                                />
                            </div>
                            <button type='submit' className='bg-teal-500 p-2 mt-2'>Create</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}