import React, { useState } from 'react'
import Input from './components/input';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Multiselect from 'multiselect-react-dropdown';
import { addForm } from '../../../content/formLogic';

const Form = () => {

    const [fName, setfName] = useState('');
    const [sName, setsName] = useState('');
    const [email, setemail] = useState('');
    const [phNumber, setphNumber] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');

    const [services, setServices] = useState<Array<any>>([]);
    const route = useRouter();

    const handleSaveData = async () => {
        if (fName.length === 0) {
            showToast("first name");
            return;
        }
        if (sName.length === 0) {
            showToast("last name");
            return;
        }
        if (phNumber.length === 0 && phNumber.length < 10 || phNumber.length > 13) {
            showToast("phone number");
            return;
        }
        if (city.length === 0) {
            showToast("city");
            return;
        }
        if (state.length === 0) {
            showToast("state");
            return;
        }
        if (services.length === 0) {
            showToast("please select at least 1 service");
            return;
        }
        if (email.length === 0 && ValidateEmail(email)) {
            showToast("email");
            return;
        }

        toast.info('Loading...', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        try {
            await addForm({
                fName: fName,
                lName: sName,
                email: email,
                service: services,
                phNumber: phNumber,
                city: city,
                state: state,
            });
            toast.dismiss();
            makeEmpty();
            toast.success("details submitted successfully", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setTimeout(() => {
                route.push("/components/form/components/thanks");
            }, 1000);
        } catch (error: any) {
            toast.dismiss();
            console.error(error);
            toast.error("An error occurred", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }

    function ValidateEmail(email: string) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }


    function makeEmpty() {
        setfName('');
        setsName('');
        setemail('');
        setphNumber('');
        setServices([]);
        setcity('');
        setstate('');
    }

    function showToast(variable: string) {
        return toast.warn(`${variable} can't be empty`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }

    const customStyles = {
        multiselectContainer: {
            gridColumn: '1/-1',
            width: '100%',
            height: '60px',
            fontSize: '17px',
            padding: '15px 12px',
            marginTop: '20px',
            border: 'none',
            backgroundColor: 'rgba(248, 250, 252, 1)',
            borderRadius: '8px',
        },
    };

    return (
        <div className='form-wrapper'>
            <ToastContainer />
            <div className='form'>
                <Input placeholder='First Name' value={fName} onChange={(value) => setfName(value)} />
                <Input placeholder='Last Name' value={sName} onChange={(value) => setsName(value)} />
                <Input placeholder='Email' value={email} onChange={(value) => setemail(value)} />
                <Input placeholder='Mobile Number' value={phNumber} onChange={(value) => setphNumber(value)} />
                <div className='select'>
                    <Multiselect
                        isObject={false}
                        onRemove={(event) => {
                            setServices(event);
                        }}
                        onSelect={(event) => {
                            setServices(event)
                        }}
                        placeholder='Services'
                        style={customStyles}
                        options={[
                            'Social Media Marketing',
                            'Digital Marketing',
                            'Graphic Design',
                            'Animation',
                            'Website Development',
                            'App Design',
                            'Google Reviews & Ratings',
                            'Video Making & Editing'
                        ]}
                    />
                </div>
                <Input placeholder='City' value={city} onChange={(value) => setcity(value)} />
                <Input placeholder='State' value={state} onChange={(value) => setstate(value)} />
                <button onClick={handleSaveData} className='submit'>SUBMIT</button>
            </div>
        </div>
    )
}

export default Form;