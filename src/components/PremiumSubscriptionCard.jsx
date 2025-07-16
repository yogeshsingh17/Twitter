import { NavLink } from 'react-router-dom';
import '../CSS/PremiumSubscriptionCard.css';

function PremiumSubscription() {
    return (
        <div className="premium-subscription">
            <div className='premium-subscription-header'>
                <h2>
                    Subscribe to Premium
                </h2>
                <p>
                    Subscribe to unlock new features and if eligible, receive a share of revenue.
                </p>
            </div>
            <div className="premium-subscription-button-container">
                <NavLink to="/premium_subscription" className="premium-subscription-button">
                    Subscribe
                </NavLink>
            </div>
        </div>
    );
}
export default PremiumSubscription;