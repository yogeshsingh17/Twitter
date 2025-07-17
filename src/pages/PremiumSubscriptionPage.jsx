import { useEffect, useState } from 'react';
import '../CSS/PremiumSubscriptionPage.css';
import WhiteTickIcon from '../icons/WhiteTickIcon';
import { useNavigate } from 'react-router-dom';
import { pricingData, subscriptionBenefits } from '../data/PremiumSubscriptionPageLogic';
import CompareFeatures from '../components/CompareFeatures';

function PremiumSubscriptionPage() {

    const [planType, setPlanType] = useState('annual');
    const [selectedPlan, setSelectedPlan] = useState(pricingData[planType][0]);
    const navigate = useNavigate();

    useEffect(() => {
        setSelectedPlan(pricingData[planType][0])
    }, [planType]);

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
                        key={plan.id}
                        className={`pricing-card-item ${selectedPlan.id === plan.id ? 'active' : ''}`}
                        onClick={() => setSelectedPlan(plan)}
                    >
                        <div className='pricing-card-item-header'>
                            <div>
                                <h3>{plan.name}</h3>
                            </div>
                            <div 
                                className={`selected-plan ${selectedPlan === plan ? 'active' : ''}`}
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
                            <p>₹{plan.price}/month</p>
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
            {/* Fixed Payment Card */}
            <div className='payment-card'>
                <div className='payment-card__details'>
                    {selectedPlan && (
                            <>
                                <div className='payment-card__details-selectedPlan'>
                                    <div className='payment-card__details-selectedPlan-name'>{selectedPlan.name}</div>
                                    <div className='payment-card__details-selectedPlan-price'>
                                        <span className='payment-card__details-selectedPlan-price-amount'>₹{Math.floor(selectedPlan.price * 12)}</span>
                                        <span> / year</span>
                                    </div>
                                    <span className='payment-card__details-selectedPlan-timeline'>Billed annually</span>
                                </div>
                            </>
                        )
                    }
                </div>
                <div className='payment-card__subscribe-pay'>
                    <div className='payment-card__subscribe-pay-paymentButton'>
                        Subscribe & Pay
                    </div>
                    <div className='payment-card__subscribe-pay-terms'>
                        By subscribing, you agree to our Purchaser Terms of Service. Subscriptions auto-renew until canceled. Cancel anytime,  at least 24 hours prior to renewal to avoid additional charges. Manage your subscription through the platform you subscribed on.
                    </div>
                </div>
            </div>
            {/* Compare tires and features */}
            <CompareFeatures />
        </div>
    )
}

export default PremiumSubscriptionPage;