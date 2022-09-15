import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, FormCheck } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import NumericInput from 'react-numeric-input';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import dateFormat from "dateformat";
import "../../assets/css/Pages.css";
import Axios from 'axios';
import { useNavigate } from 'react-router';
import women from "../../assets/images/women.png";
// const TimeSlot = React.lazy(()=> import('../stepper/time-slot'));

// const { useState, useRef, useEffect, Fragment } = React;

let Step = ({
	indicator,
	label,
	navigateToStepHandler,
	index,
	isActive,
	isComplete,
	isWarning,
	isError,
	isRightToLeftLanguage,
}) => {
	const classes = [''];

	if (isActive) {
		classes.push('is-active');
	}
	if (isComplete) {
		classes.push('is-complete');
	}
	if (isWarning) {
		classes.push('is-warning');
	}
	if (isError) {
		classes.push('is-error');
	}
	if (isRightToLeftLanguage) {
		classes.push('rightToLeft');
	}

	return (
		<div className={`stepper-step ${classes.join(' ')}`}>
			<div className="stepper-indicator">
				<span
					className="stepper-indicator-info"
					onClick={isComplete || isError ? () => navigateToStepHandler(index) : null}
				>
					{/* {isComplete ? (
						<svg className="stepper-tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
							<path d="M452.253 28.326L197.831 394.674 29.044 256.875 0 292.469l207.253 169.205L490 54.528z" />
						</svg>
					) : (
						indicator
					)} */}
				</span>
			</div>
			<div className="stepper-label">{label}</div>
		</div>
	);
};

Step.propTypes = {
	indicator: PropTypes.oneOfType([PropTypes.node, PropTypes.number]),
	label: PropTypes.string.isRequired,
	navigateToStepHandler: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	isActive: PropTypes.bool,
	isComplete: PropTypes.bool,
	isError: PropTypes.bool,
	isWarning: PropTypes.bool,
	isRightToLeftLanguage: PropTypes.bool,
};

let StepperHead = ({
	stepperContent,
	navigateToStepHandler,
	isVertical,
	isInline,
	isRightToLeftLanguage,
	currentTabIndex,
}) => (
	<div
		className={`stepper-head ${isVertical ? 'vertical-stepper-head' : ''} ${
			isInline ? 'inline-stepper-head' : ''
		}`}
	>
		{stepperContent.map((el, i) => (
			<Step
				key={i}
				index={i}
				navigateToStepHandler={navigateToStepHandler}
				isActive={i === currentTabIndex}
				isComplete={el.isComplete}
				isWarning={el.isWarning}
				isError={el.isError}
				isRightToLeftLanguage={isRightToLeftLanguage}
				// indicator={i + 1}
				label={el.label}
			/>
		))}
	</div>
);

StepperHead.propTypes = {
	stepperContent: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			content: PropTypes.node.isRequired,
			clicked: PropTypes.func,
			isWarning: PropTypes.bool,
			isError: PropTypes.bool,
			isComplete: PropTypes.bool,
			isLoading: PropTypes.bool,
		})
	),
	navigateToStepHandler: PropTypes.func.isRequired,
	currentTabIndex: PropTypes.number.isRequired,
	isInline: PropTypes.bool,
	isVertical: PropTypes.bool,
	isRightToLeftLanguage: PropTypes.bool,
};

let StepperFooter = ({
	isPrevBtn,
	previousStepHandler,
	isLastStep,
	nextStepHandler,
	submitHandler,
	stepperContent,
	currentTabIndex,
}) => {
	const submitCurrentStep = async () => {
		await stepperContent[currentTabIndex].clicked();
		nextStepHandler();
	};

	return (
		<div
			className="stepper-footer"
			style={{ justifyContent: isPrevBtn ? 'space-between' : 'flex-start' }}
		>
			{/* {isPrevBtn && (
				<button className="stepper-footer-btn" onClick={previousStepHandler}>
					Back
				</button>
			)} */}
			<button
				className={`stepper-footer-btn ${isLastStep ? 'success' : 'primary'}`}
				onClick={
					isLastStep
						? submitHandler
						: stepperContent[currentTabIndex].clicked
						? submitCurrentStep
						: nextStepHandler
						
				}
				disabled={
					// (isLastStep
					// 	? stepperContent.some((el) => !el.isComplete)
					// 	: !stepperContent[currentTabIndex].isComplete) ||
					stepperContent[currentTabIndex].isLoading ||
					!stepperContent[currentTabIndex].isComplete 

				}
			>
				{isLastStep ? `Proceed to Payment` : `Next`}
			</button>
		</div>
	);
};

