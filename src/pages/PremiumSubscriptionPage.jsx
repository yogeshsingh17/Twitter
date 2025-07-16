import { useState } from 'react';
import '../CSS/PremiumSubscriptionPage.css';
import WhiteTickIcon from '../icons/WhiteTickIcon';
import { useNavigate } from 'react-router-dom';
import { pricingData, subscriptionBenefits } from '../data/PremiumSubscriptionPageLogic';
import CompareFeatures from '../components/CompareFeatures';

function PremiumSubscriptionPage() {

    const [planType, setPlanType] = useState('annual');
    const [selectedPlan, setSelectedPlan] = useState('Basic');
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/');
    }

    return (
        <div className="premium-subscription-page">
            {/* Close Button */}
            <div className='close-button-container'>
                <button
                    className='close-button'
                    onClick={handleClose}    
                >
                    X
                </button>
            </div>
            {/* Header */}
            <div className="upgrade-header">
                Upgrade to Premium
            </div>
            {/* Header content */}
            <div className='premium-subscription-content'>
                <p>Enjoy an enhanced experience, exclusive creator tools, top-tier verification and security.</p>
                <p>(For organizations, sign up here)</p>
            </div>
            {/* Premium Subscription category */}
            <div className='premium-subscription-pricing-categories'>
                <div 
                    className={`premium-subscription-pricing-category-annual ${planType === 'annual' ? 'active' : ''}`}
                    onClick={() => setPlanType('annual')}
                >
                    <div>Annual</div>
                    <div className='best-value'>Best Value</div>
                </div>
                <div 
                    className={`premium-subscription-pricing-category-monthly ${planType === 'monthly' ? 'active' : ''}`}
                    onClick={() => setPlanType('monthly')}
                >
                    <div>Monthly</div>
                </div>
            </div>
            {/* Pricing card */}
            <div className='pricing-card'>
                {pricingData[planType].map((plan) => (
                    <div
                        key={plan.name}
                        className={`pricing-card-item ${selectedPlan === plan ? 'active' : ''}`}
                    >
                        <div className='pricing-card-item-header'>
                            <div>
                                <h3>{plan.name}</h3>
                            </div>
                            <div 
                                key={plan.name}  //Maybe changes are needed here
                                className={`selected-plan ${selectedPlan === plan ? 'active' : ''}`}
                                onClick={() => setSelectedPlan(plan)}
                            >
                                <div className='circle-selector'>
                                    <div className={`circle-outer ${selectedPlan === plan ? 'active' : ''}`}>
                                        {
                                            selectedPlan === plan && 
                                            <div className='circle-inner' />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pricing-card-price'>
                            <p>{plan.price}</p>
                            <p>Billed Monthly</p>
                        </div>
                        <ul className='pricing-card-benefits'>
                            {subscriptionBenefits[plan.name].map((benefit, idx) => (
                                <li 
                                    key={idx}
                                    className='pricing-card-benefit-item'>
                                    <WhiteTickIcon />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {/* Compare tires and features */}
            <CompareFeatures />
        </div>
    )
}

export default PremiumSubscriptionPage;