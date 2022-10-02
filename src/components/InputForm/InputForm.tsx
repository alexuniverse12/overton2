import "./InputForm.css"
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useAppModel from "../../hooks/useMainReducer";
import { AppReducerActionTypeEnum } from "../../state/mainReducer";
import { doc, updateDoc, addDoc, collection } from "firebase/firestore"; 
import { db } from '../../firebase.config';
import { useNavigate } from "react-router-dom";
import { useTonhubConnect } from "react-ton-x";

export type InputFormProps = {
    inputFieldName: string
  }
  


const InputForm = ({ inputFieldName }: InputFormProps) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data: any) => {
        //seed
        const tonData = JSON.parse(localStorage.getItem("connection") || "")
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        
        const rightDate = mm + '/' + dd + '/' + yyyy;
        
        if(inputFieldName === "draftedQuestion"){
            const questionsCollection = collection(db, "questions");
                await addDoc(questionsCollection, {
                    userID: tonData.walletConfig.address,
                    questionText: data.draftedQuestion,
                    date: rightDate
                });

                // console.log("user set nickname and languages: ", uid);
                // dispatch(getCustomUserInfo(uid))
                // navigate("/orders")
        }
    };
    const { appModel, dispatch } = useAppModel();

    return (
        <div className='FormWrapper'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="" {...register(inputFieldName)} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
}

export default InputForm;