StepperFooter.propTypes = {
	isPrevBtn: PropTypes.bool,
	previousStepHandler: PropTypes.func.isRequired,
	isLastStep: PropTypes.bool,
	nextStepHandler: PropTypes.func.isRequired,
	submitHandler: PropTypes.func.isRequired,
	currentTabIndex: PropTypes.number.isRequired,
	stepperContent: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			content: PropTypes.node.isRequired,
			clicked: PropTypes.func,
			isWarning: PropTypes.bool,
			isError: PropTypes.bool,
			isComplete: PropTypes.bool,
			isLoading: PropTypes.bool,
		})
	),
};

let Stepper = ({ isRightToLeftLanguage, isVertical, isInline, stepperContent, submitStepper }) => {
	const [currentTabIndex, setCurrentTabIndex] = useState(0),
		isLastStep = currentTabIndex === stepperContent.length - 1,
		isPrevBtn = currentTabIndex !== 0;

	const navigateToStepHandler = (index) => {
		if (index !== currentTabIndex) {
			setCurrentTabIndex(index);
		}
	};

	const nextStepHandler = () => {
		setCurrentTabIndex((prev) => {
			if (prev !== stepperContent.length - 1) {
				return prev + 1;
			}
		});
	};

	const previousStepHandler = () => {
		setCurrentTabIndex((prev) => prev - 1);
	};

	const submitHandler = () => {
		submitStepper();
	};

	return (
		<div className="stepper-wrapper">
			<div style={{ display: isVertical ? 'flex' : 'block' }} className="stepper-sub">
				<StepperHead
					stepperContent={stepperContent}
					navigateToStepHandler={navigateToStepHandler}
					isVertical={isVertical}
					isInline={isInline}
					currentTabIndex={currentTabIndex}
					isRightToLeftLanguage={isRightToLeftLanguage}
				/>
				<div className="stepper-body">
					{stepperContent.map((el, i) => (
						<Fragment key={i}>{i === currentTabIndex && el.content}</Fragment>
					))}
					<StepperFooter
						isPrevBtn={isPrevBtn}
						previousStepHandler={previousStepHandler}
						isLastStep={isLastStep}
						nextStepHandler={nextStepHandler}
						submitHandler={submitHandler}
						stepperContent={stepperContent}
						currentTabIndex={currentTabIndex}
					/>
				</div>
			</div>
		</div>
	);
};

Stepper.propTypes = {
	stepperContent: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			content: PropTypes.node.isRequired,
			clicked: PropTypes.func,
			isWarning: PropTypes.bool,
			isError: PropTypes.bool,
			isComplete: PropTypes.bool,
			isLoading: PropTypes.bool,
		})
	),
	submitStepper: PropTypes.func.isRequired,
	isInline: PropTypes.bool,
	isVertical: PropTypes.bool,
	isRightToLeftLanguage: PropTypes.bool,
};

