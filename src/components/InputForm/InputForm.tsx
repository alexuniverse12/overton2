import "./InputForm.css"
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useAppModel from "../../hooks/useMainReducer";
import { AppReducerActionTypeEnum } from "../../state/mainReducer";
import { doc, updateDoc, addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase.config';
import { useNavigate } from "react-router-dom";
import { useTonhubConnect } from "react-ton-x";
import axios from "axios";


export type InputFormProps = {
    inputFields: any
}



const InputForm = ({ inputFields }: InputFormProps) => {
    const connect = useTonhubConnect();
    console.log(connect, "MEWMEWMEEw");

    // while (connect.state.type !== 'online') {
    //     setTimeout(() => { }, 1000)
    //     console.log(connect);
    // }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (formData: any) => {
        //seed
        const tonData = JSON.parse(localStorage.getItem("connection") || "")
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        console.log(formData)
        const rightDate = mm + '/' + dd + '/' + yyyy;
        if (inputFields.type === "submitQuestion") {
            console.log("TEST")
            const tonData = JSON.parse(localStorage.getItem("connection") || "")
            const questionsCollection = collection(db, "questions");
            if (tonData) {
                console.log("TEST 2")

                try {
                    // const owner = connect.state.
                    const response: any = await axios({
                        method: 'post',
                        url: "http://104.248.100.22:3000/deploy",
                        data: {
                            owner: tonData.walletConfig.address,
                        }
                    });
                    const responseData = response.data
                    console.log(response.data, "SUKA BLYAT");
                    const reqTrans = await connect.api.requestTransaction({
                        to: responseData.contractAddress,
                        value: formData.rewardAmount,
                        stateInit: responseData.stateInit,
                        text: "Smart contract deployment",
                        payload: responseData.payload
                    })
                    console.log(reqTrans)
                    console.log(JSON.parse(response.data), "SUKA BLYAT");
                } catch (error) {
                    console.error(error, "IDI NAXUI");
                }

            }


            // await addDoc(questionsCollection, {
            //     userID: tonData.walletConfig.address,
            //     title: data.questionTitle,
            //     questionText: data.questionDescription,
            //     rewardAmount: data.rewardAmount,
            //     date: rightDate
            // });

            // console.log("user set nickname and languages: ", uid);
            // dispatch(getCustomUserInfo(uid))
            // navigate("/orders")
        }
    };
    const { appModel, dispatch } = useAppModel();

    return (
        <div className='FormWrapper'>
            <form className="addQuestionForm" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Title" className="questionTitleInput" defaultValue="" {...register(inputFields.questionTitle)} />
                <input placeholder="Reward 💎" className="questionAmountInput" defaultValue="" {...register(inputFields.rewardAmount)} />
                <textarea placeholder="Description" className="questionBodyInput" defaultValue="" {...register(inputFields.questionDescription)} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className="questionSubmitBtn" type="submit" />
            </form>
        </div>
    );
}

export default InputForm;