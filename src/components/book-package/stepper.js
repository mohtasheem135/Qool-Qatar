import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, FormCheck } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import NumericInput from 'react-numeric-input';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import "../../assets/css/Pages.css"
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
					stepperContent[currentTabIndex].isLoading
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

const App1 = () => {
	const [acceptFirstTerms, setAcceptFirstTerms] = useState({
			checked: false,
			touched: false,
		}),
		[acceptSecondTerms, setAcceptSecondTerms] = useState({
			checked: false,
			touched: false,
		}),
		// [acceptThirdTerms, setAcceptThirdTerms] = useState({
		// 	checked: false,
		// 	touched: false,
		// }),
		[isSecondStepLoading, setIsSecondStepLoading] = useState(false);

	const firstTermsHandler = () => {
		setAcceptFirstTerms((prev) => ({ checked: !prev.checked, touched: true }));
	};

	const secondTermsHandler = () => {
		setAcceptSecondTerms((prev) => ({ checked: !prev.checked, touched: true }));
	};

	// const thirdTermsHandler = () => {
	// 	setAcceptThirdTerms((prev) => ({ checked: !prev.checked, touched: true }));
	// };

	//for demo purposes only
	const timeout = (ms) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	const secondStepAsyncFunc = async () => {
		//it can be an API call
		setIsSecondStepLoading(true);
		await timeout(3000);
		setIsSecondStepLoading(false);
		console.log('second step clicked');
	};

	const stepperContent = [
		{
			label: 'Select Time Slot',
			content: (
				<div>
					{/* <label>
						<input
							type="checkbox"
							checked={acceptFirstTerms.checked}
							onChange={firstTermsHandler}
						/>{' '}
						Accept first terms and conditions
					</label> */}
					<div className="package-block">
                        <div className="package-sub">
                            <img src={require('../../assets/images/t1.png')} alt="tour" />
                            <div>
                                <p className="txt1">Doha: Private 4 Hours City Tour</p>
                                <span className="txt2">Starts from</span>
                                <p className="txt3"><span>$50.00/</span>person</p>
                            </div>
                        </div>
                        <Button className="tour-btn"><img src={require('../../assets/images/hCalendar.png')} alt="calendar" /> Monday, 14 March</Button>
                    </div>
					<div>
                        <p className="available-txt">Available Time Slots</p>
                        <FormCheck className="select-tab">
							<FormCheckInput
								checked={acceptFirstTerms.checked}
								onChange={firstTermsHandler}
							>
							</FormCheckInput>
							<FormCheckLabel>
								<p className="time">9:00 AM - 12:00 PM</p>
								<p className="price"><span>$50.00</span>/person</p>
							</FormCheckLabel>
						</FormCheck>
						<FormCheck className="select-tab">
							<FormCheckInput
								checked={acceptFirstTerms.checked}
								onChange={firstTermsHandler}
							>
							</FormCheckInput>
							<FormCheckLabel>
								<p className="time">9:00 AM - 12:00 PM</p>
								<p className="price"><span>$50.00</span>/person</p>
							</FormCheckLabel>
						</FormCheck>
						<FormCheck className="select-tab">
							<FormCheckInput
								checked={acceptFirstTerms.checked}
								onChange={firstTermsHandler}
							>
							</FormCheckInput>
							<FormCheckLabel>
								<p className="time">9:00 AM - 12:00 PM</p>
								<p className="price"><span>$50.00</span>/person</p>
							</FormCheckLabel>
						</FormCheck>
						<FormCheck className="select-tab">
							<FormCheckInput
								checked={acceptFirstTerms.checked}
								onChange={firstTermsHandler}
							>
							</FormCheckInput>
							<FormCheckLabel>
								<p className="time">9:00 AM - 12:00 PM</p>
								<p className="price"><span>$50.00</span>/person</p>
							</FormCheckLabel>
						</FormCheck>
                    </div>
					{/* <TimeSlot /> */}
				</div>
			),
			// isError: !acceptFirstTerms.checked && acceptFirstTerms.touched,
			isComplete: acceptFirstTerms.checked,
		},
		{
			label: 'Tell us about yourself',
			content: (
				<div>
					{/* <label>
						<input
							type="checkbox"
							checked={acceptSecondTerms.checked}
							onChange={secondTermsHandler}
						/>{' '}
						Accept second terms and conditions
					</label> */}
					<div className="package-block package-step2">
                        <div className="package-sub">
                            <img src={require('../../assets/images/t1.png')} alt="tour" />
                            <div>
                                <p className="txt1">Doha: Private 4 Hours City Tour</p>
                                <p className="txt3"><span>$50.00/</span>person</p>
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
							<Input type="text" placeholder="Robert" onTouchMove={acceptSecondTerms.touched} onChange={secondTermsHandler} />
						</FormGroup>
						<FormGroup>
							<Label>Last Name</Label>
							<Input type="text" placeholder="Fox" />
						</FormGroup>
						<FormGroup>
							<Label>Email</Label>
							<Input type="email" placeholder="robertfox@gmail.com" />
						</FormGroup>
						<FormGroup>
							<Label>Mobile Number</Label>
							<Input type="tel" placeholder="+974 9876543210" />
							<span>You will receive text message updates<br /> about your booking*</span>
						</FormGroup>
						<FormGroup className="guest-box">
							<Label className="big-txt">Number of Travellers</Label>
							<NumericInput mobile value="2" className="form-control numeric-box" />
						</FormGroup>
						<p className="available-txt"><span>4</span> / 10 Available </p>
					</Form>
					</div>
				</div>
			),
			clicked: () => secondStepAsyncFunc(),
			isLoading: isSecondStepLoading,
			// isError: !acceptSecondTerms.checked && acceptSecondTerms.touched,
			isComplete: acceptSecondTerms.checked,
		},
		{
			label: 'Checkout',
			content: (
				<div>
					{/* <label>
						<input
							type="checkbox"
							checked={acceptThirdTerms.checked}
							onChange={thirdTermsHandler}
						/>{' '}
						Accept third terms and conditions
					</label> */}
					<div className="package-block package-step2">
                        <div className="package-sub">
                            <img src={require('../../assets/images/t1.png')} alt="tour" />
                            <div>
                                <p className="txt1">Doha: Private 4 Hours City Tour</p>
                                <p className="txt3"><span>$50.00/</span>person</p>
                            </div>
                        </div>
                    </div>
					<div className="fee-block">
						<div className="fees list1">
							<p>Booking Fee</p>
							<p>$0.00</p>
						</div>
						<div className="fees list1">
							<p>Subtotal:</p>
							<p>$100.00</p>
						</div>
						<div className="fees1 list1">
							<p>Total:</p>
							<p>$199.00</p>
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
								<p className="name">Robert Fox</p>
								<p className="contact">robertfox@gmail.com</p>
								<p className="contact">+974 9876543210</p>
							</div>
							<div className="text-right">
								<p className="no">02</p>
								<p className="no-txt">No. of Guests</p>
							</div>
						</div>
					</div>
				</div>
			),
			// isError: !acceptThirdTerms.checked && acceptThirdTerms.touched,
			// isComplete: acceptThirdTerms.checked,
		},
	];

	const submitStepper = () => {
		console.log('submitted');
	};

	return (
		<div className="container">
			<Stepper stepperContent={stepperContent} submitStepper={submitStepper} isVertical />
		</div>
	);
};

// ReactDOM.render(<App />, document.querySelector('#app'));
export default App1;