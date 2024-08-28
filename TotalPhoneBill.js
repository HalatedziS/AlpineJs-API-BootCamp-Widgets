export default function TotalPhoneBill(data) {
    const calls = data.split(', ').filter(item => item === 'call').length;
    const sms = data.split(', ').filter(item => item === 'sms').length;
    const totalCost = calls * 2.75 + sms * 0.65;
    return "R" + totalCost.toFixed(2);
}

const data = 'call, sms, call, sms, sms';
console.log(TotalPhoneBill(data));