const App1 = props => {
	const [data, setData] = useState();
	const [selectedTimeSlot, setSelectedTimeSlot] = useState();
	const [initialState, setInitialState] = useState({guest: 0});
	const {name, email, mobileNumber, lastName, guest} = initialState;
	const navigate = useNavigate();

	const packageData = JSON.parse(localStorage.getItem(("selectedPackageData")));

	useEffect(()=> {		
		setData(props?.data);
	});
	const [checkedData, setSelected] = useState({
			checked: false,
			id: null
			
		}),
		[acceptSecondTerms, setAcceptSecondTerms] = useState({
			checked: false,
			touched: false,
		}),
		[acceptThirdTerms, setAcceptThirdTerms] = useState({
			checked: false,
			touched: false,
		}),
		[isSecondStepLoading, setIsSecondStepLoading] = useState(false);



	const secondTermsHandler = () => {
		setAcceptSecondTerms((prev) => ({ checked: !prev.checked, touched: true }));
	};

	const handelInputChange = (e) => {
        let { name, value } = e.target;
        setInitialState({
            ...initialState,
            [name]: value,
			touched: true
        });
		localStorage.setItem("booking_"+name, value);
    } 


	const handleGuest = value => {
		setInitialState(
			{
				...initialState,
				"guest": value
			}
		)

		localStorage.setItem("booking_guests", value);
	}

	//for demo purposes only
	const timeout = (ms) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};


	const onChangeClick = (e, time) => {
		
		setSelected({
			checked: true,
			id: time._id
		});

		setSelectedTimeSlot(time);

		let appendDataToSelectedPackage = JSON.parse(localStorage.getItem(("selectedPackageData")));
		appendDataToSelectedPackage["timeSlot"] = {...time} ;

		localStorage.setItem("selectedPackageData", JSON.stringify(appendDataToSelectedPackage));

	}

	const secondStepAsyncFunc = async () => {
		//it can be an API call
	
		console.log(initialState);
		setIsSecondStepLoading(true);
		await timeout(3000);
		setIsSecondStepLoading(false);
		
	};

	const stepperContent = [
		{
			label: 'Select Time Slot',
			content: (
				<div>
					
					<div className="package-block">
                        <div className="package-sub">
                            	<img src={packageData?.photoUrl} alt="tour" className='package-mini-img' />
								<div style={{display:
                                    "flex", flexDirection: "column"}}>
									<div style={{display:
										"flex", justifyContent: "spaceBetween", alignItems: "center", marginLeft: "30px"}}>
										<p className="txt1">{packageData.name}</p>
										{packageData.isFemale && <img src={women}/>}

									</div>
									<span className="txt2">Starts from</span>
										<p className="txt3"><span>QAR {packageData?.price}/</span>person</p>
									</div>
                        </div>
                        <Button className="tour-btn"><img src={require('../../assets/images/hCalendar.png')} alt="calendar" />{dateFormat(packageData?.eventStartDate, "DDD mmm , yyyy")}</Button>
                    </div>
					<div>
                        <p className="available-txt">Available Time Slots</p>
                        {data?.times?.length > 0 && data.times.map(time => {
						return (
						<FormCheck className="select-tab">
							<FormCheckInput
								disabled={time.available ? false : true}
								checked={checkedData?.checked && checkedData.id === time._id}
								onChange={(e) => onChangeClick(e, time)}
							>
							</FormCheckInput>
							<FormCheckLabel>
								<p className="time">{time.startingTime} - {time.endTime}</p>
								<p className="price" style={{display: "flex", flexDirection: "column"}}>
									<span>{'QAR ' +time.price} /person</span>
									<span>{time.available}/{time.total} available</span></p>
							</FormCheckLabel>
						</FormCheck>)})}
						
                    </div>

				</div>
			),
			
			isComplete: checkedData?.checked,
			// clicked: () => firstStepAsyncFunc(),
		},
		{
			label: 'Tell us about yourself',
			content: (
				<div>
					
					<div className="package-block package-step2">
                        <div className="package-sub">
                            <img src={packageData?.photoUrl} alt="tour"  className='package-mini-img'  />
							<div style={{display:
                                    "flex", flexDirection: "column"}}>
									<div style={{display:
										"flex", justifyContent: "spaceBetween", alignItems: "center", marginLeft: "30px", width: "100%"}}>
										<p className="txt1">{packageData?.name}</p>
										{packageData?.isFemale && <img src={women}/>}
                            		</div>
									<p className="txt3"><span>QAR {packageData.price}/</span>person</p>
							</div>
                        </div>
                    </div>
					<div className="tell-us">
						<p className="txt1">Selected time slot</p>
						<p className="txt2"><img src={require('../../assets/images/hCalendar.png')} alt="calendar" /> 
						Monday, 14 March 9:00 AM
						</p>
						<p className="txt3">Traveller Details</p>
						<p className="txt4">Lead Traveller</p>
					</div>
					<div className="booking-form book-package">
					<Form>
						<FormGroup>
							<Label>First Name</Label>
						<Input type="text"
							name="name"
							// defaultValue={JSON.parse(localStorage.getItem('Profile_Data')).payload?.name}
                        	placeholder="Full Name"
							// onTouchMove={acceptSecondTerms.touched}
							 onChange={handelInputChange} 
							/>
						</FormGroup>
						<FormGroup>
							<Label>Last Name</Label>
							<Input type="text" placeholder="Last Name" name="lastName" onChange={handelInputChange}
							// defaultValue={JSON.parse(localStorage.getItem('Profile_Data')).payload?.name}
                        	 />
						</FormGroup>
						<FormGroup>
							<Label>Email</Label>
							<Input type="email" placeholder="Enter your email" name="email" onChange={handelInputChange} />
						</FormGroup>
						<FormGroup>
							<Label>Mobile Number</Label>
							<Input type="tel" placeholder="Enter your number" onChange={handelInputChange} name="mobileNumber"/>
							<span>You will receive text message updates about your booking*</span>
						</FormGroup>
						<FormGroup className="guest-box">
							<Label className="big-txt">Number of Travellers</Label>
							<NumericInput mobile value={initialState.guest} name="guest" onChange={handleGuest} className="form-control numeric-box" min={1} max={selectedTimeSlot?.available}/>
						</FormGroup>
						<p className="available-txt"><span>{selectedTimeSlot?.available}</span> / {selectedTimeSlot?.total} Available </p>
					</Form>
					</div>
				</div>
			),
			clicked: () => secondStepAsyncFunc(),
			isLoading: isSecondStepLoading,
			// isError: !acceptSecondTerms.checked && acceptSecondTerms.touched,
			isComplete: initialState?.guest && initialState?.name && initialState?.mobileNumber,
		},
		{
			label: 'Checkout',
			content: (
				
				<div>
					<div className="package-block package-step2">
                        <div className="package-sub">
                            <img src={require('../../assets/images/t1.png')} alt="tour" />
                            <div>
                                <p className="txt1">{packageData?.name}</p>
                                <p className="txt3"><span>QAR {packageData?.price}/</span>person</p>
                            </div>
                        </div>
                    </div>
					<div className="fee-block">
						<div className="fees list1">
							<p>Booking Fee * {initialState.guest}</p>
							<p>QAR {packageData.price * initialState.guest}</p>
						</div>
						<div className="fees list1">
							<p>Tax:</p>
							<p>QAR {packageData?.tax * initialState.guest}</p>
						</div>
						<div className="fees1 list1">
							<p>Total:</p>
							<p>QAR {(packageData.price * initialState.guest) + packageData?.tax * initialState.guest}</p>
						</div>
					</div>
					<div className="tell-us">
						<p className="txt1">Selected time slot</p>
						<p className="txt2"><img src={require('../../assets/images/hCalendar.png')} alt="calendar" /> Monday, 14 March 9:00 AM</p>
					</div>
					<div className="details1">
						<p className="your-txt">Your Details</p>
						<div className="details12">
							<div>
								<p className="name">{initialState?.name + initialState?.lastName}</p>
								<p className="contact">{initialState?.email}</p>
								<p className="contact">{initialState?.mobileNumber}</p>
							</div>
							<div className="text-right">
								<p className="no">{initialState?.guest}</p>
								<p className="no-txt">No. of Guests</p>
							</div>
						</div>
					</div>
				</div>
			),
			isComplete: true,
		},
	];

	async function submitStepper () {
		// async function sendData() {

			const formData = new FormData();
			// formData.append('productDetails', productDetails)
			formData.append('firstName', initialState.name)
			formData.append('lastName', initialState.lastName)
			formData.append('email',initialState.email)
			formData.append('mobileNumber', initialState.mobileNumber)
			formData.append('guests', initialState.guest)
			// formData.append('packageName', data.name)
			// formData.append('eventDate', data.eventDate)
			// formData.append('eventAddress', data.eventAddress)
			// formData.append('packageHours', data.hours)
			// formData.append('photoUrl', data.photoUrl)
	
			// const { data } = await Axios.post('/payment/completed', formData);
			console.log(data)
			// if (data.error != true) {
				navigate('/checkout')
				window.location.reload();
				console.log(data)
			// }
	
		};

	return (
		<div className="container">
			<Stepper stepperContent={stepperContent} submitStepper={submitStepper} isVertical />
		</div>
	);
};

// ReactDOM.render(<App />, document.querySelector('#app'));
export default App1;