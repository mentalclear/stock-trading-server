import { getUser } from './getUser';
import { getCurrentSharePrice } from './getCurrentSharePrice';


export const getUserInfo = async () => {
    const currentSharePrice = await getCurrentSharePrice();
    const  { cashValue, numberOfSharesOwned } = await getUser();
    const sharesValue = currentSharePrice * numberOfSharesOwned;
    return {
        cashValue,
        numberOfSharesOwned,
        sharesValue,
    }
}