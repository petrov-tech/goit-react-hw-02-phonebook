import styled from '@emotion/styled';
import { Form } from 'formik';

const FormEl = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 300px;
        outline: 1px solid grey;
    padding: 10px;
label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
input {
        margin-top: 6px;
        
}
button {
        width: 100px;
    background-color: #d4e5f6;
    border-radius: 5px;
    border: none;
}
}`;

export { FormEl };
