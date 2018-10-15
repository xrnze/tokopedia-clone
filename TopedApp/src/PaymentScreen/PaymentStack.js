import {createStackNavigator} from 'react-navigation';

import PaymentScreen from './PaymentScreen';
import BankPayment from './BankPayment';
import TunaiPayment from './TunaiPayment';

const PaymentStack = createStackNavigator({
    Payment: PaymentScreen,
    Bank: BankPayment,
    Tunai: TunaiPayment
})

export default PaymentStack